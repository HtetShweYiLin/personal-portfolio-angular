import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("profile",this.profile);
  }

  // exportHtmlToPDF(){
  //   let data: any = document.getElementById('resume');

  //     html2canvas(data).then(canvas => {

  //         let docWidth = 208;
  //         let docHeight = canvas.height * docWidth / canvas.width;

  //         const contentDataURL = canvas.toDataURL('image/png')
  //         let doc = new jsPDF('p', 'mm', 'a4');
  //         let position = 0;
  //         doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

  //         doc.save('resume.pdf');
  //     });
  // }

  downloadResume() {
    this.router.navigate(['resume']);
  }

  contactMe(contactUser: any) {
    console.log("contactMe",contactUser);
  }

}
