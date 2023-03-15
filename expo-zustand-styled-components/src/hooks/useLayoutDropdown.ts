import { useEffect, useState, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { calculateDropdownHeight } from '../utils/calculateDropdownHeight';
const { height } = Dimensions.get('window');

export const useLayoutDropdown = (data) => {
  const [dropdownPX, setDropdownPX] = useState(0); // position x
  const [dropdownPY, setDropdownPY] = useState(0); // position y
  const [dropdownHEIGHT, setDropdownHEIGHT] = useState(() => {
    return calculateDropdownHeight(data?.length || 0);
  }); // dropdown height

  useEffect(() => {
    setDropdownHEIGHT(calculateDropdownHeight(data?.length || 0));
  }, [data]);

  const onDropdownButtonLayout = (h, px, py) => {
    if (height - 18 < py + h + dropdownHEIGHT) {
      setDropdownPX(px);
      setDropdownPY(py - 2 - dropdownHEIGHT);
    } else {
      setDropdownPX(px);
      setDropdownPY(py + h + 2);
    }
  };

  const dropdownWindowStyle = useMemo(() => {
    return {
      ...{
        borderTopWidth: 0,
        overflow: 'hidden',
      },
      ...{
        top: dropdownPY,
        position: 'absolute',
      },
      left: dropdownPX,
    };
  }, [dropdownPX, dropdownPY, dropdownHEIGHT]);

  return { dropdownWindowStyle, onDropdownButtonLayout };
};
