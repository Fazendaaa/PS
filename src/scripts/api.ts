const url = process.env.VUE_APP_API_URL || "https://api.docker.localhost/";

console.log("API URL: ", url);

export const callAPI = async (
  endpoint: string,
  method: string,
  body?: unknown
) =>
  fetch(`${url}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
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
