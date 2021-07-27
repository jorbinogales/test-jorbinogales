import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private __usersServivce: UserService,
              private __activatedRoute: ActivatedRoute) { }

  async ngOnInit() {

    this.users = await this.__usersServivce.getUsers();
    
    this.__activatedRoute.params.subscribe(params => {

      if (params['text'] && params['text'] != '') {
        
        this.users = this.__usersServivce.searchUser(params['text']);
        
      } 
    });
  

  }

}
