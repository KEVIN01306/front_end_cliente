import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerDetalleService {

  constructor(private router: Router) { }

  verDetalle({carpet, type, id }: {carpet: String, type: string, id: string }) {
    this.router.navigate([`/folder/${carpet}/${type}/${id}`]);
    console.log(carpet)
  }

}
