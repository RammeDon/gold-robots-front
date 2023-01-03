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

const updateAccount = async (updateDetails, id) => {
    const accountDetails = {
        bankNames: updateDetails.bankNames,
        accountNumbers: updateDetails.accountNumbers,
        username: updateDetails.username,
        swiftCode: updateDetails.swiftCode,
        country: updateDetails.country,
        currency: updateDetails.currency,
        balance: updateDetails.balance,
        depositeAccount: updateDetails.depositeAccount,
        paymentHistory: updateDetails.paymentHistory,
        contractType: updateDetails.contractType,
        todayTrades: updateDetails.todayTrades,
        newTrades: updateDetails.newTrades,
        todayMoney: updateDetails.todayMoney,
        profilePictureID: updateDetails.profilePictureID,
        days: updateDetails.days,
        percentageInTrades: updateDetails.percentageInTrades,
        balanceOverView: updateDetails.balanceOverView,
        activeTradesToday: updateDetails.activeTradesToday,
        activeTradesLastWeek: updateDetails.activeTradesLastWeek
    };

    fetch(`/api/accounts/${id}`, {
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
  