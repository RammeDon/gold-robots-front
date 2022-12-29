const deleteUser = async (id) => {
    const deleteDetails = {
        _id: id, // this or id: id
    };
    await fetch(`/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteDetails)
    })
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

const deleteContract = async (id) => {
    const deleteDetails = {
        _id: id, // this or id: id
    };
    await fetch(`/api/contracts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deleteDetails)
    })
        .then(response => {
            if (response.message) {
                console.log(response.message);
            }
        });
}

export default { deleteUser, deleteContract }