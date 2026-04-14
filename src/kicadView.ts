import { FileView, TFile } from "obsidian";

import "./kicanvas";

export const VIEW_TYPE_KICAD = "kicad-view";

export class KicadView extends FileView {
	clear() {}

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
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl("kicanvas-embed", {
			attr: {
				src: this.app.vault.getResourcePath(file),
				controls: "full",
				controlslist: "nooverlay",
			},
		});
	}

	async onOpen() {}

	async onClose() {}
}
