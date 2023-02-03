import { Component } from '@angular/core';
import { Info } from '../../Info'
import { INFO } from '../../mock-info'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  info: Info[] = INFO;

}
