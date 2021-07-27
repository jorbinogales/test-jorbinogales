import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserModel[] = [];

  constructor(private http: HttpClient) { }

  async getUsers(): Promise<UserModel[]> {
    await this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb').toPromise()
      .then((result: any) => {
        console.log(result);
        this.users = result.results[0];
      })
      .catch(error => {
        console.log(error);
      })
    
     return this.users;
  }

  getUser(index: number) {
    return this.users[index];
  }

  
  searchUser(texto: string): UserModel[] {
        
        let arr: UserModel[] = [];
        texto = texto.toLowerCase();

        for (let i = 0; i < this.users.length; i++) {

            let user = this.users[i];

            let name = user.first.toLowerCase();
            
            if (name.indexOf(texto) >= 0) {
                arr.push(user);
            }
        }
        return arr;
    }

}
