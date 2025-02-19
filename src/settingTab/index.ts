import { App, PluginSettingTab, Setting } from "obsidian";
import GhostPublish from "src/main";

export class SettingTab extends PluginSettingTab {
	plugin: GhostPublish;

	constructor(app: App, plugin: GhostPublish) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		containerEl.createEl("h2", { text: "Obsidian Ghost Publish" });

		const document = containerEl.createEl("p", {
			text: `Need help? Take a look on how to use me on `,
		});

		document.createEl("a", {
			attr: {
				href: "https://github.com/jaynguyens/obsidian-ghost-publish/blob/master/README.md",
			},
			text: "the documentation",
		});

		const donation = containerEl.createEl("p", {
			text: "You can support future development by ",
		});

		donation.createEl("a", {
			attr: {
				href: "https://www.buymeacoffee.com/jaynguyens",
			},
			text: "buy me a coffe ☕️",
		});

		containerEl.createEl("br");

		new Setting(containerEl)
			.setName("API URL")
			.setDesc(
				"Your full URL e.g: https://obsidian.md. Note, domain.com won't work."
			)
			.addText((text) =>
				text
					.setPlaceholder("https://obsidian.md")
					.setValue(this.plugin.settings.url)
					.onChange(async (value) => {
						console.log("Blog URL: " + value);
						this.plugin.settings.url = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Admin API Key")
			.setDesc("Your custom integration Admin API Key")
			.addText((text) =>
				text
					.setPlaceholder("6251555c94ca6")
					.setValue(this.plugin.settings.adminToken)
					.onChange(async (value) => {
						console.log("admin api key: " + value);
						this.plugin.settings.adminToken = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Base URL")
			.setDesc("Your base URL e.g: /ghost")
			.addText((text) =>
				text
					.setPlaceholder("/ghost")
					.setValue(this.plugin.settings.baseURL)
					.onChange(async (value) => {
						console.log("Base URL: " + value);
						this.plugin.settings.baseURL = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Screenshots Folder")
			.setDesc("Your screenshots folder e.g: /screenshots (no trailing slash)")
			.addText((text) =>
				text
					.setPlaceholder("/screenshots")
					.setValue(this.plugin.settings.screenshotsFolder)
					.onChange(async (value) => {
						console.log("Screenshots Folder: " + value);
						this.plugin.settings.screenshotsFolder = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Attachments Folder")
			.setDesc("Your attachments folder e.g: /attachments (no trailing slash)")
			.addText((text) =>
				text
					.setPlaceholder("/attachments")
					.setValue(this.plugin.settings.attachmentsFolder)
					.onChange(async (value) => {
						console.log("Attachments Folder: " + value);
						this.plugin.settings.attachmentsFolder = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
