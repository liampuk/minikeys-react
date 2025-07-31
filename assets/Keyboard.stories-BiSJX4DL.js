import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DmM0KDA7.js";import{d as ge,A as he,u as $,s as L}from"./useMiniKeys-BPMIypvj.js";import{l as C,d as K}from"./styled-components.browser.esm-DxTIr8mQ.js";const E=(e,a,n)=>{const[t,r]=v.useState([]);return v.useEffect(()=>{const o=c=>{var h;const g=n==null?void 0:n.find(b=>b.keyCode===c.code);if(!g&&t.some(b=>b.keyCode===c.code))return;g&&!(e!=null&&e.get(c.code))&&(g==null||g.action());const i=(h=e==null?void 0:e.get(c.code))==null?void 0:h.midiNote;i&&a&&a(i),r(b=>[...b,{keyCode:c.code,note:i?ge[i]:void 0}])},f=c=>{r(i=>i.filter(h=>h.keyCode!==c.code));const g=n==null?void 0:n.find(i=>i.keyCode===c.code);g&&!(e!=null&&e.get(c.code))&&g!=null&&g.actionOnRelease&&(g==null||g.actionOnRelease())};return window.addEventListener("keydown",o,!0),window.addEventListener("keyup",f,!0),()=>{window.removeEventListener("keydown",o,!0),window.removeEventListener("keyup",f,!0)}},[e,a,n]),{activeKeys:t}},R=e=>{var i;const a=v.useRef(null),[n,t]=v.useState(),r=(i=a.current)==null?void 0:i.getNoteRange();return v.useEffect(()=>(a.current||(a.current=new he(e),t(a.current.getNoteMap())),()=>{a.current=null,t(void 0)}),[e]),{keyMap:n,noteRange:r,transposeDown:()=>{var h,b;(h=a.current)==null||h.shiftLeft(),t((b=a.current)==null?void 0:b.getNoteMap())},transposeUp:()=>{var h,b;(h=a.current)==null||h.shiftRight(),t((b=a.current)==null?void 0:b.getNoteMap())},octaveDown:()=>{var h,b;(h=a.current)==null||h.shiftLeftOctave(),t((b=a.current)==null?void 0:b.getNoteMap())},octaveUp:()=>{var h,b;(h=a.current)==null||h.shiftRightOctave(),t((b=a.current)==null?void 0:b.getNoteMap())}}},le=({state:e})=>s.jsx(be,{$state:e}),be=K.div`
  position: absolute;
  right: calc(var(--height) * 0.23);
  top: calc(var(--height) * 0.23);
  width: calc(round(var(--height) * 0.06, 1px));
  height: calc(round(var(--height) * 0.06, 1px));
  border-radius: 50%;
  background-color: #ccc;
  transition: all 0.3s ease;

  ${({$state:e})=>e==="active"&&C`
      background-color: #8eff00;
      box-shadow: 0px 0px calc(var(--height) * 0.08) calc(var(--height) * 0.04)
        rgba(0, 255, 0, 0.9);
      transform: translateY(calc(var(--height) * 0.03));
    `}
`;K.div`
  width: calc(round(var(--height) * 0.06, 1px));
  height: calc(round(var(--height) * 0.06, 1px));
  border-radius: calc(round(var(--height) * 0.03, 1px));
  position: absolute;
  right: calc(var(--height) * 0.23);
  top: calc(var(--height) * 0.23);
  transition: all 0.3s ease;

  ${({$active:e})=>e&&C`
      transform: translateY(calc(var(--height) * 0.03));
    `}
