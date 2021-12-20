import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLoadingComponent } from './content-loading.component';

describe('LoadingComponent', () => {
  let component: ContentLoadingComponent;
  let fixture: ComponentFixture<ContentLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
