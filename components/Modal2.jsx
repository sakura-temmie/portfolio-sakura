import Image from "next/image";
import topImage from "../public/gb1.png";
import imageGif from "../public/0.gif";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex items-end">
          <p className="font-serif tracking-widest text-6xl mt-6">GEEKBOOK</p>
          <div className="m-2 ">
            <a
              className="font-serif px-2 py-1 text-pink-600 border border-pink-600 font-semibold rounded hover:bg-pink-100"
              href="https://atuki.sakura.ne.jp/geekbook/public/login.php/"
            >
              サイトへ
            </a>
          </div>
        </div>
        <div className="m-auto text-center">
          <Image
            src={imageGif}
            alt="logo"
            width="500"
            height="400"
            objectFit="contain"
          />
        </div>
        <div className="flex mt-4">
          <div className="ml-4">
            <p className="font-light text-gray-700 leading-relaxed mt-2">
              データベースサイトを制作しました。
              <br />
              作った経緯は、コミュニティでは学んだことを共有する文化はありますが、
              <br />
              知見がslackにしか蓄積していかないという問題がありました。
              <br />
              その問題を解決するため、投稿式のデータベースサイトを作成しました。
              <br />
              ユーザーの操作性と情報の信頼性を考え、ブックマーク機能、ページネーションとOGP画像の表示を実装しました。
            </p>
            <p className="font-light text-gray-700 leading-relaxed mt-12">
              使用技術
              <br />
              HTML, CSS, jQuery, PHP
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
