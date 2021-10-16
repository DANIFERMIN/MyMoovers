module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue,ts}',
    '!src/main.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!vue3-carousel|@vueform|vue-router)'],
  modulePathIgnorePatterns: ['src/main.ts', 'src/store/index.ts', 'src/assets/googleMaps/index.js','src/assets/googleMaps/autocomplete.js' ],
  testPathIgnorePatterns: ['src/assets/googleMaps']
};