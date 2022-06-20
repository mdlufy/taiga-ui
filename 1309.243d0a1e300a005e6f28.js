(window.webpackJsonp=window.webpackJsonp||[]).push([[1309],{"+y27":function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-tabs-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: true,\n        },\n    ],\n})\nexport class TuiTabsExample1 {\n    readonly items = [\n        {\n            text: 'Maps',\n            icon: 'tuiIconCard',\n        },\n        {\n            text: 'Calls',\n            icon: 'tuiIconCall',\n        },\n        {\n            text: 'Settings',\n            icon: 'tuiIconSettings',\n        },\n    ];\n\n    activeItemIndex = 0;\n\n    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}\n\n    onClick(item: string): void {\n        this.alerts.open(item).subscribe();\n    }\n}\n"}}]);