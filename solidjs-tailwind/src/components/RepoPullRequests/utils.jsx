export const parseSortParams = (options, value,  position) => 
                  Object.keys(options).find(key => options[key] === value).split('^')[position]