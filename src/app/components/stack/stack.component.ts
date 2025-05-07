
import { Component, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { VerDetalleService } from 'src/app/services/ver-detalle.service';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IonLabel, IonSegment, IonSegmentButton, IonChip } from '@ionic/angular/standalone';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { ItemData } from 'src/app/interfaces/item-data.interface';
import { DataForTableService } from 'src/app/services/data-for-table.service';
import { configTable } from 'src/app/core/dataTable.config'


@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, IonLabel, IonSegment, IonSegmentButton, IonChip, DataTablesModule],
  providers: [DataForTableService]
})

export class StackComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  dtOptions: any = configTable;
  dtTrigger: Subject<any> = new Subject();
  stacksData: ItemData[] = [];
  error: any;

  constructor(public verDetalleService: VerDetalleService, private dataForTableService: DataForTableService ) {}

  ngOnInit(): void {



    this.loadData();
  }

  loadData() {
    const body = { type: "Stack"}
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
