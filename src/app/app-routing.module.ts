import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameComponent } from './name/name.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: 'name', component: NameComponent},
  {path:'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
