import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _showModal = new BehaviorSubject<string>('none');
  showItem$ = this._showModal.asObservable();
  private _modalView = new BehaviorSubject<string>('none');
  modalView$ = this._modalView.asObservable();

  constructor() { }

  public goToModalView(view: string) {
    if (view == null || view == 'none') {
      this._showModal.next('none');
      return;
    }
    this._showModal.next('block');
    this._modalView.next(view);
  }

  public toggle() {
    if (this._showModal.getValue() == 'none') {
      this._showModal.next('block');
    } else {
      this._showModal.next('none');
    }
  }

  public open() {
    this._showModal.next('block');
  }

  public close() {
    this._showModal.next('none');
  }

}