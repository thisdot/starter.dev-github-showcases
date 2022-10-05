const modifyFilterTypeText = (filterText: string): string => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace(/.$/, 'ed');
    } else {
      filterText = filterText.replace(/.$/, '');
    }
  }
  return filterText;
};
export { modifyFilterTypeText };
