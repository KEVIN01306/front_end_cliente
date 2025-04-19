import { Component, inject, OnInit, AfterViewInit, Renderer2, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonButtons, IonMenuButton,
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
export class InfoPilasColasComponent implements OnInit, AfterViewInit  {
  public category: string | null = null;
  public type: string | null = null;
  public id: string | null = null;

  @ViewChild('grandeElement') grandeElement!: ElementRef;
  @ViewChildren('puntoElement') puntoElements!: QueryList<ElementRef>;

  private activatedRoute = inject(ActivatedRoute);

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category') as string;
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.type = this.activatedRoute.snapshot.paramMap.get('type') as string;
    console.log(this.id,this.type,this.category);
  }

  ngAfterViewInit() {
    if (this.grandeElement) {
      const grande = this.grandeElement.nativeElement;

      this.puntoElements.forEach((puntoElement, i) => {
        const punto = puntoElement.nativeElement;
        this.renderer.listen(punto, 'click', () => {
          let posicion = i;
          let operacion = posicion * -25;
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

  returnTable() {
    this.router.navigate([`/folder/${this.category}`]);
  }

  here() {
    this.router.navigate([`/folder/${this.category}/${this.type}/${this.id}`]);
  }
}