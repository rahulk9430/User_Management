import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user = {
    name: '',
    email: '',
    phoneNo: '',
    dateOfBirth: '',
    gender: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  saveUser(form: NgForm) {
    if (form.valid) {
      this.userService.addUser(this.user).subscribe(response => {
        console.log('User added successfully', response);
        this.router.navigate(['/user-list']);
      }, error => {
        console.error('Error adding user', error);
      });
    }
  }
}
