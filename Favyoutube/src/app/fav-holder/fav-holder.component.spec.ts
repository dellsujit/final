import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchService } from '../shared/services/search.service';

import { FavHolderComponent } from './fav-holder.component';

describe('FavHolderComponent', () => {
  let component: FavHolderComponent;
  let fixture: ComponentFixture<FavHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
