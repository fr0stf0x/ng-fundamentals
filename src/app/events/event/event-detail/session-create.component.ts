import { ISession } from '../../shared/event.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'create-session',
    templateUrl: './session-create.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
        .error input, .error select, .error textarea {
            background-color: #E3C3C5;
        }
        .error ::-webkit-input-placeholder { color: #999};
        .error ::-moz-placeholder { color: #999};
        .error :-moz-placeholder {color : #999};
        .error :-ms-input-placeholder {color: #999};
    `]
})

export class SessionCreateComponent implements OnInit {

    @Output() createNewSession = new EventEmitter<ISession>();
    @Output() cancelAdding = new EventEmitter();

    newFormGroup: FormGroup;

    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    constructor() { }

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(400),
            this.restrictedWords(['foo', 'bar']),
        ]);
        this.newFormGroup = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValues) {
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: [],
        };
        this.createNewSession.emit(session);
    }

    cancel() {
        this.cancelAdding.emit();
    }

    private restrictedWords(words: string[]) {
        return (control: FormControl): { [key: string]: any } => {
            const invalidWords = words
                .map(word => control.value.includes(word) ? word : null)
                .filter(word => word != null);
            return invalidWords && invalidWords.length > 0 ?
                { restrictedWords: invalidWords.join(', ') } : null;
        };
    }
}
