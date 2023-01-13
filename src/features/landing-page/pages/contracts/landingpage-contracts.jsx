import { contracts } from "../../../../data/contracts";
import { Card, CardContent, Typography } from "@mui/material";

export function Contracts() {
  if (window.innerWidth > 420) {
    return (
      <div className="contracts-container">
        <div className="grid grid-cols-2 grid-rows-2 pt-32 gap-6 p-5">
          {contracts.map((contract, i) => {
            return (
              <Card
                key={i}
                className="contracts col-span-1 row-span-1"
                style={{ backgroundColor: contract.color }}
              >
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
