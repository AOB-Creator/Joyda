import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  langstate: LangService = inject(LangService);
  title: string =
    this.langstate.selectedLang == 'uz'
      ? "Tez-tez so'raladigan savollar"
      : 'Frequently asked questions';

  faqs: FAQSstructure[] = [
    {
      id: 1,
      text_plain: 'SQB kartasiga kreditni qanday olish mumkin?',
      link: 'help#getMicroloan',
    },
    {
      id: 2,
      text_plain: 'Valyutani qanday konvertatsiya qilish mumkin?',
      link: 'help#conversion',
    },
    {
      id: 3,
      text_plain: "Identifikatsiyadan qanday o'tish kerak?",
      link: 'help#identification',
    },
    {
      id: 4,
      text_plain: "HumoPay kontaktsiz to'lovni qanday ishlatish mumkin?",
      link: 'help#humoPay',
    },
    {
      id: 5,
      text_plain: "Tovarlarni qanday qilib bo'lib to'lashga olish mumkin?",
      link: 'help#installment',
    },
  ];
}

interface FAQSstructure {
  id: number;
  text_plain: string;
  link: string;
}
