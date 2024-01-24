import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-helppage',
  standalone: true,
  imports: [],
  templateUrl: './helppage.component.html',
  styleUrl: './helppage.component.scss',
})
export class HelppageComponent {
  langstate: LangService = inject(LangService);
  title: string = this.langstate.selectedLang == 'uz' ? 'Yordam' : 'Yordam';

  helpItems: Helppage[] = [
    {
      id: 1,
      title: 'SQB kartasiga kreditni qanday olish mumkin?',
      link: 'https://www.youtube.com/embed/2wlW4cSO6VU"',
    },
    {
      id: 2,
      title: 'Valyutani qanday konvertatsiya qilish mumkin?',
      link: 'https://www.youtube.com/embed/yEpBap5yhJg',
    },
    {
      id: 3,
      title: "Identifikatsiyadan qanday o'tish kerak?",
      link: 'https://www.youtube.com/embed/uJ0FrluVgxs',
    },
    {
      id: 4,
      title: "HumoPay kontaktsiz to'lovni qanday ishlatish mumkin?",
      link: 'https://www.youtube.com/embed/zteXbQDCWbw',
    },
    {
      id: 5,
      title: "Tovarlarni qanday qilib bo'lib to'lashga olish mumkin?",
      link: 'https://www.youtube.com/embed/bh6aS1xjggU',
    },
  ];
}

interface Helppage {
  id: number;
  title: string;
  link: string;
}
