declare global {
	interface Window {
		__obsidianKicadKicanvasLoadPromise?: Promise<void>;
	}
}

/**
 * KiCanvas registers many custom elements globally.
 * Guard import so plugin disable/re-enable does not try to define them twice.
 */
export async function kicanvasLoader(): Promise<void> {
	if (!window.__obsidianKicadKicanvasLoadPromise) {
		// @ts-expect-error KiCanvas bundle is side-effect only (no exports).
		window.__obsidianKicadKicanvasLoadPromise = import("./kicanvas").then(
			() => undefined
		);
	}

	await window.__obsidianKicadKicanvasLoadPromise;
}
