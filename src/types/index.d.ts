import type { KiCanvasEmbedElement } from "./KiCanvasElement";

// eslint-disable-next-line obsidianmd/prefer-active-doc -- `declare global` is TS augmentation, not the runtime global object
declare global {
	interface Window {
		__obsidianKicadKicanvasLoadPromise?: Promise<void>;
	}

	interface HTMLElementTagNameMap {
		"kicanvas-embed": KiCanvasEmbedElement;
	}
}

export {};
