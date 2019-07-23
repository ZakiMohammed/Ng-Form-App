import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './components/template/template.component';
import { BasicComponent } from './components/reactive/basic/basic.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BuilderComponent } from './components/reactive/builder/builder.component';
import { ValidateComponent } from './components/reactive/validate/validate.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive/basic', component: BasicComponent },
  { path: 'reactive/builder', component: BuilderComponent },
  { path: 'reactive/validate', component: ValidateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
