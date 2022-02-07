import { NgModule } from '@angular/core';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from 'ngx-timeago';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [],
	imports: [
		BsDropdownModule.forRoot(),
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-right',
		}),
		TabsModule.forRoot(),
		NgxGalleryModule,
		FileUploadModule,
		BsDatepickerModule.forRoot(),
		ButtonsModule.forRoot(),
		TimeagoModule.forRoot(),
    ModalModule.forRoot()
	],
	exports: [
		BsDropdownModule,
		ToastrModule,
		TabsModule,
		NgxGalleryModule,
		FileUploadModule,
		BsDatepickerModule,
		ButtonsModule,
		TimeagoModule,
    ModalModule
	],
})
export class SharedModule {}
