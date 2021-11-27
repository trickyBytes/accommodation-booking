import { useRouter } from "next/router";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
} from "@material-ui/core";

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

function Book() {
  const router = useRouter();
  const { property } = router.query;

  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <br />
        {property} Booking Page
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Number of Pets</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="NumberOfPets"
            onChange={handleChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Hot Tub"
          />
        </FormControl>
        <div>Deposit</div>
        <div>Total</div>
      </Grid>
    </Container>
  );
}

export default Book;
