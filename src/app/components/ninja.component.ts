import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'jump',
  template: `
    <section class="flex flex-col items-center">
      <h2 class="text-xl text-center font-semibold p-5">Welcome to Angular!!!! side!!!</h2>
      <img src="assets/kendo.png" class="r-50" alt="Logo">
    </section>

  `,
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})

export class NinjaComponent {

}
