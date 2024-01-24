import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-langselector',
  standalone: true,
  imports: [],
  templateUrl: './langselector.component.html',
  styleUrl: './langselector.component.scss',
})
export class LangselectorComponent {
  langselector = 'uz';
  showItem: boolean = true;
  @ViewChild('referen') checkboxer: ElementRef;

  showSelector() {
    this.showItem = !this.showItem;
    console.log(this.showItem);
  }

  changeRadio1() {
    this.langselector = 'uz';
  }

  changeRadio2() {
    this.langselector = 'ru';
  }
}
