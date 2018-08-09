import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQ_TOKEN } from 'src/app/common/jQuery.service';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[modalTrigger]' })
export class ModalTriggerDirective implements OnInit {

    @Input() modalTrigger: string;
    el: HTMLElement;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e =>
            this.toggleModal()
        );
    }

    toggleModal() {
        this.$(`#${this.modalTrigger}`).modal({});
    }
}
