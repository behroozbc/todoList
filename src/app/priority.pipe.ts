import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: any): string {
    switch (value) {
      case "0":
        return 'زیاد';
        break;
      case "1":
        return 'متوسط';
      case 2:
        return 'کم';
      default:
        break;
    }
  }

}
