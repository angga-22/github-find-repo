const MAX_REQUESTS_PER_MINUTE = 60;
const url = 'https://api.github.com/search/repositories'
let numRequests = 0;
let resetTime = 0;

async function fetchGithubRepo(keyword: string): Promise<any> {
  if (numRequests >= MAX_REQUESTS_PER_MINUTE) {
    const timeUntilReset = resetTime - Date.now();
    if (timeUntilReset > 0) {
      await new Promise((resolve) => setTimeout(resolve, timeUntilReset));
    } else {
      numRequests = 0;
    }
  }
  try {
    const response = await fetch(`${url}?q=${keyword}&per_page=100`);
    numRequests++;
    const rateLimitReset = Number(response.headers.get("X-RateLimit-Reset")) * 1000;
    resetTime = Math.max(resetTime, rateLimitReset);
    return response.json();
  } catch {
    throw new Error('Error fetching data');
  }

}
export default fetchGithubRepo;