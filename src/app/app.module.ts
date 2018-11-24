import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_TW, NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MemberManageComponent } from './member-manage/member-manage.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { BossManageComponent } from './boss-manage/boss-manage.component';
import { BossDetailComponent } from './boss-detail/boss-detail.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MemberManageComponent,
    MemberDetailComponent,
    BossManageComponent,
    BossDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW },{ provide: NZ_MESSAGE_CONFIG, useValue: { nzMaxStack: 1 }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
