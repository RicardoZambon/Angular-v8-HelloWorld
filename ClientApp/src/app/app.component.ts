import { Component } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('menuAnimation', [
      state("true", style({ width: '240px' })),
      state("false", style({ width: '65px' })),
      transition("true => false", animate("300ms ease-in-out", style({ width: '65px' }))),
      transition("false => true", animate("300ms ease-in-out", style({ width: '240px' })))
    ]),
    trigger('mainContentAnimation', [
      state("true", style({ 'margin-left': '240px' })),
      state("false", style({ 'margin-left': '65px' })),
      transition("true => false", animate("300ms ease-in-out", style({ 'margin-left': '65px' }))),
      transition("false => true", animate("300ms ease-in-out", style({ 'margin-left': '240px' })))
    ])
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarExpanded: boolean = true;
  title = 'app';

  ExpandCollapseSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
