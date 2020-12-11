import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import "./transactions.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function Transactions() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios({
        method: "POST",
        url:
          "https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view",
        headers: {
          "x-api-key": "Ps1TGitUkS8fV6jlp3ASuab0y4CS6mr59ngEoAU6",
          "Content-Type": "text/plain",
        },
        body: '{"custID":"14"}',
      });

      console.log(response.data);

      //   setMovie(response.data);
    }

    getData();
  });

  return (
    <div className="transactions">
      <div className={classes.root}>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dense}
                  onChange={(event) => setDense(event.target.checked)}
                />
              }
              label="Enable dense"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={secondary}
                  onChange={(event) => setSecondary(event.target.checked)}
                />
              }
              label="Enable secondary text"
            />
          </FormGroup>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Transactions
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <MonetizationOnIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Transaction"
                      secondary={secondary ? "amount" : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <ArrowForwardIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
