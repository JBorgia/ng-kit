import { Component, OnInit } from '@angular/core';

export const Employees = [
  {
    first: 'Mark',
    last: 'Otto',
    title: 'Contractor',
    username: 'motto271',
  },
  {
    first: 'Jacob',
    last: 'Thornton',
    title: 'Manager',
    username: 'jthornton110',
  },
  {
    first: 'Larry',
    last: 'Bird',
    title: 'Technician',
    username: 'rkimble50',
  },
  {
    first: 'Richard',
    last: 'Kimble',
    title: 'Technician',
    username: 'rkimble50',
  },
  {
    first: 'Ted',
    last: 'Logan',
    title: 'Contractor',
    username: 'tlogan69',
  },
  {
    first: 'Bill',
    last: 'Preston',
    title: 'Technician',
    username: 'bpreston69',
  },
  {
    first: 'Luke',
    last: 'Perry',
    title: 'Technician',
    username: 'lperry90210',
  },
  {
    first: 'David',
    last: 'Blaine',
    title: 'Contractor',
    username: 'dblaine666',
  }
]
@Component({
  selector: 'app-table-table-visibility',
  templateUrl: './table-table-visibility.component.html',
  styleUrls: ['./table-table-visibility.component.scss']
})
export class TableTableVisibilityComponent implements OnInit {
  colVisibility = [
    false,
    true,
    true,
    true,
    true
  ];

  get employees() {
    return Employees;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(columnNumber) {
    this.colVisibility[columnNumber] = !this.colVisibility[columnNumber];
    /**
     * Editing just the variable will not trigger Angular's Change Detection.
     * Change detection is triggered here by setting the variable to a 'new' array and changing the reference.
     */
    this.colVisibility = [...this.colVisibility];
  }
}
