
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { SecondComponent } from './components/second/second.component';

const secondRoutes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: SecondComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(secondRoutes)],
    exports: [RouterModule]
  })

export class SecondRoutingModule {}