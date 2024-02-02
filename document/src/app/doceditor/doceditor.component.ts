import { Component, Inject, Injectable, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewInit, Optional, ChangeDetectionStrategy } from '@angular/core';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-doceditor',
  templateUrl: './doceditor.component.html',
  styleUrls: ['./doceditor.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DoceditorComponent {

  // @ViewChild('pdfContent') pdfContent!: ElementRef;

  // myForm: any;
  // isDisabled: boolean = true;
  // documents: any[] = [];

  // documentname: any;
  // title: string = 'New Document';
  // author: string = 'Author';

  // overview: any;
  // //overviewTitle: any;

  // section: any;
  // sectionTitle: any;

  // subsection: any;
  // subsectionTitle: any;

  // subsubsection: any;
  // subsubsectionTitle: any;

  // paragraph: any;
  // paragraphTitle: any;

  // orderlist: any;
  // orderlistTitle: any;

  // unorderlist: any;
  // unorderlistTitle: any;

  // orderListItems: any;
  // unorderListItems: any;

  // disabled = false;
  // isPageBreak: boolean = false;
  // pdfSrc: any;

  // documentId: any;
  // pageId: any;

  // latexcode: any;
  // docid: any;
  // currentDocId: any;
  // //latexdoc = environment.lateXAPI;
  // submitted = false;

  // selectedValue: string = "create";
  // isDisplay: boolean = true;
  // successModel: boolean = false;
  // selectedOption: any;

  // currentDate = new Date();
  // date = this.currentDate;

  // isOpen: boolean = false;
  // blocks: any[] = [];

  // selectedSection: any = null;
  // selectedSubSection: any = null;
  // childFormData: any;
  // dialog: any;

  // constructor(private router: Router, private fb: FormBuilder,
  //   private renderer: Renderer2,
  //   public sanitizer: DomSanitizer) {
  // }

  // ngOnInit() {

  //   this.myForm = this.fb.group({
  //     title: [this.title],
  //     author: [this.author],
  //     date: [this.date],
  //   });

  //   //this.myForm.get('title').setValue('New Document');  //get formData without using ngModel
  //   this.orderListItems = this.myForm.get('orderListItems') as FormArray;
  //   this.unorderListItems = this.myForm.get('unorderListItems') as FormArray;

  //   this.getDocumentCall();

  //   // this.myForm.formDataEvent.subscribe((data: any) => {
  //   //   this.handleFormData(data);
  //   // });
  // }

  // handleFormData(data: any) {
  //   this.childFormData = data;
  //   // this.myForm.patchValue(data);
  //   // this.myForm.setValue(data);
  //   console.log('Received childformData:', data);
  // }

  // saveDocument() {
  //   const formData = this.childFormData;
  //   // console.log('Form Data:', formData);
  //   let combinedObject2 = { ...formData, ...this.myForm.value };
  //   console.log('combinedObject2:', combinedObject2);
  //   //this.myForm.reset();
  // }

  // addBlock(type: any) {
  //   this.isOpen = true;

  //   const overviewExists = this.blocks.some(block => block.content === 'OVERVIEW');
  //   // If 'OVERVIEW' exists, show an error message and return
  //   if (type === 'OVERVIEW' && overviewExists) {
  //     //this.toast.error('Only one overview is allowed!');
  //     return;
  //   }
  //   // For 'SUB SECTION', check if 'SECTION' is selected
  //   if (type === 'SUB SECTION' && this.selectedSection === null) {
  //     //this.toast.error('Please select a Section before adding a Sub Section.');
  //     return;
  //   }
  //   // For 'SUB SUB SECTION', check if 'SUB SECTION' is selected
  //   if (type === 'SUB SUB SECTION' && this.selectedSubSection === null) {
  //     //this.toast.error('Please select a Sub Section before adding a Sub Sub Section.');
  //     return;
  //   }
  //   // For 'SECTION', update the selected section and add the new block
  //   if (type === 'SECTION') {
  //     this.selectedSection = type;
  //     this.selectedSubSection = null;
  //     this.blocks.push({ content: type });
  //   } else if (type === 'SUB SECTION') {
  //     this.selectedSubSection = type;
  //     this.blocks.push({ content: type });
  //   } else if (type === 'SUB SUB SECTION') {
  //     this.blocks.push({ content: type });
  //   } else {
  //     // For all content types!!
  //     this.blocks.push({ content: type });
  //   }
  //   //console.log('Blocks:', this.blocks);
  // }

  // getDocumentCall() {
  //   //Get all Document
  //   // this.httpservice.sendGetLatexDoc(URLUtils.getDocument).subscribe(
  //   //   (res: any) => {
  //   //     //this.documents = res;
  //   //     this.documents = res[0].documentname;
  //   //     //console.log('this.documents', this.documents)
  //   //   }
  //   // );
  // }

  // isActive(value: string) {
  //   this.selectedValue = value;
  //   this.selectedValue == 'create' ? this.router.navigate(['/doceditor']) : this.router.navigate(['/viewdoc']);
  // }

  // hideAndShow() {
  //   this.isDisplay = !this.isDisplay;
  // }

  // //Save As dialog box!!
  // downloadDialog() {
  //   const dialogRef = this.dialog.open(DownloadBoxComponent, {
  //     width: '500px',
  //     height: '200px',
  //     data: {
  //       //documentname: this.documentname,
  //       documentId: this.documentId
  //     },
  //     hasBackdrop: true,
  //     panelClass: 'hello',
  //     autoFocus: true
  //   });

  //   dialogRef.afterClosed().subscribe((result: { docid: any, documentname: any }) => {
  //     if (result) {
  //       this.documentname = result.documentname;
  //       this.documentId = result.docid;
  //       //console.log('docname',this.documentname)
  //       // this.httpservice.sendGetLatexDoc(URLUtils.savedDocid(this.documentId)).subscribe(
  //       //   (res: any) => {

  //       //   });
  //     }
  //   });
  // }

  // newDoc() {
  //   //don't need to reset
  //   const preservedValues = {
  //     title: this.myForm.get('title').value,
  //     author: this.myForm.get('author').value,
  //     date: this.myForm.get('date').value,
  //   };

  //   this.myForm.reset();
  //   this.myForm.patchValue(preservedValues); //values back into the form
  //   this.isOpen = false;
  //   // this.router.navigate(['/doceditor']);
  // }

  // getDocument() {
  //   let req = { "documentname": this.myForm.value.title };
  //   //FIRST API
  //   // this.httpservice.sendPostLatexRequest(URLUtils.savedoc, req).subscribe(
  //   //   (res: any) => {
  //   //     const documentId = res.id;
  //   //     this.documentId = documentId;
  //   //     //this.docidSave(documentId); //secondAPI methodcall
  //   //   });
  // }

  // saveDoc() {
  //   const formValues = this.childFormData;
  //   let combinedObject2 = { ...formValues, ...this.myForm.value };
  //   console.log('combinedObject2:', combinedObject2);
  //   // console.log('Formvalues:', formValues);
  //   console.log('formValues:', formValues);

  //   let latexDocument = `\\documentclass{article}<ltk>\\usepackage{geometry}<ltk>\\geometry{a4paper,total={170mm,257mm},left=20mm,top=20mm}<ltk>\\title{${combinedObject2.title}}<ltk>\\author{${combinedObject2.author}}<ltk>\\date{${combinedObject2.date}}<ltk>\\begin{document}<ltk>\\maketitle`
   
  //   if (combinedObject2.overview) { latexDocument += `<ltk>\\abstract${combinedObject2.overview}`}
  //   if (combinedObject2.section || combinedObject2.sectionTitle) { latexDocument += `<ltk>\\section{${combinedObject2.sectionTitle || ''}}${combinedObject2.section || ''}`}
  //   if (combinedObject2.subsection || combinedObject2.subsectionTitle) { latexDocument += `<ltk>\\subsection{${combinedObject2.subsectionTitle || ''}}${combinedObject2.subsection || ''}`}
  //   if (combinedObject2.subsubsection || combinedObject2.subsubsectionTitle) { latexDocument += `<ltk>\\subsubsection{${combinedObject2.subsubsectionTitle || ''}}${combinedObject2.subsubsection || ''}`}
  //   if (combinedObject2.paragraph || combinedObject2.paragraphTitle) { latexDocument += `<ltk>\\paragraph{${combinedObject2.paragraphTitle || ''}}${combinedObject2.paragraph || ''}`}
  //   //if (combinedObject2.orderListItems) { latexDocument += `<ltk>\\begin{enumerate}${combinedObject2.orderListItems.map((item: any) => `\\item ${item.orderlist}`)}\\end{enumerate}`}
  //   //if (combinedObject2.unorderListItems) { latexDocument += `<ltk>\\begin{itemize}${combinedObject2.unorderListItems.map((item: any) => `\\item ${item.unorderlist}`)}\\end{itemize}`};
  //   if (combinedObject2.orderListItems && combinedObject2.orderListItems.some((item: any) => item.orderlist.trim() !== '')) {
  //     latexDocument += `<ltk>\\begin{enumerate}${combinedObject2.orderListItems.map((item: any) => `\\item ${item.orderlist}`).join('')}\\end{enumerate}`;
  //   }
  //   if (combinedObject2.unorderListItems && combinedObject2.unorderListItems.some((item: any) => item.unorderlist.trim() !== '')) {
  //     latexDocument += `<ltk>\\begin{itemize}${combinedObject2.unorderListItems.map((item: any) => `\\item ${item.unorderlist}`).join('')}\\end{itemize}`;
  //   }

  //   console.log('lateX', latexDocument);

  //   let reqq = {
  //     "document": latexDocument,
  //     "page": 1
  //   };

  //   if (this.documentId == null) {
  //     //this.submitted = true;
  //     let req = { "documentname": combinedObject2.title };
  //     //FIRST API
  //     // this.httpservice.sendPostLatexRequest(URLUtils.savedoc, req).subscribe(
  //     //   (res: any) => {
  //     //     const documentId = res.id;
  //     //     this.documentId = documentId;
  //     //     //console.log('DocID to saveas:', this.documentId);
  //     //     //SECONDAPI 
  //     //     this.httpservice.sendPostLatexRequest(URLUtils.savedocID(this.documentId), reqq).subscribe(
  //     //       (ress: any) => {
  //     //         this.pageId = ress.id;
  //     //         this.toast.success(ress.message);
  //     //         //console.log('checkid1', this.documentId);
  //     //       }
  //     //     );
  //     //   });
  //   }
  //   else {
  //     //THIRDAPI - for update 
  //     //console.log('checkid2', this.documentId)
  //     // this.httpservice.sendPatchLatexRequest(URLUtils.updateDoc(this.pageId), reqq).subscribe(
  //     //   (resp: any) => {
  //     //     this.toast.success(resp.message);
  //     //   });
  //   }
  // }

  // getPreview() {
  //   //PREVIEW API
  //   //console.log('preview docid:', this.documentId)
  //   if (this.documentId == '' || this.documentId == null) {
  //     this.submitted = true;
  //     //this.toast.error("Please save the document") //If user clicks the previewIcon directly.
  //   }
  //   else {
  //     //let url = this.latexdoc + URLUtils.getPreview(this.documentId)
  //     //console.log('PdfUrl:', url)
  //     this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //     //console.log('pdfSrc:', this.pdfSrc)
  //   }
  // }

  // //PAGE BREAK FUNCTION
  // insertPageBreak() {
  //   // if (this.content && this.content.nativeElement) {
  //   //   const pageBreak = this.renderer.createElement('div');
  //   //   this.renderer.addClass(pageBreak, 'page-break');
  //   //   // visual representation of the page break
  //   //   this.renderer.setStyle(pageBreak, 'page-break-before', 'always');
  //   //   this.renderer.setStyle(pageBreak, 'border-top', '1px dashed #000');
  //   //   this.renderer.setStyle(pageBreak, 'margin-top', '20px'); // Adjust as needed
  //   //   this.renderer.appendChild(this.content.nativeElement, pageBreak);
  //   // }
  // }

  // //Open document Dialog box!
  // openDocumentDialog() {
  //   const dialogRef = this.dialog.open(OpendialogBoxComponent, {
  //     width: '500px',
  //     height: '500px',
  //     data: {
  //       title: this.title
  //     },
  //     //backdropClass: 'backdropBackground'
  //     hasBackdrop: true,
  //     panelClass: 'hello',
  //     autoFocus: true
  //   });

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     //console.log("result after docClose:", result)
  //     if (result.docid) {
  //       this.openFile(result.docid)
  //     }
  //     this.documentname = result.docname //Get docname on Layout
  //   });
  // }

  // openFile(docid: any) {
  //   this.isOpen = true;

  //   //Doc id
  //   this.documentId = docid;
  //   // console.log("this.documentId:", this.documentId);
  //   // console.log("docidBefr:", docid);

  //   //OpenAPI 
  //   // this.httpservice.sendGetLatexRequest(URLUtils.opendocID(docid)).subscribe(
  //   //   (req: any) => {
  //   //     if (req) {
  //   //       console.log("apiDocid:", docid);
  //   //       this.latexcode = req[0];
  //   //       this.documentId = docid;
  //   //       this.pageId = req[0]?.pageid
  //   //       // console.log('pageId:', this.pageId)
  //   //       // console.log("req:", req);
  //   //       // console.log("latexcode:", this.latexcode);
  //   //       this.extractionData();
  //   //     }
  //   //   },
  //   //   (error: HttpErrorResponse) => {
  //   //     if (error.status === 401 || error.status === 403 || error.status === 500) {
  //   //       const errorMessage = error.error.msg || 'Unauthorized';
  //   //       this.toast.error(errorMessage);
  //   //     }
  //   //   }
  //   // );
  // }

  // extractionData() {
  //   this.isOpen = true;

  //   // Extract Title
  //   const titleMatch = this.latexcode?.document.match(/\\title{([^}]*)}/);
  //   this.title = titleMatch && titleMatch.length > 1 ? titleMatch[1] : '';

  //   // Extract Author
  //   const authorMatch = this.latexcode?.document.match(/\\author{([^}]*)}/);
  //   this.author = authorMatch && authorMatch.length > 1 ? authorMatch[1] : '';

  //   //Extract Date
  //   const dateMatch = this.latexcode?.document.match(/\\date{([^}]*)}/);
  //   this.date = dateMatch && dateMatch.length > 1 ? dateMatch[1] : '';

  //   // Extract Abstract Title and Content
  //   this.overview = this.latexcode?.document.match(/\\abstract\{([^}]*)\}/);
  //   this.overview = this.overview && this.overview.length > 2 ? this.overview[1] : '';
  //   this.overview = this.overview.replace(/<ltk>/g, '');
  //   console.log('Extracted Overview:', this.overview);

  //   // Extract Section Title and Content
  //   this.section = this.latexcode?.document.match(/\\section{([^}]*)}([^]*)\\subsection{/);
  //   this.sectionTitle = this.section && this.section.length > 1 ? this.section[1] : '';
  //   this.section = this.section && this.section.length > 2 ? this.section[2] : '';
  //   this.section = this.section.replace(/<ltk>/g, '');
  //   // console.log("sectionTitle:", this.sectionTitle);
  //   // console.log("section Content:", this.section);

  //   // Extract subSection Title and Content
  //   this.subsection = this.latexcode?.document.match(/\\subsection{([^}]*)}([^]*)\\subsubsection{/);
  //   this.subsectionTitle = this.subsection && this.subsection.length > 1 ? this.subsection[1] : '';
  //   this.subsection = this.subsection && this.subsection.length > 2 ? this.subsection[2] : '';
  //   this.subsection = this.subsection.replace(/<ltk>/g, '');
  //   // console.log("subsectionTitle:", this.subsectionTitle);
  //   // console.log("subsection Content:", this.subsection);

  //   // Extract subsubSection Title and Content
  //   this.subsubsection = this.latexcode?.document.match(/\\subsubsection{([^}]*)}([^]*)\\paragraph{/);
  //   this.subsubsectionTitle = this.subsubsection && this.subsubsection.length > 1 ? this.subsubsection[1] : '';
  //   this.subsubsection = this.subsubsection && this.subsubsection.length > 2 ? this.subsubsection[2] : '';
  //   this.subsubsection = this.subsubsection.replace(/<ltk>/g, '');
  //   // console.log("subsubsectionTitle:", this.subsubsectionTitle);
  //   // console.log("subsubsection Content:", this.subsubsection);

  //   //Extract Paragraph Title and Content

  //   const itemizeMatches = this.latexcode?.document.match(/\\begin{itemize}([^]*?)\\end{itemize}/);
  //   const itemizeContent = itemizeMatches && itemizeMatches.length > 0 ? itemizeMatches[1] : '';
  //   const itemizeList = itemizeContent.match(/\\item\s([^\\]*)/g);
  //   const itemizedItems = itemizeList ? itemizeList.map((match: string) => match.replace(/\\item\s/, '').trim()) : [];
  //   // console.log("Ordered List:", itemizedItems);
  //   //this.updateOrderListItemsForm(itemizedItems); // Update the orderlist extracted data

  //   // Extract UnOrdered List items
  //   const enumerateMatches = this.latexcode?.document.match(/\\begin{enumerate}([^]*?)\\end{enumerate}/);
  //   const enumerateContent = enumerateMatches && enumerateMatches.length > 0 ? enumerateMatches[1] : '';
  //   const enumerateList = enumerateContent.match(/\\item\s([^\\]*)/g);
  //   const enumeratedItems = enumerateList ? enumerateList.map((match: string) => match.replace(/\\item\s/, '').trim()) : [];
  //   //console.log("enumeratedItems List:", enumeratedItems);
  //   //this.updateUnOrderListItemsForm(enumeratedItems); // Update the unorderlist extracted data

  // }

  // deleteDoc() {
  //   // if (this.documentId) {
  //   //   this.confirmationDialogService.confirm('Confirmation', 'Are you sure you want to delete this Document?', true, 'Yes', 'No')
  //   //     .then((confirmed) => {
  //   //       if (confirmed) {
  //   //         this.httpservice.sendDeleteLatexRequest(URLUtils.deleteDocid(this.documentId)).subscribe((res: any) => {
  //   //           if (!res.error) {

  //   //             this.documentname = '';
  //   //             // this.title= this.myForm.get('title').value,
  //   //             // this.author= this.myForm.get('author').value,
  //   //             // this.date= this.myForm.get('date').value,


  //   //             this.toast.success('Document deleted successfully');

  //   //             //this.newDoc();
  //   //             //this.myForm.reset();
  //   //           }
  //   //         },
  //   //           (error: HttpErrorResponse) => {
  //   //             if (error.status === 401 || error.status === 403 || error.status === 500) {
  //   //               const errorMessage = error.error.msg || 'Unauthorized';
  //   //               this.toast.error(errorMessage);
  //   //             }
  //   //           });
  //   //       }
  //   //     });
  //   // }
  // }

}

