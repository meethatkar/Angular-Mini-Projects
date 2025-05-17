import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasksSource = new BehaviorSubject<string[]>(['Initial Task']);
  // here BehaviourSubject holds the current value and emits it to new subscribers

  currentTasks = this.tasksSource.asObservable(); 
  //this makes currentTasks as observable so we can only observe, can't modify

  updateTasks(newTask:string[]){
    this.tasksSource.next(newTask);     //Emits new value to all subscribers
  }

}
