import Image from "next/image";
import topImage from "../public/ocr2.png";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex">
          <p className="font-serif tracking-widest text-6xl mt-6">
            One Phrase OCR
          </p>
          <a
            className="font-serif mt-14 ml-6"
            href="https://kadai-11-23.sakura.ne.jp/OphOcr/"
          >
            サイトへ
          </a>
        </div>
        <div className="flex mt-4">
          <Image
            src={topImage}
            alt="logo"
            width="300"
            height="200"
            objectFit="contain"
          />
          <div className="ml-4">
            <p className="font-light text-gray-700 leading-relaxed mt-2">
              OCRアプリを制作しました。
              <br />
              作った経緯は、私がよく利用するiMusicで、歌詞の意味も読みもわからない文字に出会った時
              <br />
              簡単にGoogle検索がしたかったからです。
              <br />
              スクリーンショットをとって画像をアップすると文字が書き出されます。
              <br />
              テキストボックスがそのまま検索窓になっているので、ワンクリックで検索できます。
              <br />
              こだわった点は、デスクトップではスクロールやカーソルの移動を少なくし、
              <br />
              スマホ画面ではボタンサイズや余白を大きめに取るようにしました。
            </p>
            <p className="font-light text-gray-700 leading-relaxed mt-12">
              使用技術
              <br />
              React.js, tesseract.js
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
