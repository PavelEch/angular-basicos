import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contadorComponent } from './contador/contador.componente';

@NgModule({
    declarations:[
        contadorComponent
    ],
    exports:[
        contadorComponent
    ],
    imports:[
        CommonModule
    ]
})
export class contadorModule { };

//Por lo general van módulos en la sección de imports