import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPilasColasComponent } from '../info-pilas-colas/info-pilas-colas.component';
import { viewTableComponent } from 'src/app/components/viewTable/viewTable.component';
import { AlgorithmsComponent } from '../../components/algorithms/algorithms.component';
import { HttpClientModule } from '@angular/common/http'
import { ModalController } from '@ionic/angular';
import { UploadModalComponent } from 'src/app/components/upload-modal/upload-modal.component';
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
    AlgorithmsComponent,
  UploadModalComponent],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public type: string | null = null;
  public row: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  
  async openUploadModal() {
  const modal = await this.modalCtrl.create({
    component: /* @vite-ignore */ UploadModalComponent,
  });
  await modal.present();
}
}
