import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCulturesComponent } from './user-cultures.component';

describe('UserCulturesComponent', () => {
  let component: UserCulturesComponent;
  let fixture: ComponentFixture<UserCulturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCulturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCulturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
