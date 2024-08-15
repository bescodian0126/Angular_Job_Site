import { Component } from '@angular/core';
import { LogoComponent } from "../../logo/logo.component";
import { trigger, state, style, transition, animate } from '@angular/animations';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-signup-select-role',
  standalone: true,
  imports: [LogoComponent,],
  templateUrl: './signup-select-role.component.html',
  styleUrls: ['./signup-select-role.component.css'],
  animations: [
    trigger('scaleAnimation', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(0.95)'
      })),
      transition('normal => pressed', animate(100)),
      transition('pressed => normal', animate(100))
    ])
  ]
})
export class SignupSelectRoleComponent {
  // state: string = 'clr';

  // mouseDown() {
  //   this.state = 'clr1';
  //   console.log('mouse down');
  // }

  // mouseUp() {
  //   this.state = 'clr';
  //   console.log('mouse up');
  // }
  clientState: string = 'normal';
  freelancerState: string = 'normal';
  applyButtonState: string = 'normal';
  currentRole: string = '';

  setClientState(isPressed: boolean){
    this.clientState = isPressed ? 'pressed' : 'normal';
  }

  setFreelancerState(isPressed: boolean){
    this.freelancerState = isPressed ? 'pressed' : 'normal';
  }

  setApplyButtonState(isPressed: boolean){
    this.applyButtonState = isPressed ? 'pressed': 'normal';
  }

  setCurrentState(clicked: string){
    if(clicked == 'client') this.currentRole = 'client';
    else if(clicked == 'freelancer') this.currentRole = 'freelancer';
    else this.currentRole = '';
  }
}
