import { Component, Inject, Injectable, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef, Renderer2, AfterViewInit, Optional } from '@angular/core';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';



@Component({
  selector: 'app-latexblock',
  templateUrl: './latexblock.component.html',
  styleUrls: ['./latexblock.component.scss']
})
export class LatexblockComponent implements OnInit {
  //@Output() submitted = new EventEmitter();
  //@Output() dataEvent: EventEmitter<any> = new EventEmitter<any>();
  
  // latexForm: any;
  // @Input() content: any;

  // @Output() formDataEvent: EventEmitter<any> = new EventEmitter<any>();
 
  // latex: any;
  // latexTitle: any;
  // isSection: boolean = false;
  // latexDialog: boolean = true;
  // closeDiv = true;
  // latexBlock: boolean = false;

  // @Input() contentTitle:any;

  // orderListItems: any;
  // orderlist: any;
  // orderlistTitle: any;
  // isOrderlist: boolean = false;

  // unorderListItems: any;
  // unorderlist: any;
  // unorderlistTitle: any;
  // isunOrderlist: boolean = false;

  // overview:any;
  // overviewTitle:any;

  // section: any;
  // sectionTitle: any;
  // subsection: any;
  // subsectionTitle: any;
  // subsubsection: any;
  // subsubsectionTitle: any;
  // paragraph:any;
  // paragraphTitle:any;

  // constructor(private router: Router, private fb: FormBuilder, private httpservice: HttpService,
  //   private toast: ToastrService, private cdr: ChangeDetectorRef,
  //   private renderer: Renderer2, private modalService: ModalService, private confirmationDialogService: ConfirmationDialogService,
  //   public sanitizer: DomSanitizer, public dialog: MatDialog) {

  // }

  // ngOnInit() {
  //   this.latexForm = this.fb.group({
  //     overview: [''],

  //     section:[''],
  //     sectionTitle:[''],
  //     subsection:[''],
  //     subsectionTitle:[''],
  //     subsubsection:[''],
  //     subsubsectionTitle:[''],
      
  //     paragraph: [''],
  //     paragraphTitle:[''],

  //     orderListItems: this.fb.array([this.createorderItem()]),
  //     unorderListItems: this.fb.array([this.createunorderItem()]),
  //   });

  //   this.orderListItems = this.latexForm.get('orderListItems') as FormArray;
  //   this.unorderListItems = this.latexForm.get('unorderListItems') as FormArray;

  //   this.latexForm.valueChanges.subscribe(() => {
  //     this.formDataEvent.emit(this.latexForm.value);
  //     //console.log('1.latexForm',this.latexForm)
  //   });
  // }
  
  //  submitForm() {
  //   const formData = this.latexForm.value;
  //   this.formDataEvent.emit(formData);
  //   console.log('formData', formData)
  // }

  // //ORDERLSITS
  // addorderList(): void {
  //   console.log('orderListItems', this.orderListItems)
  //   this.orderListItems = this.latexForm.get('orderListItems') as FormArray;
  //   this.orderListItems.push(this.createorderItem());
  // }
  // createorderItem(): FormGroup {
  //   return this.fb.group({
  //     orderlist: [''] // Initialize with an empty value
  //   });
  // }

  // removeorderList(i: number) {
  //   const orderListItemsArray = this.orderListItems as FormArray;
  //   orderListItemsArray.removeAt(i);
  // }

  // //Disable Add button if it empty
  // isorderItemsInvalid(): boolean {
  //   const orderListItems = this.latexForm.get('orderListItems') as FormArray;
  //   for (let i = 0; i < orderListItems.length; i++) {
  //     const item = orderListItems.at(i) as FormGroup;
  //     const orderList = item.get('orderlist')?.value;

  //     if (!orderList) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // //UNORDERLSITS
  // addunorderList(): void {
  //   console.log('unorderListItems', this.unorderListItems)
  //   this.unorderListItems = this.latexForm.get('unorderListItems') as FormArray;
  //   this.unorderListItems.push(this.createunorderItem());
  // }
  // createunorderItem(): FormGroup {
  //   return this.fb.group({
  //     unorderlist: [''] // Initialize with an empty value
  //   });
  // }

  // removeunorderList(i: number) {
  //   const unorderListItemsArray = this.unorderListItems as FormArray;
  //   unorderListItemsArray.removeAt(i);
  // }
  
  // //Disable Add button if it empty
  // isunorderItemsInvalid(): boolean {
  //   const unorderListItems = this.latexForm.get('unorderListItems') as FormArray;
  //   for (let i = 0; i < unorderListItems.length; i++) {
  //     const item = unorderListItems.at(i) as FormGroup;
  //     const unorderList = item.get('unorderlist')?.value;

