import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // exportHtmlToPDF(){
  //   let data: any = document.getElementById('resume');
  //   console.log("data",data);
      
  //     html2canvas(data).then(canvas => {
          
  //         let docWidth = 208;
  //         let docHeight = canvas.height * docWidth / canvas.width;
          
  //         const contentDataURL = canvas.toDataURL('image/png')
  //         let doc = new jsPDF('p', 'mm', 'a4');
  //         let position = 0;
  //         doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)
          
  //         doc.save('exportedPdf.pdf');
  //     });
  // }

}
