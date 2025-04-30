import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      <div className="tailwind min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <img
              src="/img/logo.png"
              alt="Profile"
              className="pt-2 w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gray-200 dark:border-gray-700"
            />
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Yangguang
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate developer focused on creating solutions to
              interesting problems. With experience in web development, I enjoy
              programming and learning new technologies. Nice to meet you!
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/Yangguang2009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <FaTwitter className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/yangguang2009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="mailto:yangguang200906@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                <FaEnvelope className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
