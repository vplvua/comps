import { Component, Input } from '@angular/core';

import { Item } from 'src/app/shared/interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() items: Item[] = [];
}
