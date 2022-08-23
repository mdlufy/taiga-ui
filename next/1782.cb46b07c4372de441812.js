(window.webpackJsonp=window.webpackJsonp||[]).push([[1782],{"562+":function(n,e,t){"use strict";t.r(e),e.default="import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleWithDataComponent} from './alert-example-with-data/alert-example-with-data.component';\n\n@Component({\n    selector: `tui-alerts-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent4 {\n    readonly notification: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alertService: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alertService\n            .open<number>(\n                new PolymorpheusComponent(AlertExampleWithDataComponent, this.injector),\n                {\n                    label: `Heading is so long that it should be shown in two lines of text`,\n                    data: 237,\n                    status: TuiNotification.Warning,\n                    autoClose: false,\n                },\n            )\n            .pipe(\n                switchMap(response =>\n                    alertService.open(`Got a value \u2014 ${response}`, {\n                        label: `Information`,\n                    }),\n                ),\n                takeUntil(router.events),\n            );\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n"}}]);