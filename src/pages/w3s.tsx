import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function W3S() {
  return (
    <Layout>
      <div className="tailwind">
        <div className="min-h-[calc(100vh-151px)] overflow-y-auto overflow-x-hidden bg-blue-300 ">
          <div className="container max-w-5xl px-4 py-12 md:py-20">
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
              {/* 左侧内容区域 */}
              <div className="relative z-10 w-full  space-y-6 mt-8 md:mt-0">
                <h1 className="flex items-center gap-2 text-4xl md:text-5xl font-bold text-gray-700">
                  <img
                    src="/img/w3s-icon-128.webp"
                    alt="W3S"
                    className="w-11 h-11 rounded-lg"
                  />
                  W3S
                </h1>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Your Exclusive Front-End Learning Assistant, Opening a New Era
                  of AI-Assisted Development!
                </p>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-700">
                    🌟 Core Features
                  </h2>
                  <ul className="space-y-2 text-gray-800">
                    <li className="flex items-center">
                      🚀 Cutting-Edge Tutorials, Keeping Up with Technology
                      Trends
                    </li>
                    <li className="flex items-center">
                      🤖 Integrating AI, Doubling Development Efficiency
                    </li>
                    <li className="flex items-center">
                      💻 Online AI Practice Environment, Experience Immediately
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://apps.apple.com/app/id6741721041"
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
                  <Link href="/docs/manuals/w3s/acknowledgments&Licenses">
                    Acknowledgments & Licenses
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-sky-600">
                  <Link href="/about">Contact & Support</Link>
                </div>
              </div>
              {/* 右侧图片区域 */}
              <div className="absolute top-0 -right-[190px] opacity-10 md:opacity-100 md:w-1/2 md:relative md:right-0">
                <div className="relative aspect-[9/16] md:aspect-auto max-w-sm mx-auto rounded-lg overflow-hidden">
                  <img src="/img/w3s-bg.png" alt="预览" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
