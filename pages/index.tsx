import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";

//Arrival Date
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

//Number of nighs
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//List of properties
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Stuff for getting dynamic data
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

interface Accommodation {
  id: String;
  type: String;
  arrival: String;
  departure: String;
  priceInPence: Number;
}

export const getStaticProps: GetStaticProps = async () => {
  const availableAccommadation: Accommodation[] = [
    {
      id: "y-popty",
      type: "Y Popty (sleeps 6)",
      arrival: "Friday 16th July",
      departure: "Monday 19th of July",
      priceInPence: 3200.0,
    },
    {
      id: "laethdy",
      type: "Laethdy (sleeps 4)",
      arrival: "Friday 16th July",
      departure: "Monday 19th of July",
      priceInPence: 2200.0,
    },
  ];

  return {
    props: {
      availableAccommadation,
    },
  };
};

export default function Index({
  availableAccommadation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gap: 0 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Book your stay at Pentre Bach Cottages
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disablePast
            label="Arrival Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Number of nights
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Number of nights"
              onChange={handleChange}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={14}>14</MenuItem>
            </Select>
          </FormControl>
        </LocalizationProvider>
        <Box
          sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)", gap: 2 }}
        >
          {availableAccommadation.map((accommodation: Accommodation) => (
            <Card key={accommodation.id}>
              <CardContent>
                <Typography variant="h6">{accommodation.type}</Typography>
                <Typography variant="subtitle2">
                  {accommodation.arrival} to {accommodation.departure}
                </Typography>
                <Typography variant="subtitle2">
                  £{accommodation.priceInPence}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
