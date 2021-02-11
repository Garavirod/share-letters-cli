import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingviewComponent } from './readingview.component';

describe('ReadingviewComponent', () => {
  let component: ReadingviewComponent;
  let fixture: ComponentFixture<ReadingviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadingviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
