'use client'; // useEffect を使うために必要

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // タイトル表示のタイマーセット
    const timer = setTimeout(() => setShowTitle(true), 200);
    window.scrollTo(0, 0);

    // スクロールイベントのハンドラ
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    // クリーンアップ処理まとめて返す
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>

      <main className={`p-8 transition-all duration-500 pt-48 center-text`}>
        <p>こんにちは！</p>
        <p>このウェブサイトでは私の素晴らしい作品を紹介しません</p>
        <div style={{ height: "200vh" }}></div> {/* スクロール用余白 */}
      </main>
    </div>
  );
}

