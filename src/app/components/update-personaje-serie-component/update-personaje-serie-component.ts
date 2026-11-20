import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-update-personaje-serie-component',
  standalone: false,
  styleUrl: './update-personaje-serie-component.css',
  templateUrl: './update-personaje-serie-component.html',
})
export class UpdatePersonajeSerieComponent implements OnInit {
  @ViewChild("cajaidpersonaje") cajaidpersonaje!: ElementRef
  @ViewChild("cajaidserie") cajaidserie!: ElementRef
  arrayseries: Serie[] = []
  arraypersonajes: Personaje[] = []
  mensaje!: string

  async ngOnInit(): Promise<void> {
    this.arrayseries = await this._service.getSeriesAsync()
    this.arraypersonajes = await this._service.getPersonajesAsync()
    this._cdr.detectChanges()
  }

  constructor(
    private _service: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ){}

  async modificarPersonaje(): Promise<void> {
    let idpersonaje = this.cajaidpersonaje.nativeElement.value
    let idserie = this.cajaidserie.nativeElement.value
    await this._service.cambiarPersonajeSerie(idpersonaje, idserie)
    this.mensaje = "Personaje modificado"
    this._cdr.detectChanges()
  }
}
