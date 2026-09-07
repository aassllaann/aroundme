declare module 'node:fs' {
  export function existsSync(path: string): boolean;
  export function readdirSync(path: string): string[];
}

declare const process: { cwd(): string };

declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, unknown>);
    loadFromHTML(items: HTMLElement[]): void;
    getPageCount(): number;
    flipNext(corner: 'top' | 'bottom'): void;
    flipPrev(corner: 'top' | 'bottom'): void;
    on(event: 'flip', listener: (event: { data: number }) => void): void;
  }
}
