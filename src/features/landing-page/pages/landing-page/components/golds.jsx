import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Cards } from "../../../../../data/landing-page";

export function Golds() {
  if (window.innerWidth > 420) {
    return (
      <div className="w-full h-[370px] flex flex-col">
        <div className="flex flex-col align-middle">
          <p className="mt-3 text-[2rem] text-slate-500">
            Reasons to Invest in Gold
          </p>
          <div className="w-[300px] h-[1px] bg-slate-400 self-center mt-5"></div>
          <div className="flex justify-around w-full p-5">
            {Cards.map((card, i) => {
              return (
                <Card key={i} sx={{ maxHeight: 345 }}>
                  <CardMedia sx={{ height: 145 }} image={card.Image} />
                  <CardContent>
                    <Typography component="div" variant="h6">
                      {card.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {card.description.slice(0, 50)}...
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col">
        <div className="flex flex-col align-middle">
          <p className="mt-3 text-[2rem] text-slate-500">
            Reasons to Invest in Gold
          </p>
          <div className="w-[300px] h-[1px] bg-slate-400 self-center mt-5"></div>
          <div className="flex justify-around w-full p-5 flex-col gap-6">
            {Cards.map((card, i) => {
              return (
                <Card key={i} sx={{ maxHeight: 345 }}>
                  <CardMedia sx={{ height: 145 }} image={card.Image} />
                  <CardContent>
                    <Typography component="div" variant="h6">
                      {card.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {card.description.slice(0, 50)}...
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
