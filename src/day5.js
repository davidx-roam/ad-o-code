function interpretDrawing(drawing) {
  const drawingLines = drawing.split(/\n/);
  const data = [];
  drawingLines.forEach((line) => {
    let index = 0;
    while (index < line.length) {
      const c = line.charAt(index);
      if (c !== " ") {
        const dataIndex = index > 0 ? index / 4 : 0;
        if (data[dataIndex]) {
          data[dataIndex].push(c);
        } else {
          data[dataIndex] = [c];
        }
      }
      index = index + 4;
    }
  });
}

export function day5star1(input) {
  const [drawing, instructions] = input.split(/\n\n/);
  const drawingData = interpretDrawing(drawing);
  console.log(drawingData);
}

export function day5star2(input) {}
