import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  locationDenied:boolean = false;
  locationDeniedEnableCity = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
   }

   getLocation() {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data

        });
      },(error)=>{
        if(error.code == error.PERMISSION_DENIED){
          this.locationDenied = false;
          this.locationDeniedEnableCity = false;
        }
      })
    }
  }

  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data
    })
  }

  colorSwipe(color: string) {
    
  }

}
