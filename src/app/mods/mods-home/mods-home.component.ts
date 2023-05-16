import { Component } from '@angular/core';

import { Question } from 'src/app/shared/interface';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;
  items: Question[] = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because it is.',
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like an orange.',
    },
    { title: 'What color is a banana?', content: 'A banana is yellow.' },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
