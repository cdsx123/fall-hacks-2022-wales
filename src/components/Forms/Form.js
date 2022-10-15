import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, TextareaAutosize, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import "./Form.css"

const Form = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = React.useCallback((input) => {
    console.log(input)
  },[])

  let selections = [
    <MenuItem value={1} key={1}>One</MenuItem>,
    <MenuItem value={2} key={2}>Two</MenuItem>,
    <MenuItem value={3} key={3}>Three</MenuItem>,
    <MenuItem value={4} key={4}>Four</MenuItem>,
    <MenuItem value={5} key={5}>Five</MenuItem>,
    <MenuItem value={6} key={6}>Six</MenuItem>,
    <MenuItem value={7} key={7}>Seven</MenuItem>,
    <MenuItem value={8} key={8}>Eight</MenuItem>,
    <MenuItem value={9} key={9}>Nine</MenuItem>,
    <MenuItem value={10} key={10}>Ten</MenuItem>,
  ]


  return (
    <div>
      <form>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="name"
              variant="outlined"
              label="Assignment Name"
              multiline
              onChange={onChange}
              value={value}
            />
        )} />

        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextareaAutosize
              id="description"
              placeholder="Assignment Description"
              onChange={onChange}
              value={value}
              minRows={3}
              maxRows={3}
            />
        )} />

        <Controller
          name="weight"
          control={control}
          defaultValue={0}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="weight"
              variant="outlined"
              label="% Of Grade"
              type="number"
              onChange={onChange}
              value={value}
              InputProps={{
                inputProps: { 
                    max: 100, min: 0
                }
              }}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
              
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
              onChange={onChange}
              value={value}
            />
        )} />

        <Controller
          name="difficulty"
          control={control}
          defaultValue={1}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="difficulty"
              value={value}
              InputProps={{
                inputProps: { 
                    max: 10, min: 1 
                }
              }}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
              type="number"
              label="Difficulty"
              onChange={onChange}
            />
        )} />


        <Controller
          name="dueDate"
          control={control}
          defaultValue={new Date}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Assignment Due Date"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
        )} />
        
        


        <Button onClick={handleSubmit(onSubmit)} variant="outlined">Submit</Button>
          
      </form>
    </div>
    
  )
}

export default Form