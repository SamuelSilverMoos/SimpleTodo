import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    constructor() { }

    getAllTodos(): Todo[] {

        if (localStorage.getItem('localData') !== null) {
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('Second');
        } else {
            var todoArrayData = [
                {
                    id: 1,
                    title: 'apply',
                    deadline: '2020-06-30',
                    content: 'Send application to acs',
                    done: true,
                },
                {
                    id: 2,
                    title: 'create Todo app',
                    deadline: '2020-08-07',
                    content: 'Create a "easy-to-use" Todo app which is based on Angular. \n Short spezification: \n - Overview page \n - Detail page \n - Todos have to be markable as done',
                    done: true,
                },
                {
                    id: 3,
                    title: 'start the new Job',
                    deadline: '2021-01-07 (approximately)',
                    content: 'Details have to be specified',
                    done: false,
                }
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('First');
        }
        return this.todos;
    }

    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        console.log(todoArray);
        return todoArray
            .filter(todo => todo.id === id)
            .pop();
    }

    updateTodoById(todo: Todo): Todo {
        if (todo.id === 0) {
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
            todo.id = ++todoid;
            todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        } else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
            for (var i in todoSaveArray) {
                if (todoSaveArray[i].id === todo.id) {
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        return todo;
    }

    deleteTodoDetail(todo: Todo) {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (var i in todoArray) {
            if (todoArray[i].id === todo.id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));
            }
        }
    };
}
