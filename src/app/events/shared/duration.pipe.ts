import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration',
})
export class DurationPipe implements PipeTransform {

    transform(value: number): string {
        switch (value) {
            case 0: return 'Half Hour';
            case 1: return 'One Hour';
            case 2: return 'Half Day';
            case 4: return 'Full Day';
        }
    }
}
