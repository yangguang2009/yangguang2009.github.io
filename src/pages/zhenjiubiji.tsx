import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function ZhenJiuBiJi() {
  return (
    <Layout>
      <div className="tailwind">
        <div className="min-h-[calc(100vh-151px)] overflow-y-auto overflow-x-hidden bg-black bg-gradient-to-b from-[#a7c1d7] to-white">
          <div className="container max-w-5xl px-4 py-12 md:py-20">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* 左侧内容区域 */}
              <div className="relative z-10 w-full  space-y-6 mt-8 md:mt-0">
                <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-bold text-gray-800">
                  <img
                    src="/img/zhenjiubiji-icon.webp"
                    alt="ZhenJiuBiJi"
                    className="w-10 h-10"
                  />
                  ZhenJiuBiJi
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Learn acupuncture anytime, anywhere, and master meridians and
                  acupoints with ease!
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    🌟 Core Features
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">🧍3D Model Acupoint</li>
                    <li className="flex items-center">🕚 Meridian Clock</li>
                    <li className="flex items-center">📜 Meridian Details</li>
                    <li className="flex items-center">
                      📝 Notes and Favorites
                    </li>
                    <li className="flex items-center">
                      🎮 Acupoint Mini-Games
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    iOS Download
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  >
                    Android Download
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-sky-600">
                  <Link href="/docs/manuals/zhenjiubiji/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-sky-600">
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] max-w-sm mx-auto">
                  <img src="/img/zhenjiubiji-bg.png" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
