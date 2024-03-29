import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngk-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class NgkPreloaderComponent implements OnInit {
  @Input() isError: boolean;
  @Input() timeoutMillis: number | null = 115000;
  @Input() errorMessage: string = 'Something Went Wrong';

  constructor() { }

  ngOnInit(): void {
    if (this.timeoutMillis) {
      this.startTimeoutCounter();
    }
  }

  startTimeoutCounter() {
    setTimeout(() => {
      this.isError = true;
    }, this.timeoutMillis);
  }
}
