(window.webpackJsonp=window.webpackJsonp||[]).push([[1842],{"4p0S":function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_ANDROID} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-token-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTokensExample4 {\n    constructor(@Inject(TUI_IS_ANDROID) readonly isAndroid: boolean) {}\n}\n"}}]);