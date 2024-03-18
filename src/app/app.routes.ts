import { Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {TodoNewComponent} from "./todo-new/todo-new.component";

export const routes: Routes = [
  {path:'list', component: TodoListComponent},
  {path:'new', component: TodoNewComponent},
  {path:'todo-detail/:id', component: TodoDetailComponent}
];
