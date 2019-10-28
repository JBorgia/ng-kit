const API_DOCS = {
  "NgkAccordionBodyComponent": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion-body.component.ts",
    "className": "NgkAccordionBodyComponent",
    "description": "<p>The <code>NgkAccordionBodyComponent</code> is a wrapper component for content transcluded using the <code>ngk-accordion-body</code> or <code>ngkAccordionBody</code> directive tags.\nIt is instantiated internally by the <code>NgkAccordionPanelComponent</code>.<br><br>\n<b>NOTE:</b> <i><code>NgkAccordionBodyComponent</code> is not exported and should not be instantiated by a user. Use <code>NgkAccordionBodyDirective</code> tags instead.</i></p>",
    "type": "Component",
    "selector": "ngk-accordion-body",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "nativeElement",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkAccordionHeaderComponent": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion-header.component.ts",
    "className": "NgkAccordionHeaderComponent",
    "description": "<p>The <code>NgkAccordionHeaderComponent</code> is a wrapper component for content transcluded using the <code>ngk-accordion-header</code> or <code>ngkAccordionHeader</code> directive tags.\nIt is instantiated internally by the <code>NgkAccordionPanelComponent</code>.<br><br>\n<b>NOTE:</b> <i><code>NgkAccordionHeaderComponent</code> is not exported and should not be instantiated by a user. Use <code>NgkAccordionHeaderDirective</code> tags instead.</i></p>",
    "type": "Component",
    "selector": "ngk-accordion-header",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkAccordionHeaderDirective": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion-panel.component.ts",
    "className": "NgkAccordionHeaderDirective",
    "description": "<p>Using an instance of the <code>NgkAccordionHeaderDirective</code> will override and remove the <i>&#60;ng-content&#62;</i> tag from the <code>NgkAccordionHeaderComponent</code>.</p>",
    "type": "Directive",
    "selector": "[ngk-accordion-header], [ngkAccordionHeader]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkAccordionBodyDirective": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion-panel.component.ts",
    "className": "NgkAccordionBodyDirective",
    "description": "<p>An HTML element tagged with the <code>NgkAccordionBodyDirective</code> using either <code>ngk-accordion-body</code> or <code>ngkAccordionBody</code> will be transcluded into the <code>NgkAccordionBodyComponent</code>.</p>",
    "type": "Directive",
    "selector": "[ngk-accordion-body], [ngkAccordionBody]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkAccordionPanelComponent": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion-panel.component.ts",
    "className": "NgkAccordionPanelComponent",
    "description": "<p>One or more <code>NgkAccordionPanelComponent</code>s make up the majority of the <code>NgkAccordionComponent</code>. \nSetting the <code>isOpenOnInit</code> input to true will expand that panel on initial dom instantiation.\nA defined height can be set using the <code>bodyHeight</code> input. Transition animation can be disabled on an \nindividual panel by setting the <code>transitionDisabled</code> input to false. The <code>onClick</code> output emits when \nthe panel is clicked.</p>",
    "type": "Component",
    "selector": "ngk-accordion-panel, div[ngk-accordion-panel]",
    "inputs": [
      {
        "name": "bodyHeight",
        "type": "number",
        "description": ""
      },
      {
        "name": "isCollapsed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "isOpenOnInit",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "transitionDisabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "onClick",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "accordionBody",
        "type": "NgkAccordionBodyDirective",
        "description": ""
      },
      {
        "name": "accordionHeader",
        "type": "NgkAccordionHeaderDirective",
        "description": ""
      },
      {
        "name": "isCollapsed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ngkAccordionBody",
        "type": "NgkAccordionBodyComponent",
        "description": ""
      },
      {
        "name": "panelStatus$",
        "type": "BehaviorSubject<\"collapsed\" | \"expanded\">",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkAccordionStatus": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion.ts",
    "className": "NgkAccordionStatus",
    "description": "<p>An array of <code>NgkAccordionStatus</code> class objects are emitted on <code>NgkAccordionComponent</code> click events. \nEach contains expandedBodyHeight, wasOpenOnInit, panelStatus, and isCollapsed fields.\nThe <code>expandedBodyHeight</code> field is type number and is the height of the <code>NgkAccordionBody</code> when expanded.\nThe <code>wasOpenOnInit</code> field is type boolean and will be true if the panel is initially set to expanded using the  <code>isOpenOnInit</code> input on the <code>NgkPanelComponent</code> is set to true.\nThe <code>panelStatus</code> field will either read &#39;collapsed&#39; or &#39;expanded&#39; and is an alternative to the boolean field <code>isCollapsed</code>.\nThe <code>isCollapsed</code> field will read true if the panel is collapsed and false if expanded.</p>",
    "type": "Class",
    "methods": [],
    "properties": [
      {
        "name": "expandedBodyHeight",
        "type": "number",
        "description": ""
      },
      {
        "name": "isCollapsed",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "panelStatus",
        "type": "\"collapsed\" | \"expanded\"",
        "description": ""
      },
      {
        "name": "wasOpenOnInit",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgkAccordionComponent": {
    "fileName": "projects/ng-kit/src/lib/accordion/accordion.ts",
    "className": "NgkAccordionComponent",
    "description": "<p>The <code>NgkAccordionComponent</code> provides multi-panel accordion support and contains one or more <code>NgkAccordionPanel</code>s.\nThe <code>closeOthers</code> input will collapse other panels on the selection of a new one. The <code>disableTransition</code> disables \nCSS transition animation on all panels. The <code>clickChanges</code> output emits an array of <code>NgkAccordionStatus</code> objects with\nthe status and features for each panel.</p>",
    "type": "Component",
    "selector": "ngk-accordion",
    "inputs": [
      {
        "name": "closeOthers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disableTransition",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "clickChanges",
        "description": ""
      }
    ],
    "properties": [
      {
        "name": "accordionPanels",
        "type": "QueryList<NgkAccordionPanelComponent>",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkButtonComponent": {
    "fileName": "projects/ng-kit/src/lib/button/button.ts",
    "className": "NgkButtonComponent",
    "description": "<p>A default button to used throughout the application</p>\n<p>Allows for tracking analytics on clicks</p>",
    "type": "Component",
    "selector": "button[ngk]",
    "inputs": [
      {
        "name": "icon",
        "type": "string",
        "description": "<p>The type of icon to display inside the button.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentWrapper",
        "type": "any",
        "description": ""
      },
      {
        "name": "ngkIcon",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "role",
        "type": "string",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkCardBadgeComponent": {
    "fileName": "projects/ng-kit/src/lib/card/card-badge.component.ts",
    "className": "NgkCardBadgeComponent",
    "description": "<p>The <code>NgkCardBadgeComponent</code> is an optional round, bordered element that is inside the <i>&#60;ngk-card-header&#62;</i>.\nIt can accept an ng-kit icon string (e.g. &quot;icon-profile&quot;), image, or both (in which case the icon is used as a fallback\nshould the image be undefined or missing).</p>",
    "type": "Component",
    "selector": "ngk-card-badge, [ngk-card-badge], [ngkCardBadge]",
    "inputs": [
      {
        "name": "icon",
        "type": "string",
        "description": ""
      },
      {
        "name": "image",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "badgeImage",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkCardBodyComponent": {
    "fileName": "projects/ng-kit/src/lib/card/card-body.component.ts",
    "className": "NgkCardBodyComponent",
    "description": "<p>The <code>NgkCardBodyComponent</code> is a wrapper component for the the lower part of the <code>NgkCardComponent</code> and contains any untagged content. \nIt can be overridden and replaced by tagging an element with the <code>NgkCardBodyDirective</code>.<br><br>\n<b>NOTE:</b> <i><code>NgkCardBodyComponent</code> is not exported and should not be instantiated by a user. Untagged content will be automatically\ntranscluded into it. To replace it, use the <code>NgkCardBodyDirective</code> tag instead.</i></p>",
    "type": "Component",
    "selector": "ngk-card-body",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCardControlsComponent": {
    "fileName": "projects/ng-kit/src/lib/card/card-controls.component.ts",
    "className": "NgkCardControlsComponent",
    "description": "<p>The <code>NgkCardControlsComponent</code> is similar to the <code>NgkCardControlsAreaDirective</code> in that the content inside it is transcluded\ninto the <i>&#60;ngk-card-header&#62;</i>. However, the <code>NgkCardControlsComponent</code> includes padding to cushion buttons uniformally\naccross the application. If you need to access the entirety of the controls area (the right half of the ngk-card-header)\nuse the <code>NgkCardControlsDirective</code> instead.</p>",
    "type": "Component",
    "selector": "ngk-card-controls",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCardHeaderComponent": {
    "fileName": "projects/ng-kit/src/lib/card/card-header.component.ts",
    "className": "NgkCardHeaderComponent",
    "description": "<p>The <code>NgkCardHeaderComponent</code> is a wrapper component for content transcluded into the ngk-card \nand contains the <code>NgkCardBadgeComponent</code>, <code>NgkCardTitleAreaDirective</code> / <i>&#60;header&#62;</i>, and\n<code>NgkCardControlsComponent</code> / <code>NgkCardControlsAreaDirective</code>.<br><br>\n<b>NOTE:</b> <i><code>NgkCardHeaderComponent</code> is not exported and should not be instantiated by a user.\nUse the <code>NgkCardBadgeComponent</code>, <code>NgkCardTitleAreaDirective</code> / <i>&#60;header&#62;</i>, and\n<code>NgkCardControlsComponent</code> / <code>NgkCardControlsAreaDirective</code> tags instead to access the areas of the <code>NgkCardHeaderComponent</code>.</i></p>",
    "type": "Component",
    "selector": "ngk-card-header",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCardControlsAreaDirective": {
    "fileName": "projects/ng-kit/src/lib/card/card.ts",
    "className": "NgkCardControlsAreaDirective",
    "description": "<p>The header can host controls (buttons, dropdown, etc). To project control content into the NgkCardControlsArea you can\nadd the <code>ngk-card-controls-area</code> or <code>ngkCardControlsArea</code> directive to the content you&#39;d like projected and place\nit inside the <i>&#60;ngk-card&#62;</i> tags. If both an NgkCardControls component and an element with the <code>NgkCardControlsAreaDirective</code>\nexits, the <code>NgkCardControlsAreaDirective</code> will override the <code>NgkCardControlsComponent</code>, replacing it in the dom.</p>",
    "type": "Directive",
    "selector": "[ngk-card-controls-area], [ngkCardControlsArea]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCardBodyDirective": {
    "fileName": "projects/ng-kit/src/lib/card/card.ts",
    "className": "NgkCardBodyDirective",
    "description": "<p>Using an instance of the <code>NgkCardBodyDirective</code> will override and remove the <i>&#60;ng-content&#62;</i> tag\nfrom the <code>NgkCardBodyComponent</code>, removing any content from between the <i>&#60;ngk-card&#62;</i> tags that is not tagged\nfor placement elsewhere.</p>",
    "type": "Directive",
    "selector": "[ngk-card-body], [ngkCardBody]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCardComponent": {
    "fileName": "projects/ng-kit/src/lib/card/card.ts",
    "className": "NgkCardComponent",
    "description": "<p>The <code>NgkCardComponent</code> consists of a header and body and is the primary component for a card instantiation. \nWithin the header are badge, title, and control areas.</p>",
    "type": "Component",
    "selector": "ngk-card",
    "inputs": [
      {
        "name": "removeBorder",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "title",
        "type": "string",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "borderClass",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "cardBody",
        "type": "NgkCardBodyDirective",
        "description": ""
      },
      {
        "name": "cardCardControlsArea",
        "type": "NgkCardControlsAreaDirective",
        "description": ""
      },
      {
        "name": "cardTitleArea",
        "type": "NgkCardTitleAreaDirective",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkCarouselConfig": {
    "fileName": "projects/ng-kit/src/lib/carousel/carousel-config.ts",
    "className": "NgkCarouselConfig",
    "description": "<p>A configuration service for the <a href=\"#/components/carousel/api#NgkCarousel\">NgkCarousel</a> component.</p>\n<p>You can inject this service, typically in your root component, and customize its properties\nto provide default values for all carousels used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "interval",
        "defaultValue": "5000",
        "type": "number",
        "description": ""
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "pauseOnHover",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showNavigationArrows",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showNavigationIndicators",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "wrap",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ]
  },
  "NgkSlideDirective": {
    "fileName": "projects/ng-kit/src/lib/carousel/carousel.ts",
    "className": "NgkSlideDirective",
    "description": "<p>A directive that wraps the individual carousel slide.</p>",
    "type": "Directive",
    "selector": "ng-template[ngkSlide]",
    "inputs": [
      {
        "name": "id",
        "type": "string",
        "description": "<p>Slide id that must be unique for the entire document.</p>\n<p>If not provided, will be generated in the <code>ngk-slide-xx</code> format.</p>"
      },
      {
        "name": "index",
        "type": "number",
        "description": "<p>Slide index inside carousel.</p>"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkCarouselComponent": {
    "fileName": "projects/ng-kit/src/lib/carousel/carousel.ts",
    "className": "NgkCarouselComponent",
    "description": "<p>Carousel is a component to easily create and control slideshows.</p>\n<p>Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.</p>",
    "type": "Component",
    "selector": "ngk-carousel",
    "exportAs": "ngkCarousel",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>The slide id that should be displayed <strong>initially</strong>.</p>\n<p>For subsequent interactions use methods <code>select()</code>, <code>next()</code>, etc. and the <code>(slide)</code> output.</p>"
      },
      {
        "name": "interval",
        "type": "number",
        "description": "<p>Time in milliseconds before the next slide is shown.</p>"
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "<p>If <code>true</code>, allows to interact with carousel using keyboard &#39;arrow left&#39; and &#39;arrow right&#39;.</p>"
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will pause slide switching when mouse cursor hovers the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "showNavigationArrows",
        "type": "boolean",
        "description": "<p>If <code>true</code>, &#39;previous&#39; and &#39;next&#39; navigation arrows will be visible on the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "showNavigationIndicators",
        "type": "boolean",
        "description": "<p>If <code>true</code>, navigation indicators at the bottom of the slide will be visible.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will &#39;wrap&#39; the carousel by switching from the last slide back to the first.</p>"
      }
    ],
    "outputs": [
      {
        "name": "slide",
        "description": "<p>An event emitted right after the slide transition is completed.</p>\n<p>See <a href=\"#/components/carousel/api#NgkSlideEvent\"><code>NgkSlideEvent</code></a> for payload details.</p>"
      }
    ],
    "properties": [
      {
        "name": "interval",
        "type": "number",
        "description": "<p>Time in milliseconds before the next slide is shown.</p>"
      },
      {
        "name": "NgkSlideEventSource",
        "defaultValue": "NgkSlideEventSource",
        "type": "typeof NgkSlideEventSource",
        "description": ""
      },
      {
        "name": "pauseOnHover",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will pause slide switching when mouse cursor hovers the slide.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "slides",
        "type": "QueryList<NgkSlideDirective>",
        "description": ""
      },
      {
        "name": "wrap",
        "type": "boolean",
        "description": "<p>If <code>true</code>, will &#39;wrap&#39; the carousel by switching from the last slide back to the first.</p>"
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "<p>Navigates to a slide with the specified identifier.</p>",
        "args": [
          {
            "name": "slideId",
            "type": "string"
          },
          {
            "name": "source",
            "type": "NgkSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "prev",
        "description": "<p>Navigates to the previous slide.</p>",
        "args": [
          {
            "name": "source",
            "type": "NgkSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "next",
        "description": "<p>Navigates to the next slide.</p>",
        "args": [
          {
            "name": "source",
            "type": "NgkSlideEventSource"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "pause",
        "description": "<p>Pauses cycling through the slides.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "cycle",
        "description": "<p>Restarts cycling through the slides from left to right.</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgkSlideEvent": {
    "fileName": "projects/ng-kit/src/lib/carousel/carousel.ts",
    "className": "NgkSlideEvent",
    "description": "<p>A slide change event emitted right after the slide transition is completed.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "string",
        "description": "<p>The current slide id.</p>"
      },
      {
        "name": "direction",
        "type": "NgkSlideEventDirection",
        "description": "<p>The slide event direction.</p>\n<p>Possible values are <code>&#39;left&#39; | &#39;right&#39;</code>.</p>"
      },
      {
        "name": "element",
        "type": "Element",
        "description": "<p>Source carousel native element.</p>"
      },
      {
        "name": "paused",
        "type": "boolean",
        "description": "<p>Whether the pause() method was called (and no cycle() call was done afterwards).</p>",
        "since": {
          "version": "5.1.0",
          "description": ""
        }
      },
      {
        "name": "prev",
        "type": "string",
        "description": "<p>The previous slide id.</p>"
      },
      {
        "name": "slideIndex",
        "type": "number",
        "description": "<p>Source carousel current slide index.</p>"
      },
      {
        "name": "source",
        "type": "NgkSlideEventSource",
        "description": "<p>Source triggering the slide change event.</p>\n<p>Possible values are <code>&#39;timer&#39; | &#39;arrowLeft&#39; | &#39;arrowRight&#39; | &#39;indicator&#39;</code></p>",
        "since": {
          "version": "5.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgkCollapseComponent": {
    "fileName": "projects/ng-kit/src/lib/collapse/collapse.ts",
    "className": "NgkCollapseComponent",
    "description": "<p>A component to provide a simple way of hiding and showing elements on the page.</p>",
    "type": "Component",
    "selector": "ngk-collapse, [ngkCollapse]",
    "exportAs": "ngkCollapse",
    "inputs": [
      {
        "name": "_open",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "collapsedContent",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "hasNoContent",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkDateAdapter": {
    "fileName": "projects/ng-kit/src/lib/datepicker/adapters/date-adapter.ts",
    "className": "NgkDateAdapter",
    "description": "<p>An abstract service that does the conversion between the internal datepicker <code>NgkDateStruct</code> model and\nany provided user date model <code>D</code>, ex. a string, a native date, etc.</p>\n<p>The adapter is used <strong>only</strong> for conversion when binding datepicker to a form control,\nex. <code>[(ngModel)]=&quot;userDateModel&quot;</code>. Here <code>userDateModel</code> can be of any type.</p>\n<p>The default datepicker implementation assumes we use <code>NgkDateStruct</code> as a user model.</p>",
    "typeParameter": "D",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "<p>Converts a user-model date of type <code>D</code> to an <code>NgkDateStruct</code> for internal use.</p>",
        "args": [
          {
            "name": "value",
            "type": "D"
          }
        ],
        "returnType": "NgkDateStruct"
      },
      {
        "name": "toModel",
        "description": "<p>Converts an internal <code>NgkDateStruct</code> date to a user-model date of type <code>D</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "D"
      }
    ],
    "properties": []
  },
  "NgkDateNativeAdapter": {
    "fileName": "projects/ng-kit/src/lib/datepicker/adapters/date-native-adapter.ts",
    "className": "NgkDateNativeAdapter",
    "description": "<p>native javascript dates as a user date model.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "fromModel",
        "description": "<p>Converts a native <code>Date</code> to a <code>NgkDateStruct</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "Date"
          }
        ],
        "returnType": "NgkDateStruct"
      },
      {
        "name": "toModel",
        "description": "<p>Converts a <code>NgkDateStruct</code> to a native <code>Date</code>.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "Date"
      }
    ],
    "properties": []
  },
  "NgkCalendar": {
    "fileName": "projects/ng-kit/src/lib/datepicker/calendar.ts",
    "className": "NgkCalendar",
    "description": "<p>A service that represents the calendar used by the datepicker.</p>\n<p>The default implementation uses the Gregorian calendar. You can inject it in your own\nimplementations if necessary to simplify <code>NgkDate</code> calculations.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "getDaysPerWeek",
        "description": "<p>Returns the number of days per week.</p>",
        "args": [],
        "returnType": "number"
      },
      {
        "name": "getMonths",
        "description": "<p>Returns an array of months per year.</p>\n<p>With default calendar we use ISO 8601 and return [1, 2, ..., 12];</p>",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "number[]"
      },
      {
        "name": "getWeeksPerMonth",
        "description": "<p>Returns the number of weeks per month.</p>",
        "args": [],
        "returnType": "number"
      },
      {
        "name": "getWeekday",
        "description": "<p>Returns the weekday number for a given day.</p>\n<p>With the default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDate"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "getNext",
        "description": "<p>Adds a number of years, months or days to a given date.</p>\n<ul>\n<li><code>period</code> can be <code>y</code>, <code>m</code> or <code>d</code> and defaults to day.</li>\n<li><code>number</code> defaults to 1.</li>\n</ul>\n<p>Always returns a new date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDate"
          },
          {
            "name": "period",
            "type": "NgkPeriod"
          },
          {
            "name": "number",
            "type": "number"
          }
        ],
        "returnType": "NgkDate"
      },
      {
        "name": "getPrev",
        "description": "<p>Subtracts a number of years, months or days from a given date.</p>\n<ul>\n<li><code>period</code> can be <code>y</code>, <code>m</code> or <code>d</code> and defaults to day.</li>\n<li><code>number</code> defaults to 1.</li>\n</ul>\n<p>Always returns a new date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDate"
          },
          {
            "name": "period",
            "type": "NgkPeriod"
          },
          {
            "name": "number",
            "type": "number"
          }
        ],
        "returnType": "NgkDate"
      },
      {
        "name": "getWeekNumber",
        "description": "<p>Returns the week number for a given week.</p>",
        "args": [
          {
            "name": "week",
            "type": "NgkDate[]"
          },
          {
            "name": "firstDayOfWeek",
            "type": "number"
          }
        ],
        "returnType": "number"
      },
      {
        "name": "getToday",
        "description": "<p>Returns the today&#39;s date.</p>",
        "args": [],
        "returnType": "NgkDate"
      },
      {
        "name": "isValid",
        "description": "<p>Checks if a date is valid in the current calendar.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDate"
          }
        ],
        "returnType": "boolean"
      }
    ],
    "properties": []
  },
  "NgkDateParserFormatter": {
    "fileName": "projects/ng-kit/src/lib/datepicker/date-parser-formatter.ts",
    "className": "NgkDateParserFormatter",
    "description": "<p>An abstract service for parsing and formatting dates for the\nConverts between the internal <code>NgkDateStruct</code> model presentation and a <code>string</code> that is displayed in the\ninput element.</p>\n<p>When user types something in the input this service attempts to parse it into a <code>NgkDateStruct</code> object.\nAnd vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a <code>string</code>\nin the input.</p>\n<p>Default implementation uses the ISO 8601 format, but you can provide another implementation via DI\nto use an alternative string format or a custom parsing logic.</p>\n<p>See the <a href=\"#/components/datepicker/overview#date-model\">date format overview</a> for more details.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "parse",
        "description": "<p>Parses the given <code>string</code> to an <code>NgkDateStruct</code>.</p>\n<p>Implementations should try their best to provide a result, even\npartial. They must return <code>null</code> if the value can&#39;t be parsed.</p>",
        "args": [
          {
            "name": "value",
            "type": "string"
          }
        ],
        "returnType": "NgkDateStruct"
      },
      {
        "name": "format",
        "description": "<p>Formats the given <code>NgkDateStruct</code> to a <code>string</code>.</p>\n<p>Implementations should return an empty string if the given date is <code>null</code>,\nand try their best to provide a partial result if the given date is incomplete or invalid.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "string"
      }
    ],
    "properties": []
  },
  "NgkDateStruct": {
    "fileName": "projects/ng-kit/src/lib/datepicker/date-struct.ts",
    "className": "NgkDateStruct",
    "description": "<p>An interface of the date model used by the datepicker.</p>\n<p>All datepicker APIs consume <code>NgkDateStruct</code>, but return <code>NgkDate</code>.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "<p>The day of month, starting at 1</p>"
      },
      {
        "name": "month",
        "type": "number",
        "description": "<p>The month, for example 1=Jan ... 12=Dec</p>"
      },
      {
        "name": "year",
        "type": "number",
        "description": "<p>The year, for example 2016</p>"
      }
    ]
  },
  "NgkDate": {
    "fileName": "projects/ng-kit/src/lib/datepicker/date.ts",
    "className": "NgkDate",
    "description": "<p>A simple class that represents a date that datepicker also uses internally.</p>\n<p>It is the implementation of the <code>NgkDateStruct</code> interface that adds some convenience methods,\nlike <code>.equals()</code>, <code>.before()</code>, etc.</p>\n<p>All datepicker APIs consume <code>NgkDateStruct</code>, but return <code>NgkDate</code>.</p>",
    "since": {
      "version": "3.0.0",
      "description": ""
    },
    "type": "Class",
    "methods": [
      {
        "name": "from",
        "description": "<p>A <strong>static method</strong> that creates a new date object from the <code>NgkDateStruct</code>,</p>\n<p>ex. <code>NgkDate.from({year: 2000, month: 5, day: 1})</code>.</p>\n<p>If the <code>date</code> is already of <code>NgkDate</code> type, the method will return the same object.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "NgkDate"
      },
      {
        "name": "equals",
        "description": "<p>Checks if the current date is equal to another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "boolean"
      },
      {
        "name": "before",
        "description": "<p>Checks if the current date is before another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "boolean"
      },
      {
        "name": "after",
        "description": "<p>Checks if the current date is after another date.</p>",
        "args": [
          {
            "name": "other",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "boolean"
      }
    ],
    "properties": [
      {
        "name": "day",
        "type": "number",
        "description": "<p>The day of month, starting with 1</p>"
      },
      {
        "name": "month",
        "type": "number",
        "description": "<p>The month, for example 1=Jan ... 12=Dec as in ISO 8601</p>"
      },
      {
        "name": "year",
        "type": "number",
        "description": "<p>The year, for example 2016</p>"
      }
    ]
  },
  "NgkDatepickerConfig": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker-config.ts",
    "className": "NgkDatepickerConfig",
    "description": "<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the datepickers used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": ""
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgkDateStruct, current: { year: number; month: number; }) => any",
        "description": ""
      },
      {
        "name": "displayMonths",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "firstDayOfWeek",
        "defaultValue": "1",
        "type": "number",
        "description": ""
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": ""
      },
      {
        "name": "markDisabled",
        "type": "(date: NgkDateStruct, current: { year: number; month: number; }) => boolean",
        "description": ""
      },
      {
        "name": "maxDate",
        "type": "NgkDateStruct",
        "description": ""
      },
      {
        "name": "minDate",
        "type": "NgkDateStruct",
        "description": ""
      },
      {
        "name": "navigation",
        "defaultValue": "select",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": ""
      },
      {
        "name": "outsideDays",
        "defaultValue": "visible",
        "type": "\"collapsed\" | \"visible\" | \"hidden\"",
        "description": ""
      },
      {
        "name": "showWeekdays",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showWeekNumbers",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; }",
        "description": ""
      }
    ]
  },
  "DayTemplateContext": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker-day-template-context.ts",
    "className": "DayTemplateContext",
    "description": "<p>The context for the datepicker &#39;day&#39; template.</p>\n<p>You can override the way dates are displayed in the datepicker via the <code>[dayTemplate]</code> input.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "$implicit",
        "type": "NgkDate",
        "description": "<p>The date that corresponds to the template. Same as the <code>date</code> parameter.</p>\n<p>Can be used for convenience as a default template key, ex. <code>let-d</code>.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "currentMonth",
        "type": "number",
        "description": "<p>The month currently displayed by the datepicker.</p>"
      },
      {
        "name": "data",
        "type": "any",
        "description": "<p>Any data you pass using the <code>[dayTemplateData]</code> input in the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "date",
        "type": "NgkDate",
        "description": "<p>The date that corresponds to the template.</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is disabled.</p>"
      },
      {
        "name": "focused",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is focused.</p>"
      },
      {
        "name": "selected",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is selected.</p>"
      },
      {
        "name": "today",
        "type": "boolean",
        "description": "<p><code>True</code> if the current date is today (equal to <code>NgkCalendar.getToday()</code>).</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgkDatepickerI18n": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker-i18n.ts",
    "className": "NgkDatepickerI18n",
    "description": "<p>A service supplying i18n data to the datepicker component.</p>\n<p>The default implementation of this service uses the Angular locale and registered locale data for\nweekdays and month names (as explained in the Angular i18n guide).</p>\n<p>It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year\nnumerals. For other static labels the datepicker uses the default Angular i18n.</p>\n<p>See the <a href=\"#/components/datepicker/examples#i18n\">i18n demo</a> and\n<a href=\"#/components/datepicker/calendars#hebrew\">Hebrew calendar demo</a> on how to extend this class and define\na custom provider for i18n.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "getWeekdayShortName",
        "description": "<p>Returns the short weekday name to display in the heading of the month view.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>",
        "args": [
          {
            "name": "weekday",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthShortName",
        "description": "<p>Returns the short month name to display in the date picker navigation.</p>\n<p>With default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.</p>",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getMonthFullName",
        "description": "<p>Returns the full month name to display in the date picker navigation.</p>\n<p>With default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.</p>",
        "args": [
          {
            "name": "month",
            "type": "number"
          },
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string"
      },
      {
        "name": "getDayAriaLabel",
        "description": "<p>Returns the value of the <code>aria-label</code> attribute for a specific date.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "2.0.0",
          "description": ""
        }
      },
      {
        "name": "getDayNumerals",
        "description": "<p>Returns the textual representation of a day that is rendered in a day cell.</p>",
        "args": [
          {
            "name": "date",
            "type": "NgkDateStruct"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "getWeekNumerals",
        "description": "<p>Returns the textual representation of a week number rendered by datepicker.</p>",
        "args": [
          {
            "name": "weekNumber",
            "type": "number"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "getYearNumerals",
        "description": "<p>Returns the textual representation of a year that is rendered in the datepicker year select box.</p>",
        "args": [
          {
            "name": "year",
            "type": "number"
          }
        ],
        "returnType": "string",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      }
    ],
    "properties": []
  },
  "NgkInputDatepickerDirective": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker-input.ts",
    "className": "NgkInputDatepickerDirective",
    "description": "<p>A directive that allows to stick a datepicker popup to an input field.</p>\n<p>Manages interaction with the input field itself, does value formatting and provides forms integration.</p>",
    "type": "Directive",
    "selector": "input[ngkDatepicker]",
    "exportAs": "ngkDatepicker",
    "inputs": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.</p>\n<ul>\n<li><code>true</code> - the popup will close on both date selection and outside click.</li>\n<li><code>false</code> - the popup can only be closed manually via <code>close()</code> or <code>toggle()</code> methods.</li>\n<li><code>&quot;inside&quot;</code> - the popup will close on date selection, but not outside clicks.</li>\n<li><code>&quot;outside&quot;</code> - the popup will close only on the outside click and not on date selection/inside clicks.</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the datepicker popup should be appended to.</p>\n<p>Currently only supports <code>&quot;body&quot;</code>.</p>"
      },
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "<p>The reference to a custom template for the day.</p>\n<p>Allows to completely override the way a day &#39;cell&#39; in the calendar is displayed.</p>\n<p>See <a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a> for the data you get inside.</p>"
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgkDate, current: { year: number; month: number; }) => any",
        "description": "<p>The callback to pass any arbitrary data to the template cell via the\n<a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a>&#39;s <code>data</code> parameter.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "disabled",
        "type": "any",
        "description": ""
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "<p>The number of months to display.</p>"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "<p>The first day of the week.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>"
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": "<p>The reference to the custom template for the datepicker footer.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "markDisabled",
        "type": "(date: NgkDate, current: { year: number; month: number; }) => boolean",
        "description": "<p>The callback to mark some dates as disabled.</p>\n<p>It is called for each new date when navigating to a different month.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>"
      },
      {
        "name": "maxDate",
        "type": "NgkDateStruct",
        "description": "<p>The latest date that can be displayed or selected. Also used for form validation.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years after the current month.</p>"
      },
      {
        "name": "minDate",
        "type": "NgkDateStruct",
        "description": "<p>The earliest date that can be displayed or selected. Also used for form validation.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years before the current month.</p>"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "<p>Navigation type.</p>\n<ul>\n<li><code>&quot;select&quot;</code> - select boxes for month and navigation arrows</li>\n<li><code>&quot;arrows&quot;</code> - only navigation arrows</li>\n<li><code>&quot;none&quot;</code> - no navigation visible at all</li>\n</ul>"
      },
      {
        "name": "outsideDays",
        "type": "\"collapsed\" | \"visible\" | \"hidden\"",
        "description": "<p>The way of displaying days that don&#39;t belong to the current month.</p>\n<ul>\n<li><code>&quot;visible&quot;</code> - days are visible</li>\n<li><code>&quot;hidden&quot;</code> - days are hidden, white space preserved</li>\n<li><code>&quot;collapsed&quot;</code> - days are collapsed, so the datepicker height might change between months</li>\n</ul>\n<p>For the 2+ months view, days in between months are never shown.</p>"
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the datepicker popup.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;bottom-left bottom-right top-left top-right&quot;</code></p>"
      },
      {
        "name": "positionTarget",
        "type": "string | HTMLElement",
        "description": "<p>A css selector or html element specifying the element the datepicker popup should be positioned against.</p>\n<p>By default the input is used as a target.</p>",
        "since": {
          "version": "4.2.0",
          "description": ""
        }
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "<p>If <code>true</code>, weekdays will be displayed.</p>"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "<p>If <code>true</code>, week numbers will be displayed.</p>"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; day?: number; }",
        "description": "<p>The date to open calendar with.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date is provided, calendar will open with current month.</p>\n<p>You could use <code>navigateTo(date)</code> method as an alternative.</p>"
      }
    ],
    "outputs": [
      {
        "name": "dateSelect",
        "description": "<p>An event emitted when user selects a date using keyboard or mouse.</p>\n<p>The payload of the event is currently selected <code>NgkDate</code>.</p>",
        "since": {
          "version": "1.1.1",
          "description": ""
        }
      },
      {
        "name": "navigate",
        "description": "<p>Event emitted right after the navigation happens and displayed month changes.</p>"
      }
    ],
    "properties": [
      {
        "name": "_disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens the datepicker popup.</p>\n<p>If the related form control contains a valid date, the corresponding month will be opened.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the datepicker popup.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the datepicker popup.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "navigateTo",
        "description": "<p>Navigates to the provided date.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.</p>\n<p>Use the <code>[startDate]</code> input as an alternative.</p>",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; day?: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgkDatepickerNavigateEvent": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker.ts",
    "className": "NgkDatepickerNavigateEvent",
    "description": "<p>An event emitted right before the navigation happens and the month displayed by the datepicker changes.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "current",
        "type": "{ year: number; month: number; }",
        "description": "<p>The currently displayed month.</p>"
      },
      {
        "name": "next",
        "type": "{ year: number; month: number; }",
        "description": "<p>The month we&#39;re navigating to.</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Calling this function will prevent navigation from happening.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      }
    ]
  },
  "NgkDatepickerComponent": {
    "fileName": "projects/ng-kit/src/lib/datepicker/datepicker.ts",
    "className": "NgkDatepickerComponent",
    "description": "<p>A highly configurable component that helps you with selecting calendar dates.</p>\n<p><code>NgkDatepicker</code> is meant to be displayed inline on a page or put inside a popup.</p>",
    "type": "Component",
    "selector": "ngk-datepicker",
    "exportAs": "ngkDatepicker",
    "inputs": [
      {
        "name": "dayTemplate",
        "type": "TemplateRef<DayTemplateContext>",
        "description": "<p>The reference to a custom template for the day.</p>\n<p>Allows to completely override the way a day &#39;cell&#39; in the calendar is displayed.</p>\n<p>See <a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a> for the data you get inside.</p>"
      },
      {
        "name": "dayTemplateData",
        "type": "(date: NgkDate, current: { year: number; month: number; }) => any",
        "description": "<p>The callback to pass any arbitrary data to the template cell via the\n<a href=\"#/components/datepicker/api#DayTemplateContext\"><code>DayTemplateContext</code></a>&#39;s <code>data</code> parameter.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "displayMonths",
        "type": "number",
        "description": "<p>The number of months to display.</p>"
      },
      {
        "name": "firstDayOfWeek",
        "type": "number",
        "description": "<p>The first day of the week.</p>\n<p>With default calendar we use ISO 8601: &#39;weekday&#39; is 1=Mon ... 7=Sun.</p>"
      },
      {
        "name": "flex",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "footerTemplate",
        "type": "TemplateRef<any>",
        "description": "<p>The reference to the custom template for the datepicker footer.</p>",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      },
      {
        "name": "markDisabled",
        "type": "(date: NgkDate, current: { year: number; month: number; }) => boolean",
        "description": "<p>The callback to mark some dates as disabled.</p>\n<p>It is called for each new date when navigating to a different month.</p>\n<p><code>current</code> is the month that is currently displayed by the datepicker.</p>"
      },
      {
        "name": "maxDate",
        "type": "NgkDateStruct",
        "description": "<p>The latest date that can be displayed or selected.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years after the current month.</p>"
      },
      {
        "name": "minDate",
        "type": "NgkDateStruct",
        "description": "<p>The earliest date that can be displayed or selected.</p>\n<p>If not provided, &#39;year&#39; select box will display 10 years before the current month.</p>"
      },
      {
        "name": "navigation",
        "type": "\"select\" | \"arrows\" | \"none\"",
        "description": "<p>Navigation type.</p>\n<ul>\n<li><code>&quot;select&quot;</code> - select boxes for month and navigation arrows</li>\n<li><code>&quot;arrows&quot;</code> - only navigation arrows</li>\n<li><code>&quot;none&quot;</code> - no navigation visible at all</li>\n</ul>"
      },
      {
        "name": "outsideDays",
        "type": "\"collapsed\" | \"visible\" | \"hidden\"",
        "description": "<p>The way of displaying days that don&#39;t belong to the current month.</p>\n<ul>\n<li><code>&quot;visible&quot;</code> - days are visible</li>\n<li><code>&quot;hidden&quot;</code> - days are hidden, white space preserved</li>\n<li><code>&quot;collapsed&quot;</code> - days are collapsed, so the datepicker height might change between months</li>\n</ul>\n<p>For the 2+ months view, days in between months are never shown.</p>"
      },
      {
        "name": "showWeekdays",
        "type": "boolean",
        "description": "<p>If <code>true</code>, weekdays will be displayed.</p>"
      },
      {
        "name": "showWeekNumbers",
        "type": "boolean",
        "description": "<p>If <code>true</code>, week numbers will be displayed.</p>"
      },
      {
        "name": "startDate",
        "type": "{ year: number; month: number; day?: number; }",
        "description": "<p>The date to open calendar with.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date is provided, calendar will open with current month.</p>\n<p>You could use <code>navigateTo(date)</code> method as an alternative.</p>"
      }
    ],
    "outputs": [
      {
        "name": "navigate",
        "description": "<p>An event emitted right before the navigation happens and displayed month changes.</p>"
      },
      {
        "name": "select",
        "description": "<p>An event emitted when user selects a date using keyboard or mouse.</p>\n<p>The payload of the event is currently selected <code>NgkDate</code>.</p>"
      }
    ],
    "properties": [
      {
        "name": "model",
        "type": "DatepickerViewModel",
        "description": ""
      },
      {
        "name": "multipleMonths",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "navigationTypeArrows",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "navigationTypeNone",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "onChange",
        "type": "(_: any) => void",
        "description": ""
      },
      {
        "name": "onTouched",
        "type": "() => void",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "navigateTo",
        "description": "<p>Navigates to the provided date.</p>\n<p>With the default calendar we use ISO 8601: &#39;month&#39; is 1=Jan ... 12=Dec.\nIf nothing or invalid date provided calendar will open current month.</p>\n<p>Use the <code>[startDate]</code> input as an alternative.</p>",
        "args": [
          {
            "name": "date",
            "type": "{ year: number; month: number; day?: number; }"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgkDropdownConfig": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownConfig",
    "description": "<p>Configuration service for the NgkDropdown directive.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the dropdowns used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "container",
        "type": "\"body\"",
        "description": ""
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": ""
      }
    ]
  },
  "NgkDropdownItemDirective": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownItemDirective",
    "description": "<p>A directive you should put put on a dropdown item of a menu.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "[ngkDropdownItem]",
    "inputs": [
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "classDisabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "dropdownItem",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkDropdownMenuComponent": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownMenuComponent",
    "description": "<p>A component that wraps dropdown menu content and dropdown items.</p>",
    "type": "Component",
    "selector": "ngk-dropdown-menu",
    "exportAs": "ngkDropdownMenu",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "isOpen",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "menuItems",
        "type": "QueryList<NgkDropdownItemDirective>",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "bottom",
        "type": "Placement",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkDropdownAnchorDirective": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownAnchorDirective",
    "description": "<p>Marks an element to which dropdown menu will be anchored. This is a simple version\nof the NgkDropdownToggle directive. It plays the same role as NgkDropdownToggle but\ndoesn&#39;t listen to click events to toggle dropdown menu thus enabling support for\nevents other than click.</p>",
    "since": {
      "version": "1.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "[ngkDropdownAnchor]",
    "inputs": [],
    "outputs": [],
    "properties": [
      {
        "name": "anchorEl",
        "type": "any",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkDropdownToggleDirective": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownToggleDirective",
    "description": "<p>Allows the dropdown to be toggled via click. This directive is optional: you can use NgkDropdownAnchor as an\nalternative.</p>",
    "type": "Directive",
    "selector": "[ngkDropdownToggle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkDropdownComponent": {
    "fileName": "projects/ng-kit/src/lib/dropdown/dropdown.ts",
    "className": "NgkDropdownComponent",
    "description": "<p>Transforms a node into a dropdown.</p>",
    "type": "Component",
    "selector": "ngk-dropdown",
    "exportAs": "ngkDropdown",
    "inputs": [
      {
        "name": "_open",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>Defines whether or not the dropdown menu is opened initially.</p>"
      },
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.</p>\n<ul>\n<li><code>true</code> - the dropdown will close on both outside and inside (menu) clicks.</li>\n<li><code>false</code> - the dropdown can only be closed manually via <code>close()</code> or <code>toggle()</code> methods.</li>\n<li><code>&quot;inside&quot;</code> - the dropdown will close on inside menu clicks, but not outside clicks.</li>\n<li><code>&quot;outside&quot;</code> - the dropdown will close only on the outside clicks and not on menu clicks.</li>\n</ul>"
      },
      {
        "name": "container",
        "type": "\"body\"",
        "description": "<p>A selector specifying the element the dropdown should be appended to.\nCurrently only supports &quot;body&quot;.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "display",
        "type": "\"dynamic\" | \"static\"",
        "description": "<p>Enable or disable the dynamic positioning. The default value is dynamic unless the dropdown is used\ninside a Bootstrap navbar. If you need custom placement for a dropdown in a navbar, set it to\ndynamic explicitly. See the <a href=\"#/positioning#dropdown\">positioning of dropdown</a>\nand the <a href=\"/#/components/dropdown/examples#navbar\">navbar demo</a> for more details.</p>",
        "since": {
          "version": "4.2.0",
          "description": ""
        }
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>The preferred placement of the dropdown.</p>\n<p>Possible values are <code>&quot;top&quot;</code>, <code>&quot;top-left&quot;</code>, <code>&quot;top-right&quot;</code>, <code>&quot;bottom&quot;</code>, <code>&quot;bottom-left&quot;</code>,\n<code>&quot;bottom-right&quot;</code>, <code>&quot;left&quot;</code>, <code>&quot;left-top&quot;</code>, <code>&quot;left-bottom&quot;</code>, <code>&quot;right&quot;</code>, <code>&quot;right-top&quot;</code>,\n<code>&quot;right-bottom&quot;</code></p>\n<p>Accepts an array of strings or a string with space separated possible values.</p>\n<p>The default order of preference is <code>&quot;bottom-left bottom-right top-left top-right&quot;</code></p>\n<p>Please see the <a href=\"#/positioning\">positioning overview</a> for more details.</p>"
      }
    ],
    "outputs": [
      {
        "name": "openChange",
        "description": "<p>An event fired when the dropdown is opened or closed.</p>\n<p>The event payload is a <code>boolean</code>:</p>\n<ul>\n<li><code>true</code> - the dropdown was opened</li>\n<li><code>false</code> - the dropdown was closed</li>\n</ul>"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "isOpen",
        "description": "<p>Checks if the dropdown menu is open.</p>",
        "args": [],
        "returnType": "boolean"
      },
      {
        "name": "open",
        "description": "<p>Opens the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles the dropdown menu.</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgkModalOptions": {
    "fileName": "projects/ng-kit/src/lib/modal/modal-config.ts",
    "className": "NgkModalOptions",
    "description": "<p>Options available when opening new modal windows with <code>NgkModal.open()</code> method.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "ariaLabelledBy",
        "type": "string",
        "description": "<p><code>aria-labelledby</code> attribute value to set on the modal window.</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "backdrop",
        "type": "boolean | \"static\"",
        "description": "<p>If <code>true</code>, the backdrop element will be created for a given modal.</p>\n<p>Alternatively, specify <code>&#39;static&#39;</code> for a backdrop which doesn&#39;t close the modal on click.</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "backdropClass",
        "type": "string",
        "description": "<p>A custom class to append to the modal backdrop.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "beforeDismiss",
        "type": "() => boolean | Promise<boolean>",
        "description": "<p>Callback right before the modal will be dismissed.</p>\n<p>If this function returns:</p>\n<ul>\n<li><code>false</code></li>\n<li>a promise resolved with <code>false</code></li>\n<li>a promise that is rejected</li>\n</ul>\n<p>then the modal won&#39;t be dismissed.</p>"
      },
      {
        "name": "centered",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be centered vertically.</p>\n<p>Default value is <code>false</code>.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element all new modal windows should be appended to.</p>\n<p>If not specified, will be <code>body</code>.</p>"
      },
      {
        "name": "injector",
        "type": "Injector",
        "description": "<p>The <code>Injector</code> to use for modal content.</p>"
      },
      {
        "name": "keyboard",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be closed when <code>Escape</code> key is pressed</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "lightboxMode",
        "type": "boolean",
        "description": "<p>A setting to remove theming for an empty looking modal backdrop.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "scrollable",
        "type": "boolean",
        "description": "<p>Scrollable modal content (false by default).</p>",
        "since": {
          "version": "5.0.0",
          "description": ""
        }
      },
      {
        "name": "size",
        "type": "\"sm\" | \"md\" | \"lg\" | \"xl\"",
        "description": "<p>Size of a new modal window.</p>"
      },
      {
        "name": "windowClass",
        "type": "string",
        "description": "<p>A custom class to append to the modal window.</p>"
      }
    ]
  },
  "NgkModalConfig": {
    "fileName": "projects/ng-kit/src/lib/modal/modal-config.ts",
    "className": "NgkModalConfig",
    "description": "<p>You can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all modals used in the application.</p>",
    "since": {
      "version": "3.1.0",
      "description": ""
    },
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "backdrop",
        "defaultValue": "true",
        "type": "boolean | \"static\"",
        "description": "<p>If <code>true</code>, the backdrop element will be created for a given modal.</p>\n<p>Alternatively, specify <code>&#39;static&#39;</code> for a backdrop which doesn&#39;t close the modal on click.</p>\n<p>Default value is <code>true</code>.</p>"
      },
      {
        "name": "keyboard",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the modal will be closed when <code>Escape</code> key is pressed</p>\n<p>Default value is <code>true</code>.</p>"
      }
    ]
  },
  "NgkActiveModal": {
    "fileName": "projects/ng-kit/src/lib/modal/modal-ref.ts",
    "className": "NgkActiveModal",
    "description": "<p>A reference to the currently opened (active) modal.</p>\n<p>Instances of this class can be injected into your component passed as modal content.\nSo you can <code>.close()</code> or <code>.dismiss()</code> the modal window from your component.</p>",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "<p>Closes the modal with an optional <code>result</code> value.</p>\n<p>The <code>NgkMobalRef.result</code> promise will be resolved with the provided value.</p>",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "<p>Dismisses the modal with an optional <code>reason</code> value.</p>\n<p>The <code>NgkModalRef.result</code> promise will be rejected with the provided value.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": []
  },
  "NgkModalRef": {
    "fileName": "projects/ng-kit/src/lib/modal/modal-ref.ts",
    "className": "NgkModalRef",
    "description": "<p>A reference to the newly opened modal returned by the <code>NgkModal.open()</code> method.</p>",
    "type": "Class",
    "methods": [
      {
        "name": "close",
        "description": "<p>Closes the modal with an optional <code>result</code> value.</p>\n<p>The <code>NgkMobalRef.result</code> promise will be resolved with the provided value.</p>",
        "args": [
          {
            "name": "result",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "dismiss",
        "description": "<p>Dismisses the modal with an optional <code>reason</code> value.</p>\n<p>The <code>NgkModalRef.result</code> promise will be rejected with the provided value.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void"
      }
    ],
    "properties": [
      {
        "name": "componentInstance",
        "type": "any",
        "description": "<p>The instance of a component used for the modal content.</p>\n<p>When a <code>TemplateRef</code> is used as the content, will return <code>undefined</code>.</p>"
      },
      {
        "name": "result",
        "type": "Promise<any>",
        "description": "<p>The promise that is resolved when the modal is closed and rejected when the modal is dismissed.</p>"
      }
    ]
  },
  "NgkModal": {
    "fileName": "projects/ng-kit/src/lib/modal/modal.ts",
    "className": "NgkModal",
    "description": "<p>A service for opening modal windows.</p>\n<p>Creating a modal is straightforward: create a component or a template and pass it as an argument to\nthe <code>.open()</code> method.</p>",
    "type": "Service",
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens a new modal window with the specified content and supplied options.</p>\n<p>Content can be provided as a <code>TemplateRef</code> or a component type. If you pass a component type as content,\nthen instances of those components can be injected with an instance of the <code>NgkActiveModal</code> class. You can then\nuse <code>NgkActiveModal</code> methods to close / dismiss modals from &quot;inside&quot; of your component.</p>",
        "args": [
          {
            "name": "content",
            "type": "any"
          },
          {
            "name": "options",
            "type": "NgkModalOptions"
          }
        ],
        "returnType": "NgkModalRef"
      },
      {
        "name": "dismissAll",
        "description": "<p>Dismisses all currently displayed modal windows with the supplied reason.</p>",
        "args": [
          {
            "name": "reason",
            "type": "any"
          }
        ],
        "returnType": "void",
        "since": {
          "version": "3.1.0",
          "description": ""
        }
      },
      {
        "name": "hasOpenModals",
        "description": "<p>Indicates if there are currently any open modal windows in the application.</p>",
        "args": [],
        "returnType": "boolean",
        "since": {
          "version": "3.3.0",
          "description": ""
        }
      }
    ],
    "properties": []
  },
  "NgkPaginationLinkContext": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationLinkContext",
    "description": "<p>A context for the</p>\n<ul>\n<li><code>NgkPaginationFirst</code></li>\n<li><code>NgkPaginationPrevious</code></li>\n<li><code>NgkPaginationNext</code></li>\n<li><code>NgkPaginationLast</code></li>\n<li><code>NgkPaginationEllipsis</code></li>\n</ul>\n<p>link templates in case you want to override one.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "currentPage",
        "type": "number",
        "description": "<p>The currently selected page number</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the current link is disabled</p>"
      }
    ]
  },
  "NgkPaginationNumberContext": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationNumberContext",
    "description": "<p>A context for the <code>NgkPaginationNumber</code> link template in case you want to override one.</p>\n<p>Extends <code>NgkPaginationLinkContext</code>.</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "$implicit",
        "type": "number",
        "description": "<p>The page number, displayed by the current page link.</p>"
      }
    ]
  },
  "NgkPaginationEllipsisDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationEllipsisDirective",
    "description": "<p>A directive to match the &#39;ellipsis&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationEllipsis]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationFirstDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationFirstDirective",
    "description": "<p>A directive to match the &#39;first&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationFirst]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationLastDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationLastDirective",
    "description": "<p>A directive to match the &#39;last&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationLast]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationNextDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationNextDirective",
    "description": "<p>A directive to match the &#39;next&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationNext]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationNumberDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationNumberDirective",
    "description": "<p>A directive to match the page &#39;number&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationNumber]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationPreviousDirective": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationPreviousDirective",
    "description": "<p>A directive to match the &#39;previous&#39; link template</p>",
    "since": {
      "version": "4.1.0",
      "description": ""
    },
    "type": "Directive",
    "selector": "ng-template[ngkPaginationPrevious]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkPaginationComponent": {
    "fileName": "projects/ng-kit/src/lib/pagination/pagination.ts",
    "className": "NgkPaginationComponent",
    "description": "<p>A component that displays page numbers and allows to customize them in several ways.</p>",
    "type": "Component",
    "selector": "ngk-pagination",
    "inputs": [
      {
        "name": "boundaryLinks",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the &quot;First&quot; and &quot;Last&quot; page links are shown.</p>"
      },
      {
        "name": "collectionSize",
        "type": "number",
        "description": "<p>The number of items in your paginated collection.</p>\n<p>Note, that this is not the number of pages. Page numbers are calculated dynamically based on\n<code>collectionSize</code> and <code>pageSize</code>. Ex. if you have 100 items in your collection and displaying 20 items per page,\nyou&#39;ll end up with 5 pages.</p>"
      },
      {
        "name": "directionLinks",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the &quot;Next&quot; and &quot;Previous&quot; page links are shown.</p>"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>If <code>true</code>, pagination links will be disabled.</p>"
      },
      {
        "name": "ellipses",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the ellipsis symbols and first/last page numbers will be shown when <code>maxSize</code> &gt; number of pages.</p>"
      },
      {
        "name": "maxSize",
        "type": "number",
        "description": "<p>The maximum number of pages to display.</p>"
      },
      {
        "name": "page",
        "defaultValue": "1",
        "type": "number",
        "description": "<p>The current page.</p>\n<p>Page numbers start with <code>1</code>.</p>"
      },
      {
        "name": "pageSize",
        "type": "number",
        "description": "<p>The number of items per page.</p>"
      },
      {
        "name": "rotate",
        "type": "boolean",
        "description": "<p>Whether to rotate pages when <code>maxSize</code> &gt; number of pages.</p>\n<p>The current page always stays in the middle if <code>true</code>.</p>"
      },
      {
        "name": "size",
        "type": "\"sm\" | \"lg\"",
        "description": "<p>The pagination display size.</p>\n<p>Bootstrap currently supports small and large sizes.</p>"
      }
    ],
    "outputs": [
      {
        "name": "pageChange",
        "description": "<p>An event fired when the page is changed. Will fire only if collection size is set and all values are valid.</p>\n<p>Event payload is the number of the newly selected page.</p>\n<p>Page numbers start with <code>1</code>.</p>"
      }
    ],
    "properties": [
      {
        "name": "pageCount",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "pages",
        "type": "number[]",
        "description": ""
      },
      {
        "name": "tplEllipsis",
        "type": "NgkPaginationEllipsisDirective",
        "description": ""
      },
      {
        "name": "tplFirst",
        "type": "NgkPaginationFirstDirective",
        "description": ""
      },
      {
        "name": "tplLast",
        "type": "NgkPaginationLastDirective",
        "description": ""
      },
      {
        "name": "tplNext",
        "type": "NgkPaginationNextDirective",
        "description": ""
      },
      {
        "name": "tplNumber",
        "type": "NgkPaginationNumberDirective",
        "description": ""
      },
      {
        "name": "tplPrevious",
        "type": "NgkPaginationPreviousDirective",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkPopoverConfig": {
    "fileName": "projects/ng-kit/src/lib/popover/popover.ts",
    "className": "NgkPopoverConfig",
    "description": "<p>Configuration service for the NgkPopoverDirective.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the popovers used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "closeDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "disablePopover",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "openDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "auto",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "popoverClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "click",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgkPopoverDirective": {
    "fileName": "projects/ng-kit/src/lib/popover/popover.ts",
    "className": "NgkPopoverDirective",
    "description": "<p>A lightweight, extensible directive for fancy popover creation.</p>",
    "type": "Directive",
    "selector": "[ngkPopover]",
    "exportAs": "ngkPopover",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the popover should be closed on Escape key and inside/outside clicks.</p>\n<ul>\n<li>true (default): closes on both outside and inside clicks as well as Escape presses</li>\n<li>false: disables the autoClose feature (NB: triggers still apply)</li>\n<li>&#39;inside&#39;: closes on inside clicks as well as Escape presses</li>\n<li>&#39;outside&#39;: closes on outside clicks (sometimes also achievable through triggers)\nas well as Escape presses</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "closeDelay",
        "type": "number",
        "description": "<p>Closing delay in ms. Works only for non-manual closing triggers.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the popover should be appended to.\nCurrently only supports &quot;body&quot;.</p>"
      },
      {
        "name": "disablePopover",
        "type": "boolean",
        "description": "<p>A flag indicating if a given popover is disabled and should not be displayed.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "ngkPopover",
        "type": "string | TemplateRef<any>",
        "description": "<p>Content to be displayed as popover. If title and content are empty, the popover won&#39;t open.</p>"
      },
      {
        "name": "openDelay",
        "type": "number",
        "description": "<p>Opening delay in ms. Works only for non-manual opening triggers.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>Placement of a popover accepts:\n    &quot;top&quot;, &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom&quot;, &quot;bottom-left&quot;, &quot;bottom-right&quot;,\n    &quot;left&quot;, &quot;left-top&quot;, &quot;left-bottom&quot;, &quot;right&quot;, &quot;right-top&quot;, &quot;right-bottom&quot;,\n  array or a space separated string of above values</p>"
      },
      {
        "name": "popoverClass",
        "type": "string",
        "description": "<p>An optional class applied to ngk-popover-window</p>",
        "since": {
          "version": "2.2.0",
          "description": ""
        }
      },
      {
        "name": "popoverTitle",
        "type": "string | TemplateRef<any>",
        "description": "<p>Title of a popover. If title and content are empty, the popover won&#39;t open.</p>"
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "<p>Specifies events that should trigger. Supports a space separated list of event names.</p>"
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "<p>Emits an event when the popover is hidden</p>"
      },
      {
        "name": "shown",
        "description": "<p>Emits an event when the popover is shown</p>"
      }
    ],
    "properties": [],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens an element’s popover. This is considered a “manual” triggering of the popover.\nThe context is an optional value to be injected into the popover template when it is created.</p>",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes an element’s popover. This is considered a “manual” triggering of the popover.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles an element’s popover. This is considered a “manual” triggering of the popover.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "<p>Returns whether or not the popover is currently being shown</p>",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgkProgressbarComponent": {
    "fileName": "projects/ng-kit/src/lib/progressbar/progressbar.ts",
    "className": "NgkProgressbarComponent",
    "description": "<p>Directive that can be used to provide feedback on the progress of a workflow or an action.</p>",
    "type": "Component",
    "selector": "ngk-progressbar",
    "inputs": [
      {
        "name": "animated",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the stripes on the progressbar are animated.</p>\n<p>Takes effect only for browsers supporting CSS3 animations, and if <code>striped</code> is <code>true</code>.</p>"
      },
      {
        "name": "customClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "type": "string",
        "description": "<p>Decimal places to display.</p>"
      },
      {
        "name": "height",
        "type": "string",
        "description": "<p>Height of the progress bar. Accepts any valid CSS height values, ex. &#39;2rem&#39;</p>"
      },
      {
        "name": "max",
        "type": "number",
        "description": "<p>Maximal value to be displayed in the progressbar.</p>"
      },
      {
        "name": "showValue",
        "type": "boolean",
        "description": "<p>A flag indicating if the current percentage value should be shown.</p>"
      },
      {
        "name": "striped",
        "type": "boolean",
        "description": "<p>If <code>true</code>, the progress bars will be displayed as striped.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of progress bar, can be one of &quot;success&quot;, &quot;warning&quot; or &quot;danger&quot;.</p>"
      },
      {
        "name": "value",
        "defaultValue": "0",
        "type": "number",
        "description": "<p>Current value to be displayed in the progressbar. Should be smaller or equal to &quot;max&quot; value.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "_deciamPlaces",
        "defaultValue": "2",
        "type": "string",
        "description": ""
      },
      {
        "name": "classes",
        "type": "string",
        "description": ""
      },
      {
        "name": "decimalPlaces",
        "type": "string",
        "description": "<p>Decimal places to display.</p>"
      },
      {
        "name": "percentValue",
        "type": "number",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkColWidth": {
    "fileName": "projects/ng-kit/src/lib/table/table.ts",
    "className": "NgkColWidth",
    "description": "<p>A class for setting the widths of columns in NgkTable. An array of <code>NgkColWidth</code> is passed to the <code>NgkTable</code> \nif setting all using the <code>ColWidths</code> input and a single <code>NgkColWidth</code> as an input if setting widths on the <i>&#60;th&#62;</i> tags and the <code>NgkTableHeaderCellDirective</code>.</p>",
    "type": "Class",
    "methods": [],
    "properties": [
      {
        "name": "basis",
        "type": "string",
        "description": ""
      },
      {
        "name": "grow",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "shrink",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      }
    ]
  },
  "NgkTableHeaderCellDirective": {
    "fileName": "projects/ng-kit/src/lib/table/table.ts",
    "className": "NgkTableHeaderCellDirective",
    "description": "<p>NgkTableHeaderCellDirective can be implemented as a <code>ngk</code> placed on the <i>&#60;th&#62;</i> tags of a <i>&#60;table&#62;</i>. \nIf used on one <i>&#60;th&#62;</i> tag it should be used on all of them.</p>",
    "type": "Directive",
    "selector": "th[ngk]",
    "inputs": [
      {
        "name": "colWidth",
        "type": "NgkColWidth",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkTableComponent": {
    "fileName": "projects/ng-kit/src/lib/table/table.ts",
    "className": "NgkTableComponent",
    "description": "<p><code>NgkTableComponent</code> is a structural directive component on the html <i>&#60;table&#62;</i> tag to handle\noverflow management, horizontal layout, column visibility, and to allow for scrolling on the <i>&#60;tbody&#62;</i> tag.\nThe <code>addBorder</code> input can be set to true to add a 1px solid border-theme-colored border to the table. Alternatively, any border values set on the <i>&#60;table&#62;</i> tag\nitself will be transfered upon instantiation to the wrapper <i>&#60;div&#62;</i> the <code>NgkTableComponent</code> creates around itself.</p>",
    "type": "Component",
    "selector": "table[ngk]",
    "inputs": [
      {
        "name": "addBorder",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "banded",
        "type": "\"even\" | \"odd\"",
        "description": ""
      },
      {
        "name": "colVisibility",
        "type": "boolean[]",
        "description": ""
      },
      {
        "name": "colWidths",
        "type": "NgkColWidth[]",
        "description": ""
      },
      {
        "name": "horizontal",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "overflow",
        "defaultValue": "auto",
        "type": "\"visible\" | \"hidden\" | \"auto\" | \"scroll\"",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "cellCount",
        "type": "number",
        "description": ""
      },
      {
        "name": "colCount",
        "type": "number",
        "description": ""
      },
      {
        "name": "ngBody",
        "type": "NgkTableElement",
        "description": ""
      },
      {
        "name": "ngBodyRows",
        "type": "NgkTableElement[]",
        "description": ""
      },
      {
        "name": "ngCells",
        "type": "NgkTableElement[]",
        "description": ""
      },
      {
        "name": "ngHead",
        "type": "NgkTableElement",
        "description": ""
      },
      {
        "name": "ngHeadRow",
        "type": "NgkTableElement",
        "description": ""
      },
      {
        "name": "ngTable",
        "type": "NgkTableElement",
        "description": ""
      },
      {
        "name": "ngTds",
        "type": "NgkTableElement[]",
        "description": ""
      },
      {
        "name": "ngThs",
        "type": "NgkTableElement[]",
        "description": ""
      },
      {
        "name": "observer",
        "type": "MutationObserver",
        "description": ""
      },
      {
        "name": "resize",
        "type": "NgkResizeDirective",
        "description": ""
      },
      {
        "name": "resizeSub",
        "type": "Subscription",
        "description": ""
      },
      {
        "name": "rowCount",
        "type": "number",
        "description": ""
      },
      {
        "name": "tableHeaderCells",
        "type": "QueryList<NgkTableHeaderCellDirective>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "wrapSelf",
        "description": "<p>In order to make implementation a bit easier regarding overflows (particularly at smaller resolutions) the table\nwraps itself in a div. The &#39;table-wrapper&#39; div then has overflow-x: auto set to itself so the table can scroll horizontally\nwhen the screen becomes too small.</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  },
  "NgkTabChangeEvent": {
    "fileName": "projects/ng-kit/src/lib/tabset/tab-change-event.ts",
    "className": "NgkTabChangeEvent",
    "description": "<p>The payload of the change event fired right before the tab change</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>Id of the currently active tab</p>"
      },
      {
        "name": "nextId",
        "type": "string",
        "description": "<p>Id of the newly selected tab</p>"
      },
      {
        "name": "nextTitle",
        "type": "string",
        "description": "<p>Title of the newly selected tab</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Function that will prevent tab switch if called</p>"
      }
    ]
  },
  "NgkTabTitleDirective": {
    "fileName": "projects/ng-kit/src/lib/tabset/tabset.ts",
    "className": "NgkTabTitleDirective",
    "description": "<p>This directive should be used to wrap tab titles that need to contain HTML markup or other directives.</p>",
    "type": "Directive",
    "selector": "ng-template[ngkTabTitle]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkTabContentDirective": {
    "fileName": "projects/ng-kit/src/lib/tabset/tabset.ts",
    "className": "NgkTabContentDirective",
    "description": "<p>This directive must be used to wrap content to be displayed in a tab.</p>",
    "type": "Directive",
    "selector": "ng-template[ngkTabContent]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "NgkTabDirective": {
    "fileName": "projects/ng-kit/src/lib/tabset/tabset.ts",
    "className": "NgkTabDirective",
    "description": "<p>A directive representing an individual tab.</p>",
    "type": "Directive",
    "selector": "ngk-tab",
    "inputs": [
      {
        "name": "disabled",
        "defaultValue": "false",
        "type": "boolean",
        "description": "<p>Allows toggling disabled state of a given state. Disabled tabs can&#39;t be selected.</p>"
      },
      {
        "name": "id",
        "type": "string",
        "description": "<p>Unique tab identifier. Must be unique for the entire document for proper accessibility support.</p>"
      },
      {
        "name": "title",
        "type": "string",
        "description": "<p>Simple (string only) title. Use the &quot;NgkTabTitle&quot; directive for more complex use-cases.</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "contentTpl",
        "type": "NgkTabContentDirective",
        "description": ""
      },
      {
        "name": "contentTpls",
        "type": "QueryList<NgkTabContentDirective>",
        "description": ""
      },
      {
        "name": "titleRootNode",
        "type": "HTMLElement",
        "description": ""
      },
      {
        "name": "titleTpl",
        "type": "NgkTabTitleDirective",
        "description": ""
      },
      {
        "name": "titleTpls",
        "type": "QueryList<NgkTabTitleDirective>",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkTabsetComponent": {
    "fileName": "projects/ng-kit/src/lib/tabset/tabset.ts",
    "className": "NgkTabsetComponent",
    "description": "<p>A component that makes it easy to create tabbed interface.</p>",
    "type": "Component",
    "selector": "ngk-tabset",
    "exportAs": "ngkTabset",
    "inputs": [
      {
        "name": "activeId",
        "type": "string",
        "description": "<p>An identifier of an initially selected (active) tab. Use the &quot;select&quot; method to switch a tab programmatically.</p>"
      },
      {
        "name": "destroyOnHide",
        "defaultValue": "true",
        "type": "boolean",
        "description": "<p>Whether the closed tabs should be hidden without destroying them</p>"
      },
      {
        "name": "justify",
        "type": "\"start\" | \"center\" | \"end\" | \"fill\" | \"justified\"",
        "description": "<p>The horizontal alignment of the nav with flexbox utilities. Can be one of &#39;start&#39;, &#39;center&#39;, &#39;end&#39;, &#39;fill&#39; or\n&#39;justified&#39;\nThe default value is &#39;start&#39;.</p>"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>Type of navigation to be used for tabs.</p>"
      }
    ],
    "outputs": [
      {
        "name": "tabChange",
        "description": "<p>A tab change event fired right before the tab selection happens. See NgkTabChangeEvent for payload details</p>"
      }
    ],
    "properties": [
      {
        "name": "justifyClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "tabs",
        "type": "QueryList<NgkTabDirective>",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "select",
        "description": "<p>Selects the tab with the given id and shows its associated pane.\nAny other tab that was previously selected becomes unselected and its associated pane is hidden.\nCan call from component with ViewChild and ngAfterViewInit.</p>",
        "args": [
          {
            "name": "tabId",
            "type": "string"
          }
        ],
        "returnType": "void"
      }
    ]
  },
  "NgkTooltipConfig": {
    "fileName": "projects/ng-kit/src/lib/tooltip/tooltip.ts",
    "className": "NgkTooltipConfig",
    "description": "<p>Configuration service for the NgkTooltip directive.\nYou can inject this service, typically in your root component, and customize the values of its properties in\norder to provide default values for all the tooltips used in the application.</p>",
    "type": "Service",
    "methods": [],
    "properties": [
      {
        "name": "autoClose",
        "defaultValue": "true",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": ""
      },
      {
        "name": "closeDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "container",
        "type": "string",
        "description": ""
      },
      {
        "name": "disableTooltip",
        "defaultValue": "false",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "openDelay",
        "defaultValue": "0",
        "type": "number",
        "description": ""
      },
      {
        "name": "placement",
        "defaultValue": "auto",
        "type": "PlacementArray",
        "description": ""
      },
      {
        "name": "tooltipClass",
        "type": "string",
        "description": ""
      },
      {
        "name": "triggers",
        "defaultValue": "hover focus",
        "type": "string",
        "description": ""
      }
    ]
  },
  "NgkTooltipDirective": {
    "fileName": "projects/ng-kit/src/lib/tooltip/tooltip.ts",
    "className": "NgkTooltipDirective",
    "description": "<p>A lightweight, extensible directive for fancy tooltip creation.</p>",
    "type": "Directive",
    "selector": "[ngkTooltip]",
    "exportAs": "ngkTooltip",
    "inputs": [
      {
        "name": "autoClose",
        "type": "boolean | \"inside\" | \"outside\"",
        "description": "<p>Indicates whether the tooltip should be closed on Escape key and inside/outside clicks.</p>\n<ul>\n<li>true (default): closes on both outside and inside clicks as well as Escape presses</li>\n<li>false: disables the autoClose feature (NB: triggers still apply)</li>\n<li>&#39;inside&#39;: closes on inside clicks as well as Escape presses</li>\n<li>&#39;outside&#39;: closes on outside clicks (sometimes also achievable through triggers)\nas well as Escape presses</li>\n</ul>",
        "since": {
          "version": "3.0.0",
          "description": ""
        }
      },
      {
        "name": "closeDelay",
        "type": "number",
        "description": "<p>Closing delay in ms. Works only for non-manual closing triggers.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the tooltip should be appended to.\nCurrently only supports &quot;body&quot;.</p>"
      },
      {
        "name": "disableTooltip",
        "type": "boolean",
        "description": "<p>A flag indicating if a given tooltip is disabled and should not be displayed.</p>",
        "since": {
          "version": "1.1.0",
          "description": ""
        }
      },
      {
        "name": "ngkTooltip",
        "type": "string | TemplateRef<any>",
        "description": "<p>Content to be displayed as tooltip. If falsy, the tooltip won&#39;t open.</p>"
      },
      {
        "name": "openDelay",
        "type": "number",
        "description": "<p>Opening delay in ms. Works only for non-manual opening triggers.</p>",
        "since": {
          "version": "4.1.0",
          "description": ""
        }
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>Placement of a tooltip accepts:\n    &quot;top&quot;, &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom&quot;, &quot;bottom-left&quot;, &quot;bottom-right&quot;,\n    &quot;left&quot;, &quot;left-top&quot;, &quot;left-bottom&quot;, &quot;right&quot;, &quot;right-top&quot;, &quot;right-bottom&quot;,\n  array or a space separated string of above values</p>"
      },
      {
        "name": "tooltipClass",
        "type": "string",
        "description": "<p>An optional class applied to ngk-tooltip-window</p>",
        "since": {
          "version": "3.2.0",
          "description": ""
        }
      },
      {
        "name": "triggers",
        "type": "string",
        "description": "<p>Specifies events that should trigger. Supports a space separated list of event names.</p>"
      }
    ],
    "outputs": [
      {
        "name": "hidden",
        "description": "<p>Emits an event when the tooltip is hidden</p>"
      },
      {
        "name": "shown",
        "description": "<p>Emits an event when the tooltip is shown</p>"
      }
    ],
    "properties": [
      {
        "name": "ngkTooltip",
        "type": "string | TemplateRef<any>",
        "description": "<p>Content to be displayed as tooltip. If falsy, the tooltip won&#39;t open.</p>"
      }
    ],
    "methods": [
      {
        "name": "open",
        "description": "<p>Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.\nThe context is an optional value to be injected into the tooltip template when it is created.</p>",
        "args": [
          {
            "name": "context",
            "type": "any"
          }
        ],
        "returnType": "void"
      },
      {
        "name": "close",
        "description": "<p>Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "toggle",
        "description": "<p>Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isOpen",
        "description": "<p>Returns whether or not the tooltip is currently being shown</p>",
        "args": [],
        "returnType": "boolean"
      }
    ]
  },
  "NgkHighlightComponent": {
    "fileName": "projects/ng-kit/src/lib/typeahead/highlight.ts",
    "className": "NgkHighlightComponent",
    "description": "<p>A component that can be used inside a custom result template in order to highlight the term inside the text of the\nresult</p>",
    "type": "Component",
    "selector": "ngk-highlight",
    "inputs": [
      {
        "name": "highlightClass",
        "defaultValue": "ngk-highlight",
        "type": "string",
        "description": "<p>The CSS class of the span elements wrapping the term inside the result</p>"
      },
      {
        "name": "result",
        "type": "string",
        "description": "<p>The result text to display. If the term is found inside this text, it&#39;s highlighted</p>"
      },
      {
        "name": "term",
        "type": "string",
        "description": "<p>The searched term</p>"
      }
    ],
    "outputs": [],
    "properties": [
      {
        "name": "parts",
        "type": "string[]",
        "description": ""
      }
    ],
    "methods": []
  },
  "NgkTypeaheadSelectItemEvent": {
    "fileName": "projects/ng-kit/src/lib/typeahead/typeahead.ts",
    "className": "NgkTypeaheadSelectItemEvent",
    "description": "<p>Payload of the selectItem event.</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "item",
        "type": "any",
        "description": "<p>An item about to be selected</p>"
      },
      {
        "name": "preventDefault",
        "type": "() => void",
        "description": "<p>Function that will prevent item selection if called</p>"
      }
    ]
  },
  "NgkTypeahead": {
    "fileName": "projects/ng-kit/src/lib/typeahead/typeahead-declarations.ts",
    "className": "NgkTypeahead",
    "description": "<p>NgkTypeahead directive provides a simple way of creating powerful typeaheads from any text input</p>",
    "type": "Class",
    "methods": [
      {
        "name": "dismissPopup",
        "description": "<p>Dismisses typeahead popup window</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isPopupOpen",
        "description": "<p>Returns true if the typeahead popup window is displayed</p>",
        "args": [],
        "returnType": "boolean"
      }
    ],
    "properties": [
      {
        "name": "activeDescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "autocomplete",
        "type": "string",
        "description": "<p>Value for the configurable autocomplete attribute.\nDefaults to &#39;off&#39; to disable the native browser autocomplete, but this standard value does not seem\nto be always correctly taken into account.</p>",
        "since": {
          "version": "2.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the tooltip should be appended to.\nCurrently only supports &quot;body&quot;.</p>"
      },
      {
        "name": "editable",
        "type": "boolean",
        "description": "<p>A flag indicating if model values should be restricted to the ones selected from the popup only.</p>"
      },
      {
        "name": "focusFirst",
        "type": "boolean",
        "description": "<p>A flag indicating if the first match should automatically be focused as you type.</p>"
      },
      {
        "name": "inputFormatter",
        "type": "(value: any) => string",
        "description": "<p>A function to convert a given value into string to display in the input field</p>"
      },
      {
        "name": "NgkTypeahead",
        "type": "(text: Observable<string>) => Observable<any[]>",
        "description": "<p>A function to transform the provided observable text into the array of results.  Note that the &quot;this&quot; argument\nis undefined so you need to explicitly bind it to a desired &quot;this&quot; target.</p>"
      },
      {
        "name": "placement",
        "type": "PlacementArray",
        "description": "<p>Placement of a typeahead accepts:\n  &quot;top&quot;, &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom&quot;, &quot;bottom-left&quot;, &quot;bottom-right&quot;,\n  &quot;left&quot;, &quot;left-top&quot;, &quot;left-bottom&quot;, &quot;right&quot;, &quot;right-top&quot;, &quot;right-bottom&quot;\nand array of above values.</p>"
      },
      {
        "name": "popupId",
        "type": "string",
        "description": ""
      },
      {
        "name": "resultFormatter",
        "type": "(value: any) => string",
        "description": "<p>A function to format a given result before display. This function should return a formatted string without any\nHTML markup</p>"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "<p>A template to override a matching result default display</p>"
      },
      {
        "name": "selectItem",
        "type": "EventEmitter<NgkTypeaheadSelectItemEvent>",
        "description": "<p>An event emitted when a match is selected. Event payload is of type NgkTypeaheadSelectItemEvent.</p>"
      },
      {
        "name": "showHint",
        "type": "boolean",
        "description": "<p>Show hint when an option in the result list matches.</p>"
      }
    ]
  },
  "ResultTemplateContext": {
    "fileName": "projects/ng-kit/src/lib/typeahead/typeahead-window.component.ts",
    "className": "ResultTemplateContext",
    "description": "<p>Context for the typeahead result template in case you want to override the default one</p>",
    "type": "Interface",
    "methods": [],
    "properties": [
      {
        "name": "result",
        "type": "any",
        "description": "<p>Your typeahead result data model</p>"
      },
      {
        "name": "term",
        "type": "string",
        "description": "<p>Search term from the input used to get current result</p>"
      }
    ]
  },
  "NgkTypeaheadDirective": {
    "fileName": "projects/ng-kit/src/lib/typeahead/typeahead.ts",
    "className": "NgkTypeaheadDirective",
    "description": "<p>NgkTypeahead directive provides a simple way of creating powerful typeaheads from any text input</p>",
    "type": "Directive",
    "selector": "input[ngkTypeahead]",
    "exportAs": "ngkTypeahead",
    "inputs": [
      {
        "name": "autocomplete",
        "defaultValue": "off",
        "type": "string",
        "description": "<p>Value for the configurable autocomplete attribute.\nDefaults to &#39;off&#39; to disable the native browser autocomplete, but this standard value does not seem\nto be always correctly taken into account.</p>",
        "since": {
          "version": "2.1.0",
          "description": ""
        }
      },
      {
        "name": "container",
        "type": "string",
        "description": "<p>A selector specifying the element the tooltip should be appended to.\nCurrently only supports &quot;body&quot;.</p>"
      },
      {
        "name": "editable",
        "type": "boolean",
        "description": "<p>A flag indicating if model values should be restricted to the ones selected from the popup only.</p>"
      },
      {
        "name": "focusFirst",
        "type": "boolean",
        "description": "<p>A flag indicating if the first match should automatically be focused as you type.</p>"
      },
      {
        "name": "inputFormatter",
        "type": "(value: any) => string",
        "description": "<p>A function to convert a given value into string to display in the input field</p>"
      },
      {
        "name": "maxheight",
        "type": "number",
        "description": "<p>Set the height of the window.</p>"
      },
      {
        "name": "ngkTypeahead",
        "type": "(text: Observable<string>) => Observable<any[]>",
        "description": "<p>A function to transform the provided observable text into the array of results.  Note that the &quot;this&quot; argument\nis undefined so you need to explicitly bind it to a desired &quot;this&quot; target.</p>"
      },
      {
        "name": "placement",
        "defaultValue": "bottom-left",
        "type": "PlacementArray",
        "description": "<p>Placement of a typeahead accepts:\n  &quot;top&quot;, &quot;top-left&quot;, &quot;top-right&quot;, &quot;bottom&quot;, &quot;bottom-left&quot;, &quot;bottom-right&quot;,\n  &quot;left&quot;, &quot;left-top&quot;, &quot;left-bottom&quot;, &quot;right&quot;, &quot;right-top&quot;, &quot;right-bottom&quot;\narray or a space separated string of above values</p>"
      },
      {
        "name": "resultFormatter",
        "type": "(value: any) => string",
        "description": "<p>A function to format a given result before display. This function should return a formatted string without any\nHTML markup</p>"
      },
      {
        "name": "resultTemplate",
        "type": "TemplateRef<ResultTemplateContext>",
        "description": "<p>A template to override a matching result default display</p>"
      },
      {
        "name": "showHint",
        "type": "boolean",
        "description": "<p>Show hint when an option in the result list matches.</p>"
      }
    ],
    "outputs": [
      {
        "name": "selectItem",
        "description": "<p>An event emitted when a match is selected. Event payload is of type ngkTypeaheadSelectItemEvent.</p>"
      }
    ],
    "properties": [
      {
        "name": "activedescendant",
        "defaultValue": "activedescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "activeDescendant",
        "type": "string",
        "description": ""
      },
      {
        "name": "ariaAutocomplete",
        "type": "\"both\" | \"list\"",
        "description": ""
      },
      {
        "name": "ariaExpanded",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "ariaMultiline",
        "defaultValue": "false",
        "type": "string",
        "description": ""
      },
      {
        "name": "ariaOwns",
        "type": "string",
        "description": ""
      },
      {
        "name": "autocapitalize",
        "defaultValue": "off",
        "type": "string",
        "description": ""
      },
      {
        "name": "autocorrect",
        "defaultValue": "off",
        "type": "string",
        "description": ""
      },
      {
        "name": "classes",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "popupId",
        "type": "string",
        "description": ""
      },
      {
        "name": "role",
        "defaultValue": "combobox",
        "type": "string",
        "description": ""
      },
      {
        "name": "typeaheadDropdown",
        "type": "ElementRef<any>",
        "description": ""
      },
      {
        "name": "typeaheadInput",
        "defaultValue": "true",
        "type": "boolean",
        "description": ""
      }
    ],
    "methods": [
      {
        "name": "dismissPopup",
        "description": "<p>Dismisses typeahead popup window</p>",
        "args": [],
        "returnType": "void"
      },
      {
        "name": "isPopupOpen",
        "description": "<p>Returns true if the typeahead popup window is displayed</p>",
        "args": [],
        "returnType": "void"
      }
    ]
  }
};

export default API_DOCS;