@Component({
  selector: 'app-opendialog-box',
  templateUrl: './opendialog-box.component.html',
  styleUrls: ['./doceditor.component.scss']
})

@Injectable()
export class OpendialogBoxComponent {
  // dialog: any;
  // name: any;
  // title: any;

  // @Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();
  // //@Output() dataEvent: EventEmitter<{ title: string; author: string; }> = new EventEmitter<{ title: string; author: string; }>();

  // @Input() documentname: string = '';
  // documents: any = [];
  // documentex: any = [];
  // latexcode: any;
  // pdfSrc: any;
  // documentId: any;
  // //document: any;
  // selectedDocumentIndex = 0;
  // searchText: any = '';
  // targetDocId: any;
  // sortKey: string = '';
  // isReverse: boolean = false;

  // constructor(
  //   @Optional() public dialogRef: MatDialogRef<OpendialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: { title: string },
  //   private httpservice: HttpService, private toast: ToastrService, public sanitizer: DomSanitizer, private fb: FormBuilder) {

  // }

  // ngOnInit() {
  //   this.httpservice.sendGetLatexDoc(URLUtils.getDocument).subscribe(
  //     (res: any) => {
  //       this.documents = res;
  //     }
  //   );
  // }

  // //Function for truncate the texts
  // truncateString(text: string): string {
  //   return text.slice(0, 18); // Get the first 15 characters
  // }

