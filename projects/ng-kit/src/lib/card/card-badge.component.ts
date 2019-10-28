import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
  * The `NgkCardBadgeComponent` is an optional round, bordered element that is inside the <i>&#60;ngk-card-header&#62;</i>.
  * It can accept an ng-kit icon string (e.g. "icon-profile"), image, or both (in which case the icon is used as a fallback
  * should the image be undefined or missing).
  */
@Component({
  selector: 'ngk-card-badge, [ngk-card-badge], [ngkCardBadge]',
  templateUrl: './card-badge.component.html',
  styleUrls: ['./card-badge.component.scss'],
})
export class NgkCardBadgeComponent implements OnInit {
  @Input() icon: string;
  @Input() image;
  badgeImage;

  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.badgeImage = this.getBadgeImageStyle(this.image);
  }


  getBadgeImageStyle(photo): any {
    let badgeImage;
    if (!photo) {
      return null;
    } else {
      badgeImage = photo;
    }
    if (badgeImage !== null) {
      const style = `background-image: url(${photo})`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
    } else {
      return '';
    }
  }
}
