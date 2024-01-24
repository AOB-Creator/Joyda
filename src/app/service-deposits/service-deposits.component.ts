import { Component } from '@angular/core';
import { WhichvalutaComponent } from '../whichvaluta/whichvaluta.component';

@Component({
  selector: 'app-service-deposits',
  standalone: true,
  imports: [WhichvalutaComponent],
  templateUrl: './service-deposits.component.html',
  styleUrl: './service-deposits.component.scss',
})
export class ServiceDepositsComponent {}
