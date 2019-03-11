import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  display = 'none';
  modalView: string = 'login';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.showItem$.subscribe(showModal => {
      console.log(showModal);
      this.display = showModal;
    });
    this.modalService.modalView$.subscribe(modalView => {
      console.log(modalView)
      this.modalView = modalView;
    });
  }

  closeModal(){
    this.modalService.close();
  }

}
