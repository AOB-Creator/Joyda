import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangselectorComponent } from '../langselector/langselector.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LangselectorComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {}
