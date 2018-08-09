import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    templateUrl: './upvote.component.html',
})

export class UpvoteComponent implements OnInit {

    @Input() voted: boolean;
    @Input() count: number;
    @Output() vote = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.vote.emit({});
    }

}
