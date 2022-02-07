import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import {NgForm} from "@angular/forms";

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
	model: any = {};
	loggedInUser: any = {};

	constructor(
		public accountService: AccountService,
		private router: Router,
		private toastr: ToastrService
	) {}

	ngOnInit(): void {}

	login(): any {
		this.accountService.login(this.model).subscribe((next: any) => {
			this.router.navigateByUrl('/members');
		});
    this.loginForm.reset();
	}

	logout() {
		this.accountService.logout();
		this.router.navigateByUrl('/');
	}
}
