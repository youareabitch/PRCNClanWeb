import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberManageComponent } from './member-manage/member-manage.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { BossManageComponent } from './boss-manage/boss-manage.component';
import { BossDetailComponent } from './boss-detail/boss-detail.component';
import { AttackRecordManageComponent } from './attack-record-manage/attack-record-manage.component';
import { AttackRecordDetailComponent } from './attack-record-detail/attack-record-detail.component';

const routes: Routes = [
  {
    path:'',
    component:MemberManageComponent
  },
  {
    path:'MemberManage',
    component:MemberManageComponent
  },
  {
    path:'MemberDetail',
    component:MemberDetailComponent
  },
  {
    path:'MemberDetail/:id',
    component:MemberDetailComponent
  },
  {
    path:'BossManage',
    component:BossManageComponent
  },
  {
    path:'BossDetail',
    component:BossDetailComponent
  },
  {
    path:'BossDetail/:id',
    component:BossDetailComponent
  },
  {
    path:'AttackRecordManage',
    component:AttackRecordManageComponent
  },
  {
    path:'AttackRecordDetail',
    component:AttackRecordDetailComponent
  },
  {
    path:'AttackRecordDetail/:id',
    component:AttackRecordDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
