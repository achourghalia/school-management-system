import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userComponent } from './user.component';

describe('userComponent', () => {
  let component: userComponent;
  let fixture: ComponentFixture<userComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [userComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
