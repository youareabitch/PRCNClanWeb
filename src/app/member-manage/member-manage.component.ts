import { Component, OnInit } from '@angular/core';
import { MemberService } from '../Service/member-service';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from 'ng-zorro-antd';
import { MemberVM } from '../Model/member-vm';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.css']
})
export class MemberManageComponent implements OnInit  {
  isCheckedRow=false;
  datas:Array<MemberVM>;
  displayData: Array<MemberVM> = [];
  allChecked = false;
  indeterminate = false;
  checkedNumber = 0;

  constructor(private memberService:MemberService,
              private spinService:SpinService,
              private message: NzMessageService) {
  }

  ngOnInit() {
    this.spinService.Spin();
    this.memberService.GetAllAM().subscribe(x=>{
      if(x.result){
        this.datas=x.data;
      }else{
        this.message.error(x.message);
      }
    this.spinService.UnSpin();
    },error=>{
      this.message.error(error.message);
    this.spinService.UnSpin();
    });
  }

  currentPageDataChange($event: Array<MemberVM>): void {
    this.displayData = $event;
  }

  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.isCheckedRow = this.datas.some(value => value.checked);
    this.checkedNumber = this.datas.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }

  delete(){
    let ids:string[]=[];
    this.datas.filter(x=>x.checked).forEach(x=>ids.push(x.MemberID));
    this.spinService.Spin();
    this.memberService.DeleteRange(ids).subscribe(x=>{
      if(x.result){
        this.message.success("刪除成功");
        this.datas=this.datas.filter(x=>!x.checked);
        this.displayData=this.datas;
        this.refreshStatus();
      }else{
        this.message.error(x.message);
      }
      this.spinService.UnSpin();
    },error=>{
      this.message.error(error.message);
      this.spinService.UnSpin();
    });
  }
}
