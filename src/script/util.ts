export type Vec = [number, number];

// 度数法から弧度法への変換
export const radian = (degree: number): number => {
  return (degree * Math.PI) / 180;
};

// ベクトルの単位化
export const normalize = (v: Vec): Vec => {
  const len = Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
  return [v[0] / len, v[1] / len];
};

// ベクトルの内積
export const dot = (v0: Vec, v1: Vec): number => {
  return v0[0] * v1[0] + v0[1] * v1[1];
};

// ベクトルの外積
export const cross = (v0: Vec, v1: Vec): number => {
  return v0[0] * v1[1] - v0[1] * v1[0];
};

// 回転ベクトル
export const rotate2D = (v: Vec, rad: number): Vec => {
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);
  return [v[0] * cos + v[1] * -sin, v[0] * sin + v[1] * cos];
};

// 与えられた範囲内のランダムな整数を生成
export const rand = (range: number = 10): number => {
  return Math.floor(Math.random() * range);
};

// 画像の同期的読み込み
export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = e => reject(e);
    image.src = src;
  });
};