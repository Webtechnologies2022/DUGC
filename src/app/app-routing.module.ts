import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
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
import { AppComponent } from './app.component';
import { CourseWithdrawalMainComponent } from './course-withdrawal/course-withdrawal-main/course-withdrawal-main.component';
// Course withdrawal components
import { CourseWithdrawalComponent } from './course-withdrawal/course-withdrawal/course-withdrawal.component';
import { CourseWidthdrawalReportComponent } from './course-withdrawal/course-widthdrawal-report/course-widthdrawal-report.component';
import { CourseWithdrawalApplicationComponent } from './course-withdrawal/course-withdrawal-application/course-withdrawal-application.component';
import { WithdrawalNavbarComponent } from './course-withdrawal/navbar/navbar.component';
import { EndsemAnalysisMainComponent } from './endsem-analysis/endsem-analysis-main/endsem-analysis-main.component';

//End sem analysis component
import { LoginComponent } from './endsem-analysis/login/login.component';
import { AnalysisComponent } from './endsem-analysis/analysis/analysis.component';

//Lab analysis
import { LabAnalysisMainComponent } from './lab-analysis/lab-analysis-main/lab-analysis-main.component';
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

//Circular

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
import { CircularMainComponent } from './circular/circular-main/circular-main.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { SendComponent } from './circular/send/send.component';
//eligibility list
// import { HomeComponent } from './eligibility/home/home.component';
import { LabComponent } from './eligibility/lab/lab.component';
import { ApListComponent } from './eligibility/ap-list/ap-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadStudentComponent } from './eligibility/upload-student/upload-student.component';
import { LabresultsComponent } from './eligibility/lab/labresults/labresults.component';
import { TheoryComponent } from './eligibility/ap-list/theory/theory.component';
import { Uploadlist2Component } from './eligibility/upload-student/uploadlist2/uploadlist2.component';
import { Uploadlist3Component } from './eligibility/upload-student/uploadlist3/uploadlist3.component';
import { EligibilityHomeComponent } from './eligibility/eligibility-home/eligibility-home.component';
//makeupminor
import { MinorMainComponent } from './makeup-minor/minor-main/minor-main.component';
import { MakeupMinorComponent } from './makeup-minor/makeup-minor.component';
import { StudenteditComponent } from './makeup-minor/studentedit/studentedit.component';
import { StudentlistComponent } from './makeup-minor/studentlist/studentlist.component';
import { AddStudentComponent } from './makeup-minor/add-student/add-student.component';
import { RegisterComponent } from './makeup-minor/register/register.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { DugcLoginComponent } from './dugc-login/dugc-login.component';
import { AuthMainService } from './auth-main.service';
import { GuardService } from './guards/guard.service';
import { DugcService } from './guards/dugc.service';
import { CoordinatorService } from './guards/coordinator.service';
import { DugcRegisterComponent } from './dugc-register/dugc-register.component';

