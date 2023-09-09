import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonentFormComponent } from './monent-form.component';

describe('MonentFormComponent', () => {
  let component: MonentFormComponent;
  let fixture: ComponentFixture<MonentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonentFormComponent]
    });
    fixture = TestBed.createComponent(MonentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
