import { Component } from '@angular/core';

import { Stat } from 'src/app/shared/interface';
import { Item } from 'src/app/shared/interface';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats: Stat[] = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items: Item[] = [
    {
      image: '../assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '../assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
  ];
}