  // ondocumentClick(docid: any, docname: any) {
  //   this.dialogRef.close({ "docid": docid, "docname": docname })
  // }
  // openFile(docid: any) {
  //   //DocAPI 
  //   this.httpservice.sendGetLatexDoc(URLUtils.getDocument).subscribe(
  //     (res: any) => {
  //       this.documents = res;
  //       //console.log('openDRes:', this.documents);

  //       //OpenAPI 
  //       this.httpservice.sendGetLatexRequest(URLUtils.opendocID(docid)).subscribe(
  //         (req: any) => {

  //           this.latexcode = req[0];
  //           // this.dataEvent.emit(this.latexcode);
  //           // console.log('latexcode',this.latexcode?.document)

  //           // this.documentex = req;
  //           // console.log("documentex:", this.documentex);
  //           // const match = this.latexcode?.document.match(/<ltk>\\title{([^}]*)}<ltk>/)
  //           // console.log('mat',match)

  //           // // Extract Title
  //           // const titleMatch = this.latexcode?.document.match(/\\title{([^}]*)}/);
  //           // const title = titleMatch && titleMatch.length > 1 ? titleMatch[1] : '';
  //           // console.log("Title:", title);

  //           // // Extract Author
  //           // const authorMatch = this.latexcode?.document.match(/\\author{([^}]*)}/);
  //           // const author = authorMatch && authorMatch.length > 1 ? authorMatch[1] : '';
  //           // console.log("Author:", author);

