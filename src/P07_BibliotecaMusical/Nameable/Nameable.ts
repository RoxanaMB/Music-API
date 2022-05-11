/**
 * Nameable interface describes an object that can be named.
 */
export interface Nameable {
  getName(): string;
  setName(name: string): void;
}