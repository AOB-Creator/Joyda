import { Component, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LangService } from '../lang.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss',
})
export class SponsorsComponent {
  langServe: LangService = inject(LangService);
  title: string =
    this.langServe.selectedLang == 'uz'
      ? 'Bizning hamkorlarimiz'
      : 'Наши партнёры';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplaySpeed: 400,
    autoplay: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };

  OurPartners: OurPartners[] = [
    {
      id: 1,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/goodbuy.png?v=1622113878',
    },
    {
      id: 2,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/indenim,png?v=1622108147',
    },
    {
      id: 3,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/saroymarket.png?v=1622105427',
    },
    {
      id: 4,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/store.png?v=1621398450',
    },
    {
      id: 5,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/datech.png?v=1621832345',
    },
    {
      id: 6,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/asteroid.png?v=1621588866',
    },
    {
      id: 7,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/ideal.png?v=1622092240',
    },
    {
      id: 8,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/moto,png?v=1621863678',
    },
    {
      id: 9,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/homecreditt.png?v=1622007686',
    },
    {
      id: 10,
      image_url:
        'https://market-mobile.sqb.uz/uploads/logo/allmobile.png?v=1622092240',
    },
  ];
}

interface OurPartners {
  id: number;
  image_url: string;
}
