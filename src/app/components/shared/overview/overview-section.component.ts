import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { OverviewSection } from './overview';

@Component({
  selector: 'app-overview-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.scss'],
})
export class OverviewSectionComponent {
  @Input() section: OverviewSection;
}
