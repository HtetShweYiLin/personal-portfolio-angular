import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @Input() items: any;

  constructor() { }

  ngOnInit(): void {
  }

}
