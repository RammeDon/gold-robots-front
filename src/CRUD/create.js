import { env } from "../environment/environment";

const createUser = async (user) => {
  const createDetails = {
    userID: user.userID,
    title: user.title,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    accountID: user.accountID,
    password: user.password,
    birthDay: user.birthDay,
    phone: user.phone,
    email: user.email,
    country: user.country,
    openAccountDate: user.openAccountDate,
    contractID: user.contractID,
    personalSettings: user.personalSettings,
    profilePictureID: user.profilePictureID,
    language: user.language,
  };
  fetch(`${env.baseUrl}/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

async function loginUser(credentials) {
  console.log(credentials)
  return fetch(`${env.baseUrl}/api/users/login`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
      .then(res => res.json())
}

const createAdmin = async (admin) => {
  const createDetails = {
    adminID: admin.adminID,
    firstName: admin.firstName,
    lastName: admin.lastName,
    email: admin.email,
    password: admin.password,
  };
  fetch(`${env.baseUrl}/api/admins/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const createAccount = async (account) => {
  const createDetails = {
    username: account.username,
    bankNames: account.bankNames,
    accountNumbers: account.accountNumbers,
    swiftCode: account.swiftCode,
    country: account.country,
    currency: account.currency,
    balance: account.balance,
    depositeAccount: account.depositeAccount,
    paymentHistory: account.paymentHistory,
    contractType: account.contractType,
    todayTrades: account.todayTrades,
    todayMoney: account.todayMoney,
    percentageInTrades: account.percentageInTrades,
  };
  fetch(`${env.baseUrl}/api/accounts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const createImage = async (form) => {



  fetch(`${env.baseUrl}/api/images`, {
    method: "POST",
    body: form
  })
    .then(res => res.text())
    .then(resBody => console.log(resBody))

}

const createContract = async (contract) => {
  const createDetails = {
    username: contract.username,
    ammount: contract.ammount,
    color: contract.color,
    date: contract.date,
    garantiePrecent: contract.garantiePrecent,
    level: contract.level,
    maxTradeDays: contract.maxTradeDays,
    minProfit: contract.minProfit,
    name: contract.name,
    minDuration: contract.minDuration,
    minDeposite: contract.profitSharing,
    adminClients: contract.adminClients,
    profitSharing: contract.profitSharing,
    extraDays: contract.extraDays,
    timeframe: contract.timeframe,
    leverage: contract.leverage,
    timerange: contract.timerange,
    maxUsage: contract.maxUsage
  };
  fetch(`${env.baseUrl}/api/contracts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const createEmail = async (email) => {
  const createDetails = {
    username: email.username,
    email: email.email,
    message: email.message
  }
  fetch(`${env.baseUrl}/api/emails/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};


const createPaymentHistory = async (paymentHistory) => {
  const createDetails = {
    username: paymentHistory.username,
    ammount: paymentHistory.ammount,
    paymentType: paymentHistory.paymentType,
    paymentSystem: paymentHistory.paymentSystem
  };
  fetch(`${env.baseUrl}/api/paymentHistories/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const exports = {
  createUser,
  createAdmin,
  createAccount,
  createContract,
  createPaymentHistory,
  loginUser,
  createImage,
  createEmail
};

export default exports;
