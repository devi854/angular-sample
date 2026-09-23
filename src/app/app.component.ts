import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTask = '';
  tasks: Task[] = [
    { title: 'Create Azure VM', done: true },
    { title: 'Run Petclinic on the VM', done: true },
    { title: 'Deploy this Angular app', done: false }
  ];

  addTask(): void {
    const title = this.newTask.trim();
    if (!title) return;
    this.tasks.push({ title, done: false });
    this.newTask = '';
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  get remaining(): number {
    return this.tasks.filter(t => !t.done).length;
  }
}
