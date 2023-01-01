import { env } from "../environment/environment";

const fetchCollection = async (collection) => {
  let data = [];
  await fetch(`${env.baseUrl}/api/${collection}`)
    .then((response) => response.json())
    .then((res) => (data = res)) // either this or data.push(res)
    .catch((error) => console.log(error.message));
  return data[0];
};


const fetchOne = async (collection, id) => {
  let data = []
  await fetch(`${env.baseUrl}/api/${collection}/${id}`)
      .then(response => response.json())
      .then(res => data.push(res))
      .catch(error => console.log(error.message))
  //console.log(data[0])
  return data[0]
}


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

const exports = { fetchCollection, fetchCountries, fetchOne };

export default exports;
