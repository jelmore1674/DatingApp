import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, map } from 'rxjs';
import { Member } from '../_models/member';
import { environment } from './../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class MembersService {
	baseUrl = environment.apiUrl;
	members: Member[] = [];

	constructor(private http: HttpClient) {}

	getMembers() {
		if (this.members.length > 0) {
			return of(this.members);
		}
		return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
			map((members) => {
				this.members = members;
				return members;
			})
		);
	}

	getMember(username: string) {
		const member = this.members.find((m) => m.userName === username);
		if (member !== undefined) return of(member);
		return this.http.get<Member>(this.baseUrl + 'users/' + username);
	}

	updateMember(member: Member) {
		return this.http.put(this.baseUrl + 'users/', member).pipe(
			map((updatedMember: Member) => {
				const index = this.members.findIndex(
					(m) => m.id === updatedMember.id
				);
				this.members[index] = updatedMember;
				return updatedMember;
			})
		);
	}

	setMainPhoto(photoId: number) {
		return this.http.put(
			this.baseUrl + 'users/set-main-photo/' + photoId,
			{}
		);
	}

	deletePhoto(photoId: number) {
		return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
	}
}
