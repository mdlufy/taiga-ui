(window.webpackJsonp=window.webpackJsonp||[]).push([[1770],{"9m6S":function(n,t,e){"use strict";e.r(t),t.default='<p>\n    Your balance:\n    <tui-money [value]="money"></tui-money>\n</p>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    class="tui-space_right-3"\n    (click)="showWithdrawAlert()"\n>\n    Withdraw\n</button>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    class="tui-space_right-3"\n    (click)="showDepositAlert()"\n>\n    Add\n</button>\n<button\n    tuiButton\n    type="button"\n    size="m"\n    class="tui-space_right-3"\n    (click)="withdraw()"\n>\n    Withdraw&nbsp;\n    <tui-money [value]="100"></tui-money>\n</button>\n\n<ng-template #withdrawTemplate>\n    <p i18n>Notifications can be shown with template</p>\n    <p>\n        Your balance:\n        <tui-money [value]="money"></tui-money>\n    </p>\n    <button\n        tuiButton\n        type="button"\n        tuiMode="onLight"\n        appearance="outline"\n        size="m"\n        (click)="withdraw()"\n    >\n        Withdraw&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n</ng-template>\n\n<ng-template #depositTemplate>\n    <p i18n>\n        If there are many templates, you can use\n        <code>ViewChildren</code>\n        instead of\n        <code>ViewChild</code>\n        or set them IDs with "#" (see code of this sample)\n    </p>\n    <p>\n        Your balance:\n        <tui-money [value]="money"></tui-money>\n    </p>\n    <button\n        tuiButton\n        type="button"\n        tuiMode="onLight"\n        appearance="outline"\n        size="m"\n        (click)="deposit()"\n    >\n        Add&nbsp;\n        <tui-money [value]="100"></tui-money>\n    </button>\n</ng-template>\n'}}]);