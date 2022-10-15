import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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
            autoFocus
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
            autoFocus
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
      <Button onClick={handleSubmit(onSubmit)} variant="outlined">Submit</Button>

export default Form