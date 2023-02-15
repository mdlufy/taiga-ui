"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[33932],{33932:n=>{n.exports="import {Injectable} from '@angular/core';\nimport {BehaviorSubject, from, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nimport {environment} from '../../../../../../../environments/environment';\n\ninterface ImgbbResponse {\n    data: {\n        id: string;\n        title: string;\n        url: string;\n        width: string;\n        height: string;\n        size: number;\n        time: string;\n        expiration: string;\n    };\n    success: boolean;\n    status: number;\n}\n\n@Injectable({\n    providedIn: `root`,\n})\nexport class ImgbbService {\n    readonly loading$ = new BehaviorSubject(false);\n\n    private static createBody(base64: string): URLSearchParams {\n        const formData = new FormData();\n\n        formData.append(`image`, base64.split(`,`).pop() || ``);\n\n        return new URLSearchParams(formData as any);\n    }\n\n    save(base64: string): Observable<string> {\n        const {host, apiKey, expiration} = environment.imgbb;\n\n        return from(\n            fetch(`${host}/1/upload?key=${apiKey}&expiration=${expiration}`, {\n                method: `POST`,\n                body: ImgbbService.createBody(base64),\n                headers: {'Content-Type': `application/x-www-form-urlencoded`},\n            }).then(async (response: Response) => response.json()),\n        ).pipe(map((response: ImgbbResponse) => response.data.url));\n    }\n}\n"}}]);