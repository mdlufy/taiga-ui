(window.webpackJsonp=window.webpackJsonp||[]).push([[1769],{"/LaJ":function(e,r,t){"use strict";t.r(r),r.default="import {Injectable} from '@angular/core';\nimport {TuiFormatDateService} from '@taiga-ui/core';\nimport formatDistance from 'date-fns/formatDistance';\nimport {Observable, timer} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n    format(timestamp: number): Observable<string> {\n        return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n    }\n}\n"}}]);