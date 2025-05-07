import { Component, OnInit, OnDestroy } from '@angular/core'; // Importa OnDestroy
import { Config, IonChip} from '@ionic/angular/standalone';
import { MatCardModule } from '@angular/material/card';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs'; // Importa Subject para la destrucción
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-data-table-component',
  templateUrl: './data-table-component.component.html',
  styleUrls: ['./data-table-component.component.scss'],
  standalone: true,
  imports: [IonChip, MatCardModule, DataTablesModule, CommonModule], // Agrega CommonModule aquí
})
export class DataTableComponent implements OnInit, OnDestroy {
  dtoptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  data: any[] = [
    { "id": "124", "date": "1-12-2025", "changes": 5 },
  { "id": "567", "date": "15-01-2025", "changes": 12 },
  { "id": "901", "date": "28-02-2025", "changes": 3 },
  { "id": "345", "date": "10-03-2025", "changes": 8 },
  { "id": "678", "date": "22-04-2025", "changes": 1 },
  { "id": "012", "date": "05-05-2025", "changes": 15 },
  { "id": "456", "date": "18-06-2025", "changes": 7 },
  { "id": "789", "date": "30-07-2025", "changes": 2 },
  { "id": "234", "date": "11-08-2025", "changes": 9 },
  { "id": "567", "date": "25-09-2025", "changes": 4 },
  { "id": "890", "date": "07-10-2025", "changes": 11 },
  { "id": "123", "date": "19-11-2025", "changes": 6 },
  { "id": "456", "date": "02-12-2025", "changes": 13 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      lengthMenu: [ [5, 10, 25, 50, -1], [5, 10, 25, 50, 'All'] ]
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

