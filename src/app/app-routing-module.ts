import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { UpdatePersonajeSerieComponent } from './components/update-personaje-serie-component/update-personaje-serie-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';

const routes: Routes = [
  {path: "", component: HomeComponent },
  { path: "serie/:idserie", component: SerieComponent },
  { path: "personajes/:idserie", component: PersonajesComponent },
  { path: "updatepersonaje", component: UpdatePersonajeSerieComponent },
  { path: "createpersonaje", component: CreatePersonajeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
