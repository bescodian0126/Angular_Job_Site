import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupDataService {
  constructor() { }

  private selectedRole = new Subject<string>();
  data$ = this.selectedRole.asObservable();

  sendRole(data: string){
    this.selectedRole.next(data);
  }
}
