import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeButtonsComponent } from './mode-buttons.component';

describe('ModeButtonsComponent', () => {
  let component: ModeButtonsComponent;
  let fixture: ComponentFixture<ModeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
