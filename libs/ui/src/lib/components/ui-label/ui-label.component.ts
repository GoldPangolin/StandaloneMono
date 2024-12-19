import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace-ui-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-label.component.html',
  styleUrl: './ui-label.component.css',
})
export class UiLabelComponent {
  constructor() {
    for(let i = 0 ; i < 1000; i++) {
    }
  }
}
