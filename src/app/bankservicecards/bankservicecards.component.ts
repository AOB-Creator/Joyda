import { Component } from '@angular/core';
import { MainscardComponent } from '../mainscard/mainscard.component';
import { OrdernewcardComponent } from '../ordernewcard/ordernewcard.component';
import { DesigncardsComponent } from '../designcards/designcards.component';
import { SelectCardComponent } from '../select-card/select-card.component';
import { DoublecardsComponent } from '../doublecards/doublecards.component';
import { FaqsComponent } from '../faqs/faqs.component';
// import { BanknavigateComponent } from '../banknavigate/banknavigate.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bankservicecards',
  standalone: true,
  imports: [
    MainscardComponent,
    OrdernewcardComponent,
    DesigncardsComponent,
    SelectCardComponent,
    DoublecardsComponent,
    FaqsComponent,
  ],
  templateUrl: './bankservicecards.component.html',
  styleUrl: './bankservicecards.component.scss',
})
export class BankservicecardsComponent {}
