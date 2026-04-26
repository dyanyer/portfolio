type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassArray = ClassValue[];
export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

function flattenClass(input: ClassValue): string[] {
  if (!input) return [];
  if (typeof input === "string" || typeof input === "number") {
    return [String(input)];
  }
  if (Array.isArray(input)) {
    return input.flatMap(flattenClass);
  }
  return Object.entries(input)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className);
}

export function cn(...inputs: ClassValue[]) {
  return inputs.flatMap(flattenClass).join(" ");
}

export const cx = cn;

export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}
