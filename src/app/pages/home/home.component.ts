import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SigninComponent } from "../../components/auth/signin/signin.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SigninComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