  //           // // Extract Date
  //           // const dateMatch = this.latexcode?.document.match(/\\date{([^}]*)}/);
  //           // const date = dateMatch && dateMatch.length > 1 ? dateMatch[1] : '';
  //           // console.log("Date:", date);

  //           // // Extract Abstract Title and Content
  //           // const abstractMatch = this.latexcode?.document.match(/\\abstract{([^}]*)}([^]*)\\section{/);
  //           // const abstractTitle = abstractMatch && abstractMatch.length > 1 ? abstractMatch[1] : '';
  //           // console.log("Abstract Title:", abstractTitle);

  //           // const abstractContent = abstractMatch && abstractMatch.length > 2 ? abstractMatch[2] : '';
  //           // console.log("Abstract Content:", abstractContent);

  //           // // Extract Section Title and Content
  //           // const sectionMatch = this.latexcode?.document.match(/\\section{([^}]*)}([^]*)\\subsection{/);
  //           // const sectionTitle = sectionMatch && sectionMatch.length > 1 ? sectionMatch[1] : '';
  //           // console.log("sectionTitle:", sectionTitle);

  //           // const sectionContent = sectionMatch && sectionMatch.length > 2 ? sectionMatch[2] : '';
  //           // console.log("section Content:", sectionContent);

  //           // // Extract subSection Title and Content
  //           // const subsectionMatch = this.latexcode?.document.match(/\\subsection{([^}]*)}([^]*)\\subsubsection{/);
  //           // const subsectionTitle = subsectionMatch && subsectionMatch.length > 1 ? subsectionMatch[1] : '';
  //           // console.log("subsectionTitle:", subsectionTitle);

