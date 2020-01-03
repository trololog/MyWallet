import { Modal } from './modal.model';
import { Subject } from 'rxjs';

export class ModalService {
    private modalObj: Modal;
    public ModalSubject = new Subject<{ modal: Modal }>();

    openModal(modal: Modal) {
        this.modalObj = modal;
        this.ModalSubject.next({modal: this.modalObj});
    }

    closeModal(modal: Modal) {
        this.modalObj = null;
        this.ModalSubject.next({modal: this.modalObj});
    }

    getModalSubjectListener() {
        return this.ModalSubject.asObservable();
    }
}