import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerDetalleService {

  constructor(private router: Router) { }

  verDetalle({ type, id }: { type: string, id: string }) {
    this.router.navigate([`/folder/stack/${type}/${id}`]);
  }

}
