import { Component, OnInit } from '@angular/core';
import { SpinService } from '../Service/spin-service';
import { NzMessageService } from 'ng-zorro-antd';
import { BossVM } from '../Model/boss-vm';
import { BossServiceService } from '../Service/boss-service.service';

@Component({
  selector: 'app-boss-manage',
  templateUrl: './boss-manage.component.html',
  styleUrls: ['./boss-manage.component.css']
})
export class BossManageComponent implements OnInit {
  isCheckedRow=false;
  datas:Array<BossVM>;
  displayData: Array<BossVM> = [];
  allChecked = false;
  indeterminate = false;
  checkedNumber = 0;

  constructor(private bossService:BossServiceService,
              private spinService:SpinService,
              private message: NzMessageService) { }

  ngOnInit() {
    this.spinService.Spin();
    this.bossService.GetAllAM().subscribe(x=>{
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

  currentPageDataChange($event: Array<BossVM>): void {
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
    this.datas.filter(x=>x.checked).forEach(x=>ids.push(x.BossID));
    this.spinService.Spin();
    this.bossService.DeleteRange(ids).subscribe(x=>{
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
