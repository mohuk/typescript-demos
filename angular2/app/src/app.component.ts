import { Component, OnInit } from '@angular/core';
import { heroes } from './heroes';
import { Hero } from './hero';

@Component({
  selector: 'app',
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Gotham Directory</span>
        <div class="mdl-layout-spacer"></div>
        </div>
      </header>
      <main class="mdl-layout__content">
        <div class="page-content">
          <ul class="demo-list-three mdl-list">
            <li *ngFor="let hero of heroes" class="mdl-list__item mdl-list__item--three-line">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons  mdl-list__item-avatar">person</i>
                <span>{{hero.name}}</span>
                <span class="mdl-list__item-text-body">{{hero.description}}</span>
              </span>
              <span class="mdl-list__item-secondary-content">
                <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
              </span>
            </li>
          </ul>
        </div>
      </main>
		</div>
  `
})
export class AppComponent {
  heroes: Array<Hero> = heroes;
}
