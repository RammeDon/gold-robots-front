import { env } from "../environment/environment";


const updateUser = async (updateDetails, id) => {
    const userDetails = {
        profilePictureID: updateDetails
    };

  fetch(`${env.baseUrl}/api/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const updateAccount = async (updateDetails, id) => {
    console.log("details", updateDetails)
    const accountDetails = {
        bankNames: updateDetails.bankNames,
        accountNumbers: updateDetails.accountNumbers,
        swiftCode: updateDetails.swiftCode,
        country: updateDetails.country,
        currency: updateDetails.currency,
    };

    fetch(`${env.baseUrl}/api/accounts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

const updateContract = async (updateDetails, id) => {
  const contractDetails = {
    personalSettings: updateDetails.personalSettings
  };

  fetch(`${env.baseUrl}/api/contracts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contractDetails),
  }).then((res) => res.json());
};

const exports = { updateUser, updateContract, updateAccount };

export default exports;
