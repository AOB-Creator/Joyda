import { Component } from '@angular/core';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [],
  templateUrl: './yetqazibberish.component.html',
  styleUrl: './yetqazibberish.component.scss',
})
export class YetqazibberishComponent {
  data_info: dataInfo[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/icons8-rocket.svg',
      title_card: `Uygacha etkazib berish`,
      description_card: '24 soat ichida bajariladi',
      redirect_link: '/',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/icons8-synchronize.svg',
      title_card: `Almashtirish uchun 30 kun`,
      description_card: `Zavoddagi nuqson bo'lsa`,
      redirect_link: '/',
    },
    {
      id: 3,
      image_url: 'https://joyda.uz/assets/img/icons8-card_security.svg',
      title_card: `Xavfsiz xaridlar`,
      description_card: 'Bank hisob-kitoblarning kafili vazifasini bajaradi',
      redirect_link: '/',
    },
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/icons8-headset.svg',
      title_card: `Qo'llab-quvvatlash `,
      description_card: `Bizga yozing va biz sizga qayta qo'ng'iroq qilamiz`,
      redirect_link: 'https://t.me/joydauz',
    },
  ];
}

interface dataInfo {
  id: number;
  image_url: string;
  title_card: string;
  description_card: string;
  redirect_link: string;
}
