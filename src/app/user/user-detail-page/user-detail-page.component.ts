import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, map, Subject, takeUntil } from 'rxjs';
import { UserDetailUseCaseService } from 'src/app/service/user-detail-use-case.service';


@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit, OnDestroy {

  user$ = this.userDetailUseCase.user$;

  private onDestroy$ = new Subject<void>();

  constructor(private router: ActivatedRoute, private userDetailUseCase: UserDetailUseCaseService) {
    this.router.params.pipe(
      takeUntil(this.onDestroy$),
      map((params => params['userId'])),

      // userIdが変わった時のみ値を返す
      distinctUntilChanged(),   
    ).subscribe(userId =>
      this.userDetailUseCase.fetchUser(userId)
    );
  }

  ngOnInit(): void {
    console.log('UserDetailPage')
  }

  ngOnDestroy(): void {
    this.onDestroy$.complete();
  }

}
