import ObsidianKicad from "./main";
import { App, PluginSettingTab } from "obsidian";

export default class KicadPluginSettingsTab extends PluginSettingTab {
	plugin: ObsidianKicad;

	constructor(app: App, plugin: ObsidianKicad) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();
	}
}
