import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  condition: string = 'ok';

  changer(event: any) {
    console.log(event);
  }
}
