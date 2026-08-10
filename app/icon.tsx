import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#11110f",
        color: "#f4f0e7",
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: -2,
      }}
    >
      <span>RK</span><span style={{ color: "#cc3311" }}>D</span>
    </div>,
    size,
  );
}
