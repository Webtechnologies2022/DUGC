import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MinorAnalysisMainComponent } from './minor-analysis/minor-analysis-main/minor-analysis-main.component';
import { NavbarComponent } from './minor-analysis/navbar/navbar.component';
import { UploadSheetsComponent } from './minor-analysis/upload-sheets/upload-sheets.component';
import { DugcChairmanComponent } from './minor-analysis/dugc-chairman/dugc-chairman.component';
import { DugcComponent } from './minor-analysis/dugc/dugc.component';
import { CoordinatorComponent } from './minor-analysis/coordinator/coordinator.component';
import { SingleSheetUploadComponent } from './minor-analysis/single-sheet-upload/single-sheet-upload.component';
import { ConsolidatedSheetUploadComponent } from './minor-analysis/consolidated-sheet-upload/consolidated-sheet-upload.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './minor-analysis/charts/charts.component';

import { DeleteSheetComponent } from './minor-analysis/delete-sheet/delete-sheet.component';
import { UploadResultComponent } from './minor-analysis/upload-result/upload-result.component';
import { ToastrModule } from 'ngx-toastr';

//Withdrawal module
import { CourseWithdrawalComponent } from './course-withdrawal/course-withdrawal/course-withdrawal.component';
import { CourseWidthdrawalReportComponent } from './course-withdrawal/course-widthdrawal-report/course-widthdrawal-report.component';
import { CourseWithdrawalApplicationComponent } from './course-withdrawal/course-withdrawal-application/course-withdrawal-application.component';
import { WithdrawalNavbarComponent } from './course-withdrawal/navbar/navbar.component';
import { CourseWithdrawalMainComponent } from './course-withdrawal/course-withdrawal-main/course-withdrawal-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MinorAnalysisMainComponent,
    NavbarComponent,
    UploadSheetsComponent,
    DugcChairmanComponent,
    DugcComponent,
    CoordinatorComponent,
    SingleSheetUploadComponent,
    ConsolidatedSheetUploadComponent,
    ChartsComponent,
    DeleteSheetComponent,
    UploadResultComponent,
    AppComponent,
    CourseWithdrawalComponent,
    CourseWidthdrawalReportComponent,
    CourseWithdrawalApplicationComponent,
    WithdrawalNavbarComponent,
    CourseWithdrawalMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
