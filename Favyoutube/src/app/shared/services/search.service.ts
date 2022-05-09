import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, using } from 'rxjs';
import { Video } from '../models/search.interface';


@Injectable({
  providedIn: 'any'
})
export class SearchService {
  public ul = "";

  public testing :any
  public setTest(value: any) {
    return this.testing = value;
}

  private API_URL = 'https://www.googleapis.com/youtube/v3/';
  private API_TOKEN = 'AIzaSyBQSd-_bqtg5szRlEK2bOvEZMeV6mS2qeY';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable <Video[]>
  {
    const url = `${this.API_URL}search?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get<Video[]>(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

  whishlisturl ="http://localhost:3000/Favourite";



  
    
  


  addFav(VideoId: any){
    return this.http.post("http://localhost:3000/Favourite" ,{id:VideoId})
    
  
}

    removeFav(VideoId: any) 
    {
      console.log(VideoId);
      return this.http.delete("http://localhost:3000/Favourite/" + VideoId);

    }

    removeFaveo(VideoId: any) 
    {
      console.log(VideoId);
      return this.http.delete("http://localhost:3000/Favourite/" + VideoId);

    }


   


    getFav()
    {
      return this.http.get("http://localhost:3000/Favourite")
    }
 

    
    
   


}
