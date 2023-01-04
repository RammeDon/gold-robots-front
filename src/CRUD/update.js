import { env } from "../environment/environment";

const updateUser = async (updateDetails, id) => {
  const userDetails = {
    profilePictureID: updateDetails,
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
  console.log("details", updateDetails);
  const accountDetails = {
    bankNames: updateDetails.bankNames,
    accountNumbers: updateDetails.accountNumbers,
    swiftCode: updateDetails.swiftCode,
    country: updateDetails.country,
    currency: updateDetails.currency,
  };

  fetch(`${env.baseUrl}/api/accounts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(accountDetails),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        console.log(response.message);
      }
    });
};

const updateContract = async (updateDetails, username, contractname) => {
  const contractDetails = {
    username: updateDetails.username,
    ammount: updateDetails.ammount,
    color: updateDetails.color,
    date: updateDetails.date,
    garantiePrecent: updateDetails.garantiePrecent,
    level: updateDetails.level,
    maxTradeDays: updateDetails.maxTradeDays,
    minProfit: updateDetails.minProfit,
    name: updateDetails.name,
    minDuration: updateDetails.minDuration,
    minDeposite: updateDetails.profitSharing,
    adminClients: updateDetails.adminClients,
    profitSharing: updateDetails.profitSharing,
    extraDays: updateDetails.extraDays,
    timeframe: updateDetails.timeframe,
    leverage: updateDetails.leverage,
    timerange: updateDetails.timerange,
    maxUsage: updateDetails.maxUsage,
  };

  fetch(`${env.baseUrl}/api/contracts/${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contractDetails),
  }).then((res) => res.json());
};

const exports = { updateUser, updateContract, updateAccount };

export default exports;
