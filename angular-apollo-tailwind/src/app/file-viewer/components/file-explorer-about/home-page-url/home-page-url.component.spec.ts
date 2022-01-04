import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageUrlComponent } from './home-page-url.component';

describe('HomePageUrlComponent', () => {
  let component: HomePageUrlComponent;
  let fixture: ComponentFixture<HomePageUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageUrlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
