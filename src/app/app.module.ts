import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
        TasksComponent, 
        TaskComponent, 
        NewTaskComponent
    ],
    bootstrap: [AppComponent],
    // imports: [BrowserModule, DatePipe]
    // Not to iunclude DatePipe as already in BrowserModule
    imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule {

}