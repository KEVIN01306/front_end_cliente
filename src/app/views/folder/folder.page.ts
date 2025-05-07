import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPilasColasComponent } from '../info-pilas-colas/info-pilas-colas.component';
import { viewTableComponent } from 'src/app/components/viewTable/viewTable.component';
import { AlgorithmsComponent } from '../../components/algorithms/algorithms.component';
import { HttpClientModule } from '@angular/common/http'
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
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, NgSwitch,NgSwitchCase,NgSwitchDefault,InfoPilasColasComponent,  IonFab,
    IonFabButton,
    IonFabList,
    IonIcon,
    viewTableComponent,
    HttpClientModule,
    AlgorithmsComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public type: string | null = null;
  public row: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  
}
