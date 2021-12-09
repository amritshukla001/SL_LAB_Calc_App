import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcApp';
  answer = 0;
  prime = '';
  Add(first: string, second: string) {
    var fele = parseInt(first);
    var sele = parseInt(second);
    this.answer = fele + sele;
  }
  Sub(first: string, second: string) {
    var fele = parseInt(first);
    var sele = parseInt(second);
    this.answer = fele - sele;
  }
  Multiply(first: string, second: string) {
    var fele = parseInt(first);
    var sele = parseInt(second);
    this.answer = fele * sele;
  }
  Divide(first: string, second: string) {
    var fele = parseInt(first);
    var sele = parseInt(second);
    this.answer = fele / sele;
  }
  Fact(ele: string) {
    var num = parseInt(ele);
    var res = 1;
    for (let i = 1; i <= num; i++) {
      res = res * i;
    }
    this.answer = res;
  }
  Prime(ele: string) {
    var num = parseInt(ele);
    if (num == 1) 
      this.prime = 'Not a prime number';
    else {
      var tmp = 0;
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          tmp += 1;
        }
      }
      if (tmp > 0) 
        this.prime = 'Not a prime number';
      else 
       this.prime = 'A prime number';
    }
  }
}
