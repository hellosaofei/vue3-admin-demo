import { ElNotification } from "element-plus";

type MessageType = "info" | "success" | "error" | "warning";

export function Notice(
  message,
  title = "温馨提示",
  duration = 2000,
  type: MessageType = "info",
  parseHtml = false
) {
  ElNotification.closeAll();
  ElNotification({
    message,
    title,
    type,
    duration,
  });
}
