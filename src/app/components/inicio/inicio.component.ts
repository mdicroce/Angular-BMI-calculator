import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad: number = 25;
  peso: number = 60;
  altura: number = 170;
  sexo: string = 'm';

  cambiarSexo(sexo: string):void{
    this.sexo = sexo
  }
   
  cambiarAltura(e: any):void{
    e.preventDefault();
    this.altura = Number(e.target.value)
  }
  calcularBMI(){
    const BMI = (this.peso / Math.pow(this.altura/100, 2)).toFixed(1);
    this.router.navigate(['/resultado',BMI])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
