import { Component } from '@angular/core';
import { SecondComponent } from '../second/components/second/second.component';
import { SecondModule } from '../second/second.module';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  standalone: true,
  imports: [SecondModule]
})
export class ThirdComponent {

}
