import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatTabChangeEvent,
  MatTabGroup,
  MatTabsModule,
} from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatTabsModule,
    MatButtonModule,
    RouterLink

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private router:Router){}


  onTabChange(event: MatTabChangeEvent): void {
    if (event.index === 0) {
      this.router.navigate(['/user-list']);  // Adjust this path to your route
    } else if (event.index === 1) {
      this.router.navigate(['/add-user']);  // Navigate to add-user component
    }
  }



}
