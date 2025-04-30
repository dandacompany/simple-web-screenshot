const { chromium } = require('playwright');
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs');

// 사용법 출력 함수
function printUsage() {
    console.log(`
사용법: node getPageSource.js [옵션]

옵션:
  --url, -u       HTML 소스를 저장할 웹사이트 URL (필수)
  --output, -o    HTML 소스 저장 경로 (기본값: ./source.html)
  --help, -h      도움말 출력

예시:
  node getPageSource.js --url https://www.google.com
  node getPageSource.js --url https://www.naver.com --output naver.html
  node getPageSource.js -u https://www.google.com -o google.html
  `);
}

// 도움말 요청 시
if (argv.help || argv.h) {
    printUsage();
    process.exit(0);
}

// URL 필수 검사
const url = argv.url || argv.u;
if (!url) {
    console.error('오류: URL이 지정되지 않았습니다.');
    printUsage();
    process.exit(1);
}

// 출력 파일 경로 설정 (기본값: ./source.html)
const outputPath = argv.output || argv.o || 'source.html';

// 디렉토리 생성 함수
function ensureDirectoryExists(filePath) {
    const dirname = path.dirname(filePath);
    if (dirname !== '.' && !fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
        console.log(`디렉토리 생성됨: ${dirname}`);
    }
}

async function getPageSource() {
    // 출력 디렉토리 확인
    ensureDirectoryExists(outputPath);

    // 브라우저 실행 (헤드리스 모드 끔)
    const browser = await chromium.launch({
        headless: false
    });

    // 새 브라우저 컨텍스트와 페이지 생성
    const context = await browser.newContext();
    const page = await context.newPage();

    // 지정된 URL로 이동
    console.log(`페이지 이동: ${url}`);
    await page.goto(url);

    // 3초 대기
    console.log('3초 대기 중...');
    await page.waitForTimeout(3000);

    // HTML 소스 가져오기
    console.log('HTML 소스 가져오는 중...');
    const htmlContent = await page.content();

    // HTML 소스 저장
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`HTML 소스 저장 완료: ${outputPath}`);

    // 브라우저 닫기
    await browser.close();
}

// 함수 실행 및 오류 처리
getPageSource()
    .catch(error => {
        console.error('오류 발생:', error);
        process.exit(1);
    }); 