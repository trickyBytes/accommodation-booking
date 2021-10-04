import React, { useState } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ShopIcon from "@material-ui/icons/Shop";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "@fontsource/roboto";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

interface Accomadation {
  id: Number;
  type: String;
  arrival: String;
  departure: String;
  numberOfNights: Number;
  priceInPence: Number;
}

interface AvailableAccomadationList {
  availableAccomadation: Array<Accomadation>;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const getStaticProps: GetStaticProps = async () => {
  const availableAccommadation: Accomadation[] = [
    {
      id: 1,
      type: "Popty",
      arrival: "Friday 16th July",
      departure: "Monday 19th of July",
      numberOfNights: 3,
      priceInPence: 3200.0,
    },
  ];

  return {
    props: {
      availableAccommadation,
    },
  };
};

export default function Home({
  availableAccommadation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id="date-picker-inline"
                label="Date of Arrival"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="accomodation-type-label">Cottages</InputLabel>
            <Select
              labelId="accomodation-type-label"
              id="accomodation-type-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="{3}">LLaethdy</MenuItem>
              <MenuItem value="{7}">Poppty</MenuItem>
              <MenuItem value="{9}">Both</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="find-nights-label">Nights</InputLabel>
            <Select
              labelId="find-nights-label"
              id="find-nights-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="{3}">3</MenuItem>
              <MenuItem value="{7}">7</MenuItem>
              <MenuItem value="{9}">9</MenuItem>
              <MenuItem value="{11}">11</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {availableAccommadation.map((accommadation: Accomadation) => (
            <Grid item xs={3} key={accommadation.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{accommadation.type}</Typography>
                  <Typography variant="subtitle2">
                    {accommadation.arrival} to {accommadation.departure}
                  </Typography>
                  <Typography variant="body2">
                    {accommadation.numberOfNights}
                  </Typography>
                  <Typography variant="subtitle2">
                    {accommadation.priceInPence}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="Book Now" href={"/book/popty"}>
                    <ShopIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}

          <Grid
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<ArrowBackIcon />}
              ></Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                endIcon={<ArrowForwardIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
