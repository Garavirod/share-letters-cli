import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittingviewComponent } from './writtingview.component';

describe('WrittingviewComponent', () => {
  let component: WrittingviewComponent;
  let fixture: ComponentFixture<WrittingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrittingviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
