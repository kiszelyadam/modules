import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then((f) => f.FirstModule),
    
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then((s) => s.SecondModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
