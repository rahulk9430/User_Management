import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

export const routes: Routes = [
  {path:'',redirectTo:'user-list',pathMatch:'full'},
  {path:'user-list',component:UserListComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'user-update/:id',component:UserUpdateComponent}
];
