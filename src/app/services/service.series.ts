import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Serie } from "../models/serie";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceSeries {
    constructor(
        private _http: HttpClient
    ){}

    async getSeriesAsync(): Promise<Serie[]> {
        let request = "api/series"
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.get<Serie[]>(url)
        )
    }

    async findSerieAsync(idserie: number): Promise<Serie> {
        let request = "api/series/" + idserie
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Serie>(url)
        )
    }
}