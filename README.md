# カタカムナ — Katakamuna Archive

カタカムナ（Katakamuna）について、**支持者の主張**と**学術的な評価**を分けて紹介する、
日本語の静的ホームページです。ビルド不要の HTML / CSS / JavaScript のみで構成されています。

神秘的なテーマだからこそ、出典を示し、「何が主張で、何が確認された事実か」を
読者が自分で判断できる形を目指しました。

## 構成

```
katakamuna-site/
├── index.html        # 本体（単一ページ、セクション構成）
├── style.css         # デザイン（レスポンシブ / ダークな渦巻モチーフ）
├── script.js         # 48音の絞り込み検索・現在年表示など最小限のJS
├── vercel.json       # Vercel 用の静的配信設定
├── README.md         # このファイル
└── research/
    └── SOURCES.md    # 調査メモ（出典URL・主張／学術評価／現代文化の整理）
```

### ページのセクション
概要 ／ カタカムナ文献と歴史 ／ 48音と「思念」表 ／ ウタヒ第5・6・7首 ／
支持者が語る世界観 ／ 学術的な caution（読み方の注意）／ 年表 ／ FAQ ／ 参考文献・リンク

## ローカルでプレビュー

ビルドは不要です。どれか一つで開けます。

```bash
# そのままブラウザで開く
open index.html        # macOS
xdg-open index.html    # Linux

# もしくは簡易サーバー（推奨：相対パスの確認に）
python3 -m http.server 8000
# → http://localhost:8000
```

## GitHub に残す

```bash
cd katakamuna-site
git init
git add .
git commit -m "Katakamuna static site"
git branch -M main
git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
git push -u origin main
```

## Vercel に公開する

1. https://vercel.com にログインし **Add New → Project**
2. 上記の GitHub リポジトリを Import
3. Framework Preset は **Other**、Build Command は空欄、Output Directory は空欄（ルート）でOK
   - `vercel.json` が静的配信・セキュリティヘッダー・キャッシュ方針を指定します
4. **Deploy** を押すと `https://<プロジェクト名>.vercel.app` で公開されます

CLI を使う場合:

```bash
npm i -g vercel
vercel        # プレビュー
vercel --prod # 本番
```

## 編集方針（大事）

- カタカムナの「古代文明・宇宙物理」などの内容は、**支持者の主張として**主語を付けて書く。
- 学術的には、カタカムナ文献は古代文書として認められておらず、偽書（古史古伝）として
  扱われること、原本が未確認であることを明記する。
- 健康・開運などの効能は推奨しない。
- 詳しくは `research/SOURCES.md` を参照。

## ライセンス / 注意

個人の学習・調査用プロジェクトです。ウタヒ本文や思念表は広く流通する短い語句・一覧の
要約・紹介の範囲で掲載しています。各出典の権利はそれぞれの著者・団体に帰属します。
