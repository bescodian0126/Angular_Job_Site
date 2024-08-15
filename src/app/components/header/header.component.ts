import { Component } from '@angular/core';
import { LogoComponent } from "../utils/logo/logo.component";
import { LiItemComponent } from "../utils/menu-components/li-item/li-item.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, LiItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public itemText: string[] = ['Find talent', 'Find work', 'Why Upwork', `What's new`, 'Enterprise'];
}
