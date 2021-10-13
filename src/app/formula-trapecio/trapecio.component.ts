export class TrapecioComponent {
  b = 0;
  B = 0;
  h = 0;
  area = 0;

  calarea(){
  this.area=((this.B+this.b)*this.h)/2;
  }
}