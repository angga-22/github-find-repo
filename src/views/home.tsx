import { SetStateAction, useState } from "react"
import Search from "../components/Search"
import Card from "../components/Card"
import fetchGitRepo from "../services/fetch-git-repo"
import { GitRepo } from "../models/git-repo"
import "./style.css"
import Pagination from "../components/Pagination"
import Spinner from "../components/Spinner"
import EmptyState from "../components/EmptyRepo"
const home: React.FC = () => {
  const [query, setQuery] = useState<string>("")
  const [searchResult, setSearchResult] = useState<GitRepo[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSearchGitRepo = (search: string) => {
    setIsLoading(true)
    fetchGitRepo(search).then((result: { errors: any; items: SetStateAction<GitRepo[]> }) => {
      if (result.errors) {
        setSearchResult([])
        setIsLoading(false)
        throw new Error(result.errors)
      } else {
        setIsLoading(false)
        setSearchResult(result.items)
      }
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = searchResult.slice(indexOfFirstRepo, indexOfLastRepo);
  return (
    <div className="home-wrapper">
      <Search onEnter={onSearchGitRepo} query={query} handleChange={handleChange} />
      {currentRepos.map(item => (
        <div key={item.id}>
          <Card data={item} />
        </div>
      ))}
      {isLoading && <Spinner />}
      {searchResult.length === 0 && <EmptyState /> }
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={searchResult.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default home