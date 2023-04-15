import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherApp';

  constructor(private dialog: MatDialog){}

  openDialog(){
    this.dialog.open(MainContentComponent)
  }
}
