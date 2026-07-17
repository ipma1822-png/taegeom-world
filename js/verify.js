
const form=document.querySelector('#verify-form');
form?.addEventListener('submit',e=>{e.preventDefault();const code=document.querySelector('#verify-code').value.trim();const box=document.querySelector('#verify-result');if(!code)return;
const valid=['WTKF-2026-0001','TG-ARI-0100','TG-ZEN-0007'].includes(code.toUpperCase());
box.classList.add('show');box.innerHTML=valid?`<span class="eyebrow">VERIFIED</span><h3>공식 인증이 확인되었습니다.</h3><p>인증번호: <strong>${code.toUpperCase()}</strong></p><p>상태: 유효 · WTKF 공식 등록</p>`:`<span class="eyebrow">NOT FOUND</span><h3>등록 정보를 찾을 수 없습니다.</h3><p>번호를 다시 확인해 주세요. 현재 버전은 데모 데이터로 작동합니다.</p>`});