  //           // const subsectionContent = subsectionMatch && subsectionMatch.length > 2 ? subsectionMatch[2] : '';
  //           // console.log("subsection Content:", sectionContent);

  //           // // Extract subsubSection Title and Content
  //           // const subsubsectionMatch = this.latexcode?.document.match(/\\subsubsection{([^}]*)}([^]*)\\paragraph{/);
  //           // const subsubsectionTitle = subsubsectionMatch && subsubsectionMatch.length > 1 ? subsubsectionMatch[1] : '';
  //           // console.log("subsubsectionTitle:", subsubsectionTitle);

  //           // const subsubsectionContent = subsubsectionMatch && subsubsectionMatch.length > 2 ? subsubsectionMatch[2] : '';
  //           // console.log("subsubsection Content:", subsubsectionContent);

  //           // // Extract Paragraph Title and Content
  //           // const paragraphMatch = this.latexcode?.document.match(/\\paragraph{([^}]*)}([^]*)\\begin{/);
  //           // const paragraphTitle = paragraphMatch && paragraphMatch.length > 1 ? paragraphMatch[1] : '';
  //           // console.log("paragraph Title:", paragraphTitle);

  //           // const paragraphContent = paragraphMatch && paragraphMatch.length > 2 ? paragraphMatch[2] : '';
  //           // console.log("paragraph Content:", paragraphContent);

