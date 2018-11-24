import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberManageComponent } from './member-manage/member-manage.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
