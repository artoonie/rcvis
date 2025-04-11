import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
    {
        ignores: ["**/dist/*.js", "*/dist/*.js", "**/*.config.js"]
    },
    	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},
		},
	},
	{ files: ["**/*.js"],
        plugins: { js },
        extends: ["js/recommended"],
        rules: {
          "@/semi": ["error", "always"],
        }
    }
]);
