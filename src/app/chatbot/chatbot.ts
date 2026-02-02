import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BottomNav } from '../bottom-nav/bottom-nav';

@Component({
  selector: 'app-chatbot',
  imports: [BottomNav, FormsModule, CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  prompt = '';
  messages: { role: 'user' | 'bot'; text: string }[] = [
    { role: 'bot', text: "Bonjour! Dis-moi ce que tu veux organiser." },
  ];

  suggestions = [
    'Je manque de temps ce soir',
    'Aide-moi a planifier la semaine',
    'Propose un repas rapide',
  ];

  sendMessage(text?: string) {
    const value = (text ?? this.prompt).trim();
    if (!value) return;
    this.messages = [...this.messages, { role: 'user', text: value }];
    this.prompt = '';
    this.reply(value);
  }

  private reply(input: string) {
    const lower = input.toLowerCase();
    let text = "Ok, on s'en occupe ensemble.";

    if (lower.includes('temps') || lower.includes('soir')) {
      text = "On bloque 20 minutes apres 18:30 et je te propose une recette simple.";
    } else if (lower.includes('semaine')) {
      text = "Je peux te proposer 3 blocs focus et 2 sessions bien-etre.";
    } else if (lower.includes('repas') || lower.includes('nutrition')) {
      text = "Je te propose un bowl saumon + legumes, prep 15 min.";
    }

    this.messages = [...this.messages, { role: 'bot', text }];
  }
}
