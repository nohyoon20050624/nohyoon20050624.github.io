/* 작성 예시. 빈 항목을 실제 원문에 근거해 채운 뒤 data/materials/에 저장합니다.
   실제 페이지 수와 주차에 맞게 수정하고, catalog.js에 등록합니다.
   원문 슬라이드 이미지·PDF는 assets 아래에 함께 추가해야 합니다. */
window.STUDY_MATERIALS = window.STUDY_MATERIALS || {};
window.STUDY_MATERIALS['week-04-topic'] = {
  id: 'week-04-topic', type: 'lecture', code: '04', week: 4,
  title: '새 주차 제목', titleEn: 'Original lecture title',
  description: '이 주차 자료의 소개', lead: '이 주차의 중심 질문', leadPages: [1],
  sourceName: '04-topic.pdf', sourcePath: 'assets/source/week-04-topic.pdf',
  pageCount: 1,
  sectionsIndex: [{label:'내용의 흐름',start:1,end:1}],
  pages: [{n:1,title:'페이지 제목',titleEn:'Original page title',
    slide:'assets/slides/week-04/p01.webp',rawEn:'PDF에서 확인한 영어 원문',
    sections:[{items:[{ko:'원문에 근거한 한글 해석'}]}]}],
  summary: [{title:'요약 제목',body:'근거에 충실한 내용 요약',pages:[1]}],
  glossary: [],
  quiz: [{id:'w4-q01',kind:'객관식',question:'원문에 근거한 질문',
    options:['선택지 1','선택지 2','선택지 3','선택지 4'],correct:0,
    explanation:'왜 이 답이 맞는지, 다른 선택지는 왜 적절하지 않은지 설명',pages:[1]}],
  activities: [],
  sourceNotes:['원문과 편집 설명을 구분합니다.']
};
