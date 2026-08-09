# それ、家を決める前に。

Astro と Markdown で運用する住宅ブログです。未完成の記事は `draft: true` により、トップ・カテゴリー・サイトマップ・記事URLのすべてから除外されます。

## 記事を追加する

1. `src/content/posts/_template.md` を複製します。
2. ファイル名を記事URLにしたい英数字へ変更します（例: `house-building-flow.md`）。
3. タイトル、日付、カテゴリー、説明、画像、本文を入力します。
4. 本文完成と事実確認が済んだら `draft: false` にします。
5. `npm run build` で公開前確認を行います。

カテゴリー値は `rent`、`buy-or-rent`、`custom-home`、`used-home`、`moving`、`housing-trouble` の6種類です。

## Cloudflare Pages

- フレームワーク: Astro
- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`
- Node.js: 22 以上
- 環境変数: `PUBLIC_SITE_URL` に `https://` から始まる公開URLを設定

Cloudflare Pages でGitHubリポジトリを接続すると、既定ブランチへの更新から自動ビルド・公開できます。独自ドメインへ切り替える際は `PUBLIC_SITE_URL` だけを変更します。

APIキー、パスワード、個人情報、ASPの秘密情報はリポジトリに保存しません。秘密値が必要になった場合はGitHub SecretsまたはCloudflare Pagesの環境変数で管理します。詳しくは `SECURITY.md` を確認してください。

## 公開前に必ず確定する項目

- プロフィールの本人情報
- プライバシーポリシー
- 免責事項
- お問い合わせ先
- 使用するアクセス解析・広告・ASP
- 記事本文、出典、公開日、更新日、情報確認日

固定ページの未確定内容は `noindex` とし、推測した法務文面は掲載していません。

