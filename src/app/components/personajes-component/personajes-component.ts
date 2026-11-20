import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from '../../services/service.series';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-personajes-component',
  standalone: false,
  styleUrl: './personajes-component.css',
  templateUrl: './personajes-component.html',
})
export class PersonajesComponent implements OnInit {
  arraypersonajes: Personaje[] = []

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: ServiceSeries
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let idserie = params['idserie']
      this.arraypersonajes = await this._service.getPersonajesSerieAsync(idserie);
      this._cdr.detectChanges();
    })
  }
}
