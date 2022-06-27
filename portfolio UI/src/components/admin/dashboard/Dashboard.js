import { Grid } from "@material-ui/core";
import React from "react";
import CardItem from "../card/Card";
import NavBar from "../../../layout/adminNavBar";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sm={6}>
          <CardItem
            title="Add Details"
            description="Click this card to add new details about yourself"
            buttonText="Add"
          />
        </Grid>
        {/* <Grid item sm={6}>
          <CardItem
            title="Edit Details"
            description="Click this card to edit the details that are already added"
            buttonText="Edit"
          />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Dashboard;
