import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyIconComponent } from './privacy-icon.component';
import { PrivacyBadgeComponent } from './privacy-badge.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
	declarations: [PrivacyBadgeComponent, PrivacyIconComponent],
	imports: [CommonModule, IconsModule],
	exports: [PrivacyBadgeComponent, PrivacyIconComponent],
})
export class PrivacyIconComponentModule {}
