/* =============================================================
   楽園雅苑 / main.js
   構成：1.SPハンバーガーメニュー

   全体を即時関数（IIFE）で包んでいるのは、中で作った変数が
   グローバルに漏れて他のスクリプトとぶつかるのを防ぐため。
   ============================================================= */
(function () {
    'use strict';

    /* =============================================================
       1. SPハンバーガーメニュー

       ボタンを押すとナビ（＝SPドロワー）が開き、
         ・見た目：.is-open を付け外しして CSS 側で開閉・×への変形
         ・支援技術：aria-expanded と aria-label を実態に合わせて更新
         ・背面：body に .is-nav-open を付けてスクロールを止める
       の3つを常にセットで切り替える。
       ============================================================= */
    function initHamburger() {
        var hamburger = document.getElementById('hamburger');
        var nav = document.getElementById('global-nav');

        // どちらか無いページでは何もしない（エラーで後続処理が止まらないように）
        if (!hamburger || !nav) return;

        // CSS のブレークポイント（768px）と同じ値。PC幅になったかの判定に使う
        var mqPc = window.matchMedia('(min-width: 768px)');

        function isOpen() {
            return nav.classList.contains('is-open');
        }

        function openNav() {
            hamburger.classList.add('is-open');
            nav.classList.add('is-open');
            document.body.classList.add('is-nav-open');
            hamburger.setAttribute('aria-expanded', 'true');
            hamburger.setAttribute('aria-label', 'メニューを閉じる');
        }

        function closeNav() {
            hamburger.classList.remove('is-open');
            nav.classList.remove('is-open');
            document.body.classList.remove('is-nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'メニューを開く');
        }

        // ボタンで開閉
        hamburger.addEventListener('click', function () {
            if (isOpen()) {
                closeNav();
            } else {
                openNav();
            }
        });

        // ナビ内のリンクを押したら閉じる。
        // リンク1つずつにリスナーを付けず、親でまとめて受ける（イベント委譲）。
        // TOP内アンカー（#room など）は画面遷移が起きないので、
        // 閉じる処理を書かないとドロワーが開いたままになる
        nav.addEventListener('click', function (event) {
            if (event.target.closest('a')) {
                closeNav();
            }
        });

        // Escキーで閉じ、フォーカスを開閉ボタンに戻す
        // （閉じた後にキーボードの居場所が分からなくなるのを防ぐ）
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && isOpen()) {
                closeNav();
                hamburger.focus();
            }
        });

        // PC幅になったら強制的に閉じる。
        // SPで開いたまま画面を広げると、ナビは横並びに戻るのに
        // body のスクロール停止だけが残ってしまうため。
        // resize を毎回拾うより軽い
        mqPc.addEventListener('change', function (event) {
            if (event.matches) closeNav();
        });
    }


    /* =============================================================
       初期化
       defer を付けずに </body> 直前で読み込んでいるので、
       この時点で HTML は読み終わっている
       ============================================================= */
    initHamburger();
})();
