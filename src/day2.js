import { input } from "./input";

const inputArr = input.split(/\n/);
const opponent = ["A", "B", "C"];
const yourPlay = ["X", "Y", "Z"];

export function day2Star1() {
  const decisionMap = {};
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const str = opponent[i] + " " + yourPlay[j];
      let score =
        i === j
          ? 3 + j + 1
          : ((i + 1) % 3) + 1 === j + 1
          ? 6 + j + 1
          : 0 + j + 1;
      decisionMap[str] = score;
    }
  }
  const total = inputArr.reduce((acc, inst) => {
    return acc + decisionMap[inst];
  }, 0);
  console.log(total);
}

export function day2Star2() {
  console.log("day2Star2");
  const resultMap = {
    X: 0, //lose
    Y: 3, //draw
    Z: 6 //win
  };
  const total = inputArr.reduce((acc, inst) => {
    const [opponentPlay, result] = inst.split(" ");
    const shiftBy = result === "Y" ? 0 : result === "X" ? -1 : 1;
    const playScore = ((opponent.indexOf(opponentPlay) + shiftBy + 3) % 3) + 1;

    console.log(inst, playScore);
    return acc + resultMap[result] + playScore;
  }, 0);

  console.log(total);
}
