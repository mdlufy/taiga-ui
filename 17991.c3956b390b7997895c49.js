"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[17991],{17991:(d,n,t)=>{t.r(n),t.d(n,{Underline:()=>s,default:()=>s});var r=t(12867);const s=r.Mark.create({name:"underline",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>!!e.includes("underline")&&{}}],renderHTML({HTMLAttributes:e}){return["u",(0,r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}})}}]);