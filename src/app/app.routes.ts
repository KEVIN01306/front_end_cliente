import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/panel',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./views/folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'folder/:category/:type/:id',
    loadComponent: () =>
      import('./views/info-pilas-colas/info-pilas-colas.component').then((m) => m.InfoPilasColasComponent),
  },
];
