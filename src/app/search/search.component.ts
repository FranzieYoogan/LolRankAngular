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
    event?.preventDefault()
    var search:any = document.getElementById('search');

    var apiKey = "RGAPI-d58c8b9e-c429-4f59-b71d-f55e6ef6fec7"
    var tier:any = document.getElementById('tier')
    var rank:any = document.getElementById('rank')
    var wins:any = document.getElementById('wins')
    var losses:any = document.getElementById('losses')

    var summonerName:any = document.getElementById('summonerName')



this.http.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search.value}?api_key=${apiKey}`).subscribe(res => {

    if(res) {
      const data = res

      this.data = data;

    } 



    });



    if(typeof this.data !== "undefined" ) {

      const error:any = document.getElementById('error')
    
      error.style.display = "none"
  
      this.http.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.data.id}?api_key=${apiKey}`).subscribe(res2 => {

 
      this.data2 = res2;
  
  
        var totalGames:any = (this.data2[0].wins + this.data2[0].losses) * 100;
        var winRate:any = document.getElementById('winRate')
    
        var percentageW:any =  this.data2[0].wins/totalGames;

    
  
        summonerName.innerHTML = `Summoner Name: ${this.data2[0].summonerName}`
        tier.innerHTML = `Tier: ${this.data2[0].tier}`
        rank.innerHTML = `Rank ${this.data2[0].rank}`
        wins.innerHTML = `Wins: ${this.data2[0].wins}`
        losses.innerHTML = `Losses ${this.data2[0].losses}`
        winRate.innerHTML = `Win Rate: ${Math.floor(percentageW * 10000)}`
      
      


   
     
  
     


  
    });

  }  else {
    const error:any = document.getElementById('error')
    
    error.style.display = "block"


  }

    
  

  

   
    

  }

  

}
