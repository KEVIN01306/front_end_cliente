import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { itemData,itemBodyData } from "../interfaces/item-data.interface";
import { Observable } from "rxjs";



@Injectable({
    providedIn: "root",
})
export class DataForTables {
    private dominio = environment.dominio
    
    constructor(private hhtp: HttpClient) {}

    obtenerRegistroPorTipo(body: itemBodyData): Observable<itemData[]>{
        return this.hhtp.post<itemData[]>(this.dominio+ "/api/registros/buscarPorTipo",body)
    }
}

