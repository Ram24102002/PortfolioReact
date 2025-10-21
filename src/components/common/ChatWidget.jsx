import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://YOUR_DEEPSEEK_WIDGET_URL.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="deepseek-chat-widget"></div>;
}
