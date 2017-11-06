import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBrowseComponent } from './local-browse.component';

describe('LocalBrowseComponent', () => {
  let component: LocalBrowseComponent;
  let fixture: ComponentFixture<LocalBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
