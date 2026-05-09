import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import { NewAddTask } from "./task/task.model";

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    private tasks = DUMMY_TASKS;

    getUserTasks(userId: String) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewAddTask, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
            userId: userId
        });
        this.saveTasks();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id != taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}