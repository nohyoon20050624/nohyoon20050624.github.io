/* 가족관계 자료실 v2 — 정적 열람 전용. 계정·업로드·추적·영구 저장 없음. */
(() => {
  'use strict';
  const cfg = window.STUDY_CONFIG || {title:'가족관계',files:[]};
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const state={materials:[],current:null,tab:'original',page:1,search:'',filter:'all',quiz:{}};
  const pdfURLs=new Map();
  const tabs=[['original','원문 내용'],['translation','한글 해석'],['summary','내용 요약'],['quiz','퀴즈']];
  const paths={
    book:'<path d="M4 4.5h6c1.2 0 2 .7 2 1.5 0-.8.8-1.5 2-1.5h6v15h-6c-1.2 0-2 .7-2 1.5 0-.8-.8-1.5-2-1.5H4zM12 6v15"/>',
    home:'<rect x="3" y="3" width="7" height="7" rx="1.3"/><rect x="14" y="3" width="7" height="7" rx="1.3"/><rect x="3" y="14" width="7" height="7" rx="1.3"/><rect x="14" y="14" width="7" height="7" rx="1.3"/>',
    note:'<path d="M8 3h9l4 4v14H5V3h3zM16 3v5h5M9 12h8M9 16h6"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    arrow:'<path d="M4 12h15M14 6l6 6-6 6"/>',
    moon:'<path d="M20 14a8.5 8.5 0 0 1-10-10A8.5 8.5 0 1 0 20 14z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    download:'<path d="M12 3v12M7 10l5 5 5-5M4 15v6h16v-6"/>',
    external:'<path d="M14 3h7v7M21 3l-11 11M10 5H4v15h15v-6"/>',
    print:'<path d="M6 8V3h12v5M6 17H3V8h18v9h-3M6 14h12v7H6zM17 11h1"/>',
    bookmark:'<path d="M6 3h12v18l-6-4-6 4z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    close:'<path d="m6 6 12 12M18 6 6 18"/>'
  };
  const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[n]||paths.book}</svg>`;
  const route=(m,tab='original',p='')=>`#/week/${m.week}/${tab}${p?'/'+p:''}`;
  const findWeek=w=>state.materials.find(m=>m.week===Number(w));
  const refs=(m,ns=[])=>`<div class="source-refs" aria-label="원문 출처">${ns.map(n=>`<a class="source-ref" href="${route(m,'translation',n)}" aria-label="${m.week}주차 ${n}쪽 한글 해석">p. ${n}</a>`).join('')}</div>`;
  let timer;
  function toast(t){$('#toast').textContent=t;$('#toast').classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
  function pdfUrl(m,p){
    const data=window.STUDY_EMBEDDED_PDFS?.[m.id];
    if(data&&!pdfURLs.has(m.id)){
      const raw=atob(data),bytes=new Uint8Array(raw.length);
      for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
      pdfURLs.set(m.id,URL.createObjectURL(new Blob([bytes],{type:'application/pdf'})));
    }
    return (pdfURLs.get(m.id)||m.sourcePath)+(p?'#page='+p:'');
  }
  const pdfButton=m=>`<a class="button small" href="${esc(pdfUrl(m))}" target="_blank" rel="noopener noreferrer">${icon('external')}원본 PDF</a>`;
  function closeMenu(){
    $('#sidebar').classList.remove('open');$('#scrim').classList.remove('active');$('[data-action="menu"]')?.setAttribute('aria-expanded','false');
  }
  function shell(section){
    const m=state.current;
    const nav=(key,label,ico)=>`<a class="nav-link ${section===key?'active':''}" href="#/${key}" ${section===key?'aria-current="page"':''}>${icon(ico)}<span>${label}</span></a>`;
    $('#sidebar').innerHTML=`<a class="brand" href="#/library" aria-label="가족관계 자료실 첫 화면"><span class="brand-mark">${icon('bookmark')}</span><span><span class="brand-name">가족관계</span><span class="brand-en">FAMILY RELATIONS</span></span></a><div class="side-label">STUDY ARCHIVE</div><nav>${nav('library','주차별 자료','home')}${nav('activities','과제 · 수업 활동','note')}${nav('guide','이용 안내','help')}</nav><div class="side-divider"></div><div class="side-label">WEEK BY WEEK</div><nav aria-label="주차별 바로가기">${state.materials.map(x=>`<a class="side-material ${m?.week===x.week?'active':''}" href="${route(x)}" ${m?.week===x.week?'aria-current="page"':''}><span>WEEK ${String(x.week).padStart(2,'0')} · ${x.pageCount}쪽</span><strong>${x.week}주차 · ${esc(x.title)}</strong></a>`).join('')}</nav><div class="side-bottom"><strong>원문에서 이해로,<br>이해에서 확인으로.</strong><br>운영자가 게시하는 주차별 학습자료.<br>가입 없이 읽고, 퀴즈로 복습합니다.</div>`;
    const dark=document.documentElement.dataset.theme==='dark';
    $('#topbar').innerHTML=`<button class="icon-button menu-button" data-action="menu" aria-label="탐색 메뉴 열기" aria-controls="sidebar" aria-expanded="false">${icon('menu')}</button><div class="topbar-title">가족관계 <span>/</span> ${m?m.week+'주차':({library:'주차별 자료',activities:'과제 · 수업 활동',guide:'이용 안내',search:'전체 검색'}[section]||'자료실')}</div><form class="top-search" id="search-form" role="search">${icon('search')}<input id="global-search" type="search" placeholder="내용·개념·주차 검색" aria-label="전체 자료 검색" autocomplete="off" value="${esc(state.search)}"></form><button class="icon-button" data-action="theme" aria-label="${dark?'라이트':'다크'} 모드로 전환">${icon(dark?'sun':'moon')}</button>`;
    $('#footer').innerHTML='<span>가족관계 · 강의자료 기반 학습 보조 자료<br>운영자 게시 / 회원가입·개인정보 입력란 없음 / 퀴즈 기록 전송 없음</span><a href="#/guide">이용·개인정보 안내 ↗</a>';
  }
  function card(m){
    return `<article class="material-card"><div class="document-mark week-mark">${String(m.week).padStart(2,'0')}</div><div><div class="meta"><span class="pill">${m.week}주차</span><span>${m.pageCount}쪽</span><span>·</span><span>퀴즈 ${m.quiz.length}문항</span></div><h3><a href="${route(m)}">${esc(m.title)}</a></h3><p class="english-title" lang="en">${esc(m.titleEn)}</p><p class="card-description">${esc(m.description)}</p><div class="card-links">${tabs.map(([key,label])=>`<a class="text-link" href="${route(m,key)}">${label}${key==='quiz'?` <span class="tiny-count">${m.quiz.length}</span>`:''}</a>`).join('')}</div></div><a class="card-open" href="${route(m)}" aria-label="${m.week}주차 자료 열기">${icon('arrow')}</a></article>`;
  }
  function library(){
    if(!state.materials.length)return '<div class="empty-state"><h1>아직 등록된 자료가 없습니다.</h1></div>';
    const latest=state.materials.at(-1),pages=state.materials.reduce((s,m)=>s+m.pageCount,0),qs=state.materials.reduce((s,m)=>s+m.quiz.length,0);
    return `<section class="page-heading"><div><div class="eyebrow">FAMILY RELATIONS / WEEKLY ARCHIVE</div><h1>가족관계</h1><p>매주 한 편씩. 원문, 한글 해석, 내용 요약, 퀴즈를 한곳에서.</p></div><span class="date-note">${state.materials.length}개 주차 수록</span></section><section class="featured"><div><div class="hero-kicker"><span class="status-dot"></span>가장 최근 자료 <span>·</span> ${latest.week}주차</div><h2>${esc(latest.title)}</h2><div class="subtitle" lang="en">${esc(latest.titleEn)}</div><p class="hero-description">${esc(latest.lead)}</p><div class="hero-actions"><a class="button primary" href="${route(latest)}">원문부터 읽기 ${icon('arrow')}</a><a class="button ghost" href="${route(latest,'quiz')}">퀴즈로 복습하기</a></div></div><div class="hero-aside"><div class="eyebrow">WEEKLY READING</div><div class="material-number">${String(latest.week).padStart(2,'0')}</div>${tabs.map(([k,l],i)=>`<a class="hero-topic" href="${route(latest,k)}">${l}<span>${String(i+1).padStart(2,'0')}</span></a>`).join('')}</div></section><div class="stats"><div class="stat"><strong>${state.materials.length}</strong><span>등록 주차</span></div><div class="stat"><strong>${pages}</strong><span>원문 페이지</span></div><div class="stat"><strong>${qs}</strong><span>복습 퀴즈</span></div><div class="stat"><strong>4</strong><span>주차별 학습 탭</span></div></div><section><div class="section-title"><h2>주차별 학습자료</h2><span class="muted small">1주차부터 차례대로</span></div><div class="material-list">${state.materials.map(card).join('')}</div></section><div class="bottom-grid"><section class="info-panel"><div class="eyebrow">ASSIGNMENTS & DISCUSSION</div><h3>수업 질문과 과제 안내도 함께</h3><p>사례·토론 질문은 원문과 해석, 요구 조건을 나누어 읽습니다. 정식 제출 과제와 수업 활동은 구분합니다.</p><a class="text-link" href="#/activities">과제 · 수업 활동 ${icon('arrow')}</a></section><section class="info-panel"><div class="eyebrow">READ WITHOUT SIGNING IN</div><h3>가입 없이 읽는 자료실</h3><p>자료를 읽고 퀴즈를 풀기 위해 이름이나 이메일을 입력할 필요가 없습니다. 퀴즈는 이 화면에서만 채점됩니다.</p><a class="text-link" href="#/guide">이용 안내 ${icon('arrow')}</a></section></div>`;
  }
  function reader(m,tab,p){
    const page=Math.min(m.pages.length,Math.max(1,p||1));
    return `<div class="breadcrumb"><a href="#/library">주차별 자료</a><span>/</span><span>${m.week}주차</span></div><header class="reader-heading" id="reader-start"><div class="meta"><span class="pill">WEEK ${String(m.week).padStart(2,'0')}</span><span>${m.pageCount}쪽</span><span>·</span><span>복습 퀴즈 ${m.quiz.length}문항</span></div><h1>${esc(m.title)}</h1><p class="english-title" lang="en">${esc(m.titleEn)}</p><div class="reader-tools">${pdfButton(m)}<button class="button small" data-action="download">${icon('download')}한글 해석 저장</button><button class="button small" data-action="print">${icon('print')}화면 인쇄</button></div></header><nav class="tabbar four-tabs" aria-label="${m.week}주차 학습 탭">${tabs.map(([key,label])=>`<a class="tab ${key===tab?'active':''}" href="${route(m,key,(key==='original'||key==='translation')?page:'')}" ${key===tab?'aria-current="page"':''}>${label}${key==='quiz'?`<small>${m.quiz.length}</small>`:''}</a>`).join('')}</nav><div id="reader-content">${tab==='original'?original(m,page):tab==='translation'?translation(m):tab==='summary'?summaryView(m):quizView(m)}</div><nav class="week-pager" aria-label="다른 주차로 이동">${findWeek(m.week-1)?`<a href="${route(findWeek(m.week-1),tab)}">← ${m.week-1}주차</a>`:'<span></span>'}<a href="#/library">주차 목록</a>${findWeek(m.week+1)?`<a href="${route(findWeek(m.week+1),tab)}">${m.week+1}주차 →</a>`:'<span></span>'}</nav>`;
  }
  function original(m,num){
    const p=m.pages[num-1];
    return `<div class="source-toolbar"><div class="source-paging"><button class="button small" data-action="source-page" data-page="${num-1}" ${num===1?'disabled':''} aria-label="이전 원문 페이지">←</button><label class="source-select-label"><span class="skip">원문 페이지</span><select id="source-page" class="jump-select">${m.pages.map(x=>`<option value="${x.n}" ${x.n===num?'selected':''}>p. ${x.n} / ${m.pageCount} · ${esc(x.titleEn||x.title)}</option>`).join('')}</select></label><button class="button small" data-action="source-page" data-page="${num+1}" ${num===m.pageCount?'disabled':''} aria-label="다음 원문 페이지">→</button></div><div class="source-actions"><a class="button small" href="${route(m,'translation',num)}">이 페이지 해석</a><button class="button small" data-action="zoom">슬라이드 크게 보기</button></div></div><figure class="original-slide"><img src="${esc(p.slide)}" alt="${m.week}주차 원문 ${num}쪽: ${esc(p.titleEn||p.title)}" width="1383" height="1037" fetchpriority="high"><figcaption>원문 p. ${num} · ${esc(m.sourceName)}</figcaption></figure><details class="source-notes source-text"><summary>이 페이지의 영어 텍스트 펼치기</summary><p class="muted small">아래는 PDF에서 추출한 텍스트입니다. 표의 읽기 순서와 그림·줄바꿈은 위 원본 슬라이드를 기준으로 확인하세요.</p><pre lang="en">${esc(p.rawEn||'이 페이지에는 추출 가능한 텍스트가 없습니다. 위 원본 이미지를 확인하세요.')}</pre></details><div class="note-box">표와 그림을 포함한 원본 슬라이드를 그대로 표시합니다. 원본 PDF 버튼으로 전체 문서를 열 수도 있습니다.</div>`;
  }
  const ko=i=>`<p class="plain-ko ${i.level?'indented':''}">${esc(i.ko)}</p>`;
  function tableView(t){return `<div class="table-scroll" tabindex="0" aria-label="한국어 번역 표. 좁은 화면에서는 가로로 이동할 수 있습니다."><table class="translation-table"><thead><tr>${t.headers.map(h=>`<th scope="col">${esc(h.ko)}${h.en?`<small lang="en">${esc(h.en)}</small>`:''}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(c=>`<td>${ko(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;}
  function translationPage(m,p){
    return `<article class="page-card" id="page-${p.n}"><header class="page-header"><span class="page-num">${String(p.n).padStart(2,'0')}</span><div class="page-title"><h2>${esc(p.title)}</h2>${p.titleEn?`<p class="english-title" lang="en">${esc(p.titleEn)}</p>`:''}</div><a class="page-source" href="${route(m,'original',p.n)}">원문 대조 ↗</a></header><div class="page-body">${(p.sections||[]).map(s=>`<section class="translation-section">${s.heading?`<h3>${esc(s.heading)}</h3>`:''}${(s.items||[]).map(ko).join('')}</section>`).join('')}${p.table?tableView(p.table):''}${p.figure?`<figure class="figure"><img src="${esc(p.figure.src)}" alt="${esc(p.figure.alt)}" loading="lazy" width="1080" height="810"><figcaption>${esc(p.figure.caption)}</figcaption></figure>`:''}${p.note?`<div class="page-note"><span class="pill">편집 안내</span><p>${esc(p.note)}</p></div>`:''}</div><footer class="page-footer"><span class="muted small">${m.week}주차 · 원문 p. ${p.n}</span><a class="back-top" href="${route(m,'translation',1)}">맨 위로 ↑</a></footer></article>`;
  }
  function sourceNotes(m){return `<details class="source-notes"><summary>번역·요약·퀴즈 작성 기준</summary><p class="small">기준 자료: ${esc(m.sourceName)}</p><ul>${(m.sourceNotes||[]).map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details>`;}
  function translation(m){return `<div class="translation-toolbar"><p class="translation-hint">원문의 페이지 순서를 유지한 한글 해석입니다.</p><div class="toolbar-buttons"><button class="font-button" data-font="small" aria-label="글씨 작게">가−</button><button class="font-button" data-font="normal" aria-label="글씨 기본 크기">가</button><button class="font-button" data-font="large" aria-label="글씨 크게">가＋</button></div><select class="jump-select" id="translation-page" aria-label="한글 해석 페이지 바로가기">${m.pages.map(p=>`<option value="${p.n}" ${p.n===state.page?'selected':''}>p. ${p.n} · ${esc(p.title)}</option>`).join('')}</select></div>${m.pages.map(p=>translationPage(m,p)).join('')}${sourceNotes(m)}`;}
  function summaryView(m){return `<div class="lead-card"><div class="eyebrow">이 주차의 중심 질문</div><h2>${esc(m.lead)}</h2>${refs(m,m.leadPages)}</div><div class="summary-grid">${m.summary.map((s,i)=>`<section class="summary-card"><div class="summary-index">${String(i+1).padStart(2,'0')} / KEY IDEA</div><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>${refs(m,s.pages)}</section>`).join('')}</div><section class="outline"><h3>내용의 흐름</h3>${(m.sectionsIndex||[]).map(s=>`<a class="outline-row" href="${route(m,'translation',s.start)}">${esc(s.label)}<span>p. ${s.start}–${s.end} ↗</span></a>`).join('')}</section><details class="source-notes glossary-expand"><summary>핵심 용어 정리 · ${(m.glossary||[]).length}개</summary><div class="glossary-list">${(m.glossary||[]).map(t=>`<article class="term-card"><h3>${esc(t.ko)}</h3><div class="term-en" lang="en">${esc(t.en)}</div><p>${esc(t.definition)}</p>${refs(m,t.pages)}</article>`).join('')}</div></details>${(m.activities||[]).length?`<section class="activity-shortcut"><div><div class="eyebrow">IN-CLASS QUESTIONS</div><h3>이 주차의 사례·토론 질문</h3><p>질문 해석과 원문이 요구하는 내용을 따로 확인하세요.</p></div><a class="button" href="#/activities/${m.week}">질문 살펴보기 ${icon('arrow')}</a></section>`:''}<div class="summary-quiz-cta"><h3>이해한 내용을 확인해 볼까요?</h3><a class="button primary" href="${route(m,'quiz')}">${m.week}주차 퀴즈 풀기 ${icon('arrow')}</a></div>${sourceNotes(m)}`;}
  const attempt=(m,q)=>state.quiz[m.id]?.[q.id]||{selected:null,checked:false};
  function quizCard(m,q,i){
    const a=attempt(m,q),isRight=a.selected===q.correct;
    return `<div class="quiz-meta"><span class="pill">${esc(q.kind)}</span><span>QUESTION ${String(i+1).padStart(2,'0')}</span></div><fieldset><legend>${esc(q.question)}</legend><div class="quiz-options">${q.options.map((o,n)=>{const chosen=a.selected===n;const cls=a.checked?(n===q.correct?'correct':chosen?'incorrect':''):chosen?'selected':'';return `<label class="quiz-option ${cls}"><input type="radio" name="${esc(q.id)}" value="${n}" data-question="${esc(q.id)}" ${chosen?'checked':''}><span class="option-num">${q.kind==='OX'?(n===0?'O':'X'):String(n+1)}</span><span class="option-text">${esc(q.kind==='OX'?o.replace(/^[OX]\s*[—-]\s*/, ''):o)}</span>${a.checked&&(n===q.correct||chosen)?`<span class="answer-tag">${n===q.correct?'정답':'내 선택'}</span>`:''}</label>`;}).join('')}</div></fieldset><div class="quiz-card-bottom"><button class="button small" data-action="quiz-check" data-question="${esc(q.id)}">${a.checked?'답 다시 확인':'정답 확인'}</button><span class="muted small">${a.checked?'아래 해설과 근거 페이지를 확인하세요.':'보기를 선택한 뒤 정답을 확인하세요.'}</span></div>${a.checked?`<div class="quiz-feedback ${isRight?'is-correct':'is-incorrect'}" role="status"><strong>${isRight?'정답입니다.':'정답을 다시 확인해 보세요.'}</strong><p class="correct-answer">정답: ${q.kind==='OX'?(q.correct===0?'O':'X'):(q.correct+1)+'번'} · ${esc(q.options[q.correct])}</p><p>${esc(q.explanation)}</p>${refs(m,q.pages)}</div>`:''}`;
  }
  function quizStats(m){const done=m.quiz.filter(q=>attempt(m,q).checked),right=done.filter(q=>attempt(m,q).selected===q.correct);return `<strong>${right.length}</strong><span>정답 / 확인한 ${done.length}문항</span><span class="quiz-total">전체 ${m.quiz.length}문항</span>`;}
  function quizView(m){return `<section class="quiz-intro"><div><div class="eyebrow">CHECK YOUR UNDERSTANDING</div><h2>${m.week}주차 복습 퀴즈</h2><p>핵심 개념과 사례 적용을 확인하는 ${m.quiz.length}문항입니다.<br>답을 고르면 정답·해설·근거 페이지를 확인할 수 있습니다.</p></div><div class="quiz-score" id="quiz-score" aria-live="polite">${quizStats(m)}</div></section><div class="quiz-controls"><div><button class="button small" data-action="quiz-check-all">선택한 답 한 번에 확인</button><button class="button small" data-action="quiz-reset">다시 풀기</button></div><p>답과 점수는 서버로 전송되지 않으며, 새로고침하면 초기화됩니다.</p></div><div class="quiz-list">${m.quiz.map((q,i)=>`<article class="quiz-card" id="quiz-${esc(q.id)}">${quizCard(m,q,i)}</article>`).join('')}</div><div class="note-box">이 퀴즈는 강의자료를 바탕으로 만든 학습 보조 문항입니다. 교수자의 공식 시험이나 평가 문항이 아닙니다.</div>`;}
  function activityCard(m,a){return `<article class="activity-card"><div class="meta"><span class="pill">${m.week}주차 · ${a.kind==='assignment'?'과제 안내':'수업 활동'}</span><a class="source-ref" href="${route(m,'original',a.page)}">원문 p. ${a.page}</a></div><h2>${esc(a.title)}</h2><p class="activity-description">${esc(a.interpretation)}</p><div class="activity-questions">${a.questions.map((q,i)=>`<div class="question"><span class="question-number">${i+1}</span><div><p class="q-ko">${esc(q.ko)}</p><p class="q-en" lang="en">${esc(q.en)}</p></div></div>`).join('')}</div><div class="requirements">${(a.requirements||[]).map(r=>`<div class="requirement"><span class="label">${esc(r.label)}</span><span>${esc(r.value)}</span></div>`).join('')}</div>${a.guide?.length?`<div class="helper-title">학습 보조 · 공식 정답 아님</div><p class="helper-note">${esc(a.guideNote)}</p>${a.guide.map(g=>`<section class="helper-step"><h3>${esc(g.title)}</h3><p>${esc(g.text)}</p></section>`).join('')}`:''}</article>`;}
  function activities(week='all'){
    const list=state.materials.filter(m=>week==='all'||String(m.week)===String(week));
    return `<section class="page-heading"><div><div class="eyebrow">ASSIGNMENTS & DISCUSSION</div><h1>과제 · 수업 활동</h1><p>질문 원문, 한글 해석, 요구 조건을 구분해 읽습니다.</p></div></section><div class="chips activity-chips"><a class="chip ${week==='all'?'active':''}" href="#/activities">전체</a>${state.materials.map(m=>`<a class="chip ${String(week)===String(m.week)?'active':''}" href="#/activities/${m.week}">${m.week}주차</a>`).join('')}</div><div class="note-box">현재 등록된 자료의 질문은 사례·토론 활동입니다. 별도의 제출 과제로 단정하지 않았으며, 기한·분량·방식이 없으면 ‘원문에 명시되지 않음’으로 표시합니다.</div>${list.flatMap(m=>(m.activities||[]).map(a=>activityCard(m,a))).join('')||'<div class="empty-state">이 주차에 등록된 활동이 없습니다.</div>'}`;
  }
  function guide(){return `<section class="page-heading"><div><div class="eyebrow">HOW THIS ARCHIVE WORKS</div><h1>이용 안내</h1><p>주차별로 읽고, 이해하고, 확인하는 가족관계 자료실.</p></div></section><section class="guide-block"><h2>01. 네 개의 학습 탭</h2><p><strong>원문 내용</strong>에서는 PDF의 원본 슬라이드를 페이지별로 봅니다. <strong>한글 해석</strong>은 원문의 페이지 순서를 따릅니다. <strong>내용 요약</strong>은 핵심 주장·개념·용어를 모으고 근거 페이지를 연결합니다. <strong>퀴즈</strong>에서는 개념과 사례를 복습하고 정답·해설을 확인합니다.</p></section><section class="guide-block"><h2>02. 자료의 근거와 학습 보조 구분</h2><p>번역은 제공된 원문에 근거합니다. 요약·용어 풀이·퀴즈는 사이트에서 작성한 학습 보조이며 교수자의 공식 해설이나 시험 문항이 아닙니다. 원문이 제공하지 않은 사례 장면·정답·제출 조건은 추측하지 않습니다. 상담 이론의 수업 자료이며 특정 개인에 대한 진단을 제공하지 않습니다.</p></section><section class="guide-block"><h2>03. 과제·수업 활동</h2><p>질문 원문과 해석, 제출 조건, 추가 학습 설명을 나눕니다. 현재 자료의 사례·토론 질문을 정식 제출 과제로 바꾸지 않습니다. 제출 기한, 방식, 분량이 제시되지 않았다면 그 사실을 표시합니다. 이 자료실에서는 개인 답안이나 과제를 제출하지 않습니다.</p></section><section class="guide-block"><h2>04. 방문자 로그인·개인정보 입력 없음</h2><p>회원가입, 이름·이메일·학번 입력, 댓글, 개인 메모, 방문자 업로드 기능이 없습니다. 외부 분석 도구·광고·외부 글꼴을 사용하지 않습니다. 검색과 퀴즈 채점은 이 브라우저에서 실행되며 입력값을 서버로 전송하지 않습니다. 퀴즈 답, 점수, 화면 설정을 쿠키·localStorage·sessionStorage 등에 따로 저장하지 않으며 새로고침하면 초기화됩니다.</p><p>브라우저 자체의 방문 기록·캐시와 호스팅 제공자의 접속 기록은 별개입니다. GitHub Pages에 게시하면 GitHub가 보안 목적으로 방문자의 IP 주소를 기록할 수 있습니다. 이 사이트의 개인정보 입력 기능이 없다는 것과 인터넷 이용 기록이 전혀 없다는 것은 다릅니다.</p><p><a class="text-link" href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" target="_blank" rel="noopener noreferrer">GitHub Pages의 데이터 수집 안내 ↗</a></p></section><section class="guide-block"><h2>05. 운영자만 게시하는 자료실</h2><p>방문자에게 게시·수정·삭제 기능은 제공하지 않습니다. 게시 작업은 운영자의 GitHub 저장소에서 진행하며 실제 쓰기 권한은 GitHub 계정과 저장소 설정으로 제한합니다. 운영자는 다른 사람에게 쓰기 권한을 부여하지 않아야 합니다. 사이트 코드만으로 저장소 권한이 자동 설정되지는 않습니다.</p><p>게시된 자료는 공개 열람 대상이므로 방문자가 내용을 보관하거나 복사할 수 있습니다. 공개해도 되는 강의자료·번역문만 올리고, 개인정보나 비공개 답안은 자료에 넣지 마세요.</p></section>`;}
  function searchView(q){
    const query=q.trim().toLocaleLowerCase('ko'),hits=[];
    if(query)state.materials.forEach(m=>{
      if(`${m.week}주차 ${m.title} ${m.titleEn}`.toLocaleLowerCase('ko').includes(query))hits.push({m,title:m.title,text:m.description,link:route(m),label:'주차 자료'});
      m.pages.forEach(p=>{const text=[p.title,p.titleEn,p.rawEn,...(p.sections||[]).flatMap(s=>[s.heading,...(s.items||[]).map(i=>i.ko)]),...(p.table?.rows||[]).flatMap(r=>r.map(c=>c.ko))].filter(Boolean).join(' ');if(text.toLocaleLowerCase('ko').includes(query)){const at=text.toLocaleLowerCase('ko').indexOf(query);hits.push({m,title:p.title,text:(at>70?'…':'')+text.slice(Math.max(0,at-70),at+180)+(at+180<text.length?'…':''),link:route(m,'translation',p.n),label:`원문 p. ${p.n}`});}});
      m.summary.forEach(s=>{if(`${s.title} ${s.body}`.toLocaleLowerCase('ko').includes(query))hits.push({m,title:s.title,text:s.body,link:route(m,'summary'),label:'내용 요약'});});
    });
    return `<section class="page-heading"><div><div class="eyebrow">SEARCH THE ARCHIVE</div><h1>${query?'“'+esc(q)+'” 검색 결과':'전체 자료 검색'}</h1><p>${hits.length}개의 관련 내용 · 퀴즈 정답은 검색 결과에 표시하지 않습니다.</p></div></section>${hits.map(h=>`<a class="search-result" href="${h.link}"><div class="meta"><span class="pill">${h.m.week}주차</span><span>${h.label}</span></div><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></a>`).join('')||'<div class="empty-state"><h3>일치하는 자료가 없습니다.</h3><p>다른 한국어·영어 표현으로 검색해 보세요.</p></div>'}`;
  }
  function render(){
    closeMenu();
    const parts=(location.hash.replace(/^#\/?/,'')||'library').split('/');
    let section=parts[0],html='',scrollPage=null;
    state.current=null;state.tab='original';state.page=1;
    // Previous v1 links remain usable after upgrading the site.
    if(section==='read'){
      const old=state.materials.find(m=>m.id===decodeURIComponent(parts[1]||''));
      if(old){location.replace(route(old,({glossary:'summary',activities:'summary'}[parts[2]]||parts[2]||'summary'),parts[3]||''));return;}
    }
    if(section==='week'){
      const m=findWeek(parts[1]);
      if(m){state.current=m;state.tab=tabs.some(([k])=>k===parts[2])?parts[2]:'original';state.page=Math.max(1,Math.min(m.pageCount,Number(parts[3])||1));html=reader(m,state.tab,state.page);if(state.tab==='translation'&&Number(parts[3])>1)scrollPage=state.page;}
      else html='<div class="empty-state"><h1>등록되지 않은 주차입니다.</h1><p><a href="#/library">주차별 자료로 돌아가기</a></p></div>';
    }else if(section==='activities')html=activities(parts[1]||'all');
    else if(section==='guide')html=guide();
    else if(section==='search'){try{state.search=decodeURIComponent(parts.slice(1).join('/'));}catch(_){state.search='';}html=searchView(state.search);}
    else{section='library';html=library();}
    shell(section==='week'?'library':section);$('#main').innerHTML=html;
    document.title=state.current?`${state.current.week}주차 · ${tabs.find(([k])=>k===state.tab)?.[1]} | 가족관계`:'가족관계 | 주차별 학습 자료실';
    window.scrollTo({top:0,behavior:'instant'});
    if(scrollPage)requestAnimationFrame(()=>$('#page-'+scrollPage)?.scrollIntoView({block:'start',behavior:'instant'}));
  }
  function storeAnswer(m,q,selected,checked=false){if(!state.quiz[m.id])state.quiz[m.id]={};state.quiz[m.id][q.id]={selected,checked};}
  function refreshQuestion(m,q,focusAction=false){const el=$('#quiz-'+q.id);if(el)el.innerHTML=quizCard(m,q,m.quiz.indexOf(q));if(focusAction)$('[data-action="quiz-check"]',el)?.focus({preventScroll:true});$('#quiz-score').innerHTML=quizStats(m);}
  function download(m){
    const lines=[`가족관계 ${m.week}주차`,m.title,m.titleEn,`원문: ${m.sourceName}`,'','[내용 요약]'];
    m.summary.forEach((s,i)=>lines.push(`${i+1}. ${s.title} (p. ${s.pages.join(', ')})`,s.body,''));
    lines.push('','[한글 해석]');
    m.pages.forEach(p=>{lines.push('',`━━ p. ${p.n} / ${m.pageCount} ━━`,p.title,p.titleEn||'');(p.sections||[]).forEach(s=>{if(s.heading)lines.push(s.heading);(s.items||[]).forEach(i=>lines.push('• '+i.ko));});if(p.table){lines.push('표: '+p.table.headers.map(h=>h.ko).join(' | '));p.table.rows.forEach(r=>r.forEach((c,i)=>lines.push(`[${p.table.headers[i].ko}] ${c.ko}`)));}if(p.figure)lines.push('[이미지] '+p.figure.caption);if(p.note)lines.push('[편집 안내] '+p.note);});
    lines.push('','[작성 기준]',...m.sourceNotes);
    const url=URL.createObjectURL(new Blob(['\uFEFF'+lines.join('\r\n')],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`가족관계_${m.week}주차_한글해석_내용요약.txt`;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  function events(){
    document.addEventListener('click',e=>{
      const f=e.target.closest('[data-font]');if(f){document.body.classList.toggle('large-reading',f.dataset.font==='large');document.body.classList.toggle('small-reading',f.dataset.font==='small');return;}
      const button=e.target.closest('[data-action]');if(!button)return;
      const a=button.dataset.action,m=state.current;
      if(a==='menu'){const opened=$('#sidebar').classList.toggle('open');$('#scrim').classList.toggle('active',opened);button.setAttribute('aria-expanded',String(opened));}
      else if(a==='close-menu')closeMenu();
      else if(a==='theme'){const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';button.innerHTML=icon(dark?'sun':'moon');button.setAttribute('aria-label',`${dark?'라이트':'다크'} 모드로 전환`);}
      else if(a==='print')window.print();
      else if(a==='download'&&m)download(m);
      else if(a==='source-page'&&m){const n=Number(button.dataset.page);if(n>=1&&n<=m.pageCount)location.hash=route(m,'original',n);}
      else if(a==='zoom'&&m){const p=m.pages[state.page-1];$('#zoom-image').src=p.slide;$('#zoom-image').alt=`${m.week}주차 원문 ${p.n}쪽`;$('#zoom-title').textContent=`${m.week}주차 · 원문 p. ${p.n}`;$('#image-dialog').showModal();}
      else if(a==='close-zoom')$('#image-dialog').close();
      else if(a==='quiz-check'&&m){const q=m.quiz.find(q=>q.id===button.dataset.question);if(!q)return;const at=attempt(m,q);if(at.selected===null){toast('먼저 답을 선택해 주세요.');return;}storeAnswer(m,q,at.selected,true);refreshQuestion(m,q,true);}
      else if(a==='quiz-check-all'&&m){let count=0;m.quiz.forEach(q=>{const at=attempt(m,q);if(at.selected!==null){storeAnswer(m,q,at.selected,true);refreshQuestion(m,q);count++;}});toast(count?`선택한 ${count}문항을 확인했습니다. 미응답 ${m.quiz.length-count}문항.`:'먼저 답을 선택해 주세요.');}
      else if(a==='quiz-reset'&&m){if(Object.keys(state.quiz[m.id]||{}).length&&!confirm('이번 주 퀴즈의 선택과 점수를 초기화할까요?'))return;delete state.quiz[m.id];$('#reader-content').innerHTML=quizView(m);toast('다시 풀 수 있도록 초기화했습니다.');}
    });
    document.addEventListener('change',e=>{
      const el=e.target,m=state.current;
      if(el.id==='source-page'&&m)location.hash=route(m,'original',el.value);
      if(el.id==='translation-page'&&m){const href=route(m,'translation',el.value);if(location.hash===href)$('#page-'+el.value)?.scrollIntoView();else location.hash=href;}
      if(el.matches('input[data-question]')&&m){const q=m.quiz.find(q=>q.id===el.dataset.question);if(!q)return;const selected=Number(el.value);storeAnswer(m,q,selected,false);refreshQuestion(m,q);$(`input[value="${selected}"]`,$('#quiz-'+q.id))?.focus({preventScroll:true});}
    });
    document.addEventListener('submit',e=>{if(e.target.id==='search-form'){e.preventDefault();state.search=$('#global-search').value.trim();const h='#/search/'+encodeURIComponent(state.search);if(location.hash===h)render();else location.hash=h;}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
    window.addEventListener('hashchange',render);
  }
  function load(src){
    if(!/^data\/materials\/[a-zA-Z0-9_-]+\.js$/.test(src))throw new Error('허용되지 않은 자료 경로입니다.');
    return new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>no(new Error('자료 파일을 불러올 수 없습니다: '+src));document.head.append(s);});
  }
  function validate(ms){
    const weeks=new Set(),ids=new Set();
    ms.forEach(m=>{if(!Number.isInteger(m.week)||m.week<1||weeks.has(m.week)||ids.has(m.id))throw new Error('주차·자료 ID가 잘못되었거나 중복되었습니다.');weeks.add(m.week);ids.add(m.id);
      if(!Array.isArray(m.pages)||m.pages.length!==m.pageCount||m.pages.some((p,i)=>p.n!==i+1||!p.slide))throw new Error(`${m.week}주차 페이지 누락·중복을 확인하세요.`);
      if(!Array.isArray(m.quiz)||!Array.isArray(m.summary))throw new Error(`${m.week}주차 요약·퀴즈를 확인하세요.`);
      const qids=new Set();m.quiz.forEach(q=>{if(qids.has(q.id)||!q.options?.length||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length||!q.explanation||!q.pages?.length||q.pages.some(p=>p<1||p>m.pageCount))throw new Error(`${m.week}주차 퀴즈 형식을 확인하세요.`);qids.add(q.id);});
    });
  }
  async function init(){
    try{if(!window.STUDY_PRELOADED)await Promise.all(cfg.files.map(load));state.materials=Object.values(window.STUDY_MATERIALS||{}).sort((a,b)=>a.week-b.week);validate(state.materials);events();render();}
    catch(err){$('#main').innerHTML=`<section class="error-panel"><h1>자료를 불러오지 못했습니다.</h1><p>ZIP을 모두 풀고 index.html을 열어 주세요. data/catalog.js의 경로와 실제 자료 파일도 확인해 주세요.</p><p><code>${esc(err.message)}</code></p></section>`;console.error(err);}
  }
  init();
})();
