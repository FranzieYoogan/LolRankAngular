import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }


  data:any;
  data2:any;


  getApi() {  

    const search:any = document.getElementById('search');

    const apiKey = "RGAPI-d58c8b9e-c429-4f59-b71d-f55e6ef6fec7"

    var value:any = document.getElementById('value')



  this.http.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search.value}?api_key=${apiKey}`).subscribe(res => {

      var data = res;
    this.data = data;
    console.log(this.data.id); 

    this.http.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.data.id}?api_key=${apiKey}`).subscribe(res2 => {

    console.log(res2);

    this.data2 = res2;
    value.innerHTML = this.data2[0].tier

  });

    });

    


  }

}
