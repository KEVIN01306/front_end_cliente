
import { Component, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { Router} from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IonLabel, IonSegment, IonSegmentButton, IonChip } from '@ionic/angular/standalone';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { StackItem } from '../theme';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, IonLabel, IonSegment, IonSegmentButton, IonChip, DataTablesModule,HttpClientModule]
})
export class QueueComponent  implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  stacksData: StackItem[] = [];
  error: any;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      destroy: true,
    };

    this.stackQuery();
  }

  stackQuery() {
    const body = { type: "Queue"}
    this.http.post<StackItem[]>('http://localhost:8080/api/registros/buscarPorTipo',body)
      .subscribe(
        async (response) => {
          this.stacksData = response;
          console.log('Datos recibidos:', this.stacksData);

          if (this.dtElement && this.dtElement.dtInstance) {
            const dtInstance = await this.dtElement.dtInstance;
            dtInstance.destroy();
          }

          this.dtTrigger.next(null);
        },
        (error) => {
          console.error('Error en la petición:', error);
          this.error = error;
        }
      );
  }

  verDetalle({ type, id }: { type: string, id: string }) {
    this.router.navigate([`/folder/queue/${type}/${id}`]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
