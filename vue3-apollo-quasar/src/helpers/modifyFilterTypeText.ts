const modifyFilterTypeText = (filterText: string): string => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};
export { modifyFilterTypeText };
