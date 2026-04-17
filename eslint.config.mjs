import { defineConfig } from "eslint/config";
import obsidianmd from "eslint-plugin-obsidianmd";

/** Rules that require @typescript-eslint parser services (see hybrid merge in eslint-plugin-obsidianmd). */
const obsidianTypeAwareOff = {
    "obsidianmd/no-plugin-as-component": "off",
    "obsidianmd/no-unsupported-api": "off",
    "obsidianmd/no-view-references-in-plugin": "off",
    "obsidianmd/prefer-file-manager-trash-file": "off",
    "obsidianmd/prefer-instanceof": "off",
};

export default defineConfig([
    ...obsidianmd.configs.recommended,
    {
        ignores: ["node_modules/**", "src/kicanvas/**", "main.js"],
    },
    {
        files: ["**/*.{cjs,mjs}", "package.json"],
        rules: obsidianTypeAwareOff,
    },
    // Obsidian's flat config uses `extends` with typescript-eslint; ESLint's defineConfig merge
    // can drop parserOptions needed for type-checked rules — restore explicitly for plugin source.
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
]);