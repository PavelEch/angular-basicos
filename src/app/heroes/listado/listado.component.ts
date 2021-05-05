import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Ironman", "Hulk",
    "Thor", "Capitán América"];
  heroeBorrado: string = "";

  borrarHeroe() {
    console.log("Borrando...");
    console.log(this.heroes);

    const index = this.heroes.indexOf("Ironman");
    if (index > -1) {
      this.heroeBorrado = this.heroes[index];
      this.heroes.splice(index, 1);
    }
    console.log(this.heroes);
  }
}
