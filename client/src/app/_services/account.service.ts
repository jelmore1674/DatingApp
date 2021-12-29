import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	baseUrl = environment.apiUrl;
	private currentUserSource = new ReplaySubject<User | null>(1);
	currentUser$ = this.currentUserSource.asObservable();

	constructor(private http: HttpClient) {}

	login(model: any) {
		return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
			map((response: User) => {
				const user = response;
				if (user) {
					this.setCurrentUser(user);
				}
			})
		);
	}

	register(model: any) {
		return this.http
			.post<User>(this.baseUrl + 'account/register', model)
			.pipe(
				map((response: User) => {
					const user = response;
					if (user) {
						this.setCurrentUser(user);
					}
				})
			);
	}

	setCurrentUser(user: User | null) {
		localStorage.setItem('user', JSON.stringify(user));
		this.currentUserSource.next(user);
	}

	logout() {
		localStorage.removeItem('user');
		this.currentUserSource.next(null);
	}
}
