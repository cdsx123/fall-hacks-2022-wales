import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Form() {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    console.log(value.$d)
    console.log(new Date)
  }, [value])

  return (
    <form>
      <TextField id="name" label="Assignment Name" variant="outlined"/>
      <TextField id="weight" label="% Of Grade" variant="outlined" />
      <TextField id="credits" label="Course Credits" variant="outlined"/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="DD/MM/YYYY"
        />
      
      </LocalizationProvider>
      
    </form>
  )
}