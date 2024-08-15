import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-li-item',
  standalone: true,
  imports: [],
  templateUrl: './li-item.component.html',
  styleUrl: './li-item.component.css'
})
export class LiItemComponent {
  @Input() itemData: string = "";
}
