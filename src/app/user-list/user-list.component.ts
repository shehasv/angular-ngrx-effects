import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { filter } from 'rxjs';
import { ApplicationFacade } from '../state/application.facade';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users:any = [];
  filteredUsers:any = [];
  searchTerm:string = '';
  filterForm:any;
  constructor(private userService:UserService, private fb:FormBuilder, private facade:ApplicationFacade){

  }

  ngOnInit(){
    this.getUserDetails();
    this.creatForm();
  }

  creatForm(){
    this.filterForm = this.fb.group({
      city:[''],
      company:['']
    })
  }

  getUserDetails(){
    this.facade.loadUsersData();
    this.facade.getUsers$.pipe(filter((data)=> Boolean(data))).subscribe((data)=>{
      this.users = data;
      this.filteredUsers = this.users;
    })
  }

  searchData():void{
    if(this.searchTerm === ''){
      this.filteredUsers = this.users;
    }
    this.filteredUsers = this.users.filter((data:any)=>{
      return data.name.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
    })
  }

  sortChange(event:any):void{
    if(event.target.value === 'name'){
      this.filteredUsers = this.filteredUsers.slice().sort(function(
        a:any,b:any
      ):any{
        return a.name > b.name ? 1 : -1
      }) 
    }
    if(event.target.value === 'city'){
      this.filteredUsers = this.filteredUsers.slice().sort(function(
        a:any,b:any
      ):any{
        return a.address.city > b.address.city ? 1 : -1
      })
    }
  }
  clearFilter(){
    this.creatForm();
    this.filteredUsers = this.users;
  }

  applyFilter(){
    this.searchTerm = '';
    if(this.filterForm.valid){
      this.filteredUsers = this.users.filter((data:any)=>{
        return this.filterForm.get('city').value === data.address.city || this.filterForm.get('company').value === data.company.name
      })
    }
  }

}
