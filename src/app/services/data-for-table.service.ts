import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ItemData,itemBodyData } from "../interfaces/item-data.interface";
import { Observable } from "rxjs";



@Injectable({
    providedIn: null,
})
export class DataForTableService {
    private dominio = environment.dominio
    
    constructor(private http: HttpClient) {}

    obtenerRegistroPorTipo(body: itemBodyData): Observable<ItemData[]>{
        return this.http.post<ItemData[]>(this.dominio+ "/api/registros/buscarPorTipo",body)
    }

}
