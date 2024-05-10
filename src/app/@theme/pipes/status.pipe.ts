import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxStatus' })
export class StatusPipe implements PipeTransform {

  transform(input: string): string {
    return input === 'true'
      ? 'ACTIVE'
      : 'INACTIVE';
  }
}
