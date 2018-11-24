import { Component, OnInit } from '@angular/core';
import { Common } from '../Helper/common';
import { MemberService } from '../Service/member-service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from '../../../node_modules/ng-zorro-antd';
import { MemberBM } from '../Model/member-bm';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent extends Common implements OnInit {
  memberID:string="";
  member:MemberBM=new MemberBM();

  constructor(private memberService:MemberService,
    private route:ActivatedRoute,
    private router:Router,
    private spinService:SpinService,
    private alertService: NzMessageService) {
    super();
    this.route.params.subscribe(x=>this.memberID=x.id);
  }

  ngOnInit() {
    if(this.memberID!=undefined){
      this.spinService.Spin();
      this.memberService.GetByID(this.memberID).subscribe(x=>{
        if(x.result){
          this.member=x.data;
        }else{
          this.alertService.error(x.message);
        }
      this.spinService.UnSpin();
      },error=>{
        this.alertService.error(error.message);
      this.spinService.UnSpin();
      });
    }
  }

  Save(){
    this.spinService.Spin();
  if(this.memberID==undefined){ //新增
    this.memberService.Add(this.member).subscribe(x=>{
      if(x.result){
        this.alertService.success("新增成功");
        this.router.navigate(["/MemberManage"]);
      }else{
        this.alertService.error(x.message);
      }
    this.spinService.UnSpin();
    },error=>{
      this.alertService.error(error.message);
    this.spinService.UnSpin();
    });
  }else{ //修改
    this.spinService.Spin();
    this.memberService.Edit(this.member).subscribe(x=>{
      if(x.result){
        this.alertService.success("修改成功");
        this.router.navigate(["/MemberManage"]);
      }else{
        this.alertService.error(x.message);
      }
    this.spinService.UnSpin();
    },error=>{
      this.alertService.error(error.message);
    this.spinService.UnSpin();
    });
  }
}
}
