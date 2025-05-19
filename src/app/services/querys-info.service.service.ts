import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemBodyDataId, ItemData, ItemImage } from '../interfaces/item-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: null,
})
export class QuerysInfoServiceService {

  private dominio = environment.dominio;
  constructor(private http: HttpClient) { }

  obtenerInfoRegistro(body: ItemBodyDataId): Observable<ItemData>{
    return this.http.get<ItemData>(this.dominio+ "/api/registros/buscarPorId?id="+body.id)
  }

  obtenerImagenes(body: ItemBodyDataId): Observable<ItemImage[]>{
    return this.http.get<ItemImage[]>(this.dominio+ "/api/imagenes/obtenerTodasLasImagenesRegistro?registro_Id="+body.id)
  }
}
