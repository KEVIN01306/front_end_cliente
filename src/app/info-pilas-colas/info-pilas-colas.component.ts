import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {IonButtons, IonMenuButton,
        IonContent,
        IonButton,
        IonTitle,
        IonToolbar,
        IonHeader,
        IonBreadcrumb, IonBreadcrumbs,
        IonModal,IonCol, IonGrid, IonRow
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-pilas-colas',
  templateUrl: './info-pilas-colas.component.html',
  styleUrls: ['./info-pilas-colas.component.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,IonContent,
    IonButton,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonModal,IonCol, IonGrid, IonRow,IonBreadcrumb, IonBreadcrumbs],
})
export class InfoPilasColasComponent implements OnInit {
  public category: string | null = null;
  public type: string | null = null;
  public id: string | null = null;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category') as string;
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.type = this.activatedRoute.snapshot.paramMap.get('type') as string;
    console.log(this.id,this.type,this.category)
  }
}
