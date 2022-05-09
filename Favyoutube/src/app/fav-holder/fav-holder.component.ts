import { Component, OnInit } from '@angular/core';

import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-fav-holder',
  templateUrl: './fav-holder.component.html',
  styleUrls: ['./fav-holder.component.css']
})
export class FavHolderComponent implements OnInit {

  public data:any;
  
  constructor(private youtube:SearchService) { }

  ngOnInit(): void {
    this.youtube.getFav().subscribe((result)=>{
      console.log(result);
      this.data=result;
      
    })

    
  }

 

  handleRemoveWishList(item)
      {
        console.log(item)
        this.youtube.removeFav(item.id).subscribe(()=>
        {
          
        
        
        })
  }



  reloadCurrentPage() {
    window.location.reload();
   }
}