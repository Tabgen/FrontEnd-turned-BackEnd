import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Info } from '../../Info'
import { INFO } from '../../mock-info'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @ViewChild('editor') editor: any;

  info: Info[] = INFO;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log['ohoo']
  }

}
