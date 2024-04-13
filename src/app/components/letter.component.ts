import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'letter',
  standalone: true,
  template: `
    <section class="bg-white rounded-lg shadow px-8 py-5 mb-10">
      <h2 class="text-xl font-semibold">Open Letter to Kathryn Grayson</h2>
      <p>
        We know you are a master in React, you’ve skillfully. How about join to the red side with Alisse
        and work together with Angular? sprinkling a little
      </p>



      <p>
        At our platform, where tech aficionados applaud the craft of stellar
        developers like you, Angular could be the exotic spice that takes your
        dishes to the next level. Imagine merging your seasoned React skills
        with the robust spices of Angular — together, we could whip up a
        developer's feast that will be the talk of the tech town!
      </p>
      <p>
        Ready to add this sizzling ingredient to your gourmet code creations?
        Send us a recipe note, and let’s embark on this culinary coding journey
        with Angular!
      </p>

      <h2>Key Features of Angular 17</h2>
      <ul>
        <li>
          <strong>Optimized Performance:</strong> Experience applications that
          run faster and smoother with Angular 17’s performance enhancements.
        </li>
        <li>
          <strong>Advanced Ivy Compiler:</strong> Benefit from faster compile
          times and smaller bundle sizes thanks to improvements in the Ivy
          compiler.
        </li>
        <li>
          <strong>Simplified API:</strong> Angular 17 simplifies forms, routing,
          and dependency management with cleaner, more maintainable code.
        </li>
        <li>
          <strong>Enhanced Developer Tools:</strong> Enjoy a smoother
          development experience with upgraded tools and debugging capabilities,
          making it easier to solve issues and improve productivity.
        </li>
        <li>
          <strong>Stronger Type Checking:</strong> Enhanced type safety and
          configuration options ensure that your applications are robust and
          error-resistant.
        </li>
        <li>
          <strong>Updated with Modern Standards:</strong> Keep your skills sharp
          and relevant by using a framework that supports the latest JavaScript
          features and best practices.
        </li>
      </ul>
    </section>
  `
})

export class LetterComponent {}
