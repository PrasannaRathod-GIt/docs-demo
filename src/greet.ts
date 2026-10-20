export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export class Counter {
  private count = 0;
  increment(): number {
    this.count += 1;
    return this.count;
  }
  reset(): void {
    this.count = 0;
  }
}
