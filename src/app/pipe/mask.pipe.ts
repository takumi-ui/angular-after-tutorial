import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    console.log(args);
    value = value.replace('A', args[0]);
    return value;
  }

}
