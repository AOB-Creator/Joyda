import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InitialComponent } from './initial/initial.component';
import { PartnersComponent } from './partners/partners.component';
import { HelppageComponent } from './helppage/helppage.component';
import { BankservicecardsComponent } from './bankservicecards/bankservicecards.component';
import { ServiceDepositsComponent } from './service-deposits/service-deposits.component';
import { ServiceLoansComponent } from './service-loans/service-loans.component';
import { ServicePaymentsComponent } from './service-payments/service-payments.component';
import { BankservicesComponent } from './bankservices/bankservices.component';
import { DepositDetailsComponent } from './deposit-details/deposit-details.component';
export const routes: Routes = [
  {
    path: '',
    component: InitialComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'help',
    component: HelppageComponent,
  },
  {
    path: 'bank-services',
    component: BankservicesComponent,
    children: [
      { path: 'payments', component: ServicePaymentsComponent },
      { path: 'cards', component: BankservicecardsComponent },
      { path: 'loans', component: ServiceLoansComponent },
      { path: 'deposits', component: ServiceDepositsComponent },
      {
        path: 'deposit-details',
        component: DepositDetailsComponent,
      },
    ],
  },
  {
    path: 'marketplace/main',
    component: AboutComponent,
  },
  {
    path: '**',
    // redirectTo: '',
    component: NotfoundComponent,
  },
];
