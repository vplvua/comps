import { Component, Input } from '@angular/core';

import { Header } from 'src/app/shared/interface';
import { Employee } from 'src/app/shared/interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: Employee[] = [];
  @Input() headers: Header[] = [];
  @Input() classNames: string = '';
}
