import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import "./Form.css"

const Form = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = React.useCallback((input) => {
    console.log(input)
  },[])

  return (
    <form>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="name"
            variant="outlined"
            label="Assignment Name"
            required
            autoFocus
            onChange={onChange}
            value={value}
          />
      )} />

      <Controller
        name="weight"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="weight"
            variant="outlined"
            label="% Of Grade"
            required
            onChange={onChange}
            value={value}
          />
      )} />

      <Controller
        name="credits"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="credits"
            variant="outlined"
            label="Course Credits"
            required
            onChange={onChange}
            value={value}
          />
      )} />

      <Controller
        name="date"
        control={control}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Basic example"
              value={value}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} />}
              inputFormat="DD/MM/YYYY"
            />
          </LocalizationProvider>
      )} />
        
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id="description"
            variant="outlined"
            label="Assignment Description"
            required
            onChange={onChange}
            value={value}
          />
      )} />

      <Button onClick={handleSubmit(onSubmit)} variant="outlined">Submit</Button>
        
    </form>
  )
}

export default Form