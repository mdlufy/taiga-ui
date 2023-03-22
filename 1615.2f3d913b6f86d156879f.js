(window.webpackJsonp=window.webpackJsonp||[]).push([[1615],{"GFO/":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {SECONDS_IN_MINUTE} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-media-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMediaExample2 {\n    currentTime = 0;\n    paused = true;\n\n    get icon(): string {\n        return this.paused ? 'tuiIconPlayLarge' : 'tuiIconPauseLarge';\n    }\n\n    getTime(time: number): string {\n        const integer = Math.round(time || 0);\n        const seconds = integer % SECONDS_IN_MINUTE;\n        const minutes = (integer - seconds) / SECONDS_IN_MINUTE;\n        const secondsString = String(seconds);\n        const minutesString = String(minutes);\n        const paddedSeconds =\n            secondsString.length === 1 ? `0${secondsString}` : secondsString;\n        const paddedMinutes =\n            minutesString.length === 1 ? `0${minutesString}` : minutesString;\n\n        return `${paddedMinutes}:${paddedSeconds}`;\n    }\n\n    toggleState(): void {\n        this.paused = !this.paused;\n    }\n}\n"}}]);