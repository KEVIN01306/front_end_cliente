import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ItemData,ItemBodyDataType } from "../interfaces/item-data.interface";
import { Observable } from "rxjs";



@Injectable({
    providedIn: null,
})
export class DataForTableService {
    private dominio = environment.dominio
    
    constructor(private http: HttpClient) {}

    obtenerRegistroPorTipo(body: ItemBodyDataType): Observable<ItemData[]>{
        return this.http.get<ItemData[]>(this.dominio+ "/api/registros/buscarPorTipo?type="+body.type)
    }

}
