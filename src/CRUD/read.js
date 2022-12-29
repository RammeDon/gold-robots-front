import { env } from "../environment/environment";

const fetchCollection = async (collection) => {
  let data = [];
  await fetch(`/api/${collection}`)
    .then((response) => response.json())
    .then((res) => (data = res)) // either this or data.push(res)
    .catch((error) => console.log(error.message));
  return data[0];
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

const exports = { fetchCollection, fetchCountries };

export default exports;
