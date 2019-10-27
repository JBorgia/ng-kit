import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-example',
  templateUrl: './icon-example.component.html',
  styleUrls: ['./icon-example.component.scss']
})
export class IconExampleComponent implements OnInit {

  @Input() icon;

  constructor() { }

  ngOnInit() {
  }

}
