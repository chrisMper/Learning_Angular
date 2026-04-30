import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  //Template component
  template: `
    <main>
      <header class="band-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <!-- <app-home></app-home> -->
        <!-- replacing the content class with the router-outlet -->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  //Styles component
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = 'homes';
}
