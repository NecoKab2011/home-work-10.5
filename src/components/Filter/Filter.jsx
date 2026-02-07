import { Input } from "./Filter";

const Filter = ({ value, onChange }) => (
  <Input
    type="text"
    name="filter"
    value={value}
    onChange={onChange}
    placeholder="Find contacts by name"
  />
);

export default Filter;
