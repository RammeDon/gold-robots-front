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
            level: "Basic, Inter"
        },
        {
            name: "Contract B",
            minDuration: "6 months",
            minDeposite: "2,000,000 $",
            garantiePercentage: 35,
            adminClients: 3,
            level: "Basic, Inter, High"
        },
        {
            name: "Contract C",
            minDuration: "9 months",
            minDeposite: "3,000,000 $",
            garantiePercentage: 45,
            adminClients: 2,
            level: "Inter, High"
        },
        {
            name: "Contract D",
            minDuration: "12 months",
            minDeposite: "5,000,000 $",
            garantiePercentage: 60,
            adminClients: 1,
            level: "VIP"
        }
    ]


    return(
        <div className="contracts-container">
{            contracts.map((contract, i) => {
                return (
                    <div className="contracts">
                        <h1>{contract.name}</h1>
                        <ul>
                            <li>Minimum duration: {contract.minDuration}</li>
                            <li>Minimum desposite: {contract.minDeposite}</li>
                            <li>Garantie percentage: {contract.garantiePercentage}</li>
                            <li>Admin clients: {contract.adminClients}</li>
                            <li>Level: {contract.level}</li>
                        </ul>

                    </div>
                )
            })}
        </div>
    )
}