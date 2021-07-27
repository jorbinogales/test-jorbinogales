import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { CreateComponent } from './create/create.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    {
        path: 'crear',
        component: CreateComponent,
    },
    {
        path: 'users',
        component: ListaComponent,
    },
    {
        path: 'users/:id',
        component: PerfilComponent
    },
    {
        path: 'search/:text',
        component: ListaComponent
    },
    {
      path: '**',
      component: ListaComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
