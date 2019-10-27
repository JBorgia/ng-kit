import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-customization',
  templateUrl: './pagination-customization.html',
  styleUrls: ['./pagination-customization.scss']
})
export class PaginationCustomizationComponent {
  page = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
