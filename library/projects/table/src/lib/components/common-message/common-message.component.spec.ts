import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMessageComponent } from './common-message.component';

describe('CommonMessageComponent', () => {
  let component: CommonMessageComponent;
  let fixture: ComponentFixture<CommonMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
