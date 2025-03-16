import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function StyleRater() {
  return (
    <Layout>
      <div className="tailwind">
        <div className="min-h-[calc(100vh-151px)] overflow-y-auto overflow-x-hidden bg-amber-50 ">
          <div className="container max-w-5xl px-4 py-12 md:py-20">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* 左侧内容区域 */}
              <div className="relative z-10 w-full  space-y-6 mt-8 md:mt-0">
                <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-bold text-gray-900">
                  <img
                    src="/img/stylerater-icon-128.webp"
                    alt="StyleRater"
                    className="w-11 h-11 rounded-lg"
                  />
                  Style Rater
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Meet Your Better Self!
                  <br />
                  Simply upload a selfie and instantly receive professional
                  outfit or makeup evaluation advice.
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    🌟 Core Features
                  </h2>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">💯 Selfie Assessment</li>
                    <li className="flex items-center">💬 Expert Suggestions</li>
                    <li className="flex items-center">
                      👒 Personalized Recommendations
                    </li>
                    <li className="flex items-center">💄 Style Learning</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/app/id6743336440"
                    className="inline-flex items-center w-[160px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f]"
                  >
                    <img src="/img/app-store.png" alt="App Store" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center w-[160px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f]"
                  >
                    <img src="/img/amazon-store.png" alt="Amazon App Store" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center w-[182px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f] text-white font-bold"
                  >
                    <span className="text-2xl ml-3 mr-2">📦</span>
                    <span>APK Download</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-sky-600">
                  <Link href="/docs/manuals/stylerater/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] opacity-10 md:opacity-100 md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] md:aspect-auto max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img src="/img/stylerater-bg.png" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
