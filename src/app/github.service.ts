import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
//import { environment } from "./environments/environment";


@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'ABERT-NOLA';
  private client_id = '5486b7cfbf1a4e26da09';
  private client_secret = '404bb6ab94582b95dcc881d018ac8819d079fb78';

  constructor(private _http:HttpClient) {

  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username)
      .pipe(map(res => res ));
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
      .pipe(map(res => res ));
  }

  updateUser(username:string){
    this.username = username;
  }
}
