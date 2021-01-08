export function makeLpsArray(pattern: string): number[] {
  if (pattern.length === 0) return [];

  const table = [0];
  let prefixIdx = 0;
  let suffixIdx = 1;

  while (suffixIdx < pattern.length) {
    if (pattern[prefixIdx] === pattern[suffixIdx]) {
      table.push(prefixIdx + 1);

      suffixIdx += 1;
      prefixIdx += 1;
    } else if (prefixIdx === 0) {
      table.push(0);

      suffixIdx += 1;
    } else {
      prefixIdx = table[prefixIdx - 1];
    }
  }

  return table;
}

function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;

  const lpsArray = makeLpsArray(needle);
  let textIdx = 0;
  let patternIdx = 0;

  while (textIdx < haystack.length) {
    if (haystack[textIdx] === needle[patternIdx]) {
      if (patternIdx === needle.length - 1) {
        return textIdx - needle.length + 1;
      }

      textIdx += 1;
      patternIdx += 1;
    } else if (patternIdx > 0) {
      patternIdx = lpsArray[patternIdx - 1];
    } else {
      patternIdx = 0;
      textIdx += 1;
    }
  }

  return -1;
}

/* NAIVE IMPLEMENTATION

function strStr(haystack: string, needle: string): number {

  if (needle === "") return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i
  }

  return -1

};

*/

export default strStr;
