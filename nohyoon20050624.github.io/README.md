# 가족관계 — 주차별 학습 자료실

운영자만 게시하고 방문자는 가입 없이 읽는 정적 사이트입니다.
각 주차는 **원문 내용 / 한글 해석 / 내용 요약 / 퀴즈**의 네 탭으로 구성됩니다.

## 수록 자료

| 주차 | 강의자료 | 원문 페이지 | 퀴즈 |
| --- | --- | ---: | ---: |
| 1주차 | 체계로서의 가족 · Family as a System | 23 | 12 |
| 2주차 | 가족관계의 세대 간 관점 · Intergenerational Perspectives into Family Relationships and Processes | 23 | 12 |
| 3주차 | 가족 내 거리 조절 · Distance Regulation in Families | 26 | 12 |

총 72쪽 원본 슬라이드와 페이지별 한국어 해석, 36문항의 복습 퀴즈를 담았습니다.
원문 PDF와 페이지 이미지가 포함됩니다. 퀴즈와 요약은 원문을 바탕으로 작성한 학습 보조이며 교수자의 공식 시험·정답이 아닙니다.
원문에 있는 사례·토론 질문은 별도의 ‘과제 · 수업 활동’ 화면에도 모았습니다. 정식 제출 과제로 단정하지 않았습니다.

## 먼저 열어 보기

ZIP의 압축을 **모두 푼 뒤** `index.html`을 Chrome 또는 Edge로 열어 보세요.
브라우저의 로컬 파일 보안 설정 때문에 로드가 제한되면 별도로 제공한 단일 HTML 미리보기를 사용하거나,
Python이 설치된 환경에서 이 폴더를 기준으로 `python -m http.server 8000`을 실행한 뒤 `http://localhost:8000`에 접속하세요.
공개할 때는 단일 HTML 미리보기가 아니라 이 폴더형 사이트를 사용하세요.

## 요청한 주소로 GitHub Pages 게시하기

**희망 주소: `https://nohyoon20050624.github.io/`**

이 주소는 GitHub 계정의 사용자 이름이 `nohyoon20050624`이고,
그 계정이 소유한 저장소 이름이 `nohyoon20050624.github.io`일 때 사용할 수 있는 사용자 사이트 주소입니다.
이 ZIP은 파일을 준비한 결과이며, 계정 생성·이름 확보·저장소 생성·실제 게시까지 완료했다는 뜻이 아닙니다.
계정 이름이 다르면 기본 주소도 달라집니다. `nohyoon20050624`는 공개 주소에 나타납니다.

1. 본인의 GitHub 계정과 사용자 이름을 확인합니다. 이미 같은 이름의 저장소가 있다면 기존 사이트를 먼저 확인·백업하고 덮어쓸지 결정합니다.
2. 해당 계정에서 `nohyoon20050624.github.io`라는 저장소를 만듭니다. GitHub Free에서는 공개 저장소로 Pages를 시작할 수 있습니다.
3. 이 폴더의 **내용물 전체**를 저장소 최상위에 올립니다. `index.html`이 최상위에 있어야 합니다. ZIP 파일 자체를 올리는 방식이 아닙니다.
4. `Settings → Pages → Build and deployment → Source: Deploy from a branch`를 선택합니다.
5. `Branch: main`, `Folder: /(root)`를 선택하고 저장합니다.
6. 게시가 끝난 뒤 Pages 설정에 표시된 실제 주소로 접속하여 1~3주차의 네 탭을 확인합니다.

하위 경로에 배포해도 동작하도록 자산 경로를 상대 경로로 작성했습니다.
`github.io` 주소 자체를 지정하려고 CNAME 파일을 만들 필요는 없습니다.

## 운영자만 게시하기

- 사이트에는 방문자의 게시·수정·삭제·업로드 기능이 없습니다. 숨겨진 관리자 비밀번호나 클라이언트 관리자 화면도 없습니다.
- 실제 쓰기 권한은 GitHub 계정과 저장소 권한으로 제한합니다. 개인 소유 저장소에 다른 사람을 쓰기 권한이 있는 collaborator로 추가하지 마세요.
- 외부 앱·배포 키에 쓰기 권한을 주면 해당 앱·키도 수정할 수 있으므로 접근 권한을 함께 관리하세요.
- 사이트 코드가 원격 저장소의 권한을 자동 설정하는 것은 아닙니다.
- 공개 열람 자료는 방문자가 복사하거나 다운로드할 수 있습니다. ‘게시 권한이 없다’는 것과 ‘복사할 수 없다’는 것은 다릅니다.

## 개인정보·기록

사이트 코드에는 다음이 **없습니다**.

