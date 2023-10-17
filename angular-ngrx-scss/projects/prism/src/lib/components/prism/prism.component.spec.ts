import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismComponent } from './prism.component';
import { LineComponent } from './../line/line.component';
import { TokenComponent } from '../token/token.component';

describe('PrismComponent', () => {
  let component: PrismComponent;
  let fixture: ComponentFixture<PrismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrismComponent, LineComponent, TokenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismComponent);
    component = fixture.componentInstance;
    component.language = 'javascript';
    component.code = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
