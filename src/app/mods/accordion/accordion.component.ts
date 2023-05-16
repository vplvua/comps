import { Component, Input } from '@angular/core';

import { Question } from 'src/app/shared/interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  @Input() items: Question[] = [];
  openedItemIndex = 0;

  onClick(index: number) {
    if (this.openedItemIndex === index) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
