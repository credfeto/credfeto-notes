---
title: "WebStorm fix jest"
date: 2023-02-08T10:11:53+00:00
description: Fixing running jest tests in webstorm
draft: false
categories:
  - Webstorm
  - Typescript
tags:
  - Jest
  - Typescript
---
# Webstorm - fixing jest

When this error appears on opening new project
```
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
```

Edit Run configuration and set the configuration file for jest to point to the one in the project:

![image](https://user-images.githubusercontent.com/1020430/217805536-e6709b02-8785-4904-9d15-23dbba048f0d.png)
