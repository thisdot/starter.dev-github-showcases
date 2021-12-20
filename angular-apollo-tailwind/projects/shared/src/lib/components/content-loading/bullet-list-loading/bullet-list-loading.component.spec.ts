import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletListLoadingComponent } from './bullet-list-loading.component';

describe('BulletListLoadingComponent', () => {
  let component: BulletListLoadingComponent;
  let fixture: ComponentFixture<BulletListLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BulletListLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
