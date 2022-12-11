export function day3star1(input) {
  const rucksacks = input.split(/\n/);
  const sum = rucksacks.reduce((acc, inst) => {
    const instArray = inst.split("");
    const compartment1 = instArray.slice(0, instArray.length / 2);
    const compartment2 = instArray.slice(instArray.length / 2);
    const mySet = new Set();
    compartment1.forEach((item) => mySet.add(item));
    const commonChar = compartment2.find((item) => mySet.has(item));
    const commonCharCode = commonChar.charCodeAt(0);
    const commonItemPriority =
      commonCharCode >= "a".charCodeAt(0)
        ? commonCharCode - "a".charCodeAt(0) + 1
        : commonCharCode - "A".charCodeAt(0) + 1 + 26;

    return acc + commonItemPriority;
  }, 0);
  return sum;
}
