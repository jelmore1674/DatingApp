import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
	providedIn: 'root',
})
export class BusyService {
	busyRequestCount: number = 0;

	constructor(private spinnerService: NgxSpinnerService) {}

	busy() {
		this.busyRequestCount++;
		this.spinnerService.show(undefined, {
			type: 'ball-clip-rotate-pulse',
			bdColor: 'rgba(255,255,255,0)',
			color: '#d9230f',
		});
	}

	idle() {
		this.busyRequestCount--;
		if (this.busyRequestCount <= 0) {
			this.busyRequestCount = 0;
			this.spinnerService.hide();
		}
	}
}
