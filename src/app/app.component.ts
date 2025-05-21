import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
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
    RouterModule,
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
    { title: 'Panel', url: '/folder/panel', icon: 'git-branch', active: false },
    { title: 'Stacks', url: '/folder/stack', icon: 'git-branch', active: false },
    { title: 'Queues', url: '/folder/queue', icon: 'git-branch', active: false },
    { title: 'Arrays', url: '/folder/array', icon: 'git-branch', active: false },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  private routerSubscription!: Subscription;

  constructor(private router: Router) {
    addIcons(allIcons);
  }

  ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.appPages.forEach(page => page.active = false); 
      if (event.urlAfterRedirects.startsWith('/folder/panel')) {
        const ejemploPage = this.appPages.find(page => page.url === '/folder/panel');
        if (ejemploPage) {
          ejemploPage.active = true;
        }
      }
      else if (event.urlAfterRedirects.startsWith('/folder/stack')) {
        const ejemploPage = this.appPages.find(page => page.url === '/folder/stack');
        if (ejemploPage) {
          ejemploPage.active = true;
        }
      }
      else if (event.urlAfterRedirects.startsWith('/folder/queue')) {
        const ejemploPage = this.appPages.find(page => page.url === '/folder/queue');
        if (ejemploPage) {
          ejemploPage.active = true;
        }
      }else if (event.urlAfterRedirects.startsWith('/folder/array')) {
        const ejemploPage = this.appPages.find(page => page.url === '/folder/array');
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