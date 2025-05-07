
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IonLabel, IonSegment, IonSegmentButton, IonChip } from '@ionic/angular/standalone';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { DataForTableService } from 'src/app/services/data-for-table.service';
import { ItemData } from 'src/app/interfaces/item-data.interface';
import { VerDetalleService } from 'src/app/services/ver-detalle.service';
import { configTable } from 'src/app/core/dataTable.config';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, IonLabel, IonSegment, IonSegmentButton, IonChip, DataTablesModule],
  providers: [DataForTableService]
})
export class QueueComponent  implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: any = configTable;
  dtTrigger: Subject<any> = new Subject();
  stacksData: ItemData[] = [];
  error: any;

  constructor(private dataForTableService: DataForTableService, public verDetalleService: VerDetalleService) {}

  ngOnInit(): void {

    this.stackQuery();
  }

  stackQuery() {
    const body = { type: "Queue"}
    this.dataForTableService.obtenerRegistroPorTipo(body)
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
