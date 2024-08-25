import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ CommonModule, MatTableModule, MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  public users: any= [
    {name:''},
    {email:''},
    {phoneNo:''},
    {dateOfBirth:''},
    {gender:''},

  ];

  displayedColumns: String[] = [
    'name',
    'email',
    'phoneNo',
    'dateOfBirth',
    'gender',
    'edit',
    'delete'

  ];

 constructor(private userService:UserService,private router:Router){}

 ngOnInit(): void {

  this.getUser();

}
getUser(){
  this.userService.userList().subscribe((data:any)=>{
    this.users=data;
    console.log(data);
  })
}

deleteUser(id:number){
  this.userService.deleteUser(id).subscribe((data)=>{
    this.getUser();

  });
}

editUser(id: number): void {
  this.router.navigate(['/user-update', id]);
}


}
