import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-purchase-market',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './purchase-market.component.html',
  styleUrl: './purchase-market.component.scss',
})
export class PurchaseMarketComponent {
  titlepage: string = `Joyda xarid qilish uchun do’kon`;
  purchase_products: PurchaseProds[] = [
    {
      id: 1,
      image_url:
        'https://joyda.uz/assets/img/market-category-main-page/washing-machine.png',
      descript_text: ' Maishiy texnika ',
      link_url: '/marketplace/main',
    },
    {
      id: 2,
      image_url:
        'https://joyda.uz/assets/img/market-category-main-page/phones.png',
      descript_text: ' Telefonlar ',
      link_url: '/marketplace/main',
    },
    {
      id: 3,
      image_url:
        'https://joyda.uz/assets/img/market-category-main-page/headset.png',
      descript_text: 'Eshitish vositasi va audio texnika ',
      link_url: '/marketplace/main',
    },
    {
      id: 4,
      image_url:
        'https://joyda.uz/assets/img/market-category-main-page/sofa.png',
      descript_text: ' Mebel ',
      link_url: '/marketplace/main',
    },
    {
      id: 5,
      image_url:
        'https://joyda.uz/assets/img/market-category-main-page/watch.png',
      descript_text: ' Gadjetlar ',
      link_url: '/marketplace/main',
    },
  ];
}

interface PurchaseProds {
  id: number;
  image_url: string;
  descript_text: string;
  link_url: string;
}
