const updateUser = async (updateDetails, id) => {
    const userDetails = {
        username: updateDetails.username,
        firstname: updateDetails.firstname,
        lastname: updateDetails.lastname,
        title: updateDetails.title,
        password: updateDetails.password,
        admin: updateDetails.admin,
        phone: updateDetails.phone,
        email: updateDetails.email,
        country: updateDetails.country,
        language: updateDetails.language
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

export default updateUser