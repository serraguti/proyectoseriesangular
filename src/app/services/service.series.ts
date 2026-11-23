import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, provideIdleServiceWith } from "@angular/core";
import { Serie } from "../models/serie";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { Personaje } from "../models/personaje";

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

    async getPersonajesSerieAsync(idserie: number): Promise<Personaje[]> {
        let request = "api/series/personajesserie/" + idserie
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Personaje[]>(url)
        )
    }

    async getPersonajesAsync(): Promise<Personaje[]> {
        let request = "api/personajes"
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.get<Personaje[]>(url)
        )
    }

    async cambiarPersonajeSerie(idpersonaje: number, idserie: number): Promise<any> {
        let request = "api/personajes/updatepersonajeserie/update/"
            + idpersonaje + "/" + idserie
        let url = environment.apiejemplos + request
        return firstValueFrom(
            this._http.put(url, null)
        )
    }

    async insertarPersonaje(personaje: Personaje): Promise<any> {
        let request = "api/personajes"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, personaje, {headers: header})
        )
    }

    async insertarSerieAsync(serie: Serie): Promise<any> {
        let request = "api/series/insertarserie/create"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, serie, {headers: header})
        )
    }
}