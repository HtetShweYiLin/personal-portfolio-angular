import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { profile } from "../data/profile";
import { navItems } from "../data/nav_items";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile = profile;
  public navItems = navItems;
  public sticky: boolean = false;

  constructor(private router: Router) { }

  @HostListener('window:scroll') // for window scroll events
  onScroll() {
    if (window.pageYOffset >= 300) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {
    console.log("profile",this.profile);
  }

  downloadResume() {
    this.router.navigate(['resume']);
  }

  contactMe(contactUser: any) {
    console.log("contactMe",contactUser);
  }

}
