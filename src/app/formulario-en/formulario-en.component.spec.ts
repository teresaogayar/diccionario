import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnComponent } from './formulario-en.component';

describe('FormularioEnComponent', () => {
  let component: FormularioEnComponent;
  let fixture: ComponentFixture<FormularioEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
