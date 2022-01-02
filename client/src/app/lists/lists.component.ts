import { Pagination } from './../_models/pagination';
import { MembersService } from 'src/app/_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../_models/member';

@Component({
	selector: 'app-lists',
	templateUrl: './lists.component.html',
	styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
	members: Partial<Member[]>;
	predicate: string = 'liked';
	pageNumber = 1;
	pageSize = 5;
	pagination: Pagination;

	constructor(private memberService: MembersService) {}

	ngOnInit(): void {
		this.loadLikes();
	}

	loadLikes() {
		this.memberService
			.getLikes(this.predicate, this.pageNumber, this.pageSize)
			.subscribe((resposnse) => {
				this.members = resposnse.result;
				this.pagination = resposnse.pagination;
			});
	}

	pageChange(event: any) {
		this.pagination = event.page;
		this.loadLikes();
	}
}
