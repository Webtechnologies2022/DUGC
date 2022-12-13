import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { EndsemAnalysisMainComponent } from './endsem-analysis/endsem-analysis-main/endsem-analysis-main.component';

//End sem analysis module

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './endsem-analysis/login/login.component';
import { AnalysisComponent } from './endsem-analysis/analysis/analysis.component';
import { LabAnalysisMainComponent } from './lab-analysis/lab-analysis-main/lab-analysis-main.component';

//Lab analysis module
import { HomeComponent } from './lab-analysis/home/home.component';
import { Adiv2021Component } from './lab-analysis/adiv2021/adiv2021.component';
import { Aml2021Component } from './lab-analysis/aml2021/aml2021.component';
import { Ass2021Component } from './lab-analysis/ass2021/ass2021.component';
import { Awt2021Component } from './lab-analysis/awt2021/awt2021.component';
import { Adiv2020Component } from './lab-analysis/adiv2020/adiv2020.component';
import { Adiv2022Component } from './lab-analysis/adiv2022/adiv2022.component';
import { UploadComponent } from './lab-analysis/upload/upload.component';
import { A32021Component } from './lab-analysis/a32021/a32021.component';
import { Adsa2021Component } from './lab-analysis/adsa2021/adsa2021.component';
import { Adbms2021Component } from './lab-analysis/adbms2021/adbms2021.component';
import { Asnp2021Component } from './lab-analysis/asnp2021/asnp2021.component';
import { A32020Component } from './lab-analysis/a32020/a32020.component';
import { Upload5Component } from './lab-analysis/upload5/upload5.component';
import { Upload7Component } from './lab-analysis/upload7/upload7.component';
import { DxChartModule } from 'devextreme-angular';
import { A42021Component } from './lab-analysis/a42021/a42021.component';
import { Amcp2021Component } from './lab-analysis/amcp2021/amcp2021.component';
import { A42020Component } from './lab-analysis/a42020/a42020.component';
import { Aoops2021Component } from './lab-analysis/aoops2021/aoops2021.component';
import { Aeda2021Component } from './lab-analysis/aeda2021/aeda2021.component';
import { Aos2021Component } from './lab-analysis/aos2021/aos2021.component';
import { Acn2021Component } from './lab-analysis/acn2021/acn2021.component';
import { Bsnp2021Component } from './lab-analysis/bsnp2021/bsnp2021.component';
import { Bcn2021Component } from './lab-analysis/bcn2021/bcn2021.component';
import { Sem8Component } from './lab-analysis/sem8/sem8.component';
import { CircularMainComponent } from './circular/circular-main/circular-main.component';

//Circular component

import { LoginComponentCircular } from './circular/login/login.component';
import { CircularComponent } from './circular/circular/circular.component';
import { MintsComponent } from './circular/mints/mints.component';
import { NoticeComponent } from './circular/notice/notice.component';
import { LayoutComponent } from './circular/layout/layout.component';
import { AuthService } from './circular/auth.service';
import { materialize } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { CmmComponent } from './circular/cmm/cmm.component';
import { CamComponent } from './circular/cam/cam.component';
import { CcwComponent } from './circular/ccw/ccw.component';
import { CinComponent } from './circular/cin/cin.component';
import { CerComponent } from './circular/cer/cer.component';
import { NmComponent } from './circular/nm/nm.component';
import { NaComponent } from './circular/na/na.component';
import { NwComponent } from './circular/nw/nw.component';
import { NsComponent } from './circular/ns/ns.component';
import { HomeComponentCircular } from './circular/home/home.component';
import { NiComponent } from './circular/ni/ni.component';
import { NavComponent } from './circular/nav/nav.component';

//eligibility
import { EligibilityComponent } from './eligibility/eligibility.component';
import { LabComponent } from './eligibility/lab/lab.component';
import { ApListComponent } from './eligibility/ap-list/ap-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadStudentComponent } from './eligibility/upload-student/upload-student.component';
import { NgxPrintModule } from 'ngx-print';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EligibilityHomeComponent } from './eligibility/eligibility-home/eligibility-home.component';
import { TheoryComponent } from './eligibility/ap-list/theory/theory.component';
import { LabresultsComponent } from './eligibility/lab/labresults/labresults.component';
import { Uploadlist2Component } from './eligibility/upload-student/uploadlist2/uploadlist2.component';
import { Uploadlist3Component } from './eligibility/upload-student/uploadlist3/uploadlist3.component';
//makeupMinor
import { MakeupMinorComponent } from './makeup-minor/makeup-minor.component';
import { StudenteditComponent } from './makeup-minor/studentedit/studentedit.component';
import { StudentlistComponent } from './makeup-minor/studentlist/studentlist.component';
import { AddStudentComponent } from './makeup-minor/add-student/add-student.component';
import { RegisterComponent } from './makeup-minor/register/register.component';
import { MinorMainComponent } from './makeup-minor/minor-main/minor-main.component';
import { DugcLoginComponent } from './dugc-login/dugc-login.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { GuardService } from './guards/guard.service';
import { TokenVerificationService } from './guards/token-verification.service';
import { SendComponent } from './circular/send/send.component';
import { DugcRegisterComponent } from './dugc-register/dugc-register.component';
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

    LoginComponent,
    EndsemAnalysisMainComponent,
    AnalysisComponent,
    LabAnalysisMainComponent,

    //Lab analysis components
    HomeComponent,
    Adiv2021Component,
    Aml2021Component,
    Ass2021Component,
    Awt2021Component,
    Adiv2020Component,
    Adiv2022Component,
    UploadComponent,
    A32021Component,
    Adsa2021Component,
    Adbms2021Component,
    Asnp2021Component,
    A32020Component,
    Upload5Component,
    Upload7Component,
    A42021Component,
    Amcp2021Component,
    A42020Component,
    Aoops2021Component,
    Aeda2021Component,
    Aos2021Component,
    Acn2021Component,
    Bsnp2021Component,
    Bcn2021Component,
    Sem8Component,
    CircularMainComponent,

    //Circular component
    AppComponent,
    LoginComponentCircular,
    CircularComponent,
    MintsComponent,
    NoticeComponent,
    LayoutComponent,
    CmmComponent,
    CamComponent,
    CcwComponent,
    CinComponent,
    CerComponent,
    NmComponent,
    NaComponent,
    NwComponent,
    NsComponent,
    HomeComponentCircular,
    NiComponent,
    NavComponent,
    //elibility
    EligibilityComponent,
    LabComponent,
    UploadStudentComponent,
    ApListComponent,
    PagenotfoundComponent,
    TheoryComponent,
    LabresultsComponent,
    Uploadlist2Component,
    Uploadlist3Component,

    //makeupminor
    MakeupMinorComponent,
    RegisterComponent,
    AddStudentComponent,
    StudenteditComponent,
    StudentlistComponent,
    MinorMainComponent,
    DugcLoginComponent,
    MainHomepageComponent,
    SendComponent,
    DugcRegisterComponent,
  ],
  imports: [
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DxChartModule,
    NgxPrintModule
  ],
  providers: [AuthService,GuardService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenVerificationService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
