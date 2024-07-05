import { Component } from '@angular/core';
import { GithubService } from '../github.service';
import { response } from 'express';
import { Root } from '../github.model';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})
export class GithubComponent {
  profile = '';
  profileData: Root | undefined;
  constructor(private GithubService:GithubService){}

  findProfile(){
    this.GithubService.searchProfile(this.profile).subscribe(
      response =>{
        console.log(response)
        this.profileData = response;
        this.profile = ''
      }
    );
  }
}
