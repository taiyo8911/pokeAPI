# pokemon-view-web-1
初代ポケモンの画像ギャラリー表示するシンプルなウェブアプリです。

---

## 仕組み
- ポケモンのデータはPokéAPIから取得（ID、英語名、タイプ、画像）
- name_trans.json で日本語名に変換

``` json
[
  { "id": 1, "ja": "フシギダネ" },
  { "id": 2, "ja": "フシギソウ" },
]
```
- HTML を生成して id="wrapper" に表示

## ライブラリ
- jQuery（JSON ファイル読み込み用）

## 参考サイト
- しまぶーのIT大学 https://youtu.be/QugDLcOo_EE
- pokeAPI公式 https://pokeapi.co/
- for文 https://techacademy.jp/magazine/5481
- pokeAPIを使ってアプリを作る https://blog.sol-se.com/pokeapi-elementary/
