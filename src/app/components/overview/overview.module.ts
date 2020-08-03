import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { TodoListRoutingModule } from './overview.routing.module';
import { OverviewComponent } from './overview.component';
import { TodoService } from '../../services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule
  ],
  declarations: [OverviewComponent],
  providers: [
    TodoService
  ]
})
export class TodoListModule { }
