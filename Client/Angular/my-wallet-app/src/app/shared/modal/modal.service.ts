import { Subject } from 'rxjs';
import { Injectable, ComponentFactoryResolver, Injector, Inject, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalComponent } from './modal.component';
export type Content<T> = Type<T>;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

    constructor(private resolver: ComponentFactoryResolver,
                private injector: Injector,
                @Inject(DOCUMENT) private document: Document) {}

    public ModalSubject = new Subject<{ isOpen: boolean }>();

    openModal<T>(component: Content<T>) {
        const factory = this.resolver.resolveComponentFactory(ModalComponent);
        const ngContent = this.resolveNgContent(component);
        const componentRef = factory.create(this.injector, ngContent);

        componentRef.hostView.detectChanges();

        const { nativeElement } = componentRef.location;

        console.log(this.document.body);

        this.document.body.appendChild(nativeElement);

        this.ModalSubject.next({isOpen: true });
    }

    closeModal() {
        this.ModalSubject.next({isOpen: false});
    }

    getModalSubjectListener() {
        return this.ModalSubject.asObservable();
    }

    resolveNgContent<T>(content: Content<T>) {
      const factory = this.resolver.resolveComponentFactory(content);
      const componentRef = factory.create(this.injector);

      return [[componentRef.location.nativeElement]];
    }
}
