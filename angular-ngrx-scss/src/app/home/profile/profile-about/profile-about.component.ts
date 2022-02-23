import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProfileState } from 'src/app/state/profile/profile.state';

interface Social {
  icon?: string;
  label: string;
  value: number;
}

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss'],
})
export class ProfileAboutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  socials: Social[] = [];

  @Input()
  profile$?: Observable<ProfileState>;

  ngOnInit(): void {
    this.profile$?.pipe(takeUntil(this.destroy$)).subscribe(({ user }) => {
      const trackedSocials: Social[] = [
        { icon: 'people', label: 'Followers', value: user?.followers ?? 0 },
        { label: 'Following', value: user?.following ?? 0 },
      ];
      this.socials = trackedSocials.filter((social) => social.value > 0);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