`;le.__docgenInfo={description:"",methods:[],displayName:"Indicator",props:{state:{required:!0,tsType:{name:"union",raw:'"active" | "inactive"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"inactive"'}]},description:""}}};const k=({label:e,size:a,hidden:n,hiddenOpacity:t,baseWidth:r,active:o,keyType:f,modifier:c,delayDisplay:g,indicator:i,onClick:h})=>{const[b,l]=v.useState(g!=null);return o&&console.log(o),v.useEffect(()=>{b&&setTimeout(()=>{l(!1)},(g??0)*10)},[]),s.jsxs(ye,{$hidden:n,$hiddenOpacity:t,$width:r*(a??1),$height:r,$hide:b,children:[s.jsxs(ke,{$size:a,$active:o||!1,$keyType:c?"modifier":f,onMouseDown:c?c.action:h,$bgColour:c==null?void 0:c.bgColour,$colour:c==null?void 0:c.colour,children:[e,c&&s.jsx(xe,{$size:a,children:c.label})]}),i&&s.jsx(le,{state:i})]})},ye=K.div`
  --width: ${e=>e.$width}px;
  --height: ${e=>e.$height}px;
  width: var(--width);
  height: var(--height);
  /* opacity: ${e=>e.$hiddenOpacity?0:1}; */
  display: ${e=>e.$hidden?"none":"block"};
  padding: calc(var(--height) * 0.05);

  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  transform: translateY(calc(var(--height) * -0.1));
  ${({$hide:e,$hiddenOpacity:a})=>!e&&!a&&C`
      opacity: 1;
      transform: translateY(0);
    `}
`,fe=C`
  opacity: 0.2;
  background-color: #eee;
  border: 1px solid #ccc;
`,pe=C`
  opacity: 0.2;
  background-color: #eee;
  border: 1px solid #ccc;
`,T=C`
  transform: translateY(calc(var(--height) * 0.03));
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.2) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
`,ve=C`
  background-color: #222;
  color: #fff;

  &:hover {
    background-color: #111;
  }

  &:active {
    ${T}
    background-color: #000;
  }
`,me=C`
  background-color: #fff;
  color: #444;
  border: 1px solid #ddd;

  &:hover {
    background-color: #f8f8f8;
  }

  &:active {
    ${T}
    background-color: #efefef;
  }
`,Ce=C`
  ${T}
  background-color: #efefef;
`,Se=C`
  ${T}
  background-color: #000;
`,W=C`
  ${T}
  filter: brightness(0.9);
