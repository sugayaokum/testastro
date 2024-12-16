// globローダーをインポート
import { glob } from "astro/loaders";
// `astro:content`からユーティリティをインポート
import { z, defineCollection } from "astro:content";

// 各コレクションのために`loader`と`schema`を定義
const blog = defineCollection({
    // globローダーを使って、`src/blog`ディレクトリ内のマークダウンファイルを読み込む
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    
    // コレクションのスキーマを定義
    schema: z.object({
      title: z.string(),           // タイトル（文字列）
      pubDate: z.date(),           // 公開日（日付）
      description: z.string(),     // 説明（文字列）
      author: z.string(),          // 著者（文字列）
      image: z.object({            // 画像オブジェクト
        url: z.string(),           // 画像のURL（文字列）
        alt: z.string()            // 画像の代替テキスト（文字列）
      }),
      tags: z.array(z.string())    // タグ（文字列の配列）
    })
});

// コレクションを登録するために、`collections`オブジェクトをエクスポート
export const collections = { blog };
