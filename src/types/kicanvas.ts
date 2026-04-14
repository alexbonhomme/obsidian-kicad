interface KiCanvasEmbedElement extends HTMLElement {
	src: string;
	controls: string;
	controlslist: string;
	theme: string;
	zoom: string;
	loading: boolean;
	loaded: boolean;
}

declare global {
	interface HTMLElementTagNameMap {
		"kicanvas-embed": KiCanvasEmbedElement;
	}
}

export {};
