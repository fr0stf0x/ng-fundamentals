import { Validators, NG_VALIDATORS, FormGroup } from '@angular/forms';
import { Directive, } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[validateLocation]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LocationValidator,
        multi: true,
    }],
})
// tslint:disable-next-line:directive-class-suffix
export class LocationValidator implements Validators {

    constructor() { }

    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls.address;
        const cityControl = formGroup.controls.city;
        const countryControl = formGroup.controls.country;
        const onlineUrlControl = (<FormGroup>formGroup.root).controls.onlineUrl;

        if ((addressControl && addressControl.value
            && cityControl && cityControl.value
            && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        return {
            validateLocation: false
        };
    }
}
