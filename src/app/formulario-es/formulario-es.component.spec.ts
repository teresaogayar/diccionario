import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEsComponent } from './formulario-es.component';

describe('FormularioEsComponent', () => {
  let component: FormularioEsComponent;
  let fixture: ComponentFixture<FormularioEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
