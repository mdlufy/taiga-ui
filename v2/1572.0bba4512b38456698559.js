(window.webpackJsonp=window.webpackJsonp||[]).push([[1572],{Knu1:function(t,i,e){"use strict";e.r(i),i.default="import {AfterViewInit, Component, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiElasticStickyDirective} from '@taiga-ui/addon-mobile';\nimport {clamp} from '@taiga-ui/cdk';\nimport {Observable} from 'rxjs';\nimport {distinctUntilChanged, map, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-elastic-sticky-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiElasticStickyExample1 implements AfterViewInit {\n    @ViewChild(TuiElasticStickyDirective)\n    readonly elasticSticky?: TuiElasticStickyDirective;\n\n    scale$?: Observable<number>;\n\n    ngAfterViewInit(): void {\n        if (!this.elasticSticky) {\n            return;\n        }\n\n        // If we use it like that instead of (tuiElasticSticky)=\"onElasticSticky($event)\"\n        // we will not trigger unnecessary change detection when scale is less than 0.5\n        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(\n            map(scale => clamp(scale, 0.5, 1)),\n            startWith(1),\n            distinctUntilChanged(),\n        );\n    }\n}\n"}}]);