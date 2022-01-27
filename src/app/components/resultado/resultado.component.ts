import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;
  constructor(private route: ActivatedRoute) { 
    this.resultado = '';
    this.interpretacion = ''
    this.bmi = Number(route.snapshot.paramMap.get('valor'))
   }

   getResultado():void{
     if(this.bmi >= 25){
       this.resultado = 'Exceso de peso';
       this.interpretacion = 'Tienes un peso corporal superior al normal. Intenta hacer más ejercicio.';
     }
     else if(this.bmi >= 18.25){
       this.resultado = 'normal';
       this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
     }
     else{
       this.resultado = 'Bajo peso';
       this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más.';
     }
   }
  ngOnInit(): void {
    this.getResultado();
  }

}
