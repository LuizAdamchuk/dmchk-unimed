export function NeutralFaceIcon({ width = 16, height = 16, fill = "white" }) {
  return (
    <div style={{ width, height }}>
      <svg
        style={{ width: "inherit", height: "inherit" }}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM5.5 5.5C6.03125 5.5 6.5 5.96875 6.5 6.5C6.5 7.0625 6.03125 7.5 5.5 7.5C4.9375 7.5 4.5 7.0625 4.5 6.5C4.5 5.96875 4.9375 5.5 5.5 5.5ZM11 11.5H5C4.3125 11.5 4.3125 10.5 5 10.5H11C11.6562 10.5 11.6562 11.5 11 11.5ZM10.5 7.5C9.9375 7.5 9.5 7.0625 9.5 6.5C9.5 5.96875 9.9375 5.5 10.5 5.5C11.0312 5.5 11.5 5.96875 11.5 6.5C11.5 7.0625 11.0312 7.5 10.5 7.5Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
