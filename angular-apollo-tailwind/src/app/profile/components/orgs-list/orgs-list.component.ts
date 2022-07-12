import { Component, Input } from '@angular/core';
import { RepoOrganization } from '../../../gql';

@Component({
  selector: 'app-orgs-list',
  template: `<div class="organization-container">
    <h2 class="heading">Organizations</h2>
    <div data-testid="profile page orgs" class="list">
      <div *ngFor="let organization of organizations" class="listItem">
        <a [routerLink]="['../orgs', organization.login]">
          <img [src]="organization.avatarUrl" alt="Organization" />
        </a>
      </div>
    </div>
  </div>`,
  styleUrls: ['./orgs-list.component.css'],
})
export class OrgsListComponent {
  @Input() organizations: RepoOrganization[] = [];
}
