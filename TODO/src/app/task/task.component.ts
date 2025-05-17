import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  // taskObj = new AppComponent();
  taskServiceObj = inject(TaskService);
  tasks:string[] = [];

  ngOnInit(): void {
    this.taskServiceObj.currentTasks.subscribe(
      tasks => {
        this.tasks = tasks;
      }
    )
  }

}
