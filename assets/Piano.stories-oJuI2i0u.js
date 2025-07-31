import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{p as f,n as J,c as g,u as X,s as Y}from"./useMiniKeys-BPMIypvj.js";import{d as E}from"./styled-components.browser.esm-DxTIr8mQ.js";import"./index-DmM0KDA7.js";const q=({width:e,height:a,offset:t,fill:c,strokeWidth:s,strokeColour:m,noBorder:l,type:o})=>{const i=a*.025;return r.jsx(O,{$type:o,d:`
    M${e+(l?t-s:t)} ${o==="white"?l?0:s/2:0},
    L${e+(l?t-s:t)} ${a-i-s/2},
    q0,${i} -${i},${i},
    L${t+i+s/2} ${a-s/2},
    q-${i},0 -${i},-${i},
    L${t+s/2} ${o==="white"?l?0:s/2:0},
    Z
    `,fill:c??(o==="white"?"white":"#222"),stroke:l?"none":o==="white"?m??"black":"none",strokeWidth:s})},O=E.path`
  cursor: pointer;

  &:hover {
    fill: ${({$type:e})=>e==="white"?"#ddd":"black"};
  }

  &:active {
    fill: ${({$type:e})=>e==="white"?"#ccc":"#444"};
  }
`;q.__docgenInfo={description:"",methods:[],displayName:"PianoKeyRect",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},offset:{required:!0,tsType:{name:"number"},description:""},fill:{required:!1,tsType:{name:"string"},description:""},strokeWidth:{required:!0,tsType:{name:"number"},description:""},strokeColour:{required:!1,tsType:{name:"string"},description:""},noBorder:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!0,tsType:{name:"union",raw:'"black" | "white"',elements:[{name:"literal",value:'"black"'},{name:"literal",value:'"white"'}]},description:""}}};const Q=E.text`
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
`,h=({numKeys:e,width:a,height:t,strokeWidth:c,baseNoteOffset:s,showLabels:m,highlights:l,noBorder:o,handleClick:i})=>{const u=(a-c/2)/e+c/2*((e-1)/e),v=d=>{var p;const n=f[s+d];return n!==null&&(p=l==null?void 0:l.activeNotes)!=null&&p.includes(n)?"#444":"#222"},y=d=>{if(d>0&&d<f.length){if(f[d-1]===null)return-1;if(f[d+1]===null)return 1}return 0},x=d=>{if(!i)return;const n=f[s+d];if(n===null)return;const p=J[n];i(p)};return Array.from({length:e+1}).map((d,n)=>f[s+n]&&r.jsxs("g",{onMouseDown:()=>x(n),children:[r.jsx(q,{width:u*.65,height:t*.65,offset:n*u-n*(c/2)-(u*.65-c)/2+y(s+n)*u*.1,strokeWidth:1.5,fill:v(n),type:"black",noBorder:o}),m&&n*u-n*c/2>5&&n*u-n*c/2<a-5&&r.jsx(Q,{x:n*u-n*c/2+c/2+y(s+n)*u*.1,y:t*.65-t*.03,textAnchor:"middle",fontSize:t*.04,fill:"white",opacity:.8,children:f[s+n]})]},`piano-key-black-${n}`))},C=["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8"],ee=e=>{const a=e.replace("#","");if(C.includes(a))return e.includes("#")?C.indexOf(a)+1:C.indexOf(a);throw new Error(`Lower range note ${e} invalid`)},ne=e=>{const a=e.replace("#","");if(C.includes(a))return C.indexOf(a);throw new Error(`Lower range note ${e} invalid`)},re=({numKeys:e,width:a,height:t,strokeWidth:c,strokeColour:s,baseNoteOffset:m,showLabels:l,highlights:o,noBorder:i,handleClick:u})=>{const v=(a-c/2)/e+c/2*((e-1)/e),y=d=>{var n;return(n=o==null?void 0:o.activeNotes)!=null&&n.includes(g[m+d])?"#ccc":(o!=null&&o.rangeStart||o!=null&&o.rangeEnd)&&g.slice(ee((o==null?void 0:o.rangeStart)??"A0"),ne((o==null?void 0:o.rangeEnd)??"C8")+1).includes(g[m+d])?(o==null?void 0:o.rangeColor)??"#eee":"white"},x=d=>{if(!u)return;const n=g[m+d],p=J[n];u(p)};return Array.from({length:e}).map((d,n)=>r.jsxs("g",{onMouseDown:()=>x(n),children:[r.jsx(q,{width:v,height:t,offset:n*v-n*c/2,strokeWidth:c,strokeColour:s,type:"white",fill:y(n),noBorder:i}),l&&r.jsx(Q,{x:n*v-n*c/2+v/2,y:t-t*.03,textAnchor:"middle",fontSize:t*.04,fill:"black",opacity:.6,children:g[m+n]})]},`piano-key-white-${n}`))},w=({width:e,numKeys:a=15,height:t,strokeWidth:c=1.5,strokeColour:s,baseNote:m="C4",showLabels:l=!1,noBorder:o=!1,highlights:i,onClick:u,...v})=>{const y=t??Math.min(e/a*5,e/4),x=Math.min(a,52),d=Math.min(g.indexOf(m),52-a),n=p=>{u&&p!==null&&p!==void 0&&u(p)};return r.jsxs(oe,{viewBox:`0 0 ${e} ${y}`,width:e,height:y,xmlns:"http://www.w3.org/2000/svg",...v,children:[r.jsx("g",{children:r.jsx(re,{numKeys:x,width:e,height:y,strokeWidth:c,strokeColour:s,baseNoteOffset:d,showLabels:l,highlights:i,handleClick:n,noBorder:o})}),r.jsx("g",{children:r.jsx(h,{numKeys:x,width:e,height:y,strokeWidth:c,baseNoteOffset:d,showLabels:l,highlights:i,handleClick:n,noBorder:o})})]})},oe=E.svg`
  user-select: none;
`;w.__docgenInfo={description:"",methods:[],displayName:"Piano",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""},numKeys:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},strokeColour:{required:!1,tsType:{name:"string"},description:""},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1.5",computed:!1}},baseNote:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof keyboardWhiteNotes)[number]"},description:"",defaultValue:{value:'"C4"',computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},highlights:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  rangeStart?: NoteName
  rangeEnd?: NoteName
  rangeColor?: string
  activeNotes?: NoteName[]
}`,signature:{properties:[{key:"rangeStart",value:{name:"NoteName",required:!1}},{key:"rangeEnd",value:{name:"NoteName",required:!1}},{key:"rangeColor",value:{name:"string",required:!1}},{key:"activeNotes",value:{name:"Array",elements:[{name:"NoteName"}],raw:"NoteName[]",required:!1}}]}},description:""},noBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(midiNote: number) => void",signature:{arguments:[{type:{name:"number"},name:"midiNote"}],return:{name:"void"}}},description:""}}};const U=e=>{const{playNoteFromMidi:a,isLoading:t}=X(Y);return r.jsxs(r.Fragment,{children:[r.jsx(w,{...e,onClick:a}),r.jsx(r.Fragment,{children:r.jsx("p",{children:t?"Loading samples...":null})})]})},N={args:{width:1e3,numKeys:52,strokeColour:"#ccc",strokeWidth:1.5},render:U,decorators:[e=>r.jsx("div",{style:{margin:"1em"},children:r.jsx(e,{})})]},S={args:{showLabels:!0,width:1e3,numKeys:16,strokeColour:"#ccc",strokeWidth:1.5},render:U,decorators:[e=>r.jsx("div",{style:{margin:"1em"},children:r.jsx(e,{})})]},b={args:{width:1200,numKeys:24,showLabels:!0,strokeColour:"#ccc",strokeWidth:1.5,baseNote:"C3"},render:w,decorators:[e=>r.jsx("div",{style:{padding:"1em"},children:r.jsx(e,{})})]},k={args:{width:1200,numKeys:52,strokeColour:"#ccc",strokeWidth:1.5,highlights:{rangeStart:"C4",rangeEnd:"F5",rangeColor:"#eee"}},render:w,decorators:[e=>r.jsx("div",{style:{padding:"1em"},children:r.jsx(e,{})})]},j={args:{width:1200,numKeys:24,strokeColour:"#ccc",strokeWidth:1.5,highlights:{rangeStart:"F4",rangeEnd:"F6",rangeColor:"#eee",activeNotes:["E5","G5","A#5"]}},render:w,decorators:[e=>r.jsx("div",{style:{padding:"1em"},children:r.jsx(e,{})})]},P={args:{noBorder:!0,width:1200,numKeys:24,strokeColour:"#ccc",strokeWidth:1.5,highlights:{rangeStart:"F4",rangeEnd:"F6",rangeColor:"#eee",activeNotes:["E5","G5","A#5"]}},render:w,decorators:[e=>r.jsx("div",{style:{padding:"1em",backgroundColor:"#111",height:"100vh"},children:r.jsx(e,{})})]},de={title:"Piano",component:w};var F,$,A;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    width: 1000,
    numKeys: 52,
    strokeColour: "#ccc",
    strokeWidth: 1.5
  },
  render: PlayablePianoSetup,
  decorators: [Story => <div style={{
    margin: "1em"
  }}>
        <Story />
      </div>]
}`,...(A=($=N.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var T,K,L;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showLabels: true,
    width: 1000,
    numKeys: 16,
    strokeColour: "#ccc",
    strokeWidth: 1.5
  },
  render: PlayablePianoSetup,
  decorators: [Story => <div style={{
    margin: "1em"
  }}>
        <Story />
      </div>]
}`,...(L=(K=S.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var B,G,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    width: 1200,
    numKeys: 24,
    showLabels: true,
    strokeColour: "#ccc",
    strokeWidth: 1.5,
    baseNote: "C3"
  },
  render: Piano,
  decorators: [Story => <div style={{
    padding: "1em"
  }}>
        <Story />
      </div>]
}`,...(D=(G=b.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var _,M,W;k.parameters={...k.parameters,docs:{...(_=k.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: 1200,
    numKeys: 52,
    strokeColour: "#ccc",
    strokeWidth: 1.5,
    highlights: {
      rangeStart: "C4",
      rangeEnd: "F5",
      rangeColor: "#eee"
    }
  },
  render: Piano,
  decorators: [Story => <div style={{
    padding: "1em"
  }}>
        <Story />
      </div>]
}`,...(W=(M=k.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var R,V,I;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    width: 1200,
    numKeys: 24,
    strokeColour: "#ccc",
    strokeWidth: 1.5,
    highlights: {
      rangeStart: "F4",
      rangeEnd: "F6",
      rangeColor: "#eee",
      activeNotes: ["E5", "G5", "A#5"]
    }
  },
  render: Piano,
  decorators: [Story => <div style={{
    padding: "1em"
  }}>
        <Story />
      </div>]
}`,...(I=(V=j.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var z,H,Z;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    noBorder: true,
    width: 1200,
    numKeys: 24,
    strokeColour: "#ccc",
    strokeWidth: 1.5,
    highlights: {
      rangeStart: "F4",
      rangeEnd: "F6",
      rangeColor: "#eee",
      activeNotes: ["E5", "G5", "A#5"]
    }
  },
  render: Piano,
  decorators: [Story => <div style={{
    padding: "1em",
    backgroundColor: "#111",
    height: "100vh"
  }}>
        <Story />
      </div>]
}`,...(Z=(H=P.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};const ie=["PlayablePiano","SmallPlayablePiano","TwentyFourKey","PianoWithRange","PianoWithRangeAndActiveNotes","PianoWithNoBorder"];export{P as PianoWithNoBorder,k as PianoWithRange,j as PianoWithRangeAndActiveNotes,N as PlayablePiano,S as SmallPlayablePiano,b as TwentyFourKey,ie as __namedExportsOrder,de as default};
