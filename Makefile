include .env
export $(shell sed 's/=.*//' .env)

REGISTRY_OWNER:=fazenda
MULTIARCH:=false
ARCHS:=linux/amd64
PROJECT_TAG:=$(shell date '+%d-%m-%Y-%H%M%S')

ifeq (true, $(MULTIARCH))
	ARCHS:=linux/amd64,linux/arm64,linux/arm/v6,linux/arm/v7
endif

all: install setup

install:
	@curl -fSL https://get.docker.com | sh
	@sudo usermod -aG docker $USER
	@sudo systemctl enable docker
	@sudo systemctl start docker

# https://github.com/docker/buildx/issues/132#issuecomment-847136842
setup:
	@LATEST=$(shell wget -qO- "https://api.github.com/repos/docker/buildx/releases/latest" | jq -r .name); \
		wget https://github.com/docker/buildx/releases/download/$$LATEST/buildx-$$LATEST.linux-amd64; \
		chmod a+x buildx-$$LATEST.linux-amd64; \
		mkdir -p ~/.docker/cli-plugins; \
		mv buildx-$$LATEST.linux-amd64 ~/.docker/cli-plugins/docker-buildx;
	@docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
	# @docker buildx rm builder
	@docker buildx create --name builder --driver docker-container --use
	@docker buildx inspect --bootstrap

build:
	@docker buildx build \
	--file api/Dockerfile \
	--platform $(ARCHS) \
	--push \
	--tag ${REGISTRY_OWNER}/ps-api:${PROJECT_TAG} \
	api/
	@echo "Built: ${REGISTRY_OWNER}/ps-api:${PROJECT_TAG}"
	@docker buildx build \
	--platform $(ARCHS) \
	--build-arg VUE_APP_WA_NUMBER=${VUE_APP_WA_NUMBER} \
	--push \
	--tag ${REGISTRY_OWNER}/ps:${PROJECT_TAG} \
	.
	@echo "Built: ${REGISTRY_OWNER}/ps:${PROJECT_TAG}"

test:
	@docker-compose --file=docker-compose.test.yml up --build
