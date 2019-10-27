export interface OverviewSection {
  title: string | false;
  fragment?: string;
}

export interface Overview {
  [fragment: string]: OverviewSection;
}
