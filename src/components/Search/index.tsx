import "./style.css"
interface SearchProps {
  onEnter: (search: string) => void,
  query: string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Search: React.FC<SearchProps> = ({ onEnter, query, handleChange }) => {
  return (
    <>
      <input
        type="search"
        value={query}
        name="search-git"
        id="search-git"
        placeholder="Search Github Repositories"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter(query)
          }
        }}
      />
    </>
  )
}

export default Search