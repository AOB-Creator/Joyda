import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainscard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainscard.component.html',
  styleUrl: './mainscard.component.scss',
})
export class MainscardComponent {}
