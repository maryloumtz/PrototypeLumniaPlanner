import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

type AgendaView = 'today' | 'days' | 'months';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  view: AgendaView = 'today';
  selectedDay = 24;
  currentMonthOffset = 0;
  monthLabel = '';
  todayLabel = '';
  todayValue = 0;
  @ViewChild('daySnap', { static: false }) daySnap?: ElementRef<HTMLDivElement>;
  isAddOpen = false;
  isMascotOpen = true;
  newEventTitle = '';
  newEventDescription = '';
  newEventType = '';
  newEventStartDate = '';
  newEventStartTime = '';
  newEventEndDate = '';
  newEventEndTime = '';
  newEventRecurrence = 'none';

  dayPills = [
    { label: 'LUN', value: 24 },
    { label: 'MAR', value: 26 },
    { label: 'MER', value: 27 },
    { label: 'JEU', value: 28 },
    { label: 'VEN', value: 29 },
    { label: 'SAM', value: 30 },
    { label: 'DIM', value: 31 },
  ];

  monthDays = [
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    null,
    null,
  ];

  monthDots: Record<number, number> = {
    2: 1,
    6: 2,
    10: 3,
    12: 1,
    18: 2,
    24: 3,
    29: 1,
  };

  constructor() {
    const now = new Date();
    const labels = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
    this.todayLabel = labels[now.getDay()];
    this.todayValue = now.getDate();
    this.buildMonth();
  }

  getDayLabel(value: number) {
    return this.dayPills.find((day) => day.value === value)?.label ?? '';
  }

  onDayScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (!target) return;
    const panelWidth = target.clientWidth;
    if (!panelWidth) return;
    const index = Math.round(target.scrollLeft / panelWidth);
    const next = this.dayPills[index];
    if (next) {
      this.selectedDay = next.value;
    }
  }

  scrollToDay(value: number) {
    this.setSelectedDay(value);
    const index = this.dayPills.findIndex((day) => day.value === value);
    if (index < 0 || !this.daySnap?.nativeElement) return;
    const container = this.daySnap.nativeElement;
    const panelWidth = container.clientWidth;
    container.scrollTo({ left: panelWidth * index, behavior: 'smooth' });
  }

  setView(next: AgendaView) {
    this.view = next;
  }

  setSelectedDay(day: number | null) {
    if (day) {
      this.selectedDay = day;
    }
  }

  openAdd() {
    this.isAddOpen = true;
  }

  closeAdd() {
    this.isAddOpen = false;
  }

  closeMascot() {
    this.isMascotOpen = false;
  }

  openChatbot() {
    // Placeholder for future chatbot integration.
  }

  submitAdd() {
    this.closeAdd();
    this.newEventTitle = '';
    this.newEventDescription = '';
    this.newEventType = '';
    this.newEventStartDate = '';
    this.newEventStartTime = '';
    this.newEventEndDate = '';
    this.newEventEndTime = '';
    this.newEventRecurrence = 'none';
  }

  setMonth(delta: number) {
    this.currentMonthOffset += delta;
    this.buildMonth();
  }

  private buildMonth() {
    const base = new Date();
    const monthDate = new Date(base.getFullYear(), base.getMonth() + this.currentMonthOffset, 1);
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weekStart = (firstDay.getDay() + 6) % 7;

    const days: Array<number | null> = [];
    for (let i = 0; i < weekStart; i += 1) days.push(null);
    for (let d = 1; d <= daysInMonth; d += 1) days.push(d);
    while (days.length % 7 !== 0) days.push(null);

    this.monthDays = days;
    this.monthLabel = new Intl.DateTimeFormat('fr-FR', {
      month: 'long',
      year: 'numeric',
    }).format(monthDate);

    if (this.selectedDay > daysInMonth) {
      this.selectedDay = 1;
    }
  }
}