  //           // // Extract Itemized List Content
  //           // const itemizeMatches = this.latexcode?.document.match(/\\begin{itemize}([^]*)\\end{itemize}/);
  //           // const itemizeContent = itemizeMatches && itemizeMatches.length > 0 ? itemizeMatches[1] : '';
  //           // const itemizeList = itemizeContent.match(/\\item\s([^\\]*)/g);
  //           // const itemizedItems = itemizeList ? itemizeList.map((match: { match: (arg0: RegExp) => any[]; }) => match.match(/\\item\s([^\\]*)/)[1]) : [];
  //           // console.log("Itemized List Content:", itemizedItems);

  //           // // Extract Enumerated List Content
  //           // const enumerateMatches = this.latexcode?.document.match(/\\begin{enumerate}([^]*)\\end{enumerate}/);
  //           // const enumerateContent = enumerateMatches && enumerateMatches.length > 0 ? enumerateMatches[1] : '';
  //           // const enumerateList = enumerateContent.match(/\\item\s([^\\]*)/g);
  //           // const enumeratedItems = enumerateList ? enumerateList.map((match: { match: (arg0: RegExp) => any[]; }) => match.match(/\\item\s([^\\]*)/)[1]) : [];
  //           // console.log("Enumerated List Content:", enumeratedItems);

