import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'ninja',
  template: `
    <section class="flex flex-col items-center">
      <h2 class="text-xl text-center font-semibold p-5">Welcome to Angular and Kendo UI </h2>
      <img src="assets/kendo.png" class="r-50" alt="Logo">
    </section>

  `,
  imports: [

  ],
  standalone: true,
  styles: `
    img {
      cursor: pointer;
      border-radius: 10%;
    }
  `
})

export class NinjaComponent {

}
