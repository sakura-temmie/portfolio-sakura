import Image from "next/image";
import Link from "next/link";
import topImage from "../public/sakura2.jpg";
import selfImage from "../public/selfImage.jpg";
import flower from "../public/flower1.png";
import gb from "../public/gb1.png";
import ocr from "../public/ocr2.png";
import sl from "../public/sl01.png";
import meshi from "../public/meshi1.png";
import githubImage from "../public/01.png";
import TopSentence from "../components/TopSentence";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Modal2 from "../components/Modal2";
import Modal3 from "../components/Modal3";
import Modal4 from "../components/Modal4";
import Modal5 from "../components/Modal5";
import { useState } from "react";

export default function Index() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const twitterImage =
    "https://www.wp-benricho.com/www/wp-content/uploads/2016/06/TwitterLogo.png";

  return (
    <>
      <Layout title="sakura-portfolio">
        <Image src={topImage} alt="logo" />
        <div className="flex flex-col items-center absolute top-80 left-50 text-white justify-center">
          <p className="font-serif tracking-widest text-6xl mt-6">
            Sakura Miyamoto
          </p>
          <p className="font-serif tracking-widest text-4xl mt-40">
            About this site
          </p>
          <p className="font-serif tracking-widest text-xl mt-4">
            ここはジースアカデミーの宮本さくらのポートフォリオサイトです。
          </p>
          <p className="font-serif tracking-widest text-xl mt-4">
            これまでに手がけた制作物、身につけたスキルをまとめています。
          </p>
          <p className="font-serif tracking-widest text-xl mt-4"></p>
        </div>
        <div className="flex flex-col items-center text-gray-600 text-white justify-center my-60">
          <p className="font-serif tracking-widest text-4xl">About Me</p>
          <div className="flex items-center mt-4">
            <Image src={selfImage} alt="selfImage" width="150" height="150" />
            <div className="ml-4">
              <TopSentence text="大阪府出身。大学では社会学を専攻。" />
              <TopSentence text="人体工学という人にフォーカスした学問と、技術的な分野にも興味があったので、" />
              <TopSentence text="人体工学と翻訳アプリを組み合わせて研究を行いました。" />
              <TopSentence text="その後外車ディーラーに勤め、バックオフィスと一部営業活動を担当。" />
              <TopSentence text="現在は、新しいことに挑戦がしたい・学び続ける状況に身を置きたいため、" />
              <TopSentence text="以前より興味のあったIT業界への転職活動中です。" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-600 text-white justify-center my-60">
          <p className="font-serif tracking-widest text-4xl mb-8">Works</p>
          <div className="flex">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setShow(true)}
            >
              <Image
                src={flower}
                alt="logo"
                width="200"
                height="150"
                objectFit="contain"
              />
              <p>Flower</p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer ml-4"
              onClick={() => setShow2(true)}
            >
              <Image
                src={gb}
                alt="logo"
                width="200"
                height="150"
                objectFit="contain"
              />
              <p>GEEKBOOK</p>
            </div>
            <div
              className="flex flex-col items-center ml-12 cursor-pointer"
              onClick={() => setShow3(true)}
            >
              <Image
                src={ocr}
                alt="logo"
                width="200"
                height="150"
                objectFit="contain"
              />
              <p>One Phrase OCR</p>
            </div>
            <div
              className="flex flex-col items-center ml-12 cursor-pointer"
              onClick={() => setShow4(true)}
            >
              <Image
                src={sl}
                alt="logo"
                width="200"
                height="150"
                objectFit="contain"
              />
              <p>Spot-light</p>
            </div>
            <div
              className="flex flex-col items-center ml-12 cursor-pointer"
              onClick={() => setShow5(true)}
            >
              <Image
                src={meshi}
                alt="logo"
                width="200"
                height="150"
                objectFit="contain"
              />
              <p>メシラン</p>
            </div>
          </div>
          <Modal show={show} setShow={setShow} />
          <Modal2 show={show2} setShow={setShow2} />
          <Modal3 show={show3} setShow={setShow3} />
          <Modal4 show={show4} setShow={setShow4} />
          <Modal5 show={show5} setShow={setShow5} />
          <Link href="/Products">
            <a className="p-2 cursor-pointer border-b mt-8">
              その他制作物はこちら
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center text-gray-600 text-white justify-center my-60">
          <p className="font-serif tracking-widest text-4xl">Contact</p>
          <p className="font-serif tracking-widest text-xl mt-4">
            Mail : sakura.m.208@gmail.com
          </p>
          <p className="font-serif tracking-widest text-xl mt-4">
            TEL : 070-4807-5662
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
      </Layout>
    </>
  );
}
