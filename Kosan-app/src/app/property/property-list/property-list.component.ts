import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Arief House',
      Type: 'House',
      Price: 1250,
    },
    {
      Id: 2,
      Name: 'Riski House',
      Type: 'House',
      Price: 1150,
    },
    {
      Id: 3,
      Name: 'Indra House',
      Type: 'House',
      Price: 3250,
    },
    {
      Id: 4,
      Name: 'Pratama House',
      Type: 'House',
      Price: 4250,
    },
    {
      Id: 5,
      Name: 'Nadya House',
      Type: 'House',
      Price: 5250,
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
