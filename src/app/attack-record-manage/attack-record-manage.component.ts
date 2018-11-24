import { Component, OnInit } from '@angular/core';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from 'ng-zorro-antd';
import { AttackRecordVM } from '../Model/attack-record-vm';
import { AttackRecordService } from '../Service/attack-record.service';

@Component({
  selector: 'app-attack-record-manage',
  templateUrl: './attack-record-manage.component.html',
  styleUrls: ['./attack-record-manage.component.css']
})
export class AttackRecordManageComponent implements OnInit {
  isCheckedRow=false;
  datas:Array<AttackRecordVM>;
  displayData: Array<AttackRecordVM> = [];
  allChecked = false;
  indeterminate = false;
  checkedNumber = 0;

  constructor(private attackRecordService:AttackRecordService,
              private spinService:SpinService,
              private message: NzMessageService) { }

  ngOnInit() {
    this.spinService.Spin();
    this.attackRecordService.GetAllAM().subscribe(x=>{
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

  currentPageDataChange($event: Array<AttackRecordVM>): void {
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
    this.datas.filter(x=>x.checked).forEach(x=>ids.push(x.AttackRecordID));
    this.spinService.Spin();
    this.attackRecordService.DeleteRange(ids).subscribe(x=>{
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
