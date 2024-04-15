import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'jump',
  template: `
    <section class="bg-white rounded-lg shadow px-8 py-5 mb-10">
      <h2 class="text-xl text-center font-semibold p-5">Welcome to Red Side!!!</h2>
      <img src="assets/developer.webp" alt="Logo">

    </section>

  `,
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})

export class JumpComponent  {

}
