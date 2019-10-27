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
  selector: 'app-table-th-widths',
  templateUrl: './table-th-widths.component.html',
  styleUrls: ['./table-th-widths.component.scss']
})
export class TableThWidthsComponent implements OnInit {
  hideColumn1;
  hideColumn2;
  hideColumn3;
  hideColumn4;
  hideColumn5;

  get employees() {
    return Employees;
  }

  constructor() { }

  ngOnInit() {
  }

}
