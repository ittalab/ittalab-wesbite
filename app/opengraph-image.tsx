import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Ittalab
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#525252",
            fontWeight: 400,
          }}
        >
          App studio. Built with care, not hype.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}