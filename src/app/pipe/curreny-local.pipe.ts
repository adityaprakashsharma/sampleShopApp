import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyLocal'
})
export class CurrenyLocalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log("Value => ", value);
    console.log('Arguments => ', args[0])
    let convertedPrice:any = 0;
    if(args[0] === "inr"){
      convertedPrice = 75*parseFloat(value);
    }else {
      convertedPrice = value;
    }
    return convertedPrice;
  }

}
