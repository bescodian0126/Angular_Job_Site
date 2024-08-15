import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiItemComponent } from './li-item.component';

describe('LiItemComponent', () => {
  let component: LiItemComponent;
  let fixture: ComponentFixture<LiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
