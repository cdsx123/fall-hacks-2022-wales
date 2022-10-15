import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function Form() {
  const [value, setValue] = React.useState(new Date);
  const [difficulty, setDifficulty] = React.useState(1)

  useEffect(() => {
    console.log(value.$d)
    console.log(new Date)
  }, [value])

  return (
    <form>
      <TextField id="name" label="Assignment Name" variant="outlined"/>
      <TextField id="weight" label="% Of Grade" variant="outlined" />
      <TextField id="credits" label="Course Credits" variant="outlined"/>
      <TextField id="difficulty" label="difficulty" variant="outlined" inputProps={{ inputMode: 'numeric', pattern: '/^[0-9][0]?$/' }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          id="dueDate"
          label="Due Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField id="description" label="description" variant="outlined" />
    
    </form>
  )
}