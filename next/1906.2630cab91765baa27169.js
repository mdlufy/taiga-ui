(window.webpackJsonp=window.webpackJsonp||[]).push([[1906],{OVbf:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject, Optional} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_FOCUSABLE_ITEM_ACCESSOR, TuiFocusableElementAccessor} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-token-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample3 {\n    constructor(\n        @Optional()\n        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)\n        readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,\n    ) {}\n}\n"}}]);