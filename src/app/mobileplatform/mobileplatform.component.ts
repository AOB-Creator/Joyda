import { Component, inject } from '@angular/core';
import { LangService } from '../lang.service';
@Component({
  selector: 'app-mobileplatform',
  standalone: true,
  imports: [],
  templateUrl: './mobileplatform.component.html',
  styleUrl: './mobileplatform.component.scss',
})
export class MobileplatformComponent {
  languageServe: LangService = inject(LangService);
  data_image: ImageJoyda[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/Play.svg',
      link_url: 'https://play.google.com/store/apps/details?id=com.uzpsb.olam',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/iStore.svg',
      link_url: 'https://play.google.com/store/apps/details?id=com.uzpsb.olam',
    },
  ];
  title: string =
    this.languageServe.selectedLang == 'ru'
      ? 'Мобильное приложение JOYDA'
      : 'Joyda mobil ilovasi ';
  ptext: string = '';
}

interface ImageJoyda {
  id: number;
  image_url: string;
  link_url: string;
}
