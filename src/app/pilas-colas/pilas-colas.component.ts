

import { Component, OnInit, OnDestroy } from '@angular/core'; // Importa OnDestroy
import { Config, IonChip} from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs'; // Importa Subject para la destrucción
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pilas-colas',
  templateUrl: '../pilas-colas/pilas-colas.component.html',
  styleUrls: ['../pilas-colas/pilas-colas.component.scss'],
  standalone: true,
  imports: [IonChip, MatCardModule, DataTablesModule, CommonModule], // Agrega CommonModule aquí
})
export class PilasColasComponent implements OnInit, OnDestroy {
  dtoptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  data: any[] = [
    { columna1: 'Dato 1', columna2: 'Dato A', columna3: 10, columna4: true },
  ];

  constructor() {}

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full'
      // Puedes agregar más opciones de DataTables aquí
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
