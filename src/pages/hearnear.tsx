import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function HearNear() {
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
                    src="/img/hearnear-icon-128.webp"
                    alt="HearNear"
                    className="w-11 h-11 rounded-lg"
                  />
                  HearNear
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  HearNear is an AI-assisted application specially designed for
                  visually impaired friends, acting as a thoughtful companion
                  that transforms the surrounding environment into voice
                  descriptions anytime, anywhere. Through simple photo captures,
                  videos, voice or text inputs, visually impaired individuals
                  can easily navigate various scenarios in daily life.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  At home, HearNear helps you locate everyday items, assists
                  with kitchen operations, and even provides outfit suggestions.
                  Reading books, newspapers, and product instructions becomes
                  simple and convenient. When going out, HearNear helps you
                  navigate paths, avoid obstacles, find shops, and identify bus
                  stops. While shopping, it can recognize products, check price
                  tags, and read product descriptions - these are all ways
                  HearNear can provide assistance.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  HearNear is simple to operate, using voice-guided interfaces
                  and prompts that are easy to learn. More importantly, it is
                  available 24/7, ready to describe your surroundings anytime,
                  anywhere.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  HearNear, exploring a wider world with you!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/app/id6744880433"
                    className="inline-flex items-center w-[160px] h-[50px] rounded-full overflow-hidden bg-[#2e2c2f]"
                  >
                    <img src="/img/app-store.png" alt="App Store" />
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm text-sky-600">
                  <Link href="/docs/manuals/hearnear/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] opacity-10 md:opacity-100 md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] md:aspect-auto max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img src="/img/hearnear-bg.jpg" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
