(window.webpackJsonp=window.webpackJsonp||[]).push([[1565],{"0jCG":function(n,e,o){"use strict";o.r(e),e.default="import {Component, Inject} from '@angular/core';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {BehaviorSubject} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-pan-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPanExample1 {\n    readonly coordinates$ = new BehaviorSubject([0, 0]);\n\n    readonly transform$ = this.coordinates$.pipe(\n        map(coords =>\n            this.sanitizer.bypassSecurityTrustStyle(\n                `translate(${coords[0]}px, ${coords[1]}px)`,\n            ),\n        ),\n    );\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    onPan(delta: readonly [number, number]): void {\n        this.coordinates$.next([\n            this.currentCoords[0] + delta[0],\n            this.currentCoords[1] + delta[1],\n        ]);\n    }\n\n    get currentCoords(): number[] {\n        return this.coordinates$.value;\n    }\n}\n"}}]);