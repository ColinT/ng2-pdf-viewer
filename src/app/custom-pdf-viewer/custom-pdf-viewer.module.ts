import { NgModule } from '@angular/core';

import { CustomPdfViewerComponent } from './custom-pdf-viewer.component';

import { PdfViewerModule } from '../pdf-viewer/pdf-viewer.module';

@NgModule({
  imports: [PdfViewerModule],
  declarations: [CustomPdfViewerComponent],
  exports: [CustomPdfViewerComponent]
})
export class CustomPdfViewerModule {}
