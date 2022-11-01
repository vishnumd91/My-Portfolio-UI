import React, {
  useState,
  useRef,
  ReactElement,
  ChangeEvent,
  FormEvent,
} from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Modal,
  Snackbar,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axiosInstance from "../../../api/axiosConfig";
import { useAppContext } from "../../../context";
import { ExperienceType } from "../../../web/types/experience.types";

const useStyles = makeStyles((theme) => ({
  modal: {
    width: 550,
    height: 650,
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
    [theme.breakpoints.down("sm")]: {
      top: 0,
      display: "flex",
    },
  },
}));

export const AdminModal = (): ReactElement => {
  const { open, setOpen } = useAppContext();

  const classes = useStyles();

  const [experienceInputs, setExperienceInputs] = useState<ExperienceType>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    state: "",
    country: "",
    isCurrent: false,
  });

  const [submitResponse, setSubmitResponse] = useState(false);

  const formRef = useRef(null!);

  const handleClose = (event: unknown, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSubmitResponse(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExperienceInputs({ ...experienceInputs, [name]: value });
  };

  const onChecked = () => {
    setExperienceInputs({
      ...experienceInputs,
      isCurrent: !experienceInputs.isCurrent,
      endDate: "",
    });
  };

  const addExperience = (event: FormEvent) => {
    event.preventDefault();
    const {
      company,
      position,
      description,
      state,
      country,
      startDate,
      endDate,
      isCurrent,
    } = experienceInputs;
    axiosInstance
      .post("/portfolio/experience", {
        company,
        position,
        description,
        state,
        startDate,
        endDate,
        country,
        isCurrent,
      })
      .then((response) => {
        response.status === 201
          ? setSubmitResponse(true)
          : setSubmitResponse(false);
      })
      .then(() => {
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container className={classes.modal}>
          <form ref={formRef} onSubmit={addExperience}>
            <TextField
              className={classes.textInputStyle}
              id="standard-basic"
              label="Compay Name"
              variant="standard"
              name="company"
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textInputStyle}
              id="standard-basic"
              label="Job Title"
              variant="standard"
              name="position"
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textInputStyle}
              id="standard-basic"
              label="State"
              variant="standard"
              name="state"
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textInputStyle}
              id="standard-basic"
              label="Country"
              variant="standard"
              name="country"
              onChange={handleInputChange}
              required
            />
            <TextField
              className={classes.textInputStyle}
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              onChange={handleInputChange}
              required
            />
            <TextField
              id="date"
              label="Start Date"
              type="date"
              name="startDate"
              variant="standard"
              defaultValue={new Date()}
              className={classes.textInputStyle}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              name="endDate"
              variant="standard"
              className={classes.textInputStyle}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleInputChange}
              disabled={experienceInputs.isCurrent}
              required={!experienceInputs.isCurrent}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={experienceInputs.isCurrent}
                  onChange={onChecked}
                  name="isCurrent"
                  color="primary"
                />
              }
              label="Currently Working here"
            />
            <Button
              className={classes.buttonStyle}
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => formRef?.current?.reportValidity()}
            >
              Submit
            </Button>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={submitResponse}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert variant="filled" severity="success" onClose={() => handleClose}>
          Experience Added Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdminModal;
