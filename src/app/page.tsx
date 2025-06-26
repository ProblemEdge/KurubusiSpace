'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const works = [
  {
    id: 1,
    title: "俺を走らせてくれ～無限run～",
    description: "NQV4実質初となるオリジナルゲームです、Enter加速\n素敵なUIが特徴のゲームになっています、地味に難しい\n通常モードしか遊べませんがキャラクターを選べます",
    image: "/images/work1.png",  
    tags: ["Godot Engine", "HTML" , "itch.io"],
    url: "https://nqv4.itch.io/im-run",
  },
  {
    id: 2,
    title: "俺の猫を育ててくれる子供は家に帰る~不労所得Gaming~",
    description: "画像を最適化していないのでスマホで開くと処理落ちします\n初文字化けしない作品です\n魚を取って猫を育てます",
    image: "/images/work2.png",
    tags: ["Godot Engine", "HTML" , "itch.io",],
    url: "https://nqv4.itch.io/oreneko",
  },
  {
    id: 3,
    title: "フラワーショップ瀬戸～海よりでかい花畑～",
    description: "普通に遊べます。経営シュミレーション？\n称号機能があります途中でめんどくなりました\n初手建築が強いです(最適化したのでスマホでもいけます)",
    image: "/images/work3.png",
    tags: ["Godot Engine", "HTML" , "itch.io",],
    url: "https://nqv4.itch.io/seto",
  },
  {
    id: 4,
    title: "Demo",
    description: "2d横スクロールの型です\n製品版だしたいです、多分",
    image: "/images/work4.png",
    tags: ["Godot Engine", "HTML" , "itch.io",],
    url: "https://nqv4.itch.io/empty",
  },
  {
    id: 5,
    title: "ノリで作ったやつ",
    description: "クラスメイトに触発されて作りました\n特にこれ以上何かをする気はあまりないです",
    image: "/images/work5.png",
    tags: ["Java Script", "HTML" , "vercel",],
    url: "https://sig-note.vercel.app",
  },
  {
    id: 6,
    title: "資本主義連打ゲーム",
    description: "HTMLを学んだ勢いで作りました\n悪くない出来だと思います\nクリック強化からの連ツがメタです",
    image: "/images/work6.png",
    tags: ["Java Script", "HTML" , "vercel",],
    url: "https://a-jwvc-qho5xemk4-nqv4.vercel.app",
  },
  {
    id: 7,
    title: "bot紹介サイト",
    description: "一番最初に作りました\n12歳なのでセーフ\nかなり終わってる",
    image: "/images/work7.png",
    tags: ["HTML" , "vercel", "next.js?"],
    url: "https://main-rho-bay.vercel.app",
  },
  {
    id: 8,
    title: "1+1アルティメット",
    description: "連打ゲームの次に作りました\nまぁ悪くはないと思います\nコピペ対策をしています",
    image: "/images/work8.png",
    tags: ["Java Script","HTML" , "vercel",],
    url: "https://one-nqv4.vercel.app",
  },
  {
    id: 9,
    title: "MushQuiz",
    description: "キノコ伝説のクイズができるサイト\n大会で金賞？をいただきました\n結構よくできてる",
    image: "/images/work9.png",
    tags: ["Java Script","HTML" , "vercel",],
    url: "https://kinoko-quiz.vercel.app",
  },
  {
    id: 10,
    title: "ギフトジャーニー",
    description: "フィッシング詐欺です\nPC未対応？",
    image: "/images/work10.png",
    tags: ["Java Script","HTML" , "vercel",],
    url: "https://kinoko-quiz.vercel.app",
  },
  {
    id: 11,
    title: "KurubusiSpace",
    description: "あなたが見ているサイトです",
    image: "/images/work11.png",
    tags: ["Next.js", "vercel",],
  },
  {
    id: 12,
    title: "TA-BOT",
    description: "課題の確認や日直を確認できます\n普通に有能",
    image: "/images/work12.png",
    tags: ["Java Script", "ngrok", "Raspberry Pi",],
  },
  {
    id: 13,
    title: "いかきん",
    description: "ユーザーの会話から会話を学習するようなbot\nkuromoji.jsで形態素解析しています",
    image: "/images/work13.png",
    tags: ["Java Script", "Discord.js", "kuromoji.js"],
  },
  {
    id: 14,
    title: "ハマキン",
    description: "Discordのbotにgeminiを載せました",
    image: "/images/work14.png",
    tags: ["Java Script", "Discord.js", "Gemini"],
  },
  {
    id: 15,
    title: "ウィル金",
    description: "いかきんから進化し、文法を学習しました\n品詞を理解しています",
    image: "/images/work15.png",
    tags: ["Java Script", "Discord.js", "kuromoji.js"],
  },
  {
    id: 16,
    title: "えなキン",
    description: "ウィル金から進化し文脈を読み取って会話できます\n乱数生成ではなくなったので普通に賢い\n音声認識機能とVOICEVOXを入れたので寝落ち通話ができます",
    image: "/images/work16.png",
    tags: ["Java Script", "Discord.js", "kuromoji.js", "Vosk.js", "VOICEVOX"],
  },
  {
    id: 17,
    title: "NOVAの奴隷",
    description: "Valorantでランダムピックしたり\nカスタム時に親を決めたり\n結構万能bot",
    image: "/images/work17.png",
    tags: ["Java Script", "Discord.js"]
  },
  {
    id: 18,
    title: "Strong",
    description: "大人気俺を走らせてくれより、ジェルガーが参戦！\n広告であるちょっと遊べるゲームよりは面白いです",
    image: "/images/work18.png",
    tags: ["Godot Engine",],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 200);
    window.scrollTo(0, 0);

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`hbg-custom fixed top-0 left-0 w-full transition-all duration-500 bg-white text-white z-50 ${
          scrolled ? "h-20 p-4 text-4xl shadow-md" : "h-screen p-20 text-6xl"
        } flex items-center justify-center`}
      >
        <h1 className={showTitle ? "fade-in" : "opacity-0"}>Kurubusi Space</h1>
      </header>

      <main className="pt-48 p-8 bg-custom">
        <p className="text-white center-text whitespace-pre-line">こんにちは！このウェブサイトでは私の素晴らしい作品を紹介します</p>
        <p className="mb-8 text-white center-text whitespace-pre-line">クリックすると外部サイトに飛びます</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="work-contena rounded-lg shadow-md p-4 flex flex-col transition-transform duration-300 hover:scale-105">
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <Image
                  width={400}
                  height={300}
                  src={work.image}
                  alt={work.title}
                  className="rounded-md w-full h-48 object-contain mb-4 work-contena"
                />
              </a>
              <h2 className="text-xl font-bold mb-2 mini-title whitespace-pre-line">{work.title}</h2>
              <p className="mb-4 whitespace-pre-line text-dis">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="tag text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: "100vh" }}></div> {/* スクロール用余白 */}
      </main>
    </div>
  );
}
