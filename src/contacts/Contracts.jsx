import React from "react";
import "./contracts.css";

import { Card, CardContent, Typography } from "@mui/material";

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

  if (window.innerWidth > 420) {
    return (
      <div className="contracts-container">
        <div className="grid grid-cols-2 grid-rows-2 pt-32 gap-6 p-5 h-full">
          {contracts.map((contract, i) => {
            return (
              <Card key={i} className="contracts col-span-1 row-span-1">
                <CardContent>
                  <Typography component="div" variant="h5">
                    {contract.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    className="px-20 text-left"
                  >
                    <p className="flex">
                      <b>Minimum duration:</b>{" "}
                      <span className="ml-auto">{contract.minDuration}</span>
                    </p>
                    <p className="flex">
                      <b>Minimum desposite:</b>{" "}
                      <span className="ml-auto">{contract.minDeposite}</span>
                    </p>
                    <p className="flex">
                      <b>Garantie percentage:</b>{" "}
                      <span className="ml-auto">
                        {contract.garantiePercentage}
                      </span>
                    </p>
                    <p className="flex">
                      <b>Admin clients:</b>{" "}
                      <span className="ml-auto">{contract.adminClients}</span>
                    </p>
                    <p className="flex">
                      <b>Level:</b>{" "}
                      <span className="ml-auto">{contract.level}</span>
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="contracts-container">
        <div className="flex flex-col relative top-20 gap-6 p-5">
          {contracts.map((contract, i) => {
            return (
              <Card key={i} className="contracts col-span-1 row-span-1">
                <CardContent>
                  <Typography component="div" variant="h5">
                    {contract.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    className="px-20 text-left"
                  >
                    <p className="flex">
                      <b>Minimum duration:</b>{" "}
                      <span className="ml-auto">{contract.minDuration}</span>
                    </p>
                    <p className="flex">
                      <b>Minimum desposite:</b>{" "}
                      <span className="ml-auto">{contract.minDeposite}</span>
                    </p>
                    <p className="flex">
                      <b>Garantie percentage:</b>{" "}
                      <span className="ml-auto">
                        {contract.garantiePercentage}
                      </span>
                    </p>
                    <p className="flex">
                      <b>Admin clients:</b>{" "}
                      <span className="ml-auto">{contract.adminClients}</span>
                    </p>
                    <p className="flex">
                      <b>Level:</b>{" "}
                      <span className="ml-auto">{contract.level}</span>
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
