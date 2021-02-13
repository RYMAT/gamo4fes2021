// ライブアーカイブ用
export interface Archive {
  // youtubeの埋め込み用src
  srcUrl: string;
  // 画面遷移用src
  linkUrl: string;
  // キャプション
  captionLabel: string | null;
}
