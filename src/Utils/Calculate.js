

export function calculate(weight, priority, difficulty, date){
    //date = dd/mm/yyyy string
    let value = 0;
    let time_index = 0;
    let time_diff = date.now() - Date.now();
    time_diff = time_diff/1000/60/60;

    let time_interval = 120; //time range: 1->8760
    let cur = time_diff/time_interval;
    for (i=0;i<cur;i++){
        time_index++;
    }
    time_index=(-0.05)/(10^time_index);
    
    let diff_index=0;
    let diff_interval = 3;
    let foo = difficulty/diff_interval;
    for (i=0;i<foo;i++){
        diff_index++;
    }
    diff_index = (-0.1) * diff_index;

    value = weight * priority + diff_index * difficulty + time_index * time_diff;
    value = value / (priority + diff_index + time_index);  //distribution averaging
    return value;
}