  //     if (!unorderList) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // removeSection() {
  //   this.latexForm.reset();
  //   this.closeDiv = false;
  //   this.latex = '';
  // }

  // //Dialog boxes for all sections!!!
  // openparagraphDialog() {
  //   this.latexDialog = true;

  //     const dialogRef = this.dialog.open(LatexDialogComponent, {
  //       width: '600px',
  //       height: '330px',
  //       data: {
  //         paragraph: this.paragraph,
  //         paragraphTitle: this.paragraphTitle,
  //       },
  //       hasBackdrop: true,
  //       panelClass: 'hello',
  //       autoFocus: true
  //     });
  //     //console.log('pass data to dialog', dialogRef)
  
  //     dialogRef.afterClosed().subscribe((result: {paragraph: string, paragraphTitle: string}) => {
  //       if (result) {
  //         this.paragraph = result.paragraph;
  //         this.paragraphTitle = result.paragraphTitle;
  //       }
  //     });
  // }

  // opensectionDialog(){
  //   const dialogRef = this.dialog.open(SectionDialogComponent, {
  //     width: '600px',
  //     height: '330px',
  //     data: {
  //       section: this.section,
  //       sectionTitle: this.sectionTitle
  //     },
  //     hasBackdrop: true,
  //     panelClass: 'hello',
  //     autoFocus: true
  //   });
  //   //console.log('pass data to dialog', dialogRef)

  //   dialogRef.afterClosed().subscribe((result: {section: string, sectionTitle: string}) => {
  //     if (result) {
  //       this.section = result.section;
  //       this.sectionTitle = result.sectionTitle;
  //     }
  //   });
  // }

  // opensubsectionDialog(){
  //   const dialogRef = this.dialog.open(SubsectionDialogComponent, {
  //     width: '600px',
  //     height: '330px',
  //     data: {
  //       subsection: this.subsection,
  //       subsectionTitle: this.subsectionTitle
  //     },
  //     hasBackdrop: true,
  //     panelClass: 'hello',
  //     autoFocus: true
  //   });
  //   //console.log('pass data to dialog', dialogRef)

  //   dialogRef.afterClosed().subscribe((result: {subsection: string, subsectionTitle: string}) => {
  //     if (result) {
  //       this.subsection = result.subsection;
  //       this.subsectionTitle = result.subsectionTitle;
  //     }
  //   });
  // }

  // opensubsubsectionDialog(){
  //   const dialogRef = this.dialog.open(SubsubsectionDialogComponent, {
  //     width: '600px',
  //     height: '330px',
  //     data: {
  //       subsubsection: this.subsubsection,
  //       subsubsectionTitle: this.subsubsectionTitle
  //     },
  //     hasBackdrop: true,
  //     panelClass: 'hello',
  //     autoFocus: true
  //   });
  //   //console.log('pass data to dialog', dialogRef)

  //   dialogRef.afterClosed().subscribe((result: {subsubsection: string, subsubsectionTitle: string}) => {
  //     if (result) {
  //       this.subsubsection = result.subsubsection;
  //       this.subsubsectionTitle = result.subsubsectionTitle;
  //     }
  //   });
  // }
}


@Component({
  selector: 'app-latex-dialog',
  templateUrl: './latex-dialog.component.html',
  styleUrls: ['./latexblock.component.scss']
})

@Injectable()
export class LatexDialogComponent {
  
  // @Input() content: any;
  // dialog: any;
  // name: any;
  // latexdialogForm: any;

  // latex: any;
  // latexTitle: any;
  // isSection: boolean = false;
  // latexDialog: boolean = true;
  
  // paragraph: any;
  // paragraphTitle:any;

  // constructor(
  //   public dialogRef: MatDialogRef<LatexDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {paragraph:string, paragraphTitle:string},
  //   private fb: FormBuilder
  // ) {
  //   this.paragraph = data.paragraph;
  //   this.paragraphTitle = data.paragraphTitle;
  // }

  // ngOnInit() {
  //   //console.log('dial content',this.content)
  //   this.latexdialogForm = this.fb.group({
  //     paragraph: [''],
  //     paragraphTitle:['']
  //   });
  // }

  // save() {
  //   const data = {
  //     paragraph: this.paragraph,
  //     paragraphTitle:this.paragraphTitle
  //   };
  //   this.dialogRef.close(data);
  //   //console.log('closeData from dialog', data)
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }

  // onInputChange(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;
  //   this.paragraph = target.value; // latex to parent textarea
  // }

  // prependHyphen(newTitle: string) {
  //   if (newTitle && !newTitle.startsWith(' ')) {
  //     this.paragraphTitle = '' + newTitle;
  //   }
  // }

}

