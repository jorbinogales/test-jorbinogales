import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  user: any = {};

  constructor(private __usersService: UserService,
              private __activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.__activateRoute.params.subscribe(params => {

      console.log(params);

      let index = parseInt(params['id']);

      this.user = this.__usersService.getUser(index);

     })
  }
  


}
