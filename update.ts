import {$} from "bun";

await main()

async function main() {
  const repos = (await $`ls repos/`.text()).split('\n').filter(Boolean)
  for (const repo of repos) {
    const repoDir = `repos/${repo}`
    console.log(repoDir)
    await $`(cd ${repoDir} && git pull)`;
  }
}
