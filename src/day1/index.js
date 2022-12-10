import { input } from "./input";

export function day1Star1() {
  const { maxSum } = input.split(/\n/).reduce(
    (prev, instance) =>
      instance === ""
        ? {
            runningSum: 0,
            maxSum: Math.max(prev.runningSum, prev.maxSum)
          }
        : {
            runningSum: prev.runningSum + Number(instance),
            maxSum: prev.maxSum
          },
    { runningSum: 0, maxSum: 0 }
  );
  console.log(maxSum);
}

export function day1Star2() {
  const { maxSums } = input.split(/\n/).reduce(
    (prev, instance) =>
      instance === ""
        ? {
            runningSum: 0,
            maxSums: [...prev.maxSums, prev.runningSum]
          }
        : {
            runningSum: prev.runningSum + Number(instance),
            maxSums: prev.maxSums
          },
    { runningSum: 0, maxSums: [] }
  );
  console.log(
    maxSums
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, inst) => acc + inst, 0)
  );
}
