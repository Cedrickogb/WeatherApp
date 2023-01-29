import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'facb139c64e204f07e5b502cdee5a194';

    constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat: number, lon: number ) {
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)
    .set('unit', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
  }

}
