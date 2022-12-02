import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
