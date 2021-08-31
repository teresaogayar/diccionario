import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPalabraComponent } from './tarjeta-palabra.component';

describe('TarjetaPalabraComponent', () => {
  let component: TarjetaPalabraComponent;
  let fixture: ComponentFixture<TarjetaPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPalabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
