import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Event } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    displayedColumns: string[] = ['done', 'title', 'deadline', 'content', 'action'];
    mtdtodos: MatTableDataSource<Todo>;
    pageSizeOptions = [10, 20, 40, 80];
    static defaultPageSize = 10;
    static maxOverviewLength = 128;
    pageSize = OverviewComponent.defaultPageSize;
    constructor(private router: Router, private todoService: TodoService) {
        this.onResize();
    }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.loadAllTodoList();
    }
    loadAllTodoList() {
        this.mtdtodos = new MatTableDataSource(this.todoService.getAllTodos());
        this.mtdtodos.paginator = this.paginator;
        this.mtdtodos.sort = this.sort;
    }

    onClickEditTodoDetail(id: number) {
        console.log(id);
        this.router.navigate(['/detail'], { queryParams: { id: id } });
    }

    onClickAddTodo() {
        this.router.navigate(['/detail']);
    }

    onClickTodoDelete(todo: Todo) {
        if (confirm('Are you sure to delete the Todo \"' + todo.title + '"')) {
            this.todoService.deleteTodoDetail(todo);
            this.loadAllTodoList();
        }
    }

    setDone(done: boolean, atodo: Todo) {
        atodo.done = done;
        this.todoService.updateTodoById(atodo);
        this.loadAllTodoList();
    }

    applyFilter(filterValue: string) {
        this.mtdtodos.filter = filterValue.trim().toLowerCase();

        if (this.mtdtodos.paginator) {
            this.mtdtodos.paginator.firstPage();
        }
    }

    onResize() {
        this.pageSize = Math.floor((window.innerHeight - 310) / 52);
        if (this.pageSize < OverviewComponent.defaultPageSize) {
            this.pageSize = OverviewComponent.defaultPageSize;
        }
        this.loadAllTodoList();
    }

    generateOverview(content: string): string {
        var index = content.indexOf("\n");
        if (10 < index && index < OverviewComponent.maxOverviewLength) {
            return content.substr(0, index);
        } else if (content.length < OverviewComponent.maxOverviewLength) {
            return content;
        } else {
            return content.substring(0, OverviewComponent.maxOverviewLength - 3) + "...";
        }
    }
}
