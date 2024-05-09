#! /usr/bin/env node
import inquirer from "inquirer";
let toDoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "toDo",
            type: "input",
            message: "What Do You Want To Add In Your To Do List?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do You Want To Add More?",
            default: "false",
        },
    ]);
    toDoList.push(addTask.toDo);
    condition = addTask.addMore;
    console.log(toDoList);
}
