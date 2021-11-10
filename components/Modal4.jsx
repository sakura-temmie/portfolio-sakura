import Image from "next/image";
import topImage from "../public/sl01.png";

const Modal = ({ show, setShow }) => {
  if (show) {
    return (
      <div className="shadow-lg rounded p-8 bg-white w-3/4 absolute left-50">
        <div className="flex">
          <p className="font-serif tracking-widest text-6xl mt-6">Spot-light</p>
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
              劇場と演出家を繋ぐデータベースサイトを制作しました。
              <br />
              演出家として登録すると劇場が検索でき、劇場として登録すると演出家が検索できる仕様になっています。
              <br />
              検索した後は、詳細を確認でき、簡単にチャットができるようになっています。
              <br />
              こだわった点は、フロントエンドとバックエンドのリポジトリを完全に分離し、
              <br />
              お互いがストレスフリーに開発できるように環境を整えたところです。
            </p>
            <p className="font-light text-gray-700 leading-relaxed mt-12">
              使用技術
              <br />
              Next.js, Tailwind CSS, Laravel, vercel
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
