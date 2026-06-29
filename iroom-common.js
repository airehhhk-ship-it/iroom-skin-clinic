/* =========================================================
   IROOM 공용 헤더 + 푸터 (전 페이지 1곳에서 관리)
   사용법: 아임웹 [사이트 설정 > 헤더 코드 삽입]에 아래 한 줄만 추가
   <script src="https://cdn.jsdelivr.net/gh/airehhhk-ship-it/iroom-skin-clinic@main/iroom-common.js"></script>
   이 파일만 수정하면 모든 페이지의 헤더·푸터가 함께 바뀝니다.
   ========================================================= */
(function () {
  var FONTS = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Noto+Serif+KR:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap";

  var CSS = `
  .ab-head,.ab-foot{
    --ink:#1c1a16;--ink-soft:#363129;--ivory:#f6f3ec;--cream:#ece7dc;--stone:#cfc7b8;
    --taupe:#a99a82;--gold:#9a8460;--gold-deep:#7d6a4c;
    --line:rgba(28,26,22,.14);--line-light:rgba(255,255,255,.18);
    --serif:"Noto Serif KR",serif;--latin:"Cormorant Garamond",serif;
    --sans:"Noto Sans KR","Pretendard",system-ui,sans-serif;--maxw:1180px;
  }
  .ab-head *,.ab-foot *{margin:0;padding:0;box-sizing:border-box}
  .ab-head,.ab-foot{font-family:var(--sans);line-height:1.7;-webkit-font-smoothing:antialiased}
  .ab-head{color:var(--ink)}
  .ab-head a,.ab-foot a{color:inherit;text-decoration:none}

  /* NAV */
  .ab-head .nav{width:100vw;position:sticky;top:0;left:50%;transform:translateX(-50%);z-index:1000;color:var(--ink);background:rgba(246,243,236,.92);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:0 1px 0 var(--line)}
  .ab-head .nav-inner{max-width:1280px;margin:0 auto;padding:20px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px}
  .ab-head .brand{display:flex;align-items:baseline;gap:10px;font-family:var(--latin)}
  .ab-head .brand .lmark{font-size:24px;font-weight:500;letter-spacing:.04em}
  .ab-head .brand .ko{font-family:var(--serif);font-size:14px;font-weight:500;letter-spacing:.08em;opacity:.85}
  .ab-head .nav-menu{display:flex;align-items:center;gap:30px;list-style:none}
  .ab-head .nav-menu>li{position:relative;font-size:14px;letter-spacing:.02em;font-weight:500}
  .ab-head .nav-menu>li>a{padding:14px 0;display:inline-block}
  .ab-head .submenu{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);background:var(--ivory);min-width:188px;padding:10px 0;border:1px solid var(--line);box-shadow:0 18px 40px rgba(20,18,14,.14);opacity:0;visibility:hidden;transition:.28s;list-style:none}
  .ab-head .has-sub:hover .submenu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
  .ab-head .submenu li a{display:block;padding:9px 22px;font-size:13.5px;transition:.2s}
  .ab-head .submenu li a:hover{background:var(--cream);color:var(--gold-deep)}
  .ab-head .submenu .div{height:1px;background:var(--line);margin:8px 18px}
  .ab-head .nav-right{display:flex;align-items:center;gap:18px}
  .ab-head .lang{display:flex;gap:9px;font-size:11px;letter-spacing:.12em;font-weight:500}
  .ab-head .lang a{opacity:.5;transition:.2s}.ab-head .lang a.on{opacity:1}
  .ab-head .nav-cta{font-size:13px;font-weight:500;letter-spacing:.04em;border:1px solid currentColor;padding:9px 18px;border-radius:40px;transition:.3s}
  .ab-head .nav-cta:hover{background:var(--gold);border-color:var(--gold);color:#fff}
  .ab-head .burger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;background:none;border:0}
  .ab-head .burger span{width:24px;height:1.5px;background:currentColor;transition:.3s}

  /* MOBILE MENU */
  .ab-head .mobile-menu{position:fixed;inset:0;z-index:1200;background:var(--ivory);transform:translateX(100%);transition:transform .45s cubic-bezier(.7,0,.2,1);overflow-y:auto}
  .ab-head .mobile-menu.open{transform:none}
  .ab-head .mm-top{display:flex;justify-content:space-between;align-items:center;padding:22px 26px;border-bottom:1px solid var(--line)}
  .ab-head .mm-close{background:none;border:0;font-size:26px;cursor:pointer}
  .ab-head .mm-list{padding:14px 26px 40px;list-style:none}
  .ab-head .mm-list>li{border-bottom:1px solid var(--line)}
  .ab-head .mm-list>li>a,.ab-head .mm-acc-head{display:flex;justify-content:space-between;align-items:center;padding:18px 2px;font-family:var(--serif);font-size:18px;font-weight:500;cursor:pointer;width:100%;background:none;border:0;text-align:left;color:inherit}
  .ab-head .mm-acc-body{max-height:0;overflow:hidden;transition:max-height .35s}
  .ab-head .mm-acc-body.open{max-height:420px}
  .ab-head .mm-acc-body a{display:block;padding:11px 8px;font-size:14px;color:var(--ink-soft)}
  .ab-head .mm-acc-head .chev{transition:transform .3s;font-size:14px;color:var(--taupe)}
  .ab-head .mm-acc-head.open .chev{transform:rotate(180deg)}
  .ab-head .mm-foot{padding:24px 26px;background:var(--cream)}
  .ab-head .mm-foot a{display:block;text-align:center;background:var(--ink);color:var(--ivory);padding:15px;border-radius:46px;font-size:14px}

  /* FOOTER */
  .ab-foot .footer{width:100vw;position:relative;left:50%;transform:translateX(-50%);color:#e8e3d8;overflow:hidden;background-color:var(--ink);background-image:radial-gradient(90% 70% at 78% 12%,rgba(154,132,96,.18),transparent 60%),radial-gradient(70% 80% at 8% 90%,rgba(255,255,255,.06),transparent 55%),linear-gradient(165deg,#232019 0%,#15130f 100%)}
  .ab-foot .footer-inner{position:relative;z-index:2;padding:clamp(64px,8vw,100px) 0 40px;max-width:var(--maxw);margin:0 auto;padding-left:28px;padding-right:28px}
  .ab-foot .foot-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:46px}
  .ab-foot .foot-brand .lmark{font-family:var(--latin);font-size:30px;letter-spacing:.04em;margin-bottom:6px}
  .ab-foot .foot-brand .ko{font-family:var(--serif);font-size:14px;letter-spacing:.1em;color:var(--stone)}
  .ab-foot .foot-brand .note{margin-top:14px;font-size:12px;color:var(--stone)}
  .ab-foot .foot-brand .links{display:flex;gap:14px;margin-top:22px;flex-wrap:wrap}
  .ab-foot .foot-brand .links a{font-size:12px;border:1px solid var(--line-light);padding:9px 14px;border-radius:34px;transition:.3s}
  .ab-foot .foot-brand .links a:hover{background:rgba(246,243,236,.1)}
  .ab-foot .foot-col h6{font-size:11px;letter-spacing:.24em;color:var(--gold);margin-bottom:18px;font-weight:500}
  .ab-foot .foot-col .phone{font-family:var(--latin);font-size:clamp(26px,3.4vw,38px);letter-spacing:.02em;margin-bottom:6px}
  .ab-foot .foot-col p{font-size:13px;color:var(--stone);font-weight:300;line-height:1.9}
  .ab-foot .foot-hours{margin-top:4px;font-size:13px;width:100%}
  .ab-foot .foot-hours tr{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--line-light)}
  .ab-foot .foot-hours .d{color:var(--stone)}.ab-foot .foot-hours .t{color:#f0ebe0}
  .ab-foot .foot-cta{margin-top:18px}
  .ab-foot .foot-cta a{display:inline-block;background:var(--gold);color:#fff;padding:13px 30px;border-radius:46px;font-size:13px;letter-spacing:.04em;transition:.3s}
  .ab-foot .foot-cta a:hover{background:var(--gold-deep)}
  .ab-foot .foot-bottom{position:relative;z-index:2;border-top:1px solid var(--line-light);margin-top:54px;padding:22px 0;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;font-size:11px;color:var(--taupe);letter-spacing:.04em;max-width:var(--maxw);margin-left:auto;margin-right:auto;padding-left:28px;padding-right:28px}
  .ab-foot .foot-bottom .legal a{margin-right:16px;color:var(--stone)}

  @media(max-width:768px){
    .ab-head .nav-menu,.ab-head .nav-cta,.ab-head .lang{display:none}
    .ab-head .burger{display:flex}.ab-head .nav-inner{padding:16px 22px}
    .ab-foot .footer-inner{padding-left:22px;padding-right:22px}
    .ab-foot .foot-bottom{padding-left:22px;padding-right:22px}
    .ab-foot .foot-grid{grid-template-columns:1fr;gap:36px}
  }`;

  var HEADER = `
  <div class="ab-head">
  <header class="nav">
    <div class="nav-inner">
      <a href="https://iroomskin.imweb.me/" class="brand"><span class="lmark">iroom</span><span class="ko">이룸피부과</span></a>
      <nav>
        <ul class="nav-menu">
          <li class="has-sub">
            <a href="https://iroomskin.imweb.me/16">ABOUT</a>
            <ul class="submenu">
              <li><a href="https://iroomskin.imweb.me/16#brand-core">브랜드코어</a></li>
              <li><a href="https://iroomskin.imweb.me/16#doctors">의료진소개</a></li>
              <li><a href="https://iroomskin.imweb.me/16#location">진료시간 / 오시는길</a></li>
              <li class="div"></li>
              <li><a href="https://iroomskin.imweb.me/">시술장비</a></li>
              <li><a href="https://iroomskin.imweb.me/">공지 / 이벤트</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener">유튜브</a></li>
            </ul>
          </li>
          <li><a href="https://iroomskin.imweb.me/">특수질환</a></li>
          <li><a href="https://iroomskin.imweb.me/">항노화</a></li>
          <li><a href="https://iroomskin.imweb.me/">흉터</a></li>
          <li><a href="https://iroomskin.imweb.me/">여드름</a></li>
          <li><a href="https://iroomskin.imweb.me/">색소</a></li>
          <li><a href="https://iroomskin.imweb.me/">홍조혈관</a></li>
        </ul>
      </nav>
      <div class="nav-right">
        <div class="lang"><a href="#" class="on">KR</a><a href="#">EN</a></div>
        <a href="https://iroomskin.imweb.me/" class="nav-cta">상담예약</a>
        <button class="burger" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>
  <div class="mobile-menu">
    <div class="mm-top">
      <div class="brand"><span class="lmark" style="font-family:var(--latin);font-size:24px">iroom</span></div>
      <button class="mm-close" aria-label="닫기">×</button>
    </div>
    <ul class="mm-list">
      <li>
        <button class="mm-acc-head"><span>ABOUT</span><span class="chev">▾</span></button>
        <div class="mm-acc-body">
          <a href="https://iroomskin.imweb.me/16#brand-core">브랜드코어</a>
          <a href="https://iroomskin.imweb.me/16#doctors">의료진소개</a>
          <a href="https://iroomskin.imweb.me/16#location">진료시간 / 오시는길</a>
          <a href="https://iroomskin.imweb.me/">시술장비</a>
          <a href="https://iroomskin.imweb.me/">공지 / 이벤트</a>
          <a href="https://youtube.com" target="_blank" rel="noopener">유튜브</a>
        </div>
      </li>
      <li><a href="https://iroomskin.imweb.me/">특수질환</a></li>
      <li><a href="https://iroomskin.imweb.me/">항노화</a></li>
      <li><a href="https://iroomskin.imweb.me/">흉터</a></li>
      <li><a href="https://iroomskin.imweb.me/">여드름</a></li>
      <li><a href="https://iroomskin.imweb.me/">색소</a></li>
      <li><a href="https://iroomskin.imweb.me/">홍조혈관</a></li>
    </ul>
    <div class="mm-foot"><a href="https://iroomskin.imweb.me/">상담 · 예약하기</a></div>
  </div>
  </div>`;

  var FOOTER = `
  <div class="ab-foot">
  <footer class="footer">
    <div class="footer-inner">
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="lmark">iroom</div>
          <div class="ko">이룸피부과 · IROOM DERMATOLOGY</div>
          <p class="note">오시는 길<br>서울특별시 ○○구 ○○로 000, 0층 (○○역 0번 출구 도보 0분)</p>
          <div class="links">
            <a href="#">📍 네이버 길찾기</a><a href="#">💬 카카오 길찾기</a><a href="#">🚗 티맵 길찾기</a>
          </div>
        </div>
        <div class="foot-col">
          <h6>RESERVATION</h6>
          <div class="phone">02-000-0000</div>
          <p>전화 · 카카오톡 · 온라인 상담 모두 가능합니다.<br>편하신 방법으로 문의해 주세요.</p>
          <div class="foot-cta"><a href="https://iroomskin.imweb.me/">온라인 상담 예약하기</a></div>
        </div>
        <div class="foot-col">
          <h6>HOURS</h6>
          <table class="foot-hours">
            <tr><span class="d">월 – 금</span><span class="t">10:00 – 19:00</span></tr>
            <tr><span class="d">토요일</span><span class="t">10:00 – 15:00</span></tr>
            <tr><span class="d">점심시간</span><span class="t">13:00 – 14:00</span></tr>
            <tr><span class="d">일 · 공휴일</span><span class="t">휴진</span></tr>
          </table>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <div class="legal"><a href="#">이용약관</a><a href="#">개인정보처리방침</a><a href="#">비급여진료안내</a></div>
      <div>COPYRIGHT © 2025 IROOM DERMATOLOGY. ALL RIGHTS RESERVED.</div>
    </div>
  </footer>
  </div>`;

  function init() {
    if (document.getElementById('iroom-common-style')) return; // 중복 삽입 방지

    // 폰트
    var f = document.createElement('link');
    f.rel = 'stylesheet'; f.href = FONTS;
    document.head.appendChild(f);

    // 스타일
    var st = document.createElement('style');
    st.id = 'iroom-common-style';
    st.textContent = CSS;
    document.head.appendChild(st);

    // 헤더 (body 맨 위)
    var h = document.createElement('div');
    h.innerHTML = HEADER;
    document.body.insertBefore(h.firstElementChild, document.body.firstChild);

    // 푸터 (body 맨 아래)
    var ft = document.createElement('div');
    ft.innerHTML = FOOTER;
    document.body.appendChild(ft.firstElementChild);

    // 모바일 메뉴 동작
    var head = document.querySelector('.ab-head');
    if (head) {
      var mm = head.querySelector('.mobile-menu');
      var burger = head.querySelector('.burger');
      var closeBtn = head.querySelector('.mm-close');
      if (burger) burger.onclick = function () { mm.classList.add('open'); document.body.style.overflow = 'hidden'; };
      if (closeBtn) closeBtn.onclick = function () { mm.classList.remove('open'); document.body.style.overflow = ''; };
      head.querySelectorAll('.mm-list a').forEach(function (a) {
        a.addEventListener('click', function () { mm.classList.remove('open'); document.body.style.overflow = ''; });
      });
      var acc = head.querySelector('.mm-acc-head');
      if (acc) acc.addEventListener('click', function () { this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open'); });
    }
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
