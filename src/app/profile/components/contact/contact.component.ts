import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact:Array<any> = [];
  @Output() clickContact = new EventEmitter<any>();

  public contactUser:any = {
    "name": '',
    "email": '',
    "message": ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  onClickContact(user: any) {
    this.clickContact.emit(user);
  }

}
