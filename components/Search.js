import { useCombobox } from 'downshift';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

export default function Search() {
  const { getMenuProps, getInputProps, getComboboxProps } = useCombobox({
    items: [],
    onInputValueChange() {
      console.log('Input changed!!');
    },
    onSelectedItemChange() {
      console.log('Selected Item changed!!');
    },
  });
  return (
    <SearchStyles>
      <div>
        <input type="search" />
      </div>
      <DropDown>
        <DropDownItem>Hi</DropDownItem>
        <DropDownItem>Ho</DropDownItem>
        <DropDownItem>Heh</DropDownItem>
      </DropDown>
    </SearchStyles>
  );
}
