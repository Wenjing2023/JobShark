const key = "71847e48-8f72-4b7b-ae2d-71d746d1ca25";
const password = "";
const authHeader = "Basic " + btoa(key + ":" + password);
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export const loadAllJobs = () => {
  return fetch(proxyUrl + "https://www.reed.co.uk/api/1.0/search", {
    headers: {
      Origin: "http://localhost:3000",
      Authorization: authHeader,
    },
  }).then((res) => res.json());
}
