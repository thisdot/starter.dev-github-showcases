import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { RepoControlsComponent } from './repo-controls.component';

describe('RepoControlsComponent', () => {
  let component: RepoControlsComponent;
  let fixture: ComponentFixture<RepoControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoControlsComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
