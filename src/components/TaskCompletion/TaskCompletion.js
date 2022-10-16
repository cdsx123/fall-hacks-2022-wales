import React, { Components, useEffect, useState, localStorage, useLocalStorage } from "react"
import Box from "@mui/system/Box";

function FinishTask(date) {
    let [data, setData] = useState();
    let [boxReturn, setBoxReturn] = useState();
    

    function getIsTaskFinished() {
        setBoxReturn(
            <Box
                style={{
                    backgroundColor: '#333',
                    borderRadius: 4,
                    flexFlow: "row wrap",
                    color: '#eee',
                    minHeight: 150,
                    padding: 12,
                    marginTop: 10,
                    width: 200
                }}
            >

                <p>
                    Did you finish the task {data['course']}?
                </p>
                <button onClick={() => addFinishedTaskRecord(data, true)} style={{ width: "75px", height: "40px", marginLeft: "10px" }} >Yes</button>
                <button onClick={() => addFinishedTaskRecord(data, false)} style={{ width: "75px", height: "40px", marginLeft: "10px" }} >No</button>



            </Box>
        );

        
    }
    const MINUTE_MS = 60000;
    useEffect(() => {
        const interval = setInterval(() => { 
            let listOfCourses = window.localStorage.getItem("Assignments");
            if (listOfCourses != null) {

                let listOfParsedCourses = JSON.parse(listOfCourses);
                for (let i = 0; i < listOfParsedCourses.length; i++) {

                    if ((new Date()).getTime() >= (listOfParsedCourses[i]['Deadline']).getTime()) {

                        setData(listOfParsedCourses[i]);

                        getIsTaskFinished(listOfParsedCourses[i]);
                    }
                }
            }
        }, MINUTE_MS);

        return () => clearInterval(interval);

       
        
        
    }, []);

    function addFinishedTaskRecord(data, isFinished) {
        let listOfFinishItems = useLocalStorage("TaskFinished", "");
        let listOfParsedItems = []
        if (listOfFinishItems != "") {
            listOfParsedItems = JSON.parse(listOfFinishItems);
        }
        let addedFinishedObject = '{ \"IsFinished\": ' + isFinished +
                                    ', \"Course\": \"' + data['course'] +
                                    '\", \"Professor\": \"'+data['professor']+'\" }';
        
        listOfParsedItems.push(addedFinishedObject)
        localStorage.setItem("TaskFinished", JSON.stringify(listOfFinishItems)) 

        // Remove record from assignment after user clicks yes or no
        let listOfCourses = window.localStorage.getItem("Assignments");
        if (listOfCourses != null) {

            let listOfParsedCourses = JSON.parse(listOfCourses);
            let rmindex = listOfParsedCourses.indexOf(data);
            listOfParsedCourses.splice(rmindex, 1);
            localStorage.setItem("Assignment", JSON.stringify(listOfParsedCourses));
        }
        
        

    }  

    return boxReturn;


    

}




export default FinishTask;