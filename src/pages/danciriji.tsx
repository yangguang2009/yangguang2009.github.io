import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function DanCiRiJi() {
  return (
    <Layout>
      <div className="tailwind">
        <div className="min-h-[calc(100vh-151px)] overflow-y-auto overflow-x-hidden bg-purple-100 ">
          <div className="container max-w-5xl px-4 py-12 md:py-20">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* 左侧内容区域 */}
              <div className="relative z-10 w-full  space-y-6 mt-8 md:mt-0">
                <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-bold text-gray-900">
                  <img
                    src="/img/danciriji-icon-128.webp"
                    alt="单词日记"
                    className="w-11 h-11 rounded-lg"
                  />
                  单词日记
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  运用科学记忆方法和个性化学习计划，提升你的词汇学习体验。从初中到托福水平，通过词根分析、记忆技巧和间隔重复，轻松掌握数千单词。
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    🌟 核心功能
                  </h2>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">🌟 各级词汇 覆盖全面 </li>

                    <li className="flex items-center">🌟 多种方法 辅助记忆</li>

                    <li className="flex items-center">🌟 科学复习 事半功倍</li>

                    <li className="flex items-center">🌟 予教于乐 轻松记忆</li>

                    <li className="flex items-center">🌟 检测效果 提升能力</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/app/id6748201649"
                    className="inline-flex items-center w-[160px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f]"
                  >
                    <img src="/img/app-store.png" alt="App Store" />
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-sky-600">
                  <Link href="/docs/manuals/danciriji/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] opacity-10 md:opacity-100 md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] md:aspect-auto max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img src="/img/danciriji-bg.png" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
