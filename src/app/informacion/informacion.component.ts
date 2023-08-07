import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
    constructor(){}
    ngOninit(): void{}
    deducibles=['Vivienda','Salud','Educacion'];
    informacion(deducible:string)
    {
     alert('Esta es información adicional sobre ' + deducible);
    }
    borrarDeducible(deducible: string)
    {
      for(let i=0;i<this.deducibles.length;i++)
      {
        if(deducible==this.deducibles[i])
        {
          this.deducibles.splice(i,1);
        }
      }
    }
}



