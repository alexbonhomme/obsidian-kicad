import { Plugin } from "obsidian";

import { KicadView, VIEW_TYPE_KICAD } from "./kicadView";

export default class ObsidianKicad extends Plugin {
	onload() {
		this.registerView(VIEW_TYPE_KICAD, (leaf) => new KicadView(leaf));
		this.registerExtensions(["kicad_sch"], VIEW_TYPE_KICAD);
		this.registerExtensions(["kicad_pcb"], VIEW_TYPE_KICAD);
	}
}
