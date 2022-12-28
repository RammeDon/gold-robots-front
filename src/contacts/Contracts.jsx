import React from "react";
import "./contracts.css";

export default function Contracts() {
  const contracts = [
    {
      name: "Contract A",
      minDuration: "3 months",
      minDeposite: "1,000,000 $",
      garantiePercentage: 25,
      adminClients: 3,
      level: "Basic, Inter",
    },
    {
      name: "Contract B",
      minDuration: "6 months",
      minDeposite: "2,000,000 $",
      garantiePercentage: 35,
      adminClients: 3,
      level: "Basic, Inter, High",
    },
    {
      name: "Contract C",
      minDuration: "9 months",
      minDeposite: "3,000,000 $",
      garantiePercentage: 45,
      adminClients: 2,
      level: "Inter, High",
    },
    {
      name: "Contract D",
      minDuration: "12 months",
      minDeposite: "5,000,000 $",
      garantiePercentage: 60,
      adminClients: 1,
      level: "VIP",
    },
  ];

  return (
    <div className="contracts-container flex flex-wrap justify-around pt-32 gap-x-6 gap-y-10">
      {contracts.map((contract, i) => {
        return (
          <div key={i} className="contracts w-1/4 h-1/2">
            <h1 className="list-title">{contract.name}</h1>
            <ul>
              <li className="list-item">
                Minimum duration: {contract.minDuration}
              </li>
              <li className="list-item">
                Minimum desposite: {contract.minDeposite}
              </li>
              <li className="list-item">
                Garantie percentage: {contract.garantiePercentage}
              </li>
              <li className="list-item">
                Admin clients: {contract.adminClients}
              </li>
              <li className="list-item">Level: {contract.level}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