  //           // //Pass data from child to parent
  //           // this.dataEvent.emit(title);
  //           // console.log('childData:', title)

  //           // this.dialogRef.afterClosed().subscribe((result: { title: any }) => {
  //           //   if (result) {
  //           //     this.title = result.title;
  //           //     console.log('titleafterClosed:', this.title);
  //           //   }
  //           // });
  //         }
  //       );
  //     }
  //   );
  // }

  // sortingFile(val: any) {
  //   this.isReverse = !this.isReverse;
  //   if (this.isReverse) {
  //     this.documents = this.documents?.sort((p1: any, p2: any) => (p1[val] < p2[val]) ? 1 : (p1[val] > p2[val]) ? -1 : 0);

  //   } else {
  //     this.documents = this.documents?.sort((p1: any, p2: any) => (p1[val] > p2[val]) ? 1 : (p1[val] < p2[val]) ? -1 : 0);
  //   }
  // }

  // sortingDateFile(val: string) {
  //   if (this.sortKey === val) {
  //     this.isReverse = !this.isReverse;
  //   } else {
  //     this.sortKey = val;
  //     this.isReverse = false;
  //   }
  //   this.documents = this.documents?.sort((p1: any, p2: any) => {
  //     const date1 = new Date(p1.updatedon?.$date);
  //     const date2 = new Date(p2.updatedon?.$date);
  //     return this.isReverse ? date2.getTime() - date1.getTime() : date1.getTime() - date2.getTime();
  //   });
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }
}

