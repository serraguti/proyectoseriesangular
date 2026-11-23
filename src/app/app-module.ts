import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceSeries } from './services/service.series';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajesComponent } from './components/personajes-component/personajes-component';
import { UpdatePersonajeSerieComponent } from './components/update-personaje-serie-component/update-personaje-serie-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';
import { CreateSerieComponent } from './components/create-serie-component/create-serie-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeComponent,
    SerieComponent,
    PersonajesComponent,
    UpdatePersonajeSerieComponent,
    CreatePersonajeComponent,
    CreateSerieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceSeries],
  bootstrap: [App],
})
export class AppModule {}
