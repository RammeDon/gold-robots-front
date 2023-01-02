import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

export function PersonalSetting() {
  const [chosenContracts, setChosenContracts] = useState([]);
  const [settings, setSettings] = useState();

  return (
    <Grid container sx={{ justifyContent: "start", gap: "12px" }}>
      <Grid md={6} sm={12}>
        <FormControl>
          <InputLabel id="contract" sx={{ color: "white" }}>
            Chosen contract
          </InputLabel>
          <Select
            sx={{ color: "white", width: "300px" }}
            labelId="contract"
            label="Chosen contract"
          >
            {chosenContracts.map((contracts) => {
              return <MenuItem>{contracts}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid md={12} sm={12}>
        <Card
          sx={{
            backgroundColor: "#111827",
            width: "80%",
            minHeight: "100px",
            mx: "auto",
          }}
        >
          <Grid container sx={{ gap: "30px",width:'100%',height:'100',justifyContent:"center",p:3 }}>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="levrage">Levrage</InputLabel>
                <Select sx={{width:300}} label="Levrage" labelId="levrage">
                  <MenuItem>100</MenuItem>
                  <MenuItem>200</MenuItem>
                  <MenuItem>500</MenuItem>
                  <MenuItem>1000</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="days">Add Extra Day</InputLabel>
                <Select sx={{width:300}} label="Add Extra Day" labelId="days">
                  <MenuItem>5 Days</MenuItem>
                  <MenuItem>10 Days</MenuItem>
                  <MenuItem>25 Days</MenuItem>
                  <MenuItem>50 Days</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="timeframe">Trading timeframe</InputLabel>
                <Select sx={{width:300}} label="Trading timeframe" labelId="timeframe">
                  <MenuItem>1 min</MenuItem>
                  <MenuItem>5 min</MenuItem>
                  <MenuItem>15 min</MenuItem>
                  <MenuItem>1 hour</MenuItem>
                  <MenuItem>1 day</MenuItem>
                  <MenuItem>All</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="timerange">Time range</InputLabel>
                <Select sx={{width:300}} label="Time range" labelId="timerange">
                  <MenuItem>London time</MenuItem>
                  <MenuItem>Tokyo time</MenuItem>
                  <MenuItem>New york time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="MUD">Max usage deposite</InputLabel>
                <Select sx={{width:300}} label="Max usage deposite" labelId="MUD">
                  <MenuItem>35 %</MenuItem>
                  <MenuItem>50 %</MenuItem>
                  <MenuItem>85 %</MenuItem>
                  <MenuItem>100 %</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <Button sx={{ color: "white",width:200,height:60 }} color="secondary" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
