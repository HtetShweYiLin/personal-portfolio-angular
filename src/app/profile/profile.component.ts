import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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

}