import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matStackBar: MatSnackBar) { }

  public showSnackbar(message: string): void{
    this.matStackBar.open(message, undefined, {
      duration:3000
    });
  }
}
