import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-user-update',
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
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phoneNo: '',
    dateOfBirth: '',
    gender: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const userId = +idParam;
      this.userService.getUserById(userId).subscribe((userData: any) => {
        this.user = userData;
      });
    } else {
      console.error('User ID not found in the route');
      // Handle the case where the ID is missing, e.g., navigate away or show an error
    }
  }


  updateUser(form: NgForm) {
    if (form.valid) {
      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam !== null) {
        const userId = +idParam;  // Safely convert the string to a number
        this.userService.updateUser(userId, this.user).subscribe(response => {
          console.log('User updated successfully', response);
          this.router.navigate(['/user-list']);
        }, error => {
          console.error('Error updating user', error);
        });
      } else {
        console.error('User ID not found in the route');
        // Handle the case where the ID is missing, e.g., navigate away or show an error message
      }
    }
  }

}
