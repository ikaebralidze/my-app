import { Component, OnInit } from "@angular/core";

// interface tasks {
//   task: string;
//   diff: "Easy" | "Medium" | "Hard";
// }
// [];

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  input: string = "";
  todoArr: string[] = [];
  progressArr: string[] = [];
  doneArr: string[] = [];
  ragaca: string[] = ["Easy", "Medium", "Hard"];
  constructor() {}

  add() {
    if (this.input === "") {
      alert("it's can't be empty");
    } else {
      this.todoArr.push(this.input);
    }
  }
  toProg(i: string) {
    this.progressArr.push(i);
    const index: number = this.todoArr.indexOf(i);
    this.todoArr.splice(index, index + 1);
  }
  cancel(i: string) {
    const index: number = this.todoArr.indexOf(i);
    this.todoArr.splice(index, index + 1);
  }
  undo(i: string) {
    const index: number = this.progressArr.indexOf(i);
    this.progressArr.splice(index);
    this.todoArr.push(i);
  }
  toDone(i: string) {
    this.doneArr.push(i);
    const index: number = this.progressArr.indexOf(i);
    this.progressArr.splice(index, index + 1);
  }
  toGone(i: string) {
    const index: number = this.doneArr.indexOf(i);
    this.doneArr.splice(index, index + 1);
  }
  ngOnInit() {}
}
