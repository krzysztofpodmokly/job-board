import { SelectItem } from '@/components/ui/select';
import countries from '@/data/countries.json';

export function CountrySelectItems() {
  return Object.entries(countries).map(([abbreviation, name]) => (
    <SelectItem key={abbreviation} value={abbreviation}>
      {name}
    </SelectItem>
  ));
}
