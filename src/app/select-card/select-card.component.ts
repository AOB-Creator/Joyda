import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { NgTiltModule } from '@geometricpanda/angular-tilt';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-card',
  standalone: true,
  imports: [NgTiltModule, RouterLink],
  templateUrl: './select-card.component.html',
  styleUrl: './select-card.component.scss',
})
export class SelectCardComponent {
  langserve: LangService = inject(LangService);

  title: string =
    this.langserve.selectedLang == 'uz'
      ? 'Kartangizni tanlang'
      : 'Kartangizni tanlang';

  datacards: SelectCards[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/cards/platinium.png',
      top_text: 'VISA PLATINUM',
      descr_text: 'Premium xizmatning maxsus imtiyozlari',
      price: 'Bepul',
      url_info: 'https://www.sqb.uz/individuals/bank-cards/visa-platinum-ru/',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/cards/uzcard.jpg',
      top_text: 'UZCARD',
      descr_text: 'Har kun uchun universal karta',
      price: "50 000 so'm",
      url_info: 'https://www.sqb.uz/individuals/bank-cards/visa-platinum-ru/',
    },
    {
      id: 3,
      image_url: 'https://joyda.uz/assets/img/cards/humo.png',
      top_text: 'HUMO',
      descr_text: "Zamonaviy kontaktsiz to'lov usullari",
      price: "30 000 so'm",
      url_info: 'https://www.sqb.uz/individuals/bank-cards/visa-platinum-ru/',
    },
  ];
}

interface SelectCards {
  id: number;
  image_url: string;
  top_text: string;
  descr_text: string;
  price: string;
  url_info: string;
}
