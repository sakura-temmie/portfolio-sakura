import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import topImage from "../public/topImage.jpg";
import githubImage from "../public/01.png";
import Product from "../components/Product"

const twitterImage =
  "https://news.mynavi.jp/article/20210809-1942830/images/000a_l.jpg/webp";

export default function Index() {
  return (
    <>
      <Head>
        <title>Sakura-P-site</title>
      </Head>
      <main className="flex flex-col flex-grow items-center pb-20 bg-gray-100">
        <Image src={topImage} alt="logo" />
        <div className="flex flex-col items-center absolute top-60 left-50 text-white justify-center">
          <p className="font-serif tracking-widest text-4xl">
            作りたいに忠実に
          </p>
          <p className="font-serif tracking-widest text-2xl mt-6">宮本さくら</p>
        </div>
        <div className="absolute right-10"></div>
        <div className="mt-24 flex flex-col font-serif tracking-widest items-center">
          <p className="text-gray-700 text-opacity-75">課題解決をスマートに</p>
          <p className="mt-4 text-gray-700 text-opacity-75">もっと素早く</p>
        </div>
        <div className="my-24">
          <div className="flex justify-center my-8">
            <p className="border-b text-xl px-4 pb-1 border-gray-400 text-gray-600">
              得意技術
            </p>
          </div>
          <div className="flex font-serif">
            <div className="rounded-full h-40 w-40 flex items-center border-pink-300 justify-center border border-pink-400">
              JavaScript
              <br />
              (vanilla.js)
            </div>
            <div className="rounded-full h-40 w-40 flex items-center border-yellow-300 ml-6 justify-center border border-pink-400">
              React / Next.js
            </div>
            <div className="rounded-full h-40 w-40 flex items-center ml-6 border-yellow-300 justify-center border border-pink-400">
              Firebase
            </div>
            <div className="rounded-full h-40 w-40 flex items-center ml-6 border-yellow-300 justify-center border border-pink-400">
              Maya
            </div>
          </div>
        </div>
        <div className="bg-white w-full flex flex-col items-center py-24">
          <div className="flex justify-center">
            <p className="border-b text-xl px-4 pb-1 mb-8 border-gray-400 text-gray-600">
              制作物
            </p>
          </div>
          <div className="">
            <Product
              type="HP作成"
              nom="1"
              url="https://kadai-11-23.sakura.ne.jp/html_sakuramiyamoto_23/"
              title="チーズアカデミー"
              contents="架空サイトLP作成"
              tech="HTML, CSS"
            />
            <Product
              type="HP作成"
              nom="2"
              url="https://kadai-11-23.sakura.ne.jp/sakura_11_23/"
              title="Flower"
              contents="架空ビジュアルサイト作成"
              tech="HTML, jQuery"
            />
            <Product
              type="ゲーム作成"
              nom="3"
              url="https://kadai-11-23.sakura.ne.jp/Game_11_23/game.html"
              title="女心理解度診断"
              contents="条件分岐練習、ゲーム制作"
              tech="HTML, vanilla.js"
            />
            <Product
              type="メモアプリ"
              nom="4"
              url="https://kadai-11-23.sakura.ne.jp/my_shopping/"
              title="まい・しょっぴんぐ"
              contents="かわいいお買い物アプリ作成"
              tech="Vue.js"
            />
            <Product
              type="OCRアプリ"
              nom="5"
              url="https://kadai-11-23.sakura.ne.jp/OphOcr/"
              title="One Phrase OCR"
              contents="OCR（光学文字認識）アプリ作成"
              tech="React.js, tesseract.js"
            />
            <Product
              type="DBアプリ"
              nom="6"
              url="https://atuki.sakura.ne.jp/geekbook/public/login.php"
              title="GEEK BOOK"
              contents="学習知識共有アプリ作成(チーム開発：フロント担当)"
              tech="jQuery, PHP"
            />
            <Product
              type="チャットアプリ"
              nom="7"
              url="https://kadai-11-23.sakura.ne.jp/chatapp02/public/login_form.php"
              title="My Chat App"
              contents="チャットアプリ作成"
              tech="vanilla.js, PHP"
            />
            <Product
              type="SNS"
              nom="8"
              url="https://meshi-ran.vercel.app/"
              title="メシラン"
              contents="レストラン情報共有モバイルアプリ(チーム開発：フロント担当)"
              tech="Next.js, Tailwind CSS, Firebase(v9), vercel"
            />
            <Product
              type="DB web アプリ"
              nom="9"
              url="https://spotlight-spot.vercel.app/"
              title="Spot-Light"
              contents="演出家・劇場マッチングアプリ(チーム開発：フロント担当)"
              tech="Next.js, Tailwind CSS, Laravel, vercel"
            />
            <Product
              type="CG/VFX"
              nom="10"
              url="https://sakuram2089314.myportfolio.com/"
              title="ポートフォリオサイトへ"
              contents="CG制作物（静止画、動画）"
              tech="Maya, UE4, AfterEffect, PhotoShop"
            />
          </div>
          <p className="pt-24 text-center text-2xs">
            Contact :　sakura.m.208@gmail.com
          </p>
          <div className="flex items-center mt-2 ">
            <a href="https://twitter.com/sakura_m_04">
              {" "}
              <Image
                src={twitterImage}
                width={50}
                height={50}
                alt={"twitter"}
              />
            </a>
            　
            <a href="https://github.com/sakura-temmie">
              {" "}
              <Image src={githubImage} width={40} height={40} alt={"github"} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
