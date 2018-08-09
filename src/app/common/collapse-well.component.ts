import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'collapse-well',
    templateUrl: './collapse-well.component.html',
})

export class CollapseWellComponent implements OnInit {

    visible = true;

    constructor() { }

    ngOnInit() { }

    toggleCollapse() {
        this.visible = !this.visible;
    }
}
