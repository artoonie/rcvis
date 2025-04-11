import {defineConfig} from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';

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
    {
        files: ["**/*.js", "**/*.ts"],
        plugins: {js, tseslint},
        extends: ["js/recommended", "tseslint/recommended"],
        rules: {
            "@/semi": ["error", "always"],
            "@typescript-eslint/no-explicit-any": ["off"],
             "@typescript-eslint/no-unsafe-function-type": ["warn"],
            "@typescript-eslint/no-this-alias": ["warn"]
        }
    }
]);
