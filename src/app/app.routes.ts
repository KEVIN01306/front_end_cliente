import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/pilas-colas',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'folder/:category/:type/:id',
    loadComponent: () =>
      import('./info-pilas-colas/info-pilas-colas.component').then((m) => m.InfoPilasColasComponent),
  },
];
