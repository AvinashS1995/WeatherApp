import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  _searchInput = this.weatherService.cityName;
  get searchInput(){
    return this._searchInput;
  } 
  set searchInput(data:string){
    this._searchInput = data;
    this.weatherService.cityName = this._searchInput;
    this.weatherApiAllData = undefined;
    this.getData()
  }
  temperature! : number;
  max_temp! : number;
  min_temp! : number;
  humidity! : number;
  windSpeed! : number;
  city! : string;
  weatherApiAllData : any;


  constructor(private weatherService :WeatherService ){ }

  ngOnInit(){
    this.getData()
  }
  
  getData(){
    this.weatherService.getAllWeatherDataApi().subscribe((data) =>{
      console.log(data);
      this.weatherApiAllData = data;
      this.temperature = this.weatherApiAllData.main.temp;
      this.max_temp = this.weatherApiAllData.main.temp_max;
      this.min_temp = this.weatherApiAllData.main.temp_min;
      this.humidity = this.weatherApiAllData.main.humidity;
      this.windSpeed = this.weatherApiAllData.wind.speed;
    }, (error) => {
      console.log(error.message)
    })
  }

  changeBackgroundImg(){
    if(this.temperature < 10 && this.weatherApiAllData ){
      return 'backgroundcold';

    }else if(!this.searchInput){
      return 'enter-city';

    }else if(this.searchInput && !this.weatherApiAllData){
        return 'city-not-found';

    }else{
      return 'backgroundhot';
    }
    // return '';
  }

}
