import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//childrenはインポート先でラップしてる全てのコンテンツが入ってくる
//titleはLayoutが呼び出された時にページから特定のタイトルを受け取る
export default function Layout({ children, title }) {
  const router = useRouter();
  return (
    <div className="flex flex-col text-gray-600 text-sm font-sans min-h-screen">
      <Head>
        {/* プロップスで渡された値を動的に受け取る */}
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 z-10 bg-gray-100 w-screen border-b border-gray-200 items-center text-center justify-center h-24">
        <nav>
          <div className="flex items-center h-24 items-center text-center justify-center">
            <div className="ml-auto flex ">
              <Link href="/">
                <a className="text-gray-400 hover:bg-pink-200 hover:text-white h-24 p-10 cursor-pointer">
                  トップ
                </a>
              </Link>
              <Link href="/Products">
                <a className="text-gray-400 hover:bg-pink-200 hover:text-white h-24 p-10 cursor-pointer">
                  制作物
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col flex-grow items-center bg-gray-100">
        {children}
      </main>
      <footer className="bg-gray-100">
        <p className="p-5 pb-10 text-center text-xs">© 2021 Sakura Miyamoto</p>
      </footer>
    </div>
  );
}
