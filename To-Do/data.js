"use strict";

import {Task} from "./task.js";

// Create an Array of Task objects
let tasks = [
        new Task("Vaatwasser uitruimen"),
        new Task("Invoeren absentielijst"),
        new Task("5 min Werkoverleg"),
        new Task("Mail lezen", true, "01-04-2022 09:00:00"),
        new Task("Takenlijst invoeren"),
        new Task("Werkdag nabespreking")
        ];
        console.log(tasks);

window.addEventListener("load", init());

function init()
{
    const todayDate = new Date();
    document.getElementById("currentYear").innerHTML = todayDate.getFullYear();
    document.getElementById("currentDate").innerHTML = todayDate.getDate()+"/"+(todayDate.getMonth()+1);

    fillTasks();

    let addTaskElement = document.getElementById("addTask");
    addTaskElement.addEventListener("click", addNewTask);
    
    let markCompleteElement = document.getElementById("MarkComplete");
    markCompleteElement.addEventListener("click", markAsCompleted);

    let deleteElement = document.getElementById("deleteTask");
    deleteElement.addEventListener("click", deleteTask);
}

function addNewTask()
{
    let inputElement = document.getElementById("taskName");
    let newTaskName=inputElement.value;
    //Check if it is a new task or if it is already present, if so skip
    let skip = false;
    if (newTaskName=="") {skip=true;}
    for (let i=0; i<tasks.length; i++)
    {
        if (tasks[i].Title==newTaskName) {skip=true;} 
    }

    if (skip == false)
    {
       tasks = [...tasks, new Task(newTaskName)];
       console.log("tasks added");
       console.log(tasks);
       fillTasks();
    }
}

function deleteTask()
{
    let inputElements = document.getElementsByName("toDoList");
        //Uncompleted tasks
        for (let i=0; i<inputElements.length; i++)
        {
            //Find selected one
            if (inputElements[i].checked==true)
            {
                //Found
                console.log(inputElements[i]);
                let selected=inputElements[i].value;
                console.log("Selected" + selected);
                //Delete
                for (let i=0; i<tasks.length; i++)
                {
                    //Find selected in tasks
                    if (tasks[i].title==selected)
                    {
                        //Found; Delete it
                        console.log(selected);
                        delete tasks[i];
                    }
                }
                fillTasks();
            }
        }
}

function markAsCompleted()
{
    let inputElements = document.getElementsByName("toDoList");
        //Uncompleted tasks
        for (let i=0; i<inputElements.length; i++)
        {
            //Find selected one
            if (inputElements[i].checked==true)
            {
                //Found
                console.log(inputElements[i]);
                let selected=inputElements[i].value;
                console.log("Selected" + selected);
                //Mark as completed
                for (let i=0; i<tasks.length; i++)
                {
                    //Find selected in tasks
                    if (tasks[i].title==selected)
                    {
                        //Found; Mark it
                        tasks[i].completed=true;
                        const compDate=new Date();
                        let compMonth=compDate.getMonth()+1;
                        let compDay=compDate.getDay();
                        let compYear=compDate.getFullYear();
                        let compTime=compDate.getTime();

                        console.log(compMonth);
                        tasks[i].completedDate=compDay + "-" + compMonth + "-" + compYear + " " + compTime;
                    }
                }
                fillTasks();
            }
        }
}

function fillTasks()
{
    let toDoElements = document.getElementById("contentElem");

    // filter all tasks where task.completed == false ( = not completed )
    let toDo = tasks.filter( task => { return !task.completed });
    console.log(toDo);

    let innerHtml="";
    //Uncompleted tasks
    for (let i=0; i<toDo.length; i++)
    {
        if (i%2 === 0) {innerHtml=innerHtml + "<div class='taskItem colored'>";} 
        else {innerHtml=innerHtml + "<div class='taskItem'>";}
        innerHtml=innerHtml +  "<label>" + toDo[i].title + "<input type='radio' name='toDoList' value='" + toDo[i].title + "'>";
        innerHtml=innerHtml + "</label>";
        innerHtml=innerHtml + "</div>";
    }
    toDoElements.innerHTML=innerHtml;

    //Completed tasks     
    // filter all tasks where task.completed == true ( = completed )
    let completedToDo = tasks.filter( task => { return task.completed });
    console.log(completedToDo.length);

    let completedToDoElements = document.getElementById("contentCompletedElem");
    console.log("CompletedToDo");
    console.log(completedToDoElements);
    innerHtml="";
    for (let i=0; i<completedToDo.length; i++)
    {
        if (i%2 === 0) {innerHtml=innerHtml + "<div class='taskItem colored'>";} 
        else {innerHtml=innerHtml + "<div class='taskItem'>";}
        innerHtml=innerHtml +  "<label>" + completedToDo[i].title + "<input type='radio' name='toDoListCompleted' value='" + toDo[i].title + "'>";
        innerHtml=innerHtml + "</label>";
        innerHtml=innerHtml + "</div>";
    }
    completedToDoElements.innerHTML=innerHtml;
}
