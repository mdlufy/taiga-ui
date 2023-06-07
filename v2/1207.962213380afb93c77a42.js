(window.webpackJsonp=window.webpackJsonp||[]).push([[1207],{UYIu:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_ANDROID_LOADER,\n    TUI_PULL_TO_REFRESH_COMPONENT,\n    TUI_PULL_TO_REFRESH_LOADED,\n} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-pull-to-refresh-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: true,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_COMPONENT,\n            useValue: TUI_ANDROID_LOADER,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_LOADED,\n            useClass: Subject,\n        },\n    ],\n})\nexport class TuiPullToRefreshExample1 {\n    constructor(\n        @Inject(TuiAlertService)\n        private readonly alerts: TuiAlertService,\n        @Inject(TUI_PULL_TO_REFRESH_LOADED)\n        private readonly loaded$: Subject<void>,\n    ) {}\n\n    onPull(): void {\n        this.alerts.open('Loading...').subscribe();\n    }\n\n    finishLoading(): void {\n        this.loaded$.next();\n    }\n}\n"}}]);