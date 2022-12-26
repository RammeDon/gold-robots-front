
const createUser = async (user) => {
    const createDetails = {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        title: user.title,
        password: user.password,
        admin: user.admin,
        phone: user.phone,
        email: user.email,
        country: user.country,
        language: user.language
    };
    fetch(`/api/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createDetails)
    })
        .then(res => res.json())
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

export default createUser 