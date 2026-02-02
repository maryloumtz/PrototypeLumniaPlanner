import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-home',
  imports: [BottomNav, RouterLink],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
