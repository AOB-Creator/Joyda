import { Component } from '@angular/core';
import { MainslickComponent } from '../mainslick/mainslick.component';
import { BestoffersComponent } from '../bestoffers/bestoffers.component';
import { SixcardsComponent } from '../sixcards/sixcards.component';
import { YetqazibberishComponent } from '../yetqazibberish/yetqazibberish.component';
import { PurchaseMarketComponent } from '../purchase-market/purchase-market.component';
import { MobileplatformComponent } from '../mobileplatform/mobileplatform.component';

@Component({
  selector: 'app-initial',
  standalone: true,
  imports: [
    MainslickComponent,
    BestoffersComponent,
    SixcardsComponent,
    YetqazibberishComponent,
    PurchaseMarketComponent,
    MobileplatformComponent,
  ],
  templateUrl: './initial.component.html',
  styleUrl: './initial.component.scss',
})
export class InitialComponent {}
