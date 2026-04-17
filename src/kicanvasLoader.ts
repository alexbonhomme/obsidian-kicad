/**
 * KiCanvas registers many custom elements globally.
 * Guard import so plugin disable/re-enable does not try to define them twice.
 */
export async function kicanvasLoader(): Promise<void> {
	if (!activeWindow.__obsidianKicadKicanvasLoadPromise) {
		activeWindow.__obsidianKicadKicanvasLoadPromise =
			import("./kicanvas/index.js").then(() => undefined);
	}

	await activeWindow.__obsidianKicadKicanvasLoadPromise;
}
