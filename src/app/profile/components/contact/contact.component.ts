import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactUser:any = {
    "name": '',
    "email": '',
    "message": ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
