import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/users/users.module')
        .then(m => m.UsersModule),

    },
    {
        path: 'users',
        loadChildren: () => import('./components/users/users.module')
        .then(m => m.UsersModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'users'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
