import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "customUpperCase"
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string, additional: string) {
    return value.toUpperCase() + additional;
  }
}
