(window.webpackJsonp=window.webpackJsonp||[]).push([[1143],{neeq:function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {of, timer} from 'rxjs';\n\n@Component({\n    selector: `tui-progress-bar-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiProgressBarExample2 {\n    readonly fastValue$ = this.isCypress ? of(80) : timer(500, 100);\n    readonly slowValue$ = this.isCypress ? of(4) : timer(500, 2000);\n    readonly colors = [\n        `var(--tui-support-01)`,\n        `var(--tui-support-21)`,\n        `lightskyblue`,\n        `#3682db`,\n        `var(--tui-primary)`,\n    ];\n\n    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}\n}\n"}}]);