import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-moneyworks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './moneyworks.component.html',
  styleUrl: './moneyworks.component.scss',
})
export class MoneyworksComponent {
  @Input() typedepo: string;

  detailedData: DepositTypes[] = [
    {
      id: 1,
      deposit_type: 'ishonch',
      link: 'deposit-details',
      percentage: 13,
    },
    {
      id: 2,
      deposit_type: 'yuksalish',
      link: 'deposit-details',
      percentage: 13,
    },
    {
      id: 3,
      deposit_type: 'classic',
      link: 'deposit-details',
      percentage: 18,
    },
  ];
}

interface DepositTypes {
  id: number;
  deposit_type: string;
  link: string;
  percentage: number;
}
