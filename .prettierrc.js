module.exports = {
  trailingComma: "all",
  semi: false,
  overrides: [
    {
      files: "*.md",
      options: {
        parser: "mdx",
      },
    },
  ],
}
