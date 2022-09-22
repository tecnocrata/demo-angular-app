import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroComponentComponent } from './primero-component.component';

describe('PrimeroComponentComponent', () => {
  let component: PrimeroComponentComponent;
  let fixture: ComponentFixture<PrimeroComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeroComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
