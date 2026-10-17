const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
class E{constructor(){this.children=[];this.listeners={};this.value='';this.style={};this.dataset={};this.classList={toggle(){}};}append(...x){this.children.push(...x)}replaceChildren(){this.children=[]}setAttribute(){}addEventListener(k,f){this.listeners[k]=f}click(){} }
const elements={}, storage=new Map();const document={getElementById:id=>elements[id]??=new E(),createElement:()=>new E(),querySelectorAll:()=>[]};
const context=vm.createContext({document,localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},Intl,Date,Number,String,JSON,Array,Object,console,setTimeout,clearTimeout,Blob,URL,confirm:()=>true,crypto:require('node:crypto').webcrypto});
vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'..','app.js'),'utf8'),context);
const run=code=>vm.runInContext(code,context);
for(const id of ['skin','arbor','tricon','smox']){run(`current='${id}';records=load(current);render()`);assert.equal(elements.board.children.length,4);assert.equal(elements.metrics.children.length,4);assert.equal(run('records.length'),5);assert.equal(elements.drafts.children.length,4);run('records[0].stage=3;save();records=load(current);render()');assert.equal(run('records[0].stage'),3);}
run("current='skin';records=seed(current);$('search').value='Jordan';render()");assert.equal(elements.board.children[0].children.length,2);assert.equal(elements.board.children[1].children[1].textContent,'No requests here yet.');
assert.equal(run(`csvCell('=1+1')`),`"'=1+1"`);assert.equal(run(`csvCell('a"b')`),'"a""b"');
storage.set('relay-demo-v1-skin','bad-json');assert.equal(run("load('skin').length"),5);
run("current='skin';records=seed(current);$('search').value='';render()");const select=elements.board.children[0].children[1].children.at(-1);select.value='2';select.listeners.change();assert.equal(run('records[0].stage'),2);assert.equal(run('load(current)[0].stage'),2);
console.log('PASS: four presets, rendering, metrics, drafts, filtering, status changes, persistence, corrupt storage fallback, CSV escaping.');

