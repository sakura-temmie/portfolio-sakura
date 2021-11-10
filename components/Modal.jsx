import Image from "next/image";
import topImage from "../public/flower1.png";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex">
          <p className="font-serif tracking-widest text-6xl mt-6">Flower</p>
          <a
            className="font-serif mt-14 ml-6"
            href="https://kadai-11-23.sakura.ne.jp/sakura_11_23/"
          >
            サイトへ
          </a>
        </div>
        <div className="flex mt-4">
          <Image
            src={topImage}
            alt="logo"
            width="300"
            height="300"
            objectFit="contain"
          />
          <div>
            <p className="font-light text-gray-700 leading-relaxed mt-2">
              ビジュアルサイトを作成しました。
              <br />
              JavaScriptの動きを確認するため、jQueryでライブラリをたくさん使いました。
              <br />
              モーダルウィンドウや、アコーディオンメニューバーなど、Webデザインの基礎を詰め込みました。
              <br />
              フォントはAdobeフォントを使用しました。
            </p>
            <p className="font-light text-gray-700 leading-relaxed mt-12">
              使用技術
              <br />
              HTML, jQuery
            </p>
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
