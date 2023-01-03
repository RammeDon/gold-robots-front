import { env } from "../environment/environment";


const updateUser = async (updateDetails, id) => {
    const userDetails = {
        title: updateDetails.title,
        userID: updateDetails.userID,
        username: updateDetails.username,
        firstname: updateDetails.firstname,
        lastname: updateDetails.lastname,
        birthDay: updateDetails.birthDay,
        phone: updateDetails.phone,
        email: updateDetails.email,
        country: updateDetails.country,
        language: updateDetails.language,
        accoutID: updateDetails.accountID,
        contractID: updateDetails.contractID,
        personalSettings: updateDetails.personalSettings,
        profilePictureID: updateDetails.profilePictureID
    };

    fetch(`${env.baseUrl}/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

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


const exports = {
    updateUser,
    updateAccount,
  };
  
  export default exports;
  