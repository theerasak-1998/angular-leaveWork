import { CrudService } from './../../crud.service';
import { LeaveDetailComponent } from './../leave-detail/leave-detail.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-uncheck-list',
  templateUrl: './admin-uncheck-list.component.html',
  styleUrls: ['./admin-uncheck-list.component.css']
})
export class AdminUncheckListComponent implements OnInit {
  listAlluser: any = [];
  dataDetailSendBefore: any;
  count: any;
  body = {
    page: 1,
    check: '0',
  };
  model_search = {
    search: '',
  };
  
  constructor(private userservice: UserService,
    private nzdrawerservice: NzDrawerService,
    private crud:CrudService) { }

  ngOnInit(): void {
    this.getAlluser(this.body)
  }
  getAlluser(data: any) {
    console.log(this.body);
    this.userservice.getAlluser(data).then((res: any) => {
      this.listAlluser = res.data;
      this.count = res.count;
      // console.log(this.count);
    });
  }
  refreshData(value: any) {
    this.dataDetailSendBefore = { ...value };
    this.openDetail();
    // console.log(this.dataDetailSendBefore);
  }
  openDetail() {
    const drawRef = this.nzdrawerservice.create<
      LeaveDetailComponent,
      { dataDetailSendAfter: any }
    >({
      nzTitle: 'รายละเอียด',
      nzContent: LeaveDetailComponent,
      nzWidth: '45%',
      nzContentParams: {
        dataDetailSendAfter: this.dataDetailSendBefore,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.getAlluser(this.body);
    });
  }
  click($event: any) {
    this.body.page = $event;
    this.getAlluser(this.body);
  }
  changeFilter() {
    console.log('running');
    this.crud.filter(this.model_search).then((res: any) => {
      this.listAlluser = res.data;
      this.count = res.count;
      console.log(this.listAlluser);
    });
  }
}