import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "auto",
    paddingTop: theme.spacing(10),
  },
  cardContainer: {
    width: "40%",
    height: "auto",
    marginTop: theme.spacing(3),
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  modal: {
    width: 550,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textInputStyle: {
    display: "flex",
    paddingTop: theme.spacing(3),
    width: "70%",
  },
  buttonStyle: {
    top: 50,
  },
}));

const CardItem = (props) => {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { title, description, buttonText } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Container className={classes.container}>
        <Card variant="outlined" className={classes.cardContainer}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => setOpen(true)}>
              {buttonText}
            </Button>
          </CardActions>
        </Card>
      </Container>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.modal}>
          <TextField
            className={classes.textInputStyle}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <TextField
            className={classes.textInputStyle}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <TextField
            className={classes.textInputStyle}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <TextField
            className={classes.textInputStyle}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <TextField
            className={classes.textInputStyle}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
          <Button
            className={classes.buttonStyle}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Container>
      </Modal>
    </>
  );
};

export default CardItem;
