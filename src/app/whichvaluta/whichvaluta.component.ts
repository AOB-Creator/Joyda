import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { MoneyworksComponent } from '../moneyworks/moneyworks.component';

@Component({
  selector: 'app-whichvaluta',
  standalone: true,
  imports: [ButtonModule, RadioButtonModule, FormsModule, MoneyworksComponent],
  templateUrl: './whichvaluta.component.html',
  styleUrl: './whichvaluta.component.scss',
})
export class WhichvalutaComponent {
  ingredient: any;
  threechoise: string = '';

  nochoise() {
    this.threechoise = '';
  }
}
