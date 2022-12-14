function interpretDrawing(drawing) {
  const drawingLines = drawing.split(/\n/);
  const data = [];
  drawingLines.forEach((line, lineNumber) => {
    let index = 0;
    while (lineNumber < drawingLines.length - 1 && index < line.length) {
      const c = line.charAt(index + 1);
      if (c !== " ") {
        const dataIndex = index > 0 ? index / 4 : 0;
        if (data[dataIndex]) {
          data[dataIndex].unshift(c);
        } else {
          data[dataIndex] = [c];
        }
      }
      index = index + 4;
    }
  });

  return data;
}

export function day5star1(input) {
  const [drawing, instructions] = input.split(/\n\n/);
  const drawingData = interpretDrawing(drawing);
  instructions.split(/\n/).forEach((instruction) => {
    const [_, numberToMove, _2, from, _3, to] = instruction.split(" ");
    for (let i = 0; i < numberToMove; i++) {
      const temp = drawingData[from - 1].pop();
      drawingData[to - 1].push(temp);
    }
  });
  return drawingData.map((stack) => stack.pop()).join(" ");
}

export function day5star2(input) {
  const [drawing, instructions] = input.split(/\n\n/);
  const drawingData = interpretDrawing(drawing);
  instructions.split(/\n/).forEach((instruction) => {
    const [_, numberToMove, _2, from, _3, to] = instruction.split(" ");
    const temp = drawingData[from - 1].splice(-1 * numberToMove);
    drawingData[to - 1] = drawingData[to - 1].concat(temp);
  });
  return drawingData.map((stack) => stack.pop()).join(" ");
}
