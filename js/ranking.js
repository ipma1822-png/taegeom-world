
const rankData={
world:[
{name:'ARI-001',sub:'Republic of Korea',score:9820,p:96},
{name:'ZEN-007',sub:'United States',score:9340,p:89},
{name:'TG-108',sub:'China',score:8910,p:82},
{name:'ARI-219',sub:'Vietnam',score:8470,p:77},
{name:'ZEN-312',sub:'Iran',score:8010,p:71}],
country:[
{name:'대한민국',sub:'51개 인증 도장',score:25840,p:96},
{name:'미국',sub:'18개 인증 도장',score:21350,p:86},
{name:'중국',sub:'16개 인증 도장',score:19720,p:80},
{name:'베트남',sub:'12개 인증 도장',score:16540,p:70},
{name:'이란',sub:'9개 인증 도장',score:14980,p:63}],
dojang:[
{name:'계명태권도',sub:'Ulsan, Korea',score:12480,p:96},
{name:'WTKF Seoul',sub:'Seoul, Korea',score:11240,p:88},
{name:'Taegeom USA',sub:'California, USA',score:9850,p:77},
{name:'Taegeom Hanoi',sub:'Hanoi, Vietnam',score:8740,p:68},
{name:'Taegeom Jilin',sub:'Jilin, China',score:7980,p:61}]
};
function renderRanks(type='world'){const wrap=document.querySelector('#ranking-list');if(!wrap)return;wrap.innerHTML=rankData[type].map((r,i)=>`<div class="rank-row"><div class="rank-no">${String(i+1).padStart(2,'0')}</div><div class="rank-name"><strong>${r.name}</strong><span>${r.sub}</span></div><div class="rank-bar"><i style="width:${r.p}%"></i></div><div class="rank-score">${r.score.toLocaleString()}</div></div>`).join('')}
renderRanks();document.querySelectorAll('[data-rank-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-rank-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderRanks(b.dataset.rankTab)}));
