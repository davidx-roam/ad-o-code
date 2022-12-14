export function day4star1(input) {
  const pairs = input.split(/\n/);
  const overlaps = pairs.reduce((acc, inst) => {
    const [first, second] = inst.split(",");
    const [s1, e1] = first.split("-").map(Number);
    const [s2, e2] = second.split("-").map(Number);
    if ((s1 >= s2 && e1 <= e2) || (s2 >= s1 && e2 <= e1)) {
      console.log(first, second);
      return acc + 1;
    }
    return acc;
  }, 0);
  return overlaps;
}

export function day4star2(input) {
  const pairs = input.split(/\n/);
  const overlaps = pairs.reduce((acc, inst) => {
    const [first, second] = inst.split(",");
    const [s1, e1] = first.split("-").map(Number);
    const [s2, e2] = second.split("-").map(Number);
    if ((s1 >= s2 && s1 <= e2) || (s2 >= s1 && s2 <= e1)) {
      console.log(first, second);
      return acc + 1;
    }
    return acc;
  }, 0);
  return overlaps;
}
