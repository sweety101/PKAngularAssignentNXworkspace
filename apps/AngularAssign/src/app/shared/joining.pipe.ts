import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Joining',
})
export class JoiningPipe implements PipeTransform {
  transform(value: string[]): string {
    const res = value.join(', ');
    return res;
  }
}
