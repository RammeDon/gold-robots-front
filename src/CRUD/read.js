import { env } from "../environment/environment";

const fetchCollection = async (collection) => {
  return await fetch(`${env.baseUrl}/api/${collection}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};

const fetchOne = async (collection, id) => {
  return await fetch(`${env.baseUrl}/api/${collection}/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
};


const fetchImage = async (username) => {
  let data;
  await fetch(`${env.baseUrl}/api/images/${username}`)
    .then((response) => response.json())
    .then((response) => data=response)
    .catch((error) => console.log(error.message));
  // console.log("data", data)
  return data
};

const fetchCountries = async () => {
  const headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "UGZ5bnVweUloZ1lKWTZBYjk3U3VuQ2VRTDl2aUY5UTQzenJieVRLSw=="
  );
  return await fetch(env.contriesAPI, {
    method: "GET",
    headers: headers,
    redirect: "follow",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const exports = { fetchCollection, fetchCountries, fetchOne, fetchImage };

export default exports;
