
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { FirstComponent } from './components/first/first.component';
import { ExportComponent } from './components/export/export.component';

const firstRoutes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: FirstComponent,
      children:[
        {
          path: 'export',
          component: ExportComponent
        },
        {
          path: 'asd',
          component: ExportComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(firstRoutes)],
    exports: [RouterModule]
  })

export class FirstRoutingModule {}