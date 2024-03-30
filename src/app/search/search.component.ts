import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { window } from 'rxjs';


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

    var apiKey = "RGAPI-63f9b443-fed0-4614-bf0d-88dba45ed366"
    var summonerName:any = document.getElementById('summonerName')
    var tier:any = document.getElementById('tier')
    var rank:any = document.getElementById('rank')
    var wins:any = document.getElementById('wins')
    var losses:any = document.getElementById('losses')
    var winRate:any = document.getElementById('winRate')
    



    
      


this.http.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search.value}?api_key=${apiKey}`).subscribe(res => {


    if(res) {
      const data = res

      this.data = data;

   

    } 



    });






  search.value = "Loading"


  setTimeout(() => {
    
    if(search.value == "Loading") {
   

      search.value = "ERROR"

        
      summonerName.innerHTML = ``
      tier.innerHTML = ``
      rank.innerHTML = ``
      wins.innerHTML = ``
      losses.innerHTML = ``
      winRate.innerHTML = ``

      console.clear()
  
   
  }



  }, 8000);



 




    const error:any = document.getElementById('error')

 
    
    setTimeout(() => {



    if(typeof this.data != "undefined" || typeof this.data != null) {





  
 
  
      this.http.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.data.id}?api_key=${apiKey}`).subscribe(res2 => {



      console.clear()
  

      if(res2) {

        this.data2 = res2;
        search.value = this.data2[0].summonerName;

      }



   
        var totalGames:any = (this.data2[0].wins + this.data2[0].losses) * 100;
    
    
        var percentageW:any =  this.data2[0].wins/totalGames;

    
     
  
        summonerName.innerHTML = `${this.data2[0].summonerName}`
        tier.innerHTML = `Tier: ${this.data2[0].tier}`
        rank.innerHTML = `Rank ${this.data2[0].rank}`
        wins.innerHTML = `Wins: ${this.data2[0].wins}`
        losses.innerHTML = `Losses ${this.data2[0].losses}`
        winRate.innerHTML = `Win Rate: ${Math.floor(percentageW * 10000)}`
 
      


     

  
    });

  }  


    
}, 6000);



  }

  

}
