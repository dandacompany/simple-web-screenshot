# 웹 스크린샷 및 HTML 소스 캡처 도구

Playwright를 사용하여 웹 페이지의 전체 스크린샷 또는 HTML 소스를 캡처하는 간단한 도구입니다.

## 기능

- 지정된 웹사이트 방문
- 3초 대기 후 스크린샷 또는 HTML 소스 캡처
- 브라우저 화면 표시 (비 헤드리스 모드)
- 전체 페이지 캡처 또는 HTML 소스 저장
- 명령줄 인자로 URL과 저장 경로 지정 가능

## 설치 방법

### GitHub에서 클론하기

```
git clone https://github.com/dandacompany/simple-web-screenshot.git
cd simple-web-screenshot
```

### 의존성 설치

```
npm install
```

### Playwright 브라우저 설치

```
npx playwright install chromium
```

## 스크린샷 캡처 기능

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

## HTML 소스 저장 기능

### 직접 실행

기본 사용법:

```
node getPageSource.js --url https://www.example.com
```

모든 옵션 사용:

```
node getPageSource.js --url https://www.example.com --output ./sources/example.html
```

축약형 옵션 사용:

```
node getPageSource.js -u https://www.example.com -o ./sources/example.html
```

도움말 보기:

```
node getPageSource.js --help
```

### npm 스크립트 사용

HTML 소스 기본 실행:

```
npm run source
```

Google HTML 소스 저장:

```
npm run source:google
```

Naver HTML 소스 저장:

```
npm run source:naver
```

도움말 보기:

```
npm run source:help
```

## 명령줄 옵션

### 스크린샷 캡처 (screenshot.js)

| 옵션 | 축약형 | 설명 | 필수 여부 | 기본값 |
|------|--------|------|-----------|--------|
| --url | -u | 스크린샷을 찍을 웹사이트 URL | 필수 | - |
| --output | -o | 스크린샷 저장 경로 | 선택 | ./screenshot.png |
| --help | -h | 도움말 출력 | 선택 | - |

### HTML 소스 저장 (getPageSource.js)

| 옵션 | 축약형 | 설명 | 필수 여부 | 기본값 |
|------|--------|------|-----------|--------|
| --url | -u | HTML 소스를 저장할 웹사이트 URL | 필수 | - |
| --output | -o | HTML 소스 저장 경로 | 선택 | ./source.html |
| --help | -h | 도움말 출력 | 선택 | - |

## 예시

구글 홈페이지 스크린샷 저장하기:

```
node screenshot.js --url https://www.google.com --output google.png
```

구글 홈페이지 HTML 소스 저장하기:

```
node getPageSource.js --url https://www.google.com --output google.html
```

스크린샷은 지정한 경로에 저장됩니다. 기본 경로는 프로젝트 루트 디렉토리의 `screenshot.png` 파일입니다.
HTML 소스는 지정한 경로에 저장됩니다. 기본 경로는 프로젝트 루트 디렉토리의 `source.html` 파일입니다.

## 설정 변경

스크립트 파일을 편집하여 다음을 변경할 수 있습니다:

- 방문할 URL
- 대기 시간
- 저장 파일 이름 및 형식

## 기여하기

1. 이 레포지토리를 포크합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 라이선스

ISC 라이선스 하에 배포됩니다.
