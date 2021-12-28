import * as React from "react";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import { format } from "date-fns";

import { AccommodationAvailability, Accommodation } from "../types";

//Arrival Date
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

//Number of nights
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

//List of properties
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Index() {
  const [results, setResults] = useState([]);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [nights, setNights] = useState("");

  const currenyFormat = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

  useEffect(() => {
    if (arrivalDate && nights) findProperties(arrivalDate, nights);
  }, [arrivalDate, nights]);

  async function findProperties(arrivalDate, nights) {
    const query = `date=${format(
      arrivalDate,
      "MM-dd-yyyy"
    )}&numberOfNigts=${nights}`;

    fetch(`/api/availability?=${query}`)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
      });
  }

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
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e)}
            renderInput={(params) => <TextField {...params} />}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Number of nights
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nights}
              label="Number of nights"
              onChange={(e) => setNights(e.target.value)}
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
          {results.map((availability: AccommodationAvailability) => (
            <Card key={availability.accommodation.id}>
              <CardContent>
                <Typography variant="h6">
                  {availability.accommodation.name} (sleeps {availability.accommodation.sleeps})
                </Typography>
                <Typography variant="subtitle2">
                  {availability.arrival} to {availability.departure}
                </Typography>
                <Typography variant="subtitle2">{currenyFormat.format(availability.priceInPence/100)}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Copyright />
      </Box>
    </Container>
  );
}
