import { Component, inject, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonButtons, IonMenuButton,
  IonContent,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonBreadcrumb, IonBreadcrumbs,IonCol, IonGrid, IonRow
} from '@ionic/angular/standalone';
import { ItemBodyDataId, ItemData, ItemImage } from 'src/app/interfaces/item-data.interface';
import { QuerysInfoServiceService } from 'src/app/services/querys-info.service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-info-pilas-colas',
  templateUrl: './info-pilas-colas.component.html',
  styleUrls: ['./info-pilas-colas.component.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton,IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,IonCol, IonGrid, IonRow,IonBreadcrumb, IonBreadcrumbs,CommonModule,HttpClientModule],
  providers: [QuerysInfoServiceService]
})
export class InfoPilasColasComponent implements OnInit, AfterViewInit  {
  public category: string | null = null;
  public type: string | null = null;
  public id: string | null = null;
  public date: string | null = null;
  public changes: string | null = null;
  public imagenes: Array<ItemImage>  = []
  private dato: ItemData | null = null;


  @ViewChild('grandeElement') grandeElement!: ElementRef;
  @ViewChildren('puntoElement') puntoElements!: QueryList<ElementRef>;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private renderer: Renderer2,private queryService: QuerysInfoServiceService) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category') as string;
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.type = this.activatedRoute.snapshot.paramMap.get('type') as string;
    this.cargarInfo(this.id);
    this.cargarImagenes(this.id)
  
    console.log(this.id,this.type,this.category);
  }

  ngAfterViewInit() {
    if (this.grandeElement) {
      const grande = this.grandeElement.nativeElement;

      this.puntoElements.forEach((puntoElement, i) => {
        const punto = puntoElement.nativeElement;
        this.renderer.listen(punto, 'click', () => {
          let posicion = i;
          let operacion = posicion * - 100/this.imagenes.length;
          this.renderer.setStyle(grande, 'transform', `translateX(${operacion}%)`);

          this.puntoElements.forEach((cadaPunto) =>{
            const puntoIn = cadaPunto.nativeElement;
            this.renderer.removeClass(puntoIn,'activo')
          })

          this.renderer.addClass(punto,'activo');
        });
      });
    }
  }

  inicializarPuntos() {
  if (this.grandeElement) {
    const grande = this.grandeElement.nativeElement;

    this.puntoElements.forEach((puntoElement, i) => {
      const punto = puntoElement.nativeElement;

      this.renderer.listen(punto, 'click', () => {
        const operacion = i * -100 / this.imagenes.length;
        this.renderer.setStyle(grande, 'transform', `translateX(${operacion}%)`);

        this.puntoElements.forEach((cadaPunto) => {
          const puntoIn = cadaPunto.nativeElement;
          this.renderer.removeClass(puntoIn, 'activo');
        });

        this.renderer.addClass(punto, 'activo');
      });
    });
  }
}

  cargarInfo(id: string){
    const body: ItemBodyDataId = { id: id };

    this.queryService.obtenerInfoRegistro(body).subscribe({
      next: (respuesta) => {
        this.dato = respuesta;
        this.changes = this.dato.changes ?? null;
        this.date = this.dato.date ?? null;
        console.log('Dato recibido:', this.dato);

      },
      error: (err) => {
        console.error('Error al obtener dato', err);
      }
  });
}

  cargarImagenes(id: string){
    const body: ItemBodyDataId = { id: id };

    this.queryService.obtenerImagenes(body).subscribe({
      next: (respuesta) => {
        this.imagenes = respuesta;
        console.log('Dato recibido:', this.dato);

        setTimeout(() => {
        if (this.grandeElement && this.imagenes) {
          const totalImagenes = this.imagenes.length;
          const nuevoWidth = totalImagenes * 100;
          this.renderer.setStyle(this.grandeElement.nativeElement, 'width', `${nuevoWidth}%`);
        }
        setTimeout(() => {
          this.ngAfterViewInit();
        }, 0);
      }, 0);
      },
      error: (err) => {
        console.error('Error al obtener dato', err);
      }
  });
}

  returnTable() {
    this.router.navigate([`/folder/${this.category}`]);
  }

  here() {
    this.router.navigate([`/folder/${this.category}/${this.type}/${this.id}`]);
  }
}