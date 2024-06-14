import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'lib-common-message',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './common-message.component.html',
  styleUrl: './common-message.component.css'
})
export class CommonMessageComponent {
  @Inject(MAT_DIALOG_DATA) public data: any;
}
