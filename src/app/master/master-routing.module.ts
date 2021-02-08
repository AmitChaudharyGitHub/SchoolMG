import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  {path: '',data: {title: 'Master'},
    children: [
      {path: '', redirectTo: 'university'},
      {path: 'university', component: UniversityComponent,data: {title: 'University'} },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
