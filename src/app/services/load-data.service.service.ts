import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemFile } from '../interfaces/item-data.interface';

@Injectable({
  providedIn: "root",
})
export class LoadDataServiceService {
  private dominio = environment.dominio;
  constructor( private http: HttpClient) { }

  upFile(item: ItemFile): Observable<any> {
    const formData = new FormData();
    formData.append('file', item.file);
    return this.http.post(this.dominio + "/api/upload-csv", formData);
  }


}