- 방문자 회원가입·로그인, 이름·이메일·학번 입력
- 댓글, 개인 메모, 과제 제출, 방문자 파일 업로드
- 광고, 외부 방문자 분석 도구, 외부 폰트/CDN 의존성
- AI API 호출, API 키, 서버 전송 기능
- 퀴즈 답·점수·읽음 기록을 쿠키/localStorage/sessionStorage에 저장하는 기능

검색과 퀴즈 채점은 브라우저에서 실행합니다. 퀴즈 답·점수·화면 설정은 현재 페이지가 실행되는 동안 메모리에만 존재하며, 새로고침하면 초기화됩니다. 다른 탭으로 이동했다 돌아오는 것은 가능합니다.
브라우저 자체의 방문 기록·캐시와 호스팅 제공자의 로그는 별개입니다. GitHub Pages는 보안을 위해 방문자의 IP 주소를 기록·보관한다고 안내합니다. ‘이 사이트에 개인정보 입력란이 없다’를 ‘어떤 서비스에도 아무 접속 기록이 남지 않는다’로 표현하지 마세요.

운영자의 실명·이메일은 화면에 따로 표시하지 않습니다. 다만 GitHub 사용자 이름과 공개 커밋 정보는 공개될 수 있습니다.
이메일 공개를 줄이려면 계정 `Settings → Emails → Keep my email addresses private`를 확인하세요.
로컬 Git으로 게시할 경우 GitHub에서 제공한 실제 noreply 주소를 사용하도록 커밋 이메일도 확인하세요. 이미 공개한 과거 커밋이 이 설정으로 자동 변경되지는 않습니다.

원문·번역문을 공개할 권한은 별도로 확인하세요. 이 사이트는 원본 PDF의 개인정보를 자동 삭제하는 도구가 아닙니다.

## 매주 자료 추가하기

다음 네 가지를 함께 준비합니다.

1. 새 강의 PDF와 정확한 주차
2. 과제 안내문이 있다면 그 원문
3. 최신 사이트 ZIP
4. 함께 제공한 `주간_업데이트_요청문.txt`

현재 디자인과 기존 주차를 유지하면서 새 주차 데이터 파일, 원문 PDF, 슬라이드 이미지를 추가합니다.
그 뒤 `data/catalog.js`의 files 배열에 새 데이터 파일 경로를 추가하면 됩니다.

- 각 주차에는 서로 다른 `week` 값과 `id`를 사용합니다.
- 같은 주차의 과제 해석은 해당 자료의 `activities`에 연결합니다. 같은 주차를 별도 자료로 중복 등록하지 않습니다.
- 원문 페이지와 해석 페이지의 개수·순서를 맞춥니다.
- 퀴즈에는 선택지, 정답 번호, 해설, 원문 근거 페이지가 모두 필요합니다. `correct`는 0부터 시작하는 인덱스입니다.
- 주차마다 꼭 12문항이어야 하는 것은 아닙니다. 문항 수는 실제 데이터에서 계산합니다.
- 개인정보 입력·전송·분석·영구 저장 기능을 추가하지 않습니다.
- 과제 제출 조건이 원문에 없으면 ‘원문에 명시되지 않음’으로 표시합니다.

자료를 추가하거나 수정한 뒤 기존 저장소의 같은 경로를 업데이트합니다. 매번 새 저장소나 새 주소를 만들 필요는 없습니다.

## 파일 구성

```text
index.html                         사이트 첫 화면
assets/app.js                      네 탭·원문 뷰어·검색·퀴즈
assets/style.css                   반응형 디자인·인쇄 스타일
assets/source/                     원본 PDF 3편
assets/slides/week-01/              1주차 원본 슬라이드 23쪽
assets/slides/week-02/              2주차 원본 슬라이드 23쪽
assets/slides/week-03/              3주차 원본 슬라이드 26쪽
assets/figures/                    번역 내 보조 이미지
data/catalog.js                    자료 목록·사이트명
data/materials/01-family-systems.js
data/materials/02-intergenerational-model.js
data/materials/03-distance-regulation.js
templates/week.example.js        새 주차 데이터 양식 (라이브 목록에 미등록)
주간_업데이트_요청문.txt            다음 주 업데이트 요청 양식
.nojekyll                          별도 Jekyll 처리 없이 정적 게시
README.md                          이 안내문
```

## 확인한 GitHub 공식 문서 (2026-09-15)

- 사용자 사이트 주소와 저장소 이름: https://docs.github.com/en/pages/quickstart
- Pages의 정적 게시 방식·방문자 IP 기록: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- 개인 저장소의 소유자·협업자 권한: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration
- 커밋 이메일 비공개 설정: https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address
