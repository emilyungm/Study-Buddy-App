import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidDataComponent } from './invalid-data.component';

describe('InvalidDataComponent', () => {
  let component: InvalidDataComponent;
  let fixture: ComponentFixture<InvalidDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidDataComponent]
    });
    fixture = TestBed.createComponent(InvalidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