@Component({
  selector: 'app-download-box',
  templateUrl: './download-box.component.html',
  styleUrls: ['./doceditor.component.scss']
})

@Injectable()
export class DownloadBoxComponent {

  // @Input() documentId: any;
  // @Input() myForm: any;
  // documentname: any;
  // mydForm: any;

  // constructor(
  //   public dialogRef: MatDialogRef<DownloadBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: { documentname: string, documentId: any },
  //   private httpservice: HttpService, private toast: ToastrService, public sanitizer: DomSanitizer, private fb: FormBuilder) {
  //   this.documentname = data.documentname
  //   this.documentId = data.documentId

  // }

  // ngOnInit() {
  //   this.mydForm = this.fb.group({
  //     documentname: ['', Validators.required],
  //   });
  // }

  // downloadDoc() {
  //   if (this.documentId) {
  //     const reqq = { "documentname": this.mydForm.value.documentname };

  //     this.httpservice.sendPostLatexRequest(URLUtils.downloadDoc(this.documentId), reqq).subscribe(
  //       (res: any) => {
  //         this.toast.success(res.message);
  //         this.dialogRef.close({ "docid": res.id, "documentname": this.mydForm.value.documentname });
  //         //console.log('name:',this.documentname)
  //       },
  //       (error: HttpErrorResponse) => {
  //         if (error.status === 401 || error.status === 403) {
  //           const errorMessage = error.error.msg || 'Unauthorized';
  //           this.toast.error(errorMessage);
  //         }
  //       }
  //     );
  //   }
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }
}


@Component({
  selector: 'app-viewdoc',
  templateUrl: './viewdoc.component.html',
  styleUrls: ['./doceditor.component.scss']
})

@Injectable()
export class ViewDocComponent {

  // selectedValue: string = "view";
  // isDisplay: boolean = true;
  // successModel: boolean = false;
  // selectedOption: any;
  // documents: any[] = [];
  // searchText: any;

  // constructor(private router: Router, private fb: FormBuilder, private httpservice: HttpService,
  //   private toast: ToastrService, private documentService: DocumentService, private cdr: ChangeDetectorRef,
  //   private renderer: Renderer2, private modalService: ModalService, private confirmationDialogService: ConfirmationDialogService,
  //   public sanitizer: DomSanitizer, public dialog: MatDialog) {
  // }

  // ngOnInit() {

  //   this.getDocumentCall();
  // }

  // getDocumentCall() {
  //   this.httpservice.sendGetLatexDoc(URLUtils.getDocument).subscribe(
  //     (res: any) => {
  //       this.documents = res;
  //       //this.documents = res[0].documentname;
  //       console.log('this.documents', this.documents)
  //     }
  //   );
  // }

  // isActive(value: string) {
  //   this.selectedValue = value;
  //   this.selectedValue == 'create' ? this.router.navigate(['/doceditor']) : this.router.navigate(['/viewdoc']);
  // }

  // hideAndShow() {
  //   this.isDisplay = !this.isDisplay;
  // }


}