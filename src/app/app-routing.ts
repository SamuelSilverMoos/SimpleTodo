import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        loadChildren: () => import('./components/overview/overview.module').then(mod => mod.TodoListModule)
    },
    {
        path: 'detail',
        loadChildren: () => import('./components/detail/detail.module').then(mod => mod.TodoDetailModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouting { }
