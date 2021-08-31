import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaWordComponent } from './tarjeta-word.component';

describe('TarjetaWordComponent', () => {
  let component: TarjetaWordComponent;
  let fixture: ComponentFixture<TarjetaWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
