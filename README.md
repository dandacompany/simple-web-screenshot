# 간단한 웹 스크린샷

Playwright를 사용하여 웹 페이지의 전체 스크린샷을 캡처하는 간단한 도구입니다.

## 기능

- 지정된 웹사이트 방문
- 3초 대기 후 스크린샷 촬영
- 브라우저 화면 표시 (비 헤드리스 모드)
- 전체 페이지 캡처
- 명령줄 인자로 URL과 저장 경로 지정 가능

## 설치 방법

1. 의존성 설치:

```
npm install
```

2. Playwright 브라우저 설치:

```
npx playwright install chromium
```

## 사용 방법

### 직접 실행

기본 사용법:

```
node screenshot.js --url https://www.example.com
```

모든 옵션 사용:

```
node screenshot.js --url https://www.example.com --output ./screenshots/example.png
```

축약형 옵션 사용:

```
node screenshot.js -u https://www.example.com -o ./screenshots/example.png
```

도움말 보기:

```
node screenshot.js --help
```

### npm 스크립트 사용

Google 스크린샷 (기본 테스트):

```
npm test
```

또는:

```
npm run google
```

Naver 스크린샷:

```
npm run naver
```

도움말 보기:

```
npm run help
```

## 명령줄 옵션

| 옵션 | 축약형 | 설명 | 필수 여부 | 기본값 |
|------|--------|------|-----------|--------|
| --url | -u | 스크린샷을 찍을 웹사이트 URL | 필수 | - |
| --output | -o | 스크린샷 저장 경로 | 선택 | ./screenshot.png |
| --help | -h | 도움말 출력 | 선택 | - |

## 예시

구글 홈페이지 스크린샷 저장하기:

```
node screenshot.js --url https://www.google.com --output google.png
```

스크린샷은 지정한 경로에 저장됩니다. 기본 경로는 프로젝트 루트 디렉토리의 `screenshot.png` 파일입니다.

## 설정 변경

`screenshot.js` 파일을 편집하여 다음을 변경할 수 있습니다:

- 방문할 URL
- 대기 시간
- 스크린샷 파일 이름 및 형식
