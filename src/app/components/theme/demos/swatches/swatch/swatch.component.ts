import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit {

  @Input() swatch;

  constructor() { }

  ngOnInit() { }

}
