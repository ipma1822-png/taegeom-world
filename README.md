# TAEGEOM WORLD v1

세계태권검도연맹(WTKF) 공식 디지털 플랫폼의 첫 번째 정적 웹사이트 버전입니다.

## 업로드 방법
1. 이 ZIP 파일의 압축을 풉니다.
2. 압축을 푼 폴더 안의 모든 파일과 폴더를 GitHub 저장소 `taegeom-world`에 업로드합니다.
3. GitHub 저장소의 Settings → Pages로 이동합니다.
4. Build and deployment에서 `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`를 선택하고 Save를 누릅니다.

## 주요 폴더
- `index.html` : 메인 화면
- `pages/` : 각 메뉴 페이지
- `css/` : 디자인, 반응형, 애니메이션
- `js/` : 메뉴, 카운터, 랭킹, 공식조회 기능
- `data/` : 미션·랭킹·태검100 데모 데이터
- `assets/` : 로고, 캐릭터, 배경, 카드 이미지 저장 위치

## 이미지 교체
실제 WTKF 엠블럼과 ARI·ZEN 이미지는 `assets/` 폴더에 넣은 뒤 HTML에서 경로를 연결하면 됩니다.

## 데모 공식조회 번호
- WTKF-2026-0001
- TG-ARI-0100
- TG-ZEN-0007

## 다음 개발 단계
- 실제 WTKF 엠블럼과 태검 글자 적용
- ARI·ZEN 캐릭터 이미지 적용
- 태검100 전체 데이터와 상세 페이지
- 회원·지도자 로그인 및 데이터베이스 연결
- 실제 QR 생성 및 공식 인증 DB 연결
