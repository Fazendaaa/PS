const url = "https://api.docker.localhost/";

export const requestData = async (endpoint: string, method: string) =>
  fetch(`${url}${endpoint}`, { method })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
