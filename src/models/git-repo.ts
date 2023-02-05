interface GitRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  watchers_count: number
  language: string
  forks_count: number
  open_issues_count: number
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
  score: number
  owner: {
    avatar_url: string
  }
}
interface CardProps {
  data: GitRepo
}

export type { GitRepo, CardProps }