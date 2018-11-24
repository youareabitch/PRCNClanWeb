import { Component, OnInit } from '@angular/core';
import { MemberBM } from '../Model/member-bm';
import { MemberService } from '../Service/member-service';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-member-manage',
  templateUrl: './member-manage.component.html',
  styleUrls: ['./member-manage.component.css']
})
export class MemberManageComponent implements OnInit  {
  isCheckedRow=false;
  datas:Array<{MemberID:string; Name: string; ID: string; checked: boolean}>;
  displayData: Array<{ MemberID: string; Name: string; ID: string; checked: boolean }> = [];
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

  currentPageDataChange($event: Array<{ MemberID: string; Name: string; ID: string; checked: boolean }>): void {
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
}
