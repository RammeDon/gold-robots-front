import { Avatar, Button, Card, Divider, Grid, Typography } from "@mui/material";
import avatar from "../../assets/icons/account.png";
import { dollar } from "../../utils/dollar";
import create from "../../CRUD/create.js"
import read from "../../CRUD/read.js"
import {useState, useEffect } from "react";


function ProfilePicture (props){
  const {data} = props.data.image.data
  console.log(data)

  if (props.user.profilePictureID === "No photo") {
    return (
      <Avatar
          src={
            props.user.profilePictureID !== "No photo"
              ? props.profile
              : avatar
          }
          sx={{ width: 80, height: 80, alignSelf: "center", m: "auto" }}
        ></Avatar>
    )
  }
  else {
    data.map((singleData) => {
      const base64String = btoa(
        String.fromCharCode(...new Uint8Array(singleData.img.data.data))
      );
      return (
        <Avatar
        src={`data:image/png;base64,${base64String}`}
        sx={{ width: 80, height: 80, alignSelf: "center", m: "auto" }}
      ></Avatar>)
    })
  }
}

export function Profile(props) {

  const [image, setImage] = useState({})
  console.log(props.data)


  // useEffect( ()  => {
  //   setData(read.fetchImage(props.account.username))

  // },[props.account.username])

  const fileOnChange = (event) => {
    setImage(event.target.files[0])
  }

  // useEffect(() => {
  //   const values = Object.values(props.data)

  //   dummyData = props.data.image.map(image => {
  //     return Object.keys(image.data)
  //   })

  // }, [props.data])


  const upload = () => {

    let formData = new FormData()
    formData.append("testImage", image)
    formData.append("username", props.account.username)
    create.createImage(formData)
  }




  return (
    <Card sx={{ backgroundColor: "#111827" }} variant="outlined">
      <Grid
        container
        sx={{ backgroundColor: "#0b0f19", color: "white", padding: 5, gap: 20 }}
      >
        <Grid
          md={4}
          sm={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "min-content",
          }}
        >
          <ProfilePicture data={props.data} user={props.user} />
          <input type="file" onChange={fileOnChange} />
          <Button onClick={upload}>Upload</Button>
        </Grid>
        <Grid
          md={6}
          sm={12}
          sx={{ textAlign: "left" }}
          className="sm:!text-center"
        >
          <Typography fontSize={15} sx={{ color: "#989fab" }}>
            Total Balance
          </Typography>
          <Typography fontSize={50}>{dollar(props.account.balance)}</Typography>
        </Grid>
      </Grid>
      <Divider className="bg-[#989fab]"></Divider>
      <Grid container sx={{ gap: 8, mt: 10, px: 5, justifyContent: "center" }}>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "px",
              mx: "auto",
            }}
          >
            <Grid container sx={{ rowGap: 2, textAlign: "left", pl: 3, py: 3 }}>
              <Grid md={5} sm={6}>
                {props.user.firstname}
              </Grid>
              <Grid md={5} sm={6}>
                {props.user.lastname}
              </Grid>
              <Grid md={12} sm={12}>
                <Typography sx={{ color: "#989fab" }}>
                  {props.user.username}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "72px",

              p: 3,
              justifySelf: "center",
              mx: "auto",
            }}
          >
            <Typography>
              <b>AccountID:</b> {props.user.accountID}
            </Typography>
          </Card>
        </Grid>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "72px",
              p: 3,
              justifySelf: "center",
              mx: "auto",
            }}
          >
            <Typography>
              <b>Date of Birth:</b> {props.user.birthDay}
            </Typography>
          </Card>
        </Grid>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "72px",

              p: 3,
              justifySelf: "center",
              mx: "auto",
            }}
          >
            <Typography fontSize={13}>
              <b>Date of Registeration:</b> {props.user.openAccountDate}
            </Typography>
          </Card>
        </Grid>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "72px",

              p: 3,
              justifySelf: "center",
              mx: "auto",
            }}
          >
            <Typography>
              <b>E-mail:</b> {props.user.email}
            </Typography>
          </Card>
        </Grid>
        <Grid md={5} sm={12}>
          <Card
            sx={{
              backgroundColor: "#0b0f19",
              color: "white",
              width: "300px",
              height: "72px",

              p: 3,
              justifySelf: "center",
              mx: "auto",
              mb: 5,
            }}
          >
            <Typography>
              <b>Phone number:</b> {props.user.phone}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}
