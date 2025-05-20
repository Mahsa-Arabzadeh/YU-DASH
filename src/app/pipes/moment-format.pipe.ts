import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'momentFormat',
})
export class MomentFormatPipe implements PipeTransform {
  transform(value: string): any {
    const dateFormat = moment().format('MMM Do YY');
    return dateFormat;
  }
}
