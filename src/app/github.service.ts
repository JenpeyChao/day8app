import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from './github.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com/users'
  constructor(private http:HttpClient) { }
  searchProfile(profile: string){
    const url = `${this.apiUrl}/${profile}`;
    return this.http.get<Root>(url)
  }
}
