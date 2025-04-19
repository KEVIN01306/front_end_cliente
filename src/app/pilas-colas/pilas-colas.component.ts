import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router} from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IonLabel, IonSegment, IonSegmentButton, IonChip } from '@ionic/angular/standalone';
import { DataTablesModule } from 'angular-datatables';




interface StackItem { // Define an interface for your data structure
  id: string;
  type: string;
}
@Component({
  selector: 'app-pilas-colas',
  templateUrl: './pilas-colas.component.html',
  styleUrls: ['./pilas-colas.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, IonLabel, IonSegment, IonSegmentButton, IonChip, DataTablesModule],
})
export class PilasColasComponent implements OnInit, OnDestroy {
  dtoptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  selectedSegment = signal<string>('stacks');
  folder: string = '/folder/';

  stacksData: any[] = [
    { "id": "124", "date": "1-12-2025", "changes": 5, "type": "Stack" },
    { "id": "567", "date": "15-01-2025", "changes": 12, "type": "Stack" },
    { "id": "901", "date": "28-02-2025", "changes": 3, "type": "Stack" },
    { "id": "345", "date": "10-03-2025", "changes": 8, "type": "Stack" },
    { "id": "678", "date": "22-04-2025", "changes": 1, "type": "Stack" },
    { "id": "012", "date": "05-05-2025", "changes": 15, "type": "Stack" },
    { "id": "456", "date": "18-06-2025", "changes": 7, "type": "Stack" },
    { "id": "789", "date": "30-07-2025", "changes": 2, "type": "Stack" },
    { "id": "234", "date": "11-08-2025", "changes": 9, "type": "Stack" },
    { "id": "567", "date": "25-09-2025", "changes": 4, "type": "Stack" },
    { "id": "890", "date": "07-10-2025", "changes": 11, "type": "Stack" },
    { "id": "123", "date": "19-11-2025", "changes": 6, "type": "Stack" },
    { "id": "456", "date": "02-12-2025", "changes": 13, "type": "Stack" },
    { "id": "456", "date": "02-12-2025", "changes": 13, "type": "Stack" },
    { "id": "456", "date": "02-12-2025", "changes": 13, "type": "Stack" },
  ];

  queuesData: any[] = [
    { "id": "987", "date": "10-01-2026", "changes": 20, "type": "Queue" },
    { "id": "654", "date": "25-02-2026", "changes": 8, "type": "Queue" },
    { "id": "321", "date": "12-03-2026", "changes": 15, "type": "Queue" },
    { "id": "876", "date": "01-04-2026", "changes": 3, "type": "Queue" },
    { "id": "543", "date": "18-05-2026", "changes": 10, "type": "Queue" },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']]
    };
    this.dtTrigger.next(null);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  selectSegment(segmentValue: string) {
    this.selectedSegment.set(segmentValue);
    console.log(segmentValue)
  }

  verDetalle({ type, id }: { type: string, id: string }) { // Explicitly type the parameters
    this.router.navigate([`/folder/pilas-colas/${type}/${id}`]);
  }
}