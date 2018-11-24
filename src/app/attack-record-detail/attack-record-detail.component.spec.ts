import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackRecordDetailComponent } from './attack-record-detail.component';

describe('AttackRecordDetailComponent', () => {
  let component: AttackRecordDetailComponent;
  let fixture: ComponentFixture<AttackRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
