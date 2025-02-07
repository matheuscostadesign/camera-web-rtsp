import "./App.css";
import VideoFeed from "./components/VideoFeed";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <h1>Câmera RTSP React</h1>
      <a
        href="https://github.com/matheuscostadesign/camera-web-rtsp"
        target="_blank"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://github.com/matheuscostadesign.png"
            width={32}
            height={32}
            style={{ borderRadius: "50%" }}
          />
          <p>Por Matheus Costa</p>
        </div>
      </a>
      <VideoFeed src="http://localhost:8083/stream/cameras/channel/0/hls/live/index.m3u8" />
    </div>
  );
}
