import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewAddTask } from "./task/task.model";

@Injectable({
    providedIn:'root'
})
export class TasksService {

    private tasks = DUMMY_TASKS;

    getUserTasks(userId: String) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewAddTask, userId:string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            userId: userId
        });
    }

    removeTask(taskId:string){
      this.tasks = this.tasks.filter((task)=> task.id!=taskId);
    }
}