@Component({
  selector: 'app-section-dialog',
  templateUrl: './section-dialog.component.html',
  styleUrls: ['./latexblock.component.scss']
})

@Injectable()
export class SectionDialogComponent {
  
  // @Input() content: any;
  // dialog: any;
  // name: any;
  // sectiondialogForm: any;

  // section: any;
  // sectionTitle: any;
  // isSection: boolean = false;
  // latexDialog: boolean = true;

  // constructor(
  //   public dialogRef: MatDialogRef<SectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {section:string, sectionTitle:string},
  //   private fb: FormBuilder
  // ) {
  //   this.section = data.section;
  //   this.sectionTitle = data.sectionTitle;
  // }

  // ngOnInit() {
  //   //console.log('dial content',this.content)
  //   this.sectiondialogForm = this.fb.group({
  //     section: [''],
  //     sectionTitle:['']
  //   });
  // }

  // save() {
  //   const data = {
  //     section: this.section,
  //     sectionTitle:this.sectionTitle
  //   };
  //   this.dialogRef.close(data);
  //   //console.log('closeData from dialog', data)
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }

  // onInputChange(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;
  //   this.section = target.value; // latex to parent textarea
  // }

  // prependHyphen(newTitle: string) {
  //   if (newTitle && !newTitle.startsWith(' ')) {
  //     this.sectionTitle = '' + newTitle;
  //   }
  // }

}

@Component({
  selector: 'app-subsection-dialog',
  templateUrl: './subsection-dialog.component.html',
  styleUrls: ['./latexblock.component.scss']
})

@Injectable()
export class SubsectionDialogComponent {
  
  // @Input() content: any;
  // dialog: any;
  // name: any;
  // subsectiondialogForm: any;

  // subsection: any;
  // subsectionTitle: any;
  // isSection: boolean = false;
  // latexDialog: boolean = true;

  // constructor(
  //   public dialogRef: MatDialogRef<SubsectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {subsection:string, subsectionTitle:string},
  //   private fb: FormBuilder
  // ) {
  //   this.subsection = data.subsection;
  //   this.subsectionTitle = data.subsectionTitle;
  // }

  // ngOnInit() {
  //   //console.log('dial content',this.content)
  //   this.subsectiondialogForm = this.fb.group({
  //     subsection: [''],
  //     subsectionTitle:['']
  //   });
  // }

  // save() {
  //   const data = {
  //     subsection: this.subsection,
  //     subsectionTitle:this.subsectionTitle
  //   };
  //   this.dialogRef.close(data);
  //   //console.log('closeData from dialog', data)
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }

  // onInputChange(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;
  //   this.subsection = target.value; // latex to parent textarea
  // }

  // prependHyphen(newTitle: string) {
  //   if (newTitle && !newTitle.startsWith(' ')) {
  //     this.subsectionTitle = '' + newTitle;
  //   }
  // }

}

@Component({
  selector: 'app-subsubsection-dialog',
  templateUrl: './subsubsection-dialog.component.html',
  styleUrls: ['./latexblock.component.scss']
})

@Injectable()
export class SubsubsectionDialogComponent {
  
  // @Input() content: any;
  // dialog: any;
  // name: any;
  // subsubsectiondialogForm: any;

  // subsubsection: any;
  // subsubsectionTitle: any;
  // isSection: boolean = false;
  // latexDialog: boolean = true;

  // constructor(
  //   public dialogRef: MatDialogRef<SubsubsectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {subsubsection:string, subsubsectionTitle:string},
  //   private fb: FormBuilder
  // ) {
  //   this.subsubsection = data.subsubsection;
  //   this.subsubsectionTitle = data.subsubsectionTitle;
  // }

  // ngOnInit() {
  //   //console.log('dial content',this.content)
  //   this.subsubsectiondialogForm = this.fb.group({
  //     subsubsection: [''],
  //     subsubsectionTitle:['']
  //   });
  // }

  // save() {
  //   const data = {
  //     subsubsection: this.subsubsection,
  //     subsubsectionTitle:this.subsubsectionTitle
  //   };
  //   this.dialogRef.close(data);
  //   //console.log('closeData from dialog', data)
  // }

  // closeDialog() {
  //   this.dialogRef.close()
  // }

  // onInputChange(event: Event) {
  //   const target = event.target as HTMLTextAreaElement;
  //   this.subsubsection = target.value; // latex to parent textarea
  // }

  // prependHyphen(newTitle: string) {
  //   if (newTitle && !newTitle.startsWith(' ')) {
  //     this.subsubsectionTitle = '' + newTitle;
  //   }
  // }

}
