# IFramePlayground

The default Docz `<Playground>` is really cool, but it does not serve your components in an **isolated browsing context**. This means your components live in a shared document environment with the Docz theme

The disadvantages of shared browsing context are:

- It makes developers hard to test component responsiveness
- Possible CSS collisions between Docz default theme style and component style

This project aims to solve the issue by using `<iframe>`

## Demo



## Installation

```shell
yarn add -D docz-iframe-playground
```

## Usage

```mdx
---
name: MyComponent
---

import { Playground, PropsTable } from 'docz';
import IFramePlayground from 'docz-iframe-playground';

import MyComponent from './MyComponent';

## MyComponent Demo

<Playground>
  <MyComponent text="Not Using IFramePlayground" />
  <IFramePlayground>
    <MyComponent text="Using IFramePlayground" />
  </IFramePlayground>
</Playground>

## MyComponent Props

<PropsTable of={MyComponent} />

```
