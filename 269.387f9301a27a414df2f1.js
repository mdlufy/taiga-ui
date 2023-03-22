(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{oWJk:function(n,e,o){"use strict";o.r(e),e.default="// centering with translate\n.center-left() {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n}\n\n.center-top() {\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n}\n\n.center-all() {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n// clearfix\n.clearfix() {\n    &:after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n}\n\n//.fullsize\n.fullsize(@position: absolute, @mode: height) {\n    position: @position;\n    top: 0;\n    left: 0;\n\n    & when (@mode = height) {\n        width: 100%;\n        height: 100%;\n    }\n\n    & when (@mode = inset) {\n        bottom: 0;\n        right: 0;\n    }\n}\n\n.clearbtn() {\n    appearance: none;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: inherit;\n    line-height: inherit;\n}\n\n.autofill(@mode:default) {\n    &:-webkit-autofill,\n    &:-webkit-autofill:hover,\n    &:-webkit-autofill:focus {\n        caret-color: var(--tui-base-09);\n        border-radius: inherit;\n        color: inherit !important;\n        background-color: transparent !important;\n\n        & when (@mode = default) {\n            -webkit-text-fill-color: var(--tui-text-01) !important;\n            border-color: var(--tui-autofill);\n            -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill) inset !important; // to overlay native background\n        }\n\n        & when (@mode = dark) {\n            -webkit-text-fill-color: var(--tui-text-01-night) !important;\n            border-color: var(--tui-autofill-night);\n            -webkit-box-shadow: 0 0 0 100rem var(--tui-autofill-night) inset !important;\n        }\n    }\n}\n\n.clearinput(@mode: default) {\n    .autofill(@mode);\n    padding: 0;\n    margin: 0;\n    border: 0;\n    border-radius: inherit;\n    background: none;\n    font-size: inherit;\n    line-height: inherit;\n    font-weight: inherit;\n    color: inherit;\n    caret-color: currentColor;\n    outline: none;\n    appearance: none;\n    word-break: keep-all;\n    -webkit-text-fill-color: currentColor; // for Safari\n}\n\n.visually-hidden() {\n    position: absolute;\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    clip-path: inset(0);\n}\n\n.webkit-auto-fill-button-hidden() {\n    // hide: -webkit-caps-lock-indicator\n    content: none !important;\n\n    // hide: -webkit-strong-password-auto-fill-button\n    // because safari forcing set display as block\n    position: absolute;\n    left: -62.4375rem;\n    top: -62.4375rem;\n    z-index: -999;\n\n    // hide: -webkit-contacts-auto-fill-button\n    display: none !important;\n    background: transparent !important;\n    pointer-events: none !important;\n}\n\n// customize native scroll\n.customize-scroll() {\n    // exclude non-supporting browsers\n    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {\n        &::-webkit-scrollbar,\n        &::-webkit-scrollbar-thumb {\n            width: 1rem;\n            height: 1rem;\n            border-radius: 6.25rem;\n            background-clip: padding-box;\n            border: 2.667rem solid transparent;\n        }\n\n        &::-webkit-scrollbar {\n            background-color: transparent;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: var(--tui-clear-hover);\n        }\n\n        &::-webkit-scrollbar-thumb:hover {\n            background-color: var(--tui-clear-active);\n        }\n\n        &::-webkit-scrollbar-thumb:active {\n            background-color: var(--tui-text-03);\n        }\n    }\n}\n\n// shadow\n.shadow(@mode: 1) {\n    // Default\n    & when (@mode = 1) {\n        box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.12);\n    }\n\n    // Dropdown\n    & when (@mode = 2) {\n        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.16);\n    }\n\n    // Modal\n    & when (@mode = 3) {\n        box-shadow: 0 1.125rem 1.875rem rgba(0, 0, 0, 0.48);\n    }\n\n    // Sidebar\n    & when (@mode = 4) {\n        box-shadow: 0.25rem 0 1.5rem rgba(0, 0, 0, 0.12);\n    }\n\n    // Hover\n    & when (@mode = 5) {\n        box-shadow: 0 0.75rem 2.25rem rgba(0, 0, 0, 0.2);\n    }\n\n    // Navigation\n    & when (@mode = 6) {\n        box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.08);\n    }\n\n    // Modal mobile\n    & when (@mode = 7) {\n        box-shadow: 0 -1rem 1.75rem rgba(0, 0, 0, 0.24);\n    }\n}\n\n.inset-border(@direction: bottom, @mode: none) {\n    & when (@direction = bottom) {\n        box-shadow: inset 0 -1px var(--tui-base-03);\n\n        & when (@mode = light) {\n            box-shadow: inset 0 -1px rgba(255, 255, 255, 0.24);\n        }\n\n        & when (@mode = dark) {\n            box-shadow: inset 0 -1px rgba(51, 51, 51, 0.24);\n        }\n    }\n\n    & when (@direction = top) {\n        box-shadow: inset 0 1px var(--tui-base-03);\n\n        & when (@mode = light) {\n            box-shadow: inset 0 1px rgba(255, 255, 255, 0.24);\n        }\n\n        & when (@mode = dark) {\n            box-shadow: inset 0 1px rgba(51, 51, 51, 0.24);\n        }\n    }\n\n    & when (@direction = left) {\n        box-shadow: inset 1px 0 var(--tui-base-03);\n\n        & when (@mode = light) {\n            box-shadow: inset 1px 0 rgba(255, 255, 255, 0.24);\n        }\n\n        & when (@mode = dark) {\n            box-shadow: inset 1px 0 rgba(51, 51, 51, 0.24);\n        }\n    }\n\n    & when (@direction = right) {\n        box-shadow: inset -1px 0 var(--tui-base-03);\n\n        & when (@mode = light) {\n            box-shadow: inset -1px 0 rgba(255, 255, 255, 0.24);\n        }\n\n        & when (@mode = dark) {\n            box-shadow: inset -1px 0 rgba(51, 51, 51, 0.24);\n        }\n    }\n}\n\n// transition\n.transition(@param, @speed: var(--tui-duration, 300ms)) {\n    transition-property: @param;\n    transition-duration: @speed;\n    transition-timing-function: ease-in-out;\n}\n\n// dashed border\n.dashed-border(@color: currentColor, @alignment: bottom, @space: 4) {\n    @size: unit(@space, px);\n    @percentage: (100% / @space * 2);\n    background-image: linear-gradient(to right, @color 0%, @color @percentage, transparent @percentage);\n    background-position: 0 @alignment;\n    background-size: @size 1px;\n    background-repeat: repeat-x;\n}\n\n// typical opacity properties for icons\n.opacity-icon() {\n    opacity: 0.8;\n\n    &:hover {\n        opacity: 1;\n    }\n}\n\n.hoverable-with-shadow() {\n    .shadow();\n    .transition(all);\n    cursor: pointer;\n    transition-property: transform, box-shadow;\n    will-change: transform, box-shadow;\n\n    &:hover {\n        .shadow(5);\n        transform: translateY(-@space);\n    }\n}\n\n// gradient\n.gradient(@start-color, @end-color, @angle: 45deg) {\n    background-image: linear-gradient(@angle, @start-color 0%, @end-color 100%);\n}\n\n// typical properties for text overflow with ellipsis\n.text-overflow(@type: nowrap) {\n    white-space: @type;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* stylelint-disable selector-max-specificity */\n.text-overflow-with-fade(@color: var(--tui-base-01), @transparentColor: transparent, @width: 1.875rem) {\n    position: relative;\n    overflow: hidden;\n\n    &:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: @width;\n        height: 100%;\n        background-image: linear-gradient(to right, @transparentColor 0%, @color 80%, @color 100%);\n        pointer-events: none;\n    }\n}\n/* stylelint-enable selector-max-specificity */\n\n.createStackingContext() {\n    position: relative;\n    z-index: 0;\n}\n\n//spaces\n.tui-space(@direction, @size) {\n    & when (@direction = all) {\n        margin: @space * @size;\n    }\n\n    & when (@direction = top) {\n        margin-top: @space * @size;\n    }\n\n    & when (@direction = bottom) {\n        margin-bottom: @space * @size;\n    }\n\n    & when (@direction = vertical) {\n        margin-top: @space * @size;\n        margin-bottom: @space * @size;\n    }\n\n    & when (@direction = left) {\n        margin-left: @space * @size;\n    }\n\n    & when (@direction = right) {\n        margin-right: @space * @size;\n    }\n\n    & when (@direction = horizontal) {\n        margin-right: @space * @size;\n        margin-left: @space * @size;\n    }\n}\n\n.contrast-background(@background) {\n    background: @background;\n    color: contrast(@background, #333, #fff);\n}\n\n.blurred-background(@color: #fff) {\n    background: fade(@color, 70%);\n    backdrop-filter: blur(0.4375rem);\n}\n\n.scrollbar-hidden() {\n    /* stylelint-disable*/\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    /* stylelint-enable*/\n\n    &::-webkit-scrollbar,\n    &::-webkit-scrollbar-thumb {\n        background: transparent;\n        width: 0;\n        height: 0;\n    }\n}\n\n// hide an element visually without hiding it from screen readers\n.sr-only() {\n    position: absolute;\n    clip: rect(1px, 1px, 1px, 1px);\n    clip-path: inset(50%);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n}\n"}}]);