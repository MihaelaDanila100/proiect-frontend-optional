import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendImagePathService {

  private selectedAccount!: string;

  constructor() { }

  setSelectedAccount(account:string){
    this.selectedAccount = account;
  }

  getSelectedAccount(){
    return this.selectedAccount;
  }
}
