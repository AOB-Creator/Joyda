import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-bestoffers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bestoffers.component.html',
  styleUrl: './bestoffers.component.scss',
})
export class BestoffersComponent {
  langService: LangService = inject(LangService);
  title: string =
    this.langService.selectedLang == 'uz'
      ? 'Siz uchun eng yaxshi takliflar'
      : 'Лучшие предложения для тебя';

  ProductCards: bestOffers[] = [
    {
      id: 1,
      title: ['Omonatlar', ''],
      description: [" Daromadingizni to'ldiring va ko'paytiring", ''],
      image_url: 'https://joyda.uz/flower.37ea1932b0cd0d5c6e57.png',
      btns: ['Batafsil', 'Omonat rasmiylashtirish'],
      links: ['/bank-services/deposits', ''],
    },
    {
      id: 2,
      title: [' Master Card Gold '],
      description: ['Barcha holatlar uchun premium karta', ''],
      image_url: 'https://joyda.uz/master-card.55a16ae4cce65958f746.png',
      btns: ['Batafsil', 'Kartaga buyurtma berish'],
      links: ['/bank-services/deposits', ''],
    },
    {
      id: 3,
      title: ['Kontaktsiz toʻlov HUMO Pay'],
      description: [
        "Xaridlar va xizmatlar uchun faqat smartfoningiz orqali to'lang ",
        '',
      ],
      image_url: 'https://joyda.uz/humo-pay.1c4733bf7f3f356131f7.png',
      btns: ['Batafsil', 'Omonat rasmiylashtirish'],
      links: ['/bank-services/deposits', ''],
    },
  ];
}

interface bestOffers {
  id: number;
  title: string[];
  description: string[];
  image_url: string;
  btns: string[];
  links: string[];
}
