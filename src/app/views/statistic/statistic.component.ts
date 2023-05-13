import { Component, Input } from '@angular/core';

import { Stat } from 'src/app/shared/interface';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent {
  @Input() data: Stat[] = [];
}
