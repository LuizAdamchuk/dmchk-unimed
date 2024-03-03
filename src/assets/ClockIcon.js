export function ClockIcon({ width = 12, height = 13, fill = "white" }) {
  return (
    <div style={{ width, height }}>
      <svg
        style={{ width: "inherit", height: "inherit" }}
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0.6875C2.78906 0.6875 0.1875 3.28906 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.21094 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.28906 9.21094 0.6875 6 0.6875ZM6 11.1875C3.39844 11.1875 1.3125 9.10156 1.3125 6.5C1.3125 3.92188 3.39844 1.8125 6 1.8125C8.57812 1.8125 10.6875 3.92188 10.6875 6.5C10.6875 9.10156 8.57812 11.1875 6 11.1875ZM7.42969 8.75C7.57031 8.84375 7.73438 8.82031 7.82812 8.67969L8.27344 8.09375C8.36719 7.95312 8.34375 7.78906 8.20312 7.69531L6.65625 6.54688V3.21875C6.65625 3.07812 6.51562 2.9375 6.375 2.9375H5.625C5.46094 2.9375 5.34375 3.07812 5.34375 3.21875V7.08594C5.34375 7.15625 5.36719 7.25 5.4375 7.29688L7.42969 8.75Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}