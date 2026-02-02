import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-communaute',
  imports: [CommonModule, BottomNav],
  templateUrl: './communaute.html',
  styleUrl: './communaute.css',
})
export class Communaute {
  activeTab: 'covoit' | 'discussion' = 'covoit';

  setTab(tab: 'covoit' | 'discussion') {
    this.activeTab = tab;
  }
}
