import { Component, Input } from '@angular/core';
import { PDFSource } from 'pdfjs-dist';

@Component({
  selector: 'custom-pdf-viewer',
  template: `
    <span>pdfPageNumber: {{pdfPageNumber}}; totalPdfPageNumber: {{totalPdfPageNumber}}; pdfNo: {{pdfNo}}</span>
    <pdf-viewer [src]="src" [page]="pdfNo" [show-all]="false"></pdf-viewer>
  `
})

export class CustomPdfViewerComponent {
  @Input('src') src: string | Uint8Array | PDFSource;
  @Input('pdfPageNumber') set pdfPageNumber(value: number) {
    this._pdfPageNumber = value;
    this.pdfNo = value;
    if (this.pdfNo > this.totalPdfPageNumber) {
      this.pdfNo = this.totalPdfPageNumber;
    }
  }
  get pdfPageNumber(): number {
    return this._pdfPageNumber;
  }
  private _pdfPageNumber: number;

  pdfNo: number;
  totalPdfPageNumber = 3;
}
