import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { contact_user } from 'src/app/data/contact_user';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact:Array<any> = [];
  @Output() clickContact = new EventEmitter<any>();

  public contactUser = contact_user;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  onClickContact(user: any) {
    this.clickContact.emit(user);
  }

}
