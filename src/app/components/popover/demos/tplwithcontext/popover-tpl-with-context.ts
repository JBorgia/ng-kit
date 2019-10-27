import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-tpl-with-context',
  templateUrl: './popover-tpl-with-context.html',
  styleUrls: ['./popover-tpl-with-context.scss']
})
export class PopoverTplwithcontextComponent {
  name = 'World';

  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ greeting, language });
    }
  }
}
