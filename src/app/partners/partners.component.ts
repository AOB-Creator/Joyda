import { Component } from '@angular/core';
import { SponsorsComponent } from '../sponsors/sponsors.component';
@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [SponsorsComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {}
