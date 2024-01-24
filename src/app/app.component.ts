import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { InitialComponent } from './initial/initial.component';
import { BankservicecardsComponent } from './bankservicecards/bankservicecards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    FormsModule,

    InitialComponent,
    BankservicecardsComponent,
    SponsorsComponent,
    FooterComponent,
    NavigationComponent,
    AboutComponent,
    TestCompoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'joyda';
}
