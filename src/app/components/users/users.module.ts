import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Components //
import { UsersComponent } from './users.component';
import { ListaComponent } from './lista/lista.component';
import { CreateComponent } from './create/create.component';
import { UserRoutingModule } from './user-routing.module';
import { PerfilComponent } from './perfil/perfil.component';

//Router 


@NgModule({
  declarations: [
    UsersComponent,
    ListaComponent,
    CreateComponent,
    PerfilComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
