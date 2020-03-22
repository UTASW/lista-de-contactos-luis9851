import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forNumber'
})
export class ForNumberPipe implements PipeTransform {

  transform(numero: any): any {
    let x=0;
    const arr=[];
    while(x<numero.length){
      arr.push(x);
      x=x+1;
    }
    return arr;
  }

}
