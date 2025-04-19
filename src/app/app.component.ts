import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router'; // Importa RouterModule
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    RouterModule, // Importa RouterModule aquí
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  public appPages = [
    { title: 'Stacks-Queues', url: '/folder/pilas-colas', icon: 'git-branch', active: false },
    { title: 'ejemplo', url: '/folder/ejemplo', icon: 'git-branch', active: false },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  private routerSubscription!: Subscription; // Inicialización definitiva

  constructor(private router: Router) {
    addIcons(allIcons);
  }

  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.appPages.forEach(page => page.active = false); // Reset all active states
      if (event.urlAfterRedirects.startsWith('/folder/pilas-colas')) {
        const stacksQueuesPage = this.appPages.find(page => page.url === '/folder/pilas-colas');
        if (stacksQueuesPage) {
          stacksQueuesPage.active = true;
        }
      } else if (event.urlAfterRedirects.startsWith('/folder/ejemplo')) {
        const ejemploPage = this.appPages.find(page => page.url === '/folder/ejemplo');
        if (ejemploPage) {
          ejemploPage.active = true;
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}