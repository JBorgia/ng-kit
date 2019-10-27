import { Component, OnInit } from '@angular/core';

export interface IconHash {
  [iconClass: string]: string;
}

@Component({
  selector: 'app-icon-library',
  templateUrl: './icon-library.component.html',
  styleUrls: ['./icon-library.component.scss']
})
export class IconLibraryComponent implements OnInit {

  iconLibraryMap: { [name: string]: IconHash };

  constructor() { }

  ngOnInit() {
    this.iconLibraryMap = {
      'Account Hierarchy': { iconClass: 'icon-account-hierarchy' },
      'Account Multiple Plus': { iconClass: 'icon-account-multiple-plus' },
      'Account Multiple': { iconClass: 'icon-account-multiple' },
      'Account Plus': { iconClass: 'icon-account-plus' },
      'Account Search': { iconClass: 'icon-account-search' },
      'Account Supervisor': { iconClass: 'icon-account-supervisor' },
      'Account': { iconClass: 'icon-account' },
      'Archive': { iconClass: 'icon-archive' },
      'Arrow Expand': { iconClass: 'icon-arrow-expand' },
      'Auto Fix': { iconClass: 'icon-auto-fix' },
      'Block Helper': { iconClass: 'icon-block-helper' },
      'Briefcase Number': { iconClass: 'icon-briefcase-number' },
      'Briefcase': { iconClass: 'icon-briefcase' },
      'Calendar Blank': { iconClass: 'icon-calendar-blank' },
      'Camera': { iconClass: 'icon-camera' },
      'Chart Areaspline': { iconClass: 'icon-chart-areaspline' },
      'Chart Bar': { iconClass: 'icon-chart-bar' },
      'Check Decagram': { iconClass: 'icon-check-decagram' },
      'Check': { iconClass: 'icon-check' },
      'Checkbox Blank': { iconClass: 'icon-checkbox-blank' },
      'Chevron Left': { iconClass: 'icon-chevron-left' },
      'Chevron Right': { iconClass: 'icon-chevron-right' },
      'Clipboard Account': { iconClass: 'icon-clipboard-account' },
      'Clipboard Alert': { iconClass: 'icon-clipboard-alert' },
      'Clipboard Check': { iconClass: 'icon-clipboard-check' },
      'Clipboard Text Search': { iconClass: 'icon-clipboard-text-search' },
      'Clipboard Text': { iconClass: 'icon-clipboard-text' },
      'Clipboard Unknown': { iconClass: 'icon-clipboard-unknown' },
      'Clock Alert': { iconClass: 'icon-clock-alert' },
      'Clock': { iconClass: 'icon-clock' },
      'Close Circle': { iconClass: 'icon-close-circle' },
      'Close': { iconClass: 'icon-close' },
      'Code': { iconClass: 'icon-code' },
      'Comment Alert': { iconClass: 'icon-comment-alert' },
      'Constellation': { iconClass: 'icon-constellation' },
      'Content Copy': { iconClass: 'icon-content-copy' },
      'Delete Circle': { iconClass: 'icon-delete-circle' },
      'Delete': { iconClass: 'icon-delete' },
      'DOCSIS': { iconClass: 'icon-docsis' },
      'Dots Horizontal': { iconClass: 'icon-dots-horizontal' },
      'Download': { iconClass: 'icon-download' },
      'Enlarge': { iconClass: 'icon-enlarge' },
      'File Cabinet': { iconClass: 'icon-file-cabinet' },
      'Filter': { iconClass: 'icon-filter' },
      'Flux': { iconClass: 'icon-flux' },
      'Format Paint': { iconClass: 'icon-format-paint' },
      'Full Scan': { iconClass: 'icon-full-scan' },
      'Home': { iconClass: 'icon-home' },
      'Image Filter Center Focus': { iconClass: 'icon-image-filter-center-focus' },
      'Inactive': { iconClass: 'icon-inactive' },
      'Information Outline': { iconClass: 'icon-information-outline' },
      'Ingress': { iconClass: 'icon-ingress' },
      'Layers Off': { iconClass: 'icon-layers-off' },
      'Layers': { iconClass: 'icon-layers' },
      'Library Plus': { iconClass: 'icon-library-plus' },
      'Local Offer': { iconClass: 'icon-local-offer' },
      'Magnify': { iconClass: 'icon-magnify' },
      'Map Legend Minus': { iconClass: 'icon-map-legend-minus' },
      'Map Legend Plus': { iconClass: 'icon-map-legend-plus' },
      'Map Legend': { iconClass: 'icon-map-legend' },
      'Map Marker': { iconClass: 'icon-map-marker' },
      'Menu': { iconClass: 'icon-menu' },
      'MER': { iconClass: 'icon-mer' },
      'Meter Search': { iconClass: 'icon-meter-search' },
      'Meter': { iconClass: 'icon-meter' },
      'OFDM': { iconClass: 'icon-ofdm' },
      'Pencil': { iconClass: 'icon-pencil' },
      'Plus Circle': { iconClass: 'icon-plus-circle' },
      'Plus': { iconClass: 'icon-plus' },
      'Printer': { iconClass: 'icon-printer' },
      'QAM Analysis': { iconClass: 'icon-qam-analysis' },
      'Refresh': { iconClass: 'icon-refresh' },
      'Rotate Right Variant': { iconClass: 'icon-rotate-right-variant' },
      'Share': { iconClass: 'icon-share' },
      'Shrink': { iconClass: 'icon-shrink' },
      'Sign Caution': { iconClass: 'icon-sign-caution' },
      'Signal Variant': { iconClass: 'icon-signal-variant' },
      'Spectrum': { iconClass: 'icon-spectrum' },
      'Speed Test': { iconClass: 'icon-speed-test' },
      'Table': { iconClass: 'icon-table' },
      'Truck': { iconClass: 'icon-truck' },
      'Upload': { iconClass: 'icon-upload' },
      'Wrench': { iconClass: 'icon-wrench' },
      'Xmf': { iconClass: 'icon-xmf' },
      'Xmfs': { iconClass: 'icon-xmfs' },
    };
  }

}
