import React, { ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import AdminModal from "../modal/adminModal";
import { useAdminContext } from "../../../context";
import { CardType } from "../../types/card.types";

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
}));

export const CardItem = (props: CardType): ReactElement => {
  const classes = useStyles();

  const { title, description, buttonText } = props;

  const { setOpen } = useAdminContext();

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
      <AdminModal />
    </>
  );
};

export default CardItem;
