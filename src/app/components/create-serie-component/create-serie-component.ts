import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-create-serie-component',
  standalone: false,
  styleUrl: './create-serie-component.css',
  templateUrl: './create-serie-component.html',
})
export class CreateSerieComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  @ViewChild("cajaanyo") cajanyo!: ElementRef
  mensaje!: string
  constructor(
    private _service: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ) {}

  async insertarSerie(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nombre = this.cajanombre.nativeElement.value
    let imagen = this.cajaimagen.nativeElement.value
    let anyo = parseInt(this.cajanyo.nativeElement.value)
    let serie = new Serie(id,nombre, imagen, anyo);
    await this._service.insertarSerieAsync(serie)
    this.mensaje = "Serie insertada"
    this._cdr.detectChanges()
  }
}
