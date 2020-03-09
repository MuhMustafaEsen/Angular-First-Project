import { Component } from '@angular/core';

@Component({
  selector: 'calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  public sayiBir : number;
  public sayiIki : number;
  public sonuc : number;

  public Toplama()
  {
    this.sonuc = this.sayiBir + this.sayiIki;
  }
  public Cikarma()
  {
    this.sonuc = this.sayiBir - this.sayiIki;
  }
  public Carpma()
  {
    this.sonuc = this.sayiBir * this.sayiIki;
  }
} 
