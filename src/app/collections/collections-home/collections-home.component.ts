import { Component } from '@angular/core';

import { Header } from 'src/app/shared/interface';
import { Employee } from 'src/app/shared/interface';

@Component({
  selector: 'app-collections-home-component',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data: Employee[] = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true },
  ];

  headers: Header[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];
}
