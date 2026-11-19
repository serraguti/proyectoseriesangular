import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  arrayseries: Serie[] = []

  constructor(
    private _service: ServiceSeries,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayseries = await this._service.getSeriesAsync();
    this._cdr.detectChanges()
  }
}
