import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';


@Injectable({
  providedIn: 'root'
})
export class IdentifyUserService {
  entered: boolean = false;
  companyAccount: any= [];
  clientAccount: any= [];
  enteredUser: string = "";

  constructor() { 

  }
}
