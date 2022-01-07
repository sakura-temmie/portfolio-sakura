import Image from "next/image";
import topImage from "../public/meshi1.png";
import imageGif1 from "../public/1.gif";
import imageGif2 from "../public/2.gif";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex items-end">
          <p className="font-serif tracking-widest text-6xl mt-6">メシラン</p>
          <div className="m-2 ">
            <a
              className="font-serif px-2 py-1 text-pink-600 border border-pink-600 font-semibold rounded hover:bg-pink-100"
              href="https://meshi-ran.vercel.app/"
            >
              サイトへ
            </a>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="ml-4">
            <p className="font-light text-gray-700 leading-relaxed mt-2">
              動画ベースグルメSNSを制作しました。
              <br />
              現状のグルメサイトは写真と冗長な文でわかりづらい箇所が多いという問題があり、
              <br />
              リアルな動画と簡潔な短文で温度感の伝わるSNS型のグルメサイトを目指しています。
              <br />
              こだわった点は、TikTokのようなモダンなSNSの見た目をNext.jsで表現したところです。
            </p>
            <p className="font-light text-gray-700 leading-relaxed mt-4">
              使用技術
              <br />
              Next.js, Tailwind CSS, Firebase(v9), vercel
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="m-auto text-center">
            <p>ログイン後メインページ</p>
            <Image
              src={imageGif2}
              alt="logo"
              width="500"
              height="400"
              objectFit="contain"
            />
          </div>
          <div className="pt-12 m-auto text-center">
            <p>実際の投稿の様子</p>
            <Image
              src={imageGif1}
              alt="logo"
              width="500"
              height="300"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            onClick={() => setShow(false)}
          >
            閉じる
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
