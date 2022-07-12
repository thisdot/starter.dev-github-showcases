import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { signOut } from 'src/app/state/auth/auth.actions';
import { NavBarComponent } from './nav-bar.component';

describe('NavbarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dropdown if signOut button was clicked', () => {
    component.closeDropdown();
    expect(component.dropdownMenuIsOpen).toEqual(false);
  });

  it('should dispatch the action for start the signOut process for the user', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();

    component.signOut();
    expect(dispatchSpy).toHaveBeenCalledWith(signOut());
  });
});
