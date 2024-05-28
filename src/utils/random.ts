import { nanoid } from "nanoid";

/**
 * 生成随机数
 */
export function randomInt(m: number, n: number) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
}

/**
 * 生成随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 生成的随机数
 */
export function randomNum(min: number, max: number) {
  switch (arguments.length) {
    case 1:
      return parseInt((Math.random() * min + 1).toString(), 10);
      break;
    case 2:
      return parseInt((Math.random() * (max - min + 1) + min).toString(), 10);
      break;
    default:
      return 0;
      break;
  }
}

/**
 * 生成全球唯一标识
 * @returns uuid
 */
export function uuid(): string {
  return nanoid();
}

/**
 * 时间段问候语
 */
export const getDayText = () => {
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  if (hours >= 6 && hours <= 10) return `早上好！`;
  if (hours >= 10 && hours <= 14) return `中午好！`;
  if (hours >= 14 && hours <= 18) return `下午好！`;
  if (hours >= 18 && hours <= 24) return `晚上好！`;
  if (hours >= 0 && hours <= 6) return `凌晨好！`;
};
