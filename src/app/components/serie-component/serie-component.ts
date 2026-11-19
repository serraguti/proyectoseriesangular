import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-component',
  standalone: false,
  styleUrl: './serie-component.css',
  templateUrl: './serie-component.html',
})
export class SerieComponent implements OnInit {
  serie!: Serie

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: ServiceSeries
  ) {}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) =>{
      let idserie = params['idserie']
      this.serie = await this._service.findSerieAsync(idserie)
      this._cdr.detectChanges()
    })
    // let params = await firstValueFrom(this._active.params)
    // let idserie = params['idserie']
    // this.serie = await this._service.findSerieAsync(idserie)
    // this._cdr.detectChanges()
  }
}
