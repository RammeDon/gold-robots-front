import { SupportAgent } from "@mui/icons-material";
import {
  Button,
  Card,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import create from "../../../../CRUD/create.js"

export function ContactUS(props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submit= () => {
    const emailDetails = {
      username: name,
      email: email,
      message: message
    }

    create.createEmail(emailDetails)
    setName("")
    setEmail("")
    setMessage("")
    console.log("Email sent")
  }

  return (
    <Grid container>
      <Grid md={6} sm={12} sx={{ color: "white", p: 5 }}>
        <Typography fontSize={30} fontWeight={800}>
          Information about your account
        </Typography>
        <Card
          sx={{ backgroundColor: "#111827", p: 2, mb: "12px", color: "white" }}
        >
          <b>Account ID:</b> {props.user.accountID}
        </Card>
        <Card
          sx={{ backgroundColor: "#111827", p: 2, mb: "30px", color: "white" }}
        >
          <b>Email:</b> {props.user.email}
        </Card>
        <Card
          sx={{
            backgroundColor: "#111827",
            p: 2,
            // mb: "12px",
            color: "white",
            mb: "30px",
          }}
        >
          <Typography fontSize={30} fontWeight={800} sx={{ mb: "12px" }}>
            Customer support
          </Typography>
          <Typography fontSize={20} fontWeight={700} sx={{ mb: "12px" }}>
            Phones:
          </Typography>
          <p className="mb-3">+9714687735</p>
          <p className="mb-3">+1 (206) 905-7657</p>
          <Typography fontSize={20} fontWeight={700} sx={{ mb: "12px" }}>
            Email:
          </Typography>
          <p className="mb-10">info@bulima.com</p>
        </Card>
        <Card
          sx={{
            w: "300px",
            h: "100",
            color: "white",
            backgroundColor: "#111827",
          }}
        >
          <Typography fontSize={30} fontWeight={800}>
            Support
            <SupportAgent fontSize="large" sx={{ ml: "20px" }}></SupportAgent>
          </Typography>
          <Button
            onClick={() =>
              window.open("https://wa.me/message/PKZ4I7ELXFTAH1")
            }
            color="secondary"
            variant="contained"
            sx={{
              color: "white",
              w: "100px",
              h: "60px",
              mt: "12px",
            }}
          >
            Live Chat
          </Button>
        </Card>
      </Grid>
      <Grid md={6} sm={12} sx={{ color: "white", p: 5 }}>
        <Card sx={{ backgroundColor: "#111827", p: 3, color: "white" }}>
          <Typography fontSize={30} fontWeight={800} sx={{ mb: "20px" }}>
            Any questions ?
          </Typography>
          <Box>
            <TextField
              value={name}
              onChange={e => setName(e.target.value)}
              sx={{ w: "300px", mb: "20px" }}
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "white" } }}
              label="Name"
            ></TextField>
          </Box>
          <Box>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{ w: "300px", mb: "20px" }}
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "white" } }}
              label="Email"
            ></TextField>
          </Box>
          <Box>
            <TextField
              value={message}
              onChange={e => setMessage(e.target.value)}
              multiline
              rows={4}
              sx={{ w: "300px", mb: "20px" }}
              InputProps={{ sx: { color: "white" } }}
              InputLabelProps={{ sx: { color: "white" } }}
              label="Message"
            ></TextField>
          </Box>

          <Box>
            <Button
              onClick={submit}
              variant="contained"
              color="secondary"
              sx={{ color: "white", w: 300, h: 60 }}
            >
              Submit
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
