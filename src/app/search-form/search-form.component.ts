import { Component, OnInit } from '@angular/core';
import {GithubService } from '../github.service';
import{FormsModule} from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers:[GithubService]
})
export class SearchFormComponent implements OnInit {
  user:any;
  repos:any;
  username:string;

  constructor(private _githubService:GithubService) {
    
   }

   search(){
     this._githubService.updateUser(this.username)

     this._githubService.getUser().subscribe(user => {
       this.user = user;
     });

     this._githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });
   }

  ngOnInit(): void {
  }

}
