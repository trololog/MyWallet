import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { Modal } from './modal.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {
    private modalSub: Subscription;
    private modalObj: Modal;

    constructor(private modalService: ModalService) {}

    ngOnInit() {
        this.modalSub = this.modalService.getModalSubjectListener()
        .subscribe((modalData: { modal: Modal}) => {
            this.modalObj = modalData.modal;
        });

    }

    ngOnDestroy() {
        this.modalSub.unsubscribe();
    }
}