import { Component, Input } from '@angular/core';
import { Info } from '../../Info'

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent {
  @Input() info!: Info;

  title = "";
  text = "";

}
