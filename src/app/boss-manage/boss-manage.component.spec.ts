import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BossManageComponent } from './boss-manage.component';

describe('BossManageComponent', () => {
  let component: BossManageComponent;
  let fixture: ComponentFixture<BossManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BossManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BossManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
