import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePersonajeSerieComponent } from './update-personaje-serie-component';

describe('UpdatePersonajeSerieComponent', () => {
  let component: UpdatePersonajeSerieComponent;
  let fixture: ComponentFixture<UpdatePersonajeSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePersonajeSerieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePersonajeSerieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