`,we=C`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--height) * 0.2);
`,ke=K.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: calc(var(--height) * 0.06);
  font-family: sans-serif;
  padding: calc(var(--height) * 0.08);
  font-size: calc(var(--height) * 0.15);
  cursor: pointer;
  user-select: none;
  box-shadow: 0 calc(var(--height) * 0.01) calc(var(--height) * 0.03)
      calc(var(--height) * 0.01) rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.1) 0px calc(var(--height) * 0.03)
      calc(var(--height) * 0.04) 0px inset;
  transition: all 0.3s ease;

  ${({$keyType:e,$bgColour:a,$colour:n})=>{if(e===void 0)return pe;if(e==="disabled")return fe;if(e==="black")return ve;if(e==="white")return me;if(e==="modifier")return C`
        background-color: ${a||"#eee"};
        color: ${n};
        ${!a&&"border: 1px solid #ddd;"}

        &:hover {
          filter: brightness(0.9);
        }

        &:active {
          ${W}
        }
      `}}

  ${({$active:e,$keyType:a})=>{if(a!=="disabled"&&a!=="unplayable"&&e){if(a==="white")return Ce;if(a==="black")return Se;if(a==="modifier")return W}}}

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({$size:e,$keyType:a})=>{if(!e&&a!=="modifier")return we}}
`,xe=K.span`
  font-size: calc(var(--height) * 0.15);
  opacity: 0.8;

  ${({$size:e})=>!e&&C`
      text-align: center;
    `};
`;k.__docgenInfo={description:"",methods:[],displayName:"Key",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:""},hidden:{required:!1,tsType:{name:"boolean"},description:""},hiddenOpacity:{required:!1,tsType:{name:"boolean"},description:""},baseWidth:{required:!0,tsType:{name:"number"},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},keyType:{required:!1,tsType:{name:"union",raw:'"black" | "white" | "disabled" | "modifier"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"white"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"modifier"'}]},description:""},modifier:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  keyCode: string
  label: string
  action: () => void
  actionOnRelease?: () => void
  bgColour?: string
  colour?: string
}`,signature:{properties:[{key:"keyCode",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"actionOnRelease",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"bgColour",value:{name:"string",required:!1}},{key:"colour",value:{name:"string",required:!1}}]}},description:""},delayDisplay:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},indicator:{required:!1,tsType:{name:"union",raw:'"active" | "inactive"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"inactive"'}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const q=new Map([["Digit1","1"],["Digit2","2"],["Digit3","3"],["Digit4","4"],["Digit5","5"],["Digit6","6"],["Digit7","7"],["Digit8","8"],["Digit9","9"],["Digit0","0"],["Minus","-"],["Equal","="],["KeyQ","q"],["KeyW","w"],["KeyE","e"],["KeyR","r"],["KeyT","t"],["KeyY","y"],["KeyU","u"],["KeyI","i"],["KeyO","o"],["KeyP","p"],["BracketLeft","["],["BracketRight","]"],["KeyA","a"],["KeyS","s"],["KeyD","d"],["KeyF","f"],["KeyG","g"],["KeyH","h"],["KeyJ","j"],["KeyK","k"],["KeyL","l"],["Semicolon",";"],["Quote","'"],["KeyZ","z"],["KeyX","x"],["KeyC","c"],["KeyV","v"],["KeyB","b"],["KeyN","n"],["KeyM","m"],["Comma",","],["Period","."],["Slash","/"]]),d=[["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight"],["KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote"],["KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"]],p=(e,a)=>a==null?void 0:a.find(n=>e.includes(n.keyCode)),Ke=(e,a,n)=>{const t=new Map;return t.set("Escape",e||p(["Escape","IntlBackslash"],n)?t.size:null),e||a?d[0].forEach(r=>t.set(r,t.size)):d[0].forEach(r=>{t.set(r,p([r],n)?t.size:null)}),t.set("Backspace",e||p(["Backspace"],n)?t.size:null),t.set("Tab",e||p(["Tab","Backquote"],n)?t.size:null),d[1].forEach(r=>t.set(r,t.size)),t.set("Backquote",e||p(["Backquote"],n)?t.size:null),t.set("CapsLock",e||p(["CapsLock"],n)?t.size:null),d[2].forEach(r=>t.set(r,t.size)),t.set("Enter",e||p(["Enter"],n)?t.size:null),t.set("ShiftLeft",e||p(["ShiftLeft"],n)?t.size:null),e||a?d[3].forEach(r=>t.set(r,t.size)):d[3].forEach(r=>{t.set(r,p([r],n)?t.size:null)}),t.set("ShiftRight",e||p(["ShiftRight"],n)?t.size:null),t},m=(e,a)=>e.map(n=>n.keyCode).includes(a),D=({width:e=1200,dualMode:a=!1,showFullKeyboard:n=!1,modifierKeys:t,activeKeys:r,keyMap:o,animate:f=!1,onKeyClick:c})=>{const g=t==null?void 0:t.some(y=>!Array.from(q.keys()).includes(y.keyCode)),i=e/(n||g?15:12.5),h=y=>n?0:a||g?i*y:i*y-i*.5,b=y=>{c&&y!==null&&y!==void 0&&c(y)},l=v.useMemo(()=>Ke(n,a,t),[n,a,t]);return console.log(r,d[0][1],m(r,d[0][1])),s.jsxs(De,{$width:e,children:[s.jsxs(N,{$shift:g?t!=null&&t.some(y=>["Escape","IntlBackslash"].includes(y.keyCode))?0:h(1):h(0),$show:l.get("Escape")!==null||l.get("Backspace")!==null||d[0].some(y=>l.get(y)!==null),children:[s.jsx(k,{delayDisplay:f?l.get("Escape"):null,baseWidth:i,size:1,hidden:l.get("Escape")===null,label:"esc",active:m(r,"Escape")||m(r,"IntlBackslash"),modifier:p(["Escape","IntlBackslash"],t)}),Array.from({length:12}).map((y,u)=>{var S;return s.jsx(k,{delayDisplay:f?l.get(d[0][u]):null,baseWidth:i,label:q.get(d[0][u]),keyType:(S=o==null?void 0:o.get(d[0][u]))==null?void 0:S.type,active:m(r,d[0][u]),onClick:()=>{var w;return b((w=o==null?void 0:o.get(d[0][u]))==null?void 0:w.midiNote)},hiddenOpacity:!l.get(d[0][u]),modifier:a?void 0:p([d[0][u]],t)},u)}),s.jsx(k,{delayDisplay:f?l.get("Backspace"):null,baseWidth:i,size:2,hidden:!l.get("Backspace"),label:"backspace",active:m(r,"Backspace"),modifier:p(["Backspace"],t)})]}),s.jsxs(N,{$shift:g?t!=null&&t.some(y=>["Tab"].includes(y.keyCode))?0:h(1.5):h(.5),$show:!0,children:[s.jsx(k,{delayDisplay:f?l.get("Tab"):null,baseWidth:i,size:1.5,hidden:!l.get("Tab"),label:"tab",active:m(r,"Tab"),modifier:p(["Tab"],t)}),Array.from({length:12}).map((y,u)=>{var S;return s.jsx(k,{delayDisplay:f?l.get(d[1][u]):null,baseWidth:i,label:q.get(d[1][u]),keyType:(S=o==null?void 0:o.get(d[1][u]))==null?void 0:S.type,active:m(r,d[1][u]),onClick:()=>{var w;return b((w=o==null?void 0:o.get(d[1][u]))==null?void 0:w.midiNote)}},u)}),s.jsx(k,{delayDisplay:f?l.get("Backquote"):null,baseWidth:i,size:1.5,hidden:!l.get("Backquote"),label:"\\",active:m(r,"Backquote"),modifier:p(["Backquote"],t)})]}),s.jsxs(N,{$shift:g?t!=null&&t.some(y=>["CapsLock"].includes(y.keyCode))?0:h(1.75):h(.75),$show:!0,children:[s.jsx(k,{delayDisplay:f?l.get("CapsLock"):null,baseWidth:i,size:1.75,hidden:!l.get("CapsLock"),label:"caps lock",active:m(r,"CapsLock"),modifier:p(["CapsLock"],t),indicator:p(["CapsLock"],t)&&(m(r,"CapsLock")?"active":"inactive")}),Array.from({length:11}).map((y,u)=>{var S;return s.jsx(k,{delayDisplay:f?l.get(d[2][u]):null,baseWidth:i,label:q.get(d[2][u]),keyType:(S=o==null?void 0:o.get(d[2][u]))==null?void 0:S.type,active:m(r,d[2][u]),onClick:()=>{var w;return b((w=o==null?void 0:o.get(d[2][u]))==null?void 0:w.midiNote)}},u)}),s.jsx(k,{delayDisplay:f?l.get("Enter"):null,baseWidth:i,size:2.25,hidden:!l.get("Enter"),label:"enter",active:m(r,"Enter"),modifier:p(["Enter"],t)})]}),s.jsxs(N,{$shift:g?t!=null&&t.some(y=>y.keyCode==="ShiftLeft")?0:h(2.25):h(1.25),$show:l.get("ShiftLeft")!==null||l.get("ShiftRight")!==null||d[3].some(y=>l.get(y)!==null),children:[s.jsx(k,{delayDisplay:f?l.get("ShiftLeft"):null,baseWidth:i,size:2.25,hidden:!l.get("ShiftLeft"),label:"shift",active:m(r,"ShiftLeft"),modifier:p(["ShiftLeft"],t)}),Array.from({length:10}).map((y,u)=>{var S;return s.jsx(k,{delayDisplay:f?l.get(d[3][u]):null,baseWidth:i,label:q.get(d[3][u]),keyType:(S=o==null?void 0:o.get(d[3][u]))==null?void 0:S.type,active:m(r,d[3][u]),onClick:()=>{var w;return b((w=o==null?void 0:o.get(d[3][u]))==null?void 0:w.midiNote)},hiddenOpacity:!l.get(d[3][u]),modifier:a?void 0:p([d[3][u]],t)},u)}),s.jsx(k,{delayDisplay:f?l.get("ShiftRight"):null,baseWidth:i,size:2.75,hidden:!l.get("ShiftRight"),label:"shift",active:m(r,"ShiftRight"),modifier:p(["ShiftRight"],t)})]})]})},De=K.div`
  width: ${e=>e.$width}px;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`,N=K.div`
  display: ${e=>e.$show?"flex":"none"};
  margin-left: ${e=>e.$shift}px;
