(window.webpackJsonp=window.webpackJsonp||[]).push([[1091],{kZSu:function(t,n,i){"use strict";i.r(n),n.default='<tui-multi-select\n    class="b-form"\n    [editable]="false"\n    [valueContent]="content"\n    [(ngModel)]="value"\n>\n    Applicable countries\n    <cdk-virtual-scroll-viewport\n        *tuiDataList\n        tuiScrollable\n        class="scroll"\n        [itemSize]="44"\n    >\n        <tui-data-list tuiMultiSelectGroup>\n            <button\n                *cdkVirtualFor="let item of countries"\n                tuiOption\n                [value]="item"\n            >\n                {{ item }}\n            </button>\n        </tui-data-list>\n    </cdk-virtual-scroll-viewport>\n</tui-multi-select>\n'}}]);