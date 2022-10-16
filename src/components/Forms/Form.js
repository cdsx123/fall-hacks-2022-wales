import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, TextareaAutosize, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from "react-router-dom";
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import "./Form.css"
import { db } from "../../db/storage";

function Form (props) {
  const { handleSubmit, control } = useForm();
  const onSubmit = React.useCallback((input) => {
    const data = db.getItem("data");
    if(data !== null){
      const jsonData = JSON.parse(data);
      if (assignment) {
        index = data.findIndex(assignment => assignment.name === props.match.params.id)
        newData = [...jsonData.data.slice(0, index), ...items.slice(index + 1)]
        db.setItem("data",JSON.stringify({data: newData}));
      } else {
        jsonData.data.push(input)
        db.setItem("data",JSON.stringify(jsonData));
      }
     
    }else{
      const jsonData =  {data: [input]}
      db.setItem("data",JSON.stringify(jsonData));
    }
  },[]);
  let [assignment, setAssignment] = useState(undefined)
  

  useEffect(() => {  
    if (props.match) {
      const data = JSON.parse(db.getItem("data")).data
      setAssignment(data.find(assignment => assignment.name === props.match.params.id))
    }
  }, [])
  return (
    <div>
      <form>
        <Controller
          name="name"
          defaultValue={assignment ? assignment.name : null}
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
          name="professor"
          defaultValue={assignment ? assignment.professor : null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="professor"
              value={value}
              label="Professor Name"
              onChange={onChange}
            />
        )} />

        <Controller
          name="course"
          defaultValue={assignment ? assignment.course : null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              id="course"
              value={value}
              label="Course Name"
              onChange={onChange}
            />
        )} />

        <Controller
          name="description"
          defaultValue={assignment ? assignment.description : null}
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
          defaultValue={assignment ? assignment.weight : null}
          control={control}
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
          defaultValue={assignment ? assignment.credits : null}
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
          defaultValue={assignment ? assignment.difficulty : null}
          control={control}
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
          name="deadline"
          defaultValue={assignment ? assignment.deadline : null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                id="deadline"
                label="Assignment Deadline"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
        )} />

        Late Penalty:
        <div id="latePenalty">
          <p>Lose</p> 
          <Controller
            name="penaltyAmount"
            defaultValue={assignment ? assignment.penaltyAmount : 1}
            control={control}

            render={({ field: { onChange, value } }) => (
              <TextField
                className="lateInput"
                id="penaltyAmount"
                value={value}
                InputProps={{
                  inputProps: { 
                      max: 100, min: 1 
                  }
                }}
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                type="number"
                variant="standard"
               
                onChange={onChange}
              />
          )} />
          <p>% every</p>
          <Controller
            name="intervalAmount"
            defaultValue={assignment ? assignment.intervalAmount : 1}
            control={control}
  
            render={({ field: { onChange, value } }) => (
              <TextField
                className="lateInput"
                id="intervalAmount"
                value={value}
                InputProps={{
                  inputProps: { 
                      max: 100, min: 1 
                  }
                }}
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                type="number"
       
                variant="standard"
                onChange={onChange}
              />
          )} />
          <Controller
            name="intervalType"
            defaultValue={assignment ? assignment.intervalType : "day"}
            control={control}

            render={({ field: { onChange, value } }) => (
              <Select
                id="intervalType"
                value={value}
               
                onChange={onChange}
              > 
                <MenuItem value="day">Day(s)</MenuItem>
                <MenuItem value="hour">Hour(s)</MenuItem>
                <MenuItem value="minute">Minute(s)</MenuItem>
              </Select>
          )} />
        </div>

        <Controller
          name="hardDeadline"
          defaultValue={assignment ? assignment.hardDeadline : null}
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                id="hardDeadline"
                label="Hard Deadline"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
        )} />
        <div id="buttons">
          <Button component={Link} to="/" variant="outlined">Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)} variant="outlined">Submit</Button>
        </div>
          
      </form>
    </div>  
  )

}

export default Form
