import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanknavigateComponent } from '../banknavigate/banknavigate.component';

@Component({
  selector: 'app-bankservices',
  standalone: true,
  imports: [RouterOutlet, BanknavigateComponent],
  templateUrl: './bankservices.component.html',
  styleUrl: './bankservices.component.scss',
})
export class BankservicesComponent {}
