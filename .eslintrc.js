module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json",
    },
    extends: ["plugin:@typescript-eslint/recommended"],
    plugins: [
        "@typescript-eslint"
    ],
}