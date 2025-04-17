import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PilasColasComponent } from '../pilas-colas/pilas-colas.component';
import { EjemploComponent } from '../ejemplo/ejemplo.component';
import { NgSwitch,NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,} from '@ionic/angular/standalone';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, NgSwitch,NgSwitchCase,NgSwitchDefault,PilasColasComponent,EjemploComponent,  IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  
}
