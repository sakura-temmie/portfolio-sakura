import Image from "next/image";
import topImage from "../public/gb1.png";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex">
          <p className="font-serif tracking-widest text-6xl mt-6">GEEKBOOK</p>
          <a
            className="font-serif mt-14 ml-6"
            href="https://atuki.sakura.ne.jp/geekbook/public/login.php/"
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
          <div className="ml-4">
            <p className="font-light text-gray-700 leading-relaxed mt-2">
              データベースサイトを制作しました。
              <br />
              作った経緯としては、ジーズアカデミーでは学んだことを共有する文化はありますが、
              <br />
              知見がslackにしか蓄積していかないという問題がありました。
              <br />
              その問題を解決するため、投稿式のデータベースサイトを作成しました。
              <br />
              ユーザーの操作性と情報の信頼性を考え、ページネーションとOGP画像の表示を実装しました。
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
