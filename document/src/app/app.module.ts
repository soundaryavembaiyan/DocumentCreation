import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoceditorComponent, ViewDocComponent, OpendialogBoxComponent, DownloadBoxComponent } from './doceditor/doceditor.component';
import { LatexblockComponent, LatexDialogComponent, SectionDialogComponent, SubsectionDialogComponent, SubsubsectionDialogComponent } from './doceditor/latexblock/latexblock.component';

@NgModule({
  declarations: [
    AppComponent,
    DoceditorComponent,
    ViewDocComponent, 
    OpendialogBoxComponent, 
    DownloadBoxComponent,
    LatexblockComponent,
    LatexDialogComponent, 
    SectionDialogComponent, 
    SubsectionDialogComponent, 
    SubsubsectionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
