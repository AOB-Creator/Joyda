import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footinfo: FooterInfo[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/LogoJoyda2.svg',
      url_link: '/',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/Play.svg',
      url_link: 'https://play.google.com/store/apps/details?id=com.uzpsb.olam',
    },
    {
      id: 3,
      image_url: 'https://joyda.uz/assets/img/iStore.svg',
      url_link: 'https://apps.apple.com/uz/app/joyda/id1499606946',
    },
  ];

  socialNetworks: Socials[] = [
    {
      id: 1,
      image_url: 'https://joyda.uz/assets/img/facebook.svg',
      lisnk_url: 'https://www.facebook.com/joydauzb',
    },
    {
      id: 2,
      image_url: 'https://joyda.uz/assets/img/telegram.svg  ',
      lisnk_url: 'https://t.me/joydauz',
    },
    {
      id: 3,
      image_url: 'https://joyda.uz/assets/img/instagram.svg',
      lisnk_url: 'https://www.instagram.com/joydauz/',
    },
    {
      id: 4,
      image_url: 'https://joyda.uz/assets/img/youtube.svg',
      lisnk_url: 'https://www.youtube.com/channel/UCwJ6ucOj1uALTh24RQWsf8w',
    },
  ];
}

interface FooterInfo {
  id: number;
  image_url: string;
  url_link: string;
}

interface Socials {
  id: number;
  image_url: string;
  lisnk_url: string;
}
