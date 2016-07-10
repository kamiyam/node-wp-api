# WP API Sample Application [![license](https://img.shields.io/github/license/kamiyam/node-wp-api.svg?maxAge=2592000)](https://github.com/kamiyam/node-wp-api/blob/master/LICENSE)

## Usage

1. Clone or download this repository

    ```bash
    $ git clone https://github.com/kamiyam/node-wp-api.git
    ```

    or

    [![Download](https://img.shields.io/badge/Download-v1.0.0-brightgreen.svg)](https://github.com/kamiyam/node-wp-api/archive/master.zip)

2. Install the dependencies

    ```bash
    $ npm install
    ```

3. Start to develop

    ```bash
    $ npm start
    ```

    See more commands:

    ```bash
    $ npm run
    ```

## React

- 独立したComponentとして作成することが可能で部品として再利用しやすい
- VirtualDOM を利用しており、DOMの再描写、移動など インタラクティブな部分で使うことが多い（当社比）


### 開発手順

必要なComponentごとに分離して作成していくことが出来ます。

```
src
├── component (部品ベースJSフォルダ)
├── global.scss (globalCSS)
├── main.js (起点となるJS)
├── pages (ページベースのJSフォルダ)
└── routes (URLルーティング設定フォルダ)
```

#### pagesフォルダ
設定したURLに対してページのベースとなるJSを配置します。
(URLのマッピングは ``routes/index.js``で 行います)

#### component フォルダ
部品ごとのJSを配置します。

#### routes/index.js
URLに対し、割り当てられる JSファイルを指定します。
※ (このサンプルでは) ``pages``フォルダ以下に配置しています。

### ES6

ハンズオンで使用するベースコードは一般的なES5(EcmaScript5)での記述をメインとしていますが、ES6(EcmaScript6)での記述をお勧めします。

参考サンプルとして、ES6 で作成したブランチを用意しています。

branch
- es6/base
- es6/layout
- es6/spa

### Reflux

厳密には Reactはフレームワークではないため、Component 間の処理やデータの処理まわりが煩雑になります。

そのため、データを取り扱う仕組み(Fluxフロー)を導入することをお勧めします。

現在、そのデータフローを扱うFluxフレームワークは種類が多いですが、このサンプルではRefluxを利用しています。

https://github.com/reflux/refluxjs