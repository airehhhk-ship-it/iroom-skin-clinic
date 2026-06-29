/* =========================================================
   아임웹 무료 제공자 배너 숨김 (단독·범용)
   "이 사이트는 아임웹으로 제작되었습니다" 배너 + 'Imweb Corp' 크레딧 숨김

   사용법: 아임웹 [사이트 설정 > 헤더 코드 삽입]에 아래 한 줄 추가
   <script src="https://cdn.jsdelivr.net/gh/airehhhk-ship-it/iroom-skin-clinic@main/imweb-hide-banner.js"></script>

   ※ 무료 플랜의 제공자 표기를 가리는 것은 아임웹 약관에 저촉될 수 있습니다.
     사용 책임은 사이트 운영자에게 있습니다.
   ========================================================= */
(function () {
  // 1) CSS로 즉시 숨김 (클래스명이 바뀌어도 고정 클래스로 잡음)
  var css =
    '._free_banner,.free_site_banner{display:none !important}' +
    '[role="alert"]:has(._free_banner){display:none !important}';
  function injectCSS() {
    if (document.getElementById('imweb-hide-banner-style')) return;
    var st = document.createElement('style');
    st.id = 'imweb-hide-banner-style';
    st.textContent = css;
    (document.head || document.documentElement).appendChild(st);
  }

  function hideEl(el) {
    if (el && el.style) el.style.setProperty('display', 'none', 'important');
  }

  // 2) JS로 바깥 막대까지 숨김 (:has 미지원 브라우저 대비)
  function hideBanner() {
    if (!document.body) return;
    // 무료 제공자 배너 — 고정 클래스로 탐지 후 바깥 alert 막대까지 숨김
    document.querySelectorAll('._free_banner,.free_site_banner').forEach(function (b) {
      var wrap = b.closest && b.closest('[role="alert"]');
      hideEl(wrap || b.parentElement || b);
    });
    // 'Imweb Corp.' 하단 크레딧 — 텍스트로 탐지
    var els = document.body.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.children.length === 0 && /Imweb\s*Corp/i.test(el.textContent || '')) {
        var leafLen = (el.textContent || '').replace(/\s/g, '').length;
        var target = el;
        while (target.parentElement &&
               target.parentElement !== document.body &&
               (target.parentElement.textContent || '').replace(/\s/g, '').length <= leafLen + 6) {
          target = target.parentElement;
        }
        hideEl(target);
      }
    }
  }

  function start() {
    injectCSS();
    hideBanner();
    // 늦게 렌더되거나 다시 그려지는 경우 대비
    [200, 600, 1200, 2500, 4000].forEach(function (t) { setTimeout(hideBanner, t); });
    if (window.MutationObserver) {
      var mo = new MutationObserver(hideBanner);
      mo.observe(document.documentElement, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); }, 8000); // 8초 후 감시 종료
    }
  }

  injectCSS(); // head 단계에서도 최대한 빨리 CSS 주입
  if (document.readyState !== 'loading') start();
  else document.addEventListener('DOMContentLoaded', start);
})();
