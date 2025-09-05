---
slug: creating-a-real-time-svelte-compiler-with-next.js
title: Creating a Real-Time Svelte Compiler with Next.js A Fun and Easy Guide
authors:
  name: Yangguang

  url: https://yangguang2009.github.io
  image_url: /img/logo.png
tags: [Svelte, Next.js]
---

# Creating a Real-Time Svelte Compiler with Next.js: A Fun and Easy Guide

Welcome to an exciting journey where we combine the power of Svelte and Next.js to create a real-time code compilation and preview tool. Whether you're a seasoned developer or just getting started, this guide will help you build a dynamic application that brings your code to life instantly. We'll break down the process step-by-step and make it as enjoyable as possible. So, grab your favorite beverage, and let's dive in!

<!-- truncate -->

## 🚀 Setting the Stage: Project Setup

First things first, let's set up our Next.js project. If you haven't already, create a new Next.js application with the following command:

```sh
npx create-next-app@latest svelte-repl
cd svelte-repl
```

Next, we need to install a few essential dependencies. These include Svelte for our compilation magic and Monaco Editor for a sleek code editing experience.

```sh
npm install monaco-editor @monaco-editor/react
```

## 🧙‍♂️ The Magic of Compilation: Web Worker

To handle the heavy lifting of code compilation, we'll use a Web Worker. This keeps our main thread free and responsive. Create a file named `compile.worker.js` in the `public` directory with the following content:

```javascript
self.onmessage = async (event) => {
  const svelteUrl = "https://unpkg.com/svelte";
  const version = "4.2.18";
  const compiler = await fetch(`${svelteUrl}/compiler.cjs`).then((r) =>
    r.text()
  );
  (0, eval)(compiler + "\n//# sourceURL=compiler.cjs@" + version);

  const { code } = event.data;
  try {
    const result = svelte.compile(code, { format: "esm" });
    self.postMessage({ result });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
```

This worker listens for code updates, compiles the Svelte code, and sends the result back to the main thread. Think of it as a dedicated wizard, tirelessly transforming your code into magical outputs.

## 🖋️ Crafting the Code Editor

Now, let's create a component for our code editor. This will be the playground where you write your Svelte code. Create a file named `Editor.js` in the `components` directory:

```javascript
import React, { useRef, useEffect, useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ onChange }) => {
  const editorRef = useRef(null);
  const [code, setCode] = useState(
    `<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>`
  );

  const handleEditorChange = (value) => {
    setCode(value);
    onChange(value);
  };

  return (
    <MonacoEditor
      height="350px"
      language="html"
      value={code}
      onChange={handleEditorChange}
      editorDidMount={(editor) => {
        editorRef.current = editor;
      }}
    />
  );
};

export default Editor;
```

This component leverages the Monaco Editor, providing a robust and user-friendly interface for writing Svelte code. As you type, it sends updates back to the main application.

## 🌟 The Preview Pane: Rendering the Output

Next, we'll create a component to display the compiled Svelte code. This will be an iframe that dynamically updates with your latest code. Create a file named `Preview.js` in the `components` directory:

```javascript
import React, { useRef, useEffect } from "react";

const Preview = ({ code }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument;
    doc.open();
    doc.write(`
            <style>${code.css ? code.css.code : ""}</style>
            <div id="app"></div>
            <script type="module">
                ${code.js ? getJsCode() : ""}
                try{
                  if (Component) {
                      new Component({ target: document.getElementById('app') });
                  }
                }catch(e){}
            </script>
        `);
    doc.close();
  }, [code]);

  function getJsCode() {
    return code.js.code
      .replace(
        "svelte/internal",
        "https://unpkg.com/svelte@4.2.18/src/runtime/internal/index.js"
      )
      .replace(
        "svelte/internal/disclose-version",
        "https://unpkg.com/svelte@4.2.18/src/runtime/internal/disclose-version/index.js"
      );
  }

  return (
    <>
      Preview
      <iframe
        ref={iframeRef}
        style={{
          width: "100%",
          height: "350px",
          border: "none",
          background: "#fff",
        }}
      />
    </>
  );
};

export default Preview;
```

This updated component not only injects the compiled code into an iframe but also includes a function `getJsCode` to replace module imports with URLs pointing to the Svelte runtime on a CDN. This ensures that your Svelte components run correctly within the iframe. The `try...catch` block around the component instantiation prevents runtime errors from breaking the entire preview.

## 🛠️ Bringing It All Together: The Main Page

Now it's time to integrate our editor and preview components into the main page of our Next.js application.

```javascript
"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./components/Editor"), { ssr: false });
const Preview = dynamic(() => import("./components/Preview"), { ssr: false });

const Home = () => {
  const [code, setCode] = useState("");
  const [compiledCode, setCompiledCode] = useState({});

  useEffect(() => {
    const worker = new Worker("/compile.worker.js");
    worker.onmessage = (event) => {
      const { result, error } = event.data;
      if (error) {
        console.error(error);
      } else {
        setCompiledCode(result);
      }
    };

    if (code) {
      worker.postMessage({ code });
    }

    return () => {
      worker.terminate();
    };
  }, [code]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "16px",
        padding: "2rem",
        fontWeight: "bold",
      }}
    >
      <h1>Svelte REPL with Next.js</h1>
      <Editor onChange={setCode} />
      <Preview code={compiledCode} />
    </div>
  );
};

export default Home;
```

In this setup, the `Home` component integrates our `Editor` and `Preview` components. It also sets up the Web Worker to compile the code whenever changes are made, seamlessly updating the preview.

## 🎉 Wrapping Up

And there you have it! You've built a real-time Svelte compiler and preview tool using Next.js. This project is not just a great learning experience but also a powerful tool you can use and expand upon. Here's a quick recap of what we covered:

- Setting up the Next.js project and installing dependencies.
- Creating a Web Worker for Svelte code compilation.
- Building a code editor using Monaco Editor.
- Implementing a dynamic preview pane to display the compiled output.
- Integrating everything into a cohesive and responsive application.

Feel free to customize and enhance [this project](https://github.com/yangguang2009/svelte-repl) further. Perhaps add syntax highlighting, error notifications, or additional features like saving and loading snippets. The possibilities are endless!

Happy coding, and may your Svelte adventures be as delightful as they are productive!
