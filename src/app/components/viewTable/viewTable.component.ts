
import { Component, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { VerDetalleService } from 'src/app/services/ver-detalle.service';
import { MatCardModule } from '@angular/material/card';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import {  IonChip } from '@ionic/angular/standalone';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { ItemData } from 'src/app/interfaces/item-data.interface';
import { DataForTableService } from 'src/app/services/data-for-table.service';
import { configTable } from 'src/app/core/dataTable.config'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-viewTable',
  templateUrl: './viewTable.component.html',
  styleUrls: ['./viewTable.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, IonChip, DataTablesModule],
  providers: [DataForTableService]
})

export class viewTableComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  typeTableData: any
  dtOptions: any = configTable;
  dtTrigger: Subject<any> = new Subject();
  stacksData: ItemData[] = [];
  error: any;
  private activatedRoute = inject(ActivatedRoute);
  constructor(public verDetalleService: VerDetalleService, private dataForTableService: DataForTableService ) {}

  ngOnInit(): void {
    this.typeTableData = this.activatedRoute.snapshot.paramMap.get('id');


    this.loadData();
  }

  loadData() {
    const body = { type: this.typeTableData}
    console.log(body)
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
