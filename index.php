<?php
/* =============================================================
   TOP（動作確認用の仮ページ）

   ヘッダー・フッターの include が実際に描画されるか、
   TOP 用の透過ヘッダーとアンカーリンクが効くかを見るための最小構成。
   本実装（ヒーロー / お部屋 / プラン / 四季 / アクセス）は別途。
   ============================================================= */

// $page_title / $page_description を省略すると header.php の既定値
// （＝TOP用の文言）が使われるので、TOP では設定しなくてよい
require __DIR__ . '/includes/header.php';
?>

        <!-- 透過ヘッダーの下に敷くヒーロー（仮） -->
        <section class="p-hero">
            <div class="l-inner">
                <h1 class="p-hero__catch">静けさに、身をゆだねる。<br>桜庭温泉の隠れ家</h1>
            </div>
        </section>

        <!-- グローバルナビのアンカー先。中身は仮 -->
        <section id="room" class="p-section l-inner">
            <h2>お部屋</h2>
            <p>全12室、すべての客室から四季の庭を望めます。</p>
        </section>

        <section id="plan" class="p-section l-inner">
            <h2>プラン</h2>
            <p>スタンダード／デラックス／プレミアスィートの3タイプ。</p>
        </section>

        <section id="seasons" class="p-section l-inner">
            <h2>四季</h2>
            <p>春の桜、夏の蛍、秋の紅葉、冬の雪見風呂。</p>
        </section>

        <section id="access" class="p-section l-inner">
            <h2>アクセス</h2>
            <p>最寄駅より送迎バスで15分。</p>
        </section>

<?php require __DIR__ . '/includes/footer.php'; ?>
