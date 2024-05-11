module.exports = {
  extends: [
    'stylelint-config-standard', // cssファイル対応
    'stylelint-config-standard-scss', // scssに対応
    'stylelint-config-standard-vue/scss', // vueファイルに対応
    'stylelint-config-recess-order', // プロパティ並び替え
  ],
  rules: {
    'selector-id-pattern': null, // idでkebab-case以外も許容
    'selector-class-pattern': null, // classでkebab-case以外も許容
  },
};
