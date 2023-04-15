import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient ) { }

  cityName! : string;

  getAllWeatherDataApi(){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric`)
  }

}
