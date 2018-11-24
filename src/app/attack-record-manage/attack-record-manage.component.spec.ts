import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackRecordManageComponent } from './attack-record-manage.component';

describe('AttackRecordManageComponent', () => {
  let component: AttackRecordManageComponent;
  let fixture: ComponentFixture<AttackRecordManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackRecordManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackRecordManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
