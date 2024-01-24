import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-banknavigate',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './banknavigate.component.html',
  styleUrl: './banknavigate.component.scss',
})
export class BanknavigateComponent {}
