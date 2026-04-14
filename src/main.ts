import { Plugin } from "obsidian";

import { KicadView, VIEW_TYPE_KICAD } from "./kicadView";

export default class ObsidianKicad extends Plugin {
	async onload() {
		this.registerView(VIEW_TYPE_KICAD, (leaf) => new KicadView(leaf));
		this.registerExtensions(["kicad_sch"], VIEW_TYPE_KICAD);
		this.registerExtensions(["kicad_pcb"], VIEW_TYPE_KICAD);
	}

	async onunload() {
		// Close all open KiCad leaves before the view is unregistered.
		this.app.workspace
			.getLeavesOfType(VIEW_TYPE_KICAD)
			.forEach((leaf) => leaf.detach());
	}
}
