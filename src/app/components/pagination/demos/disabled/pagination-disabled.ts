import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-disabled',
  templateUrl: './pagination-disabled.html',
  styleUrls: ['./pagination-disabled.scss']
})
export class PaginationDisabledComponent {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
