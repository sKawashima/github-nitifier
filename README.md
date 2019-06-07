# github-nitifier

特定のIssueにコメントが追加されたら1分以内に通知してくれるやつです。
スキマ時間で作ってるのでクォリティは気にしない。

## Usage 使い方

前提

* Node.js開発環境が整ってる
* cloneしてこのフォルダ内でTerminalを開けてる

### 1. install modules

```shell
npm install

# or yarn
```

### 2. get GitHub API Token

1. [ここ](https://github.com/settings/tokens)から`Generate new token`
2. noteにラベルを書く（devとか)
3. repoとuserにチェック
4. `Generate token`
5. 出てきたトークンをコピペ
6. ↓を実行

```shell
echo GITHUB_TOKEN=[得られたtoken] > .env
```

### 3. 実行

```shell
npm start URL

# or yarn start URL
```

## 使う技術

### Node.js

前提

### argv

引数をよしなに使えるようにするやつ

### node-notifier

MacOSのネイティブ通知を出すやつ

### opener

ブラウザで特定のURLを開くやつ

### @octokit/rest

GitHubに認証/情報の取得を行うやつ
