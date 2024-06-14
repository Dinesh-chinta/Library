import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonMessageComponent } from '../components/common-message/common-message.component';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly dialog = inject(MatDialog);

  constructor() { }

  commonMsg(data: any) {
    this.dialog.open(CommonMessageComponent, {
      data: {
        message: data.message,
        type: data.type
      },
      width: '250px'
    })
  }

}
