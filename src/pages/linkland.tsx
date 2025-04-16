import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function LinkLand() {
  return (
    <Layout>
      <div className="tailwind">
        <div className="min-h-[calc(100vh-151px)] overflow-y-auto overflow-x-hidden bg-blue-50 ">
          <div className="container max-w-5xl px-4 py-12 md:py-20">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* 左侧内容区域 */}
              <div className="relative z-10 w-full  space-y-6 mt-8 md:mt-0">
                <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-bold text-gray-900">
                  <img
                    src="/img/linkland-icon-128.webp"
                    alt="LinkLand"
                    className="w-11 h-11 rounded-lg"
                  />
                  LinkLand
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Connect with virtual sages, engage in profound conversations
                  <br />
                  Make spiritual friends, appreciate the wonders of social
                  sharing
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    ※ Core Features ※
                  </h2>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      ※ Virtual Friends · Historical Figures ※
                    </li>
                    <li className="flex items-center">
                      ※ Group Chats · Intellectual Debates ※
                    </li>
                    <li className="flex items-center">
                      ※ Social Feed · Artistic Expression ※
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/app/id6743106328"
                    className="inline-flex items-center w-[160px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f]"
                  >
                    <img src="/img/app-store.png" alt="App Store" />
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-sky-600">
                  <Link href="/docs/manuals/linkland/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] opacity-10 md:opacity-100 md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] md:aspect-auto max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img src="/img/linkland-bg.png" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
