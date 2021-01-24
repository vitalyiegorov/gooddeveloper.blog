module.exports = {
    '*.{js,ts,tsx}': ['eslint --fix', () => 'tsc -p tsconfig.json --noEmit'],
};
