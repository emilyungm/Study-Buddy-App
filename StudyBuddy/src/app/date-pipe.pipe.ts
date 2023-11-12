import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date): String {
    let inputDate = new Date(value);
    return inputDate.toLocaleString();
  }

}
