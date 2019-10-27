import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-tpl-with-context',
  templateUrl: './tooltip-tpl-with-context.html',
  styleUrls: ['./tooltip-tpl-with-context.scss']
})
export class TooltipTplwithcontextComponent {
  name = 'World';

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({ greeting });
    }
  }
}
