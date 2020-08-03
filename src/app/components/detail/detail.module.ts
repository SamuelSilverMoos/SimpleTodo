import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoDetailRoutingModule } from './detail.routing.module';
import { TodoDetailComponent } from './detail.component';
import { TodoService } from '../../services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule
  ],
  declarations: [TodoDetailComponent],
  providers: [
    TodoService
  ]
})
export class TodoDetailModule { }
