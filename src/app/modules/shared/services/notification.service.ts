import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { ConfirmDialog } from '../interfaces/confirmDialog.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private DEFAULT_ERROR_MESSAGE: string = 'Am întâmpinat o eroare. Te rog să contactezi echipa support.';
  private defaultConfirmData: ConfirmDialog = {
    title: '',
    message: 'Doreşti să confirmi această acţiune?',
  };

  constructor() { }

  public successNotification(message: string, title: string = ''): Promise<SweetAlertResult<Awaited<any>>> {
    return Swal.fire(title, message, 'success');
  }

  public warningNotification(message: string, title: string = '') {
    return Swal.fire(title, message, 'warning')
  }

  public errorNotification(error) {
    let text = '',
      title = 'Ooops...';

    if(error.errors) {
      error.errors.map((item, index) => {
        text += `<p> <span>${index + 1}.</span> ${Object.values(item)[0]} </p>`;
      });
      title = 'Validation error';
    }

    if(!error.errors) {
      text = this.DEFAULT_ERROR_MESSAGE;
    }

    return Swal.fire({
      customClass: {
        container: 'swal-container',
        popup: 'swal-popup',
        title: 'swal-title'
      },
      title: title,
      html: `<div class="swal-validation"> ${text} </div>`,
      position: 'center',
      background: 'white',
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      showCancelButton: false,
      timer: 7000
    });
  };

  public confirmDialog(confirmData?: ConfirmDialog): Promise<boolean> {
    return Swal.fire({
      title: confirmData.title ? confirmData.title : this.defaultConfirmData.title,
      text: confirmData.message ? confirmData.message : this.defaultConfirmData.message,
      showCancelButton: true,
      confirmButtonColor: '#',
      cancelButtonColor: '#',
      confirmButtonText: 'Confirmă',
      cancelButtonText: 'Anulează'
    }).then((result) => {
      return result.isConfirmed;
    })
  };

}