const routes: Routes = [
  { path: 'loginMain', component: DugcLoginComponent },
  { path: 'registerMain', component: DugcRegisterComponent },
  {
    path: 'homeMain',
    component: MainHomepageComponent,
    canActivate: [GuardService],
  },
  {
    path: 'Minor',
    component: MinorAnalysisMainComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'dugc_chairman',
        component: DugcChairmanComponent,
      },
      { path: 'dugc', component: DugcComponent },
      { path: 'charts', component: ChartsComponent },
      {
        path: 'coordinator',
        component: CoordinatorComponent,
        children: [
          {
            path: 'single',
            component: SingleSheetUploadComponent,
          },
          {
            path: 'consolidated',
            component: ConsolidatedSheetUploadComponent,
          },
          {
            path: 'delete',
            component: DeleteSheetComponent,
          },
          {
            path: 'upload_status',
            component: UploadResultComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'Withdrawal',
    component: CourseWithdrawalMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'Home',canActivate:[DugcService], component: CourseWithdrawalComponent },
      { path: 'Application',canActivate:[DugcService], component: CourseWithdrawalApplicationComponent },
      { path: 'Report',canActivate:[DugcService], component: CourseWidthdrawalReportComponent },
    ],
  },
  {
    path: 'Endsem',
    component: EndsemAnalysisMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'analysis', component: AnalysisComponent },
    ],
  },
  {
    path: 'Lab',
    component: LabAnalysisMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'adiv2021', component: Adiv2021Component },
      { path: 'aml2021', component: Aml2021Component },
      { path: 'ass2021', component: Ass2021Component },
      { path: 'awt2021', component: Awt2021Component },
      { path: 'adiv2020', component: Adiv2020Component },
      { path: 'adiv2022', component: Adiv2022Component },
      { path: 'upload', component: UploadComponent },
      { path: 'a32021', component: A32021Component },
      { path: 'adsa2021', component: Adsa2021Component },
      { path: 'adbms2021', component: Adbms2021Component },
      { path: 'asnp2021', component: Asnp2021Component },
      { path: 'a32020', component: A32020Component },
      { path: 'upload5', component: Upload5Component },
      { path: 'upload7', component: Upload7Component },
      { path: 'a42021', component: A42021Component },
      { path: 'a42020', component: A42020Component },
      { path: 'amcp2021', component: Amcp2021Component },
      { path: 'aoops2021', component: Aoops2021Component },
      { path: 'aeda2021', component: Aeda2021Component },
      { path: 'aos2021', component: Aos2021Component },
      { path: 'acn2021', component: Acn2021Component },
      { path: 'bcn2021', component: Bcn2021Component },
      { path: 'bsnp2021', component: Bsnp2021Component },
      { path: 'sem8', component: Sem8Component },
      { path: '', redirectTo: '/Lab/home', pathMatch: 'full' },
    ],
  },
  {
    path: 'Circular',
    component: CircularMainComponent,
    canActivate: [GuardService],
    children: [
      { path: 'home', component: HomeComponentCircular },
      { path: 'ns', component: NsComponent },
      { path: 'ni', component: NiComponent },
      { path: 'nw', component: NwComponent },
      { path: 'na', component: NaComponent },
      { path: 'nm', component: NmComponent },
      { path: 'cer', component: CerComponent },
      { path: 'cin', component: CinComponent },
      { path: 'ccw', component: CcwComponent },
      { path: 'cam', component: CamComponent },
      { path: 'cmm', component: CmmComponent },
      { path: 'circular', component: CircularComponent },
      { path: 'mints', component: MintsComponent },
      { path: 'notice', component: NoticeComponent },
      { path: 'nav', component: NavComponent },
      { path: 'send', component: SendComponent },
      {
        path: 'login',
        component: LoginComponentCircular,
      },
    ],
  },
  {
    path: 'eligibility',
    component: EligibilityComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'ap-list',
        component: ApListComponent,canActivate:[DugcService],
        children: [{ path: 'theoryresults', component: TheoryComponent }],
      },
      {
        path: 'lab',canActivate:[DugcService],
        component: LabComponent,
        children: [{ path: 'labresults', component: LabresultsComponent }],
      },
      {
        path: 'upload',canActivate:[CoordinatorService],
        component: UploadStudentComponent,
        children: [
          { path: 'uploadtheory', component: Uploadlist2Component },
          { path: 'uploadlab', component: Uploadlist3Component },
        ],
      },
    ],
  },

  {
    path: 'makeup',
    component: MinorMainComponent,
    canActivate: [GuardService],
    children: [
      // {path: 'login',component:LoginComponent},
      //  {path: 'register',component:RegisterComponent},
      { path: 'add-student',canActivate:[DugcService], component: AddStudentComponent },
      { path: 'edit-student',canActivate:[DugcService], component: StudenteditComponent },
      { path: 'list-student',canActivate:[DugcService], component: StudentlistComponent },
      //  {path:'',redirectTo:'/makeup/add-student',pathMatch: 'full'}
    ],
  },
  { path: '', component: MainHomepageComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
