const { chromium } = require('C:/Users/Shubham Verma/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto('http://localhost:3003/png-hackathon-2026/', { waitUntil: 'networkidle' });

  const info = await page.evaluate(() => {
    const text = document.querySelector('.phk-footer-contact-row-text');
    const firstA = text.querySelector('a');
    const span = text.querySelector('span');
    const cs = (el) => el ? getComputedStyle(el) : null;
    return {
      textWhiteSpace: cs(text).whiteSpace,
      textOverflowWrap: cs(text).overflowWrap,
      textWordBreak: cs(text).wordBreak,
      aWhiteSpace: cs(firstA).whiteSpace,
      aDisplay: cs(firstA).display,
      spanWhiteSpace: cs(span).whiteSpace,
      textRectAfter: text.getBoundingClientRect(),
      scrollWidth: text.scrollWidth,
      clientWidth: text.clientWidth,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
