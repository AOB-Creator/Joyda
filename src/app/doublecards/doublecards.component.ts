import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-doublecards',
  standalone: true,
  imports: [],
  templateUrl: './doublecards.component.html',
  styleUrl: './doublecards.component.scss',
})
export class DoublecardsComponent {
  state: string = 'first';
  newdata: listContains[] = [];
  langinjected: LangService = inject(LangService);

  firstbtn: string =
    this.langinjected.selectedLang == 'uz'
      ? ' JOYDA ilovasida kartaning afzalliklari '
      : '';

  secondbtn: string =
    this.langinjected.selectedLang == 'uz'
      ? '  Joyda ilovasida karta bilan qanday operatsiyalarni amalga oshirish mumkin  '
      : '';

  changeCard1(event: any) {
    this.state = 'first';
    this.myObservers.subscribe((val: any) => {
      this.newdata.push(val);
    });
  }
  changeCard2(event: any) {
    this.state = 'second';
  }

  myObservers = new Observable((observe) => {
    this.fisrtList.map((item, ind) => {
      setTimeout(() => {
        observe.next(item.text);
      }, 300 * ind);
    });
  });

  fisrtList: listContains[] = [
    {
      id: 1,
      text: `Saytda yoki Joyda mobil ilovasi orqali kartaga buyurtma bering`,
    },
    {
      id: 2,
      text: `Yetkazib beramiz va qo’lingizga topshiramiz`,
    },
    {
      id: 3,
      text: `O’z dizayningiz bilan kartaning individualligini ta'kidlang`,
    },
    {
      id: 4,
      text: `Pul o'tkazmalari uchun maqbul komissiya`,
    },
  ];
  secondList: listContains[] = [
    {
      id: 1,
      text: `Pulni xavfsiz saqlash va boshqarish`,
    },
    {
      id: 2,
      text: `Omonatlarni ochish va to'ldirish`,
    },
    {
      id: 3,
      text: `Yuridik va jismoniy shaxsning istalgan hisob raqamiga kartadan pul o'tkazish`,
    },
    {
      id: 4,
      text: `Telefoningizdagi kontakt raqamiga tezkor pul o'tkazmasini yuborish`,
    },
    {
      id: 5,
      text: `Bankka bormasdan, garovsiz va kafilliksiz kredit olish`,
    },
    {
      id: 6,
      text: `Jarimalar, soliqlar va davlat xizmatlari haqini joyida, mobil ilova orqali to‘lash`,
    },
    {
      id: 7,
      text: `Valyuta sotib olish va sotish - bir marta bosib onlayn konvertatsiya qilish`,
    },
    {
      id: 7,
      text: `QIWI, Webmoney, Yandex Money elektron hamyonlarini to'ldirish`,
    },
    {
      id: 7,
      text: `Xayriya ishlarini qilish`,
    },
    {
      id: 7,
      text: `Istalgan mahsulotni oldindan to'lovsiz bo'lib-bo'lib sotib olish`,
    },
  ];
}

interface listContains {
  id: number;
  text: string;
}
