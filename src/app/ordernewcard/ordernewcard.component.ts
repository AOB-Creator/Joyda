import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ordernewcard',
  standalone: true,
  imports: [],
  templateUrl: './ordernewcard.component.html',
  styleUrl: './ordernewcard.component.scss',
})
export class OrdernewcardComponent {
  langinjected: LangService = inject(LangService);
  checkeditem: string = 'item1';
  currentimage: string = 'https://joyda.uz/assets/img/tab-video-photo.png';

  myobserver = new Observable((observ) => {
    setTimeout(() => {
      observ.next('https://joyda.uz/assets/img/tab-video-photo.png');
    }, 1000);
  });

  title: string =
    this.langinjected.selectedLang == 'uz'
      ? 'Kartani hoziroq buyurtma qiling'
      : '';

  selectProducts: selectUsage[] = [
    {
      id: 1,
      textplate: 'Joyda mobil ilovasini yuklab oling',
      image_url: 'https://joyda.uz/assets/img/tab-video-photo.png',
    },
    {
      id: 2,
      textplate: "O’z bank kartangizni qo'shing",
      image_url: 'https://joyda.uz/assets/img/tab-video-photo.png',
    },
    {
      id: 3,
      textplate:
        " Bank kartalari bo'limida kartani tanlang, uni savatga qo'shing, etkazib berish manzilini ko'rsating *",
      image_url: 'https://joyda.uz/assets/img/tab-video-photo.png',
    },
    {
      id: 4,
      textplate: 'Karta har qanday joyga etkazib beriladi',
      image_url: 'https://joyda.uz/assets/img/tab-video-photo.png',
    },
    {
      id: 5,
      textplate: "Kartani faollashtiring, to'ldiring va sarflashni boshlang",
      image_url: 'https://joyda.uz/assets/img/tab-video-photo.png',
    },
  ];

  checkedType(val: any) {
    this.checkeditem = 'item' + val;
    this.myobserver.subscribe((val: any) => {
      this.currentimage = val;
    });
  }
}

interface selectUsage {
  id: number;
  textplate: string;
  image_url: string;
}
