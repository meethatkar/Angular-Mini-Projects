import { Component, EventEmitter, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/task.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  outputs:['tasks'],
})
export class AppComponent {
  title = 'TODO';
  tasks:string[] = [];

  taskService = inject(TaskService);
  addTask(namearray:string){
    this.tasks.push(namearray);
    // this.taskService.updateTasks(this.tasks);
  }

  deleteTask(index:number){
    for(let i=0;i<this.tasks.length;i++){
      if(i===index){
        this.tasks.splice(index,1);
      }
    }
  }
  
  childEvent= new EventEmitter();
}
