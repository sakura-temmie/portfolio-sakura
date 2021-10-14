import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import topImage from "../public/topImage.jpg";

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
          <p className="font-serif tracking-widest text-2xl mt-6">
        宮本さくら
          </p>
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
              (vanilla)
            </div>
            <div className="rounded-full h-40 w-40 flex items-center border-yellow-300 ml-6 justify-center border border-pink-400">
              React
            </div>
            <div className="rounded-full h-40 w-40 flex items-center border-yellow-300 ml-6 justify-center border border-pink-400">
              Next.js
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
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>HP作成</p>
                <p className="text-4xl">1</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/html_sakuramiyamoto_23/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  チーズアカデミー
                </a>
                <div className="mt-4 pl-4">
                  <p>架空サイトLP作成</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>HP作成</p>
                <p className="text-4xl">2</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/sakura_11_23/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  Flower
                </a>
                <div className="mt-4 pl-4">
                  <p>架空ビジュアルサイト作成</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>ゲーム作成</p>
                <p className="text-4xl">3</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/Game_11_23/game.html"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  女心理解度診断
                </a>
                <div className="mt-4 pl-4">
                  <p>条件分岐練習、ゲーム制作</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>お買い物アプリ</p>
                <p className="text-4xl">4</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/my_shopping/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  まい・しょっぴんぐ
                </a>
                <div className="mt-4 pl-4">
                  <p>かわいいお買い物アプリ作成</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>OCRアプリ</p>
                <p className="text-4xl">5</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/OphOcr/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  One Phrase OCR
                </a>
                <div className="mt-4 pl-4">
                  <p>OCR（光学文字認識）アプリ作成</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>チャットアプリ</p>
                <p className="text-4xl">6</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/chatapp02/public/login_form.php"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  My Chat App
                </a>
                <div className="mt-4 pl-4">
                  <p>チャットアプリ作成</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>SNS</p>
                <p className="text-4xl">7</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://meshiran.vercel.app/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  メシラン
                </a>
                <div className="mt-4 pl-4">
                  <p>レストラン情報共有アプリ</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>DB web アプリ</p>
                <p className="text-4xl">8</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://kadai-11-23.sakura.ne.jp/chatapp02/public/login_form.php"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  Spot-Light
                </a>
                <div className="mt-4 pl-4">
                  <p>演出家・劇場マッチングアプリ</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="flex flex-col rounded-full h-40 w-40 flex items-center border-pink-300 font-serif justify-center border border-orange-400">
                <p>CG/VFX</p>
                <p className="text-4xl">９</p>
              </div>
              <div className="pt-5 ml-6 text-gray-500">
                <a
                  href="https://portfolio.adobe.com/5fa7ee5e-dc43-46f8-a593-4f7979e51d62/editor/"
                  className="text-2xl border-b-2 px-4 pb-1"
                >
                  ポートフォリオサイトへ
                </a>
                <div className="mt-4 pl-4">
                  <p>使用技術：Maya, UE4, AfterEffect, PhotoShop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white">
        <p className="pt-5 text-center text-2xs">
          Contact : sakura.m.208@gmail.com
        </p>
        <p className="p-5 pb-10 text-center text-xs">
          Copyright © 2021 LAB 11, inc. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}