import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MyDataService } from '../my-data.service';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-test-compo',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './test-compo.component.html',
  styleUrl: './test-compo.component.scss',
})
export class TestCompoComponent {
  texture: string = 'ok';
  inputText: string = 'welcome';
  thisdata: any[] = [];
  text: string = 'as';

  filthy() {
    for (let i = 0; i < 10000; i++) {
      this.thisdata.push(i);
    }
  }

  @Input() bookers: any;

  constructor(private mydataserv: MyDataService) {
    this.thisdata = mydataserv.getdata();
    console.log('Constructor Works');
    this.filthy();
  }
}
