import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styles: [`
        .modal-body {
            height: 250px;
            overflow-y: scroll;
        }
    `],
})

export class SimpleModalComponent implements OnInit {

    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;

    @ViewChild('modalcontainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    ngOnInit() { }

    closeModal() {
        if (this.closeOnBodyClick === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
