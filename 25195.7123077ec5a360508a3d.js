"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25195],{25195:n=>{n.exports='<tui-tabs-with-more\n    [itemsLimit]="3"\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <button\n        *tuiItem\n        tuiTab\n        (click)="onClick(\'Maps\')"\n    >\n        <tui-svg\n            src="tuiIconCreditCard"\n            class="tui-space_right-2"\n        ></tui-svg>\n        Maps\n    </button>\n    <button\n        *tuiItem\n        tuiTab\n        disabled\n        (click)="onClick(\'Calls\')"\n    >\n        <tui-svg\n            src="tuiIconPhone"\n            class="tui-space_right-2"\n        ></tui-svg>\n        Calls\n    </button>\n    <button\n        *tuiItem\n        tuiTab\n        (click)="onClick(\'Settings\')"\n    >\n        <tui-svg\n            src="tuiIconSettings"\n            class="tui-space_right-2"\n        ></tui-svg>\n        Settings\n    </button>\n    <button\n        *tuiItem\n        tuiTab\n        (click)="onClick(\'Favorite\')"\n    >\n        <tui-svg\n            src="tuiIconHeart"\n            class="tui-space_right-2"\n        ></tui-svg>\n        Favorite\n    </button>\n    <button\n        *tuiItem\n        tuiTab\n        (click)="onClick(\'Trash\')"\n    >\n        <tui-svg\n            src="tuiIconTrash"\n            class="tui-space_right-2"\n        ></tui-svg>\n        Trash\n    </button>\n</tui-tabs-with-more>\n<tui-input-count\n    class="tui-space_top-4"\n    [max]="4"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-count>\n'}}]);