import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() projects: any;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
