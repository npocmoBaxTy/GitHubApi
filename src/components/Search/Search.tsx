import { FC } from "react";

interface ISearch {
  query: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search: FC<ISearch> = ({ query, handleSearch }) => {
  return (
    <div className="header__search--form w-full flex justify-center px-3 sm:px-10">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="py-1 px-2 border border-gray-300 w-1/2 rounded-md outline-none"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
