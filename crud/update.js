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

    fetch(`/api/users/${id}`, {
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

const updateContract = async (updateDetails, id) => {
    const contractDetails = {
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
}

export default {updateUser, updateContract}