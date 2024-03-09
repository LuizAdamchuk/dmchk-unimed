function generateResponsiveFontSize(baseSize, increment) {
  const sizes = ["sm", "md", "lg"];
  const parsedSizes = sizes
    .map((size) => {
      const fontSize = (baseSize + sizes.indexOf(size) * increment).toFixed(1);
      return `${size}:text-[${fontSize}rem]`;
    })
    .join(" ");
  return `${parsedSizes}`;
}

export { generateResponsiveFontSize };
