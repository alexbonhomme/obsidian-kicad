import { FileView, TFile } from "obsidian";

import { kicanvasLoader } from "./kicanvasLoader";

export const VIEW_TYPE_KICAD = "kicad-view";

export class KicadView extends FileView {
	private embedEl: HTMLElementTagNameMap["kicanvas-embed"] | null = null;

	getViewType() {
		return VIEW_TYPE_KICAD;
	}

	getIcon() {
		return "ketcher";
	}

	getDisplayText() {
		return this.file?.basename ?? "kicad";
	}

	async onLoadFile(file: TFile) {
		await kicanvasLoader();

		const container = this.containerEl;
		container.empty();
		this.embedEl = container.createEl("kicanvas-embed", {
			cls: "kicad-fade-in",
			attr: {
				src: this.app.vault.getResourcePath(file),
				controls: "full",
				controlslist: "nooverlay",
				theme: this.app.isDarkMode() ? "witchhazel" : "kicad",
			},
		});

		requestAnimationFrame(() => this.embedEl?.addClass("is-visible"));
	}

	async onClose() {
		this.embedEl = null;
	}
}