`;D.__docgenInfo={description:"",methods:[],displayName:"Keyboard",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1200",computed:!1}},dualMode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFullKeyboard:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},modifierKeys:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  keyCode: string
  label: string
  action: () => void
  actionOnRelease?: () => void
  bgColour?: string
  colour?: string
}`,signature:{properties:[{key:"keyCode",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"action",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"actionOnRelease",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"bgColour",value:{name:"string",required:!1}},{key:"colour",value:{name:"string",required:!1}}]}}],raw:"ModifierKey[]"},description:""},activeKeys:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ keyCode: string; note?: NoteName }",signature:{properties:[{key:"keyCode",value:{name:"string",required:!0}},{key:"note",value:{name:"NoteName",required:!1}}]}}],raw:"ActiveKey[]"},description:""},keyMap:{required:!0,tsType:{name:"union",raw:"KeyMap | undefined",elements:[{name:"KeyMap"},{name:"undefined"}]},description:""},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onKeyClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(midiNote: number) => void",signature:{arguments:[{type:{name:"number"},name:"midiNote"}],return:{name:"void"}}},description:""}}};const j={width:1200,dualMode:!1,animate:!0,showFullKeyboard:!1},je=e=>{const{playNoteFromMidi:a}=$(L),{keyMap:n}=R(e!=null&&e.dualMode?"dual":"single"),{activeKeys:t}=E(n,a);return s.jsx(D,{...e,activeKeys:t,keyMap:n,onKeyClick:a})},ce=e=>{const{playNoteFromMidi:a}=$(L),{keyMap:n,transposeDown:t,transposeUp:r,octaveDown:o,octaveUp:f}=R(e!=null&&e.dualMode?"dual":"single"),c=[{keyCode:"KeyZ",label:"octave down",action:()=>o()},{keyCode:"KeyX",label:"octave up",action:()=>f()},{keyCode:"KeyC",label:"shift down",action:()=>t()},{keyCode:"KeyV",label:"shift up",action:()=>r()}],{activeKeys:g}=E(n,a,c);return s.jsx(D,{...e,animate:!1,activeKeys:g,keyMap:n,onKeyClick:a,modifierKeys:c})},qe=e=>{const{playNoteFromMidi:a,setSustain:n}=$(L),{keyMap:t,octaveDown:r,octaveUp:o}=R(e!=null&&e.dualMode?"dual":"single");v.useEffect(()=>{n(!0)},[]);const f=[{keyCode:"ShiftLeft",label:"octave down",action:()=>r()},{keyCode:"ShiftRight",label:"octave up",action:()=>o()}],{activeKeys:c}=E(t,a,f);return s.jsx(D,{...e,activeKeys:c,keyMap:t,onKeyClick:a,modifierKeys:f})},$e=e=>{const[a,n]=v.useState(e.dualMode),[t,r]=v.useState(e.showFullKeyboard),{playNoteFromMidi:o}=$(L),{keyMap:f,transposeDown:c,transposeUp:g,octaveDown:i,octaveUp:h}=R(a?"dual":"single");v.useEffect(()=>{n(e.dualMode)},[e.dualMode]),v.useEffect(()=>{r(e.showFullKeyboard)},[e.showFullKeyboard]);const b=[{keyCode:"ShiftLeft",label:"toggle mode",action:()=>n(y=>!y),bgColour:"rgb(206, 93, 151)",colour:"white"},{keyCode:"KeyZ",label:"octave down",action:()=>i(),bgColour:"rgb(209, 77, 65)",colour:"white"},{keyCode:"KeyX",label:"octave up",action:()=>h(),bgColour:"rgb(218, 112, 44)",colour:"white"},{keyCode:"KeyC",label:"shift down",action:()=>c(),bgColour:"rgb(208, 162, 21)",colour:"white"},{keyCode:"KeyV",label:"shift up",action:()=>g(),bgColour:"rgb(135, 154, 57)",colour:"white"},{keyCode:"ShiftRight",label:"full keyboard",action:()=>r(y=>!y),bgColour:"rgb(58, 169, 159)",colour:"white"}],{activeKeys:l}=E(f,o,b);return s.jsx(D,{...e,dualMode:a,showFullKeyboard:t,activeKeys:l,keyMap:f,onKeyClick:o,modifierKeys:b})},Le=e=>{const{playNoteFromMidi:a,setSustain:n}=$(L),{keyMap:t,transposeDown:r,transposeUp:o,octaveDown:f,octaveUp:c}=R(e!=null&&e.dualMode?"dual":"single"),[g,i]=v.useState(!1),[h,b]=v.useState(!1),[l,y]=v.useState(!1),u=()=>{n&&(i(!1),!h&&!l&&n(!1))},S=()=>{n&&(b(!1),!g&&!l&&n(!1))},w=()=>{n&&(y(!1),!g&&!h&&n(!1))},F=ue=>{n&&(ue(),n(!0))},x="#f0f0f0",_=[{keyCode:"CapsLock",label:"sustain",action:()=>F(()=>y(!0)),actionOnRelease:()=>w(),bgColour:x},{keyCode:"ShiftLeft",label:"sustain",action:()=>F(()=>i(!0)),actionOnRelease:()=>u(),bgColour:x},{keyCode:"ShiftRight",label:"sustain",action:()=>F(()=>b(!0)),actionOnRelease:()=>S(),bgColour:x},{keyCode:"KeyV",label:"octave down",action:()=>f(),bgColour:x},{keyCode:"KeyB",label:"octave up",action:()=>c(),bgColour:x},{keyCode:"KeyN",label:"transpose down",action:()=>r(),bgColour:x},{keyCode:"KeyM",label:"transpose up",action:()=>o(),bgColour:x}],{activeKeys:de}=E(t,a,_);return s.jsx(D,{...e,activeKeys:de,keyMap:t,onKeyClick:a,modifierKeys:_})},z={args:j,render:je,decorators:[e=>s.jsx("div",{style:{margin:"1em"},children:s.jsx(e,{})})]},B={args:j,render:ce,decorators:[e=>s.jsx("div",{style:{margin:"1em"},children:s.jsx(e,{})})]},I={args:{...j,showFullKeyboard:!0},render:ce,decorators:[e=>s.jsx("div",{style:{padding:"1em"},children:s.jsx(e,{})})]},A={args:{...j,dualMode:!0},render:qe,decorators:[e=>s.jsx("div",{style:{margin:"1em"},children:s.jsx(e,{})})]},O={args:{...j,showFullKeyboard:!0},render:$e,decorators:[e=>s.jsx("div",{style:{padding:"1em",height:"100vh",backgroundColor:"rgb(255, 252, 240)"},children:s.jsx(e,{})})]},U={args:{...j,showFullKeyboard:!0},render:Le,decorators:[e=>s.jsx("div",{style:{padding:"1em"},children:s.jsx(e,{})})]},ze={title:"Keyboard",component:D,argTypes:{onKeyClick:{control:{disable:!0}},keyMap:{control:{disable:!0}},activeKeys:{control:{disable:!0}},modifierKeys:{control:{disable:!0}}}};var V,Y,P;z.parameters={...z.parameters,docs:{...(V=z.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: defaultArgs,
  render: InteractiveSingleKeyboardNoModifiers,
  decorators: [Story => <div style={{
    margin: "1em"
  }}>
        <Story />
      </div>]
}`,...(P=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var Q,X,Z;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: defaultArgs,
  render: InteractiveSingleKeyboard,
  decorators: [Story => <div style={{
    margin: "1em"
  }}>
        <Story />
      </div>]
}`,...(Z=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var H,G,J;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showFullKeyboard: true
  },
  render: InteractiveSingleKeyboard,
  decorators: [Story => <div style={{
    padding: "1em"
  }}>
        <Story />
      </div>]
}`,...(J=(G=I.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var M,ee,te;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    dualMode: true
  },
  render: InteractiveDualKeyboard,
  decorators: [Story => <div style={{
    margin: "1em"
  }}>
        <Story />
      </div>]
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showFullKeyboard: true
  },
  render: InteractiveSingleKeyboardWithColour,
  decorators: [Story => <div style={{
    padding: "1em",
    height: "100vh",
    backgroundColor: "rgb(255, 252, 240)"
  }}>
        <Story />
      </div>]
}`,...(re=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;U.parameters={...U.parameters,docs:{...(oe=U.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showFullKeyboard: true
  },
  render: InteractiveSingleKeyboardWithSustain,
  decorators: [Story => <div style={{
    padding: "1em"
  }}>
        <Story />
      </div>]
}`,...(ie=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Be=["SingleKeyboardNoModifiers","SingleKeyboardNoAnimation","FullSingleKeyboardNoAnimation","DualKeyboard","FullSingleKeyboardWithColour","FullSingleKeyboardWithSustain"];export{A as DualKeyboard,I as FullSingleKeyboardNoAnimation,O as FullSingleKeyboardWithColour,U as FullSingleKeyboardWithSustain,B as SingleKeyboardNoAnimation,z as SingleKeyboardNoModifiers,Be as __namedExportsOrder,ze as default};
