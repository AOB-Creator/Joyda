import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sixcards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sixcards.component.html',
  styleUrl: './sixcards.component.scss',
})
export class SixcardsComponent {
  langstate: LangService = inject(LangService);

  datacards: SixCards[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/sqbPyInn.png',
      titlecard: [" ️JSHSHIR (PINFL) bo'yicha", ''],
      description_card: [`kredit so'ndirish `, ''],
      link_url: '/individuals/find-loans',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/services/1.png',
      titlecard: ['Omonatlar', ''],
      description_card: [`Pulni o'z foydangiz uchun ishlating !`, ''],
      link_url: '/bank-services/deposits',
    },
    {
      id: 3,
      image_url: 'https://joyda.uz/assets/img/services/2.png',
      titlecard: ['Mening bankim', ''],
      description_card: [`Sizning bakingiz doimo qo'lingizda`, ''],
      link_url: '/my-bank',
    },
    {
      id: 4,
      image_url: 'https://joyda.uz/assets/img/services/3.png',
      titlecard: [`To'lovlar`, ''],
      description_card: [`Komissiasiz bir onlik to'lovlar`, ''],
      link_url: '/bank-services/payments',
    },
    {
      id: 5,
      image_url: 'https://joyda.uz/assets/img/services/4.png',
      titlecard: [`Pul o'tkazmalari`, ''],
      description_card: [`Bankka kelishsiz pul o'tkazmalarini oling!`, ''],
      link_url: '/my-bank/transfer',
    },
    {
      id: 6,
      image_url: 'https://joyda.uz/assets/img/services/5.png',
      titlecard: [`Har qanday maqsad uchun kredit`, ''],
      description_card: [`Hozir sotib oling - keyinroq tolang!`, ''],
      link_url: '/bank-services/loans',
    },
  ];
}

interface SixCards {
  id: number;
  image_url: string;
  titlecard: string[];
  description_card: string[];
  link_url: string;
}
