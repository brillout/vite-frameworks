import {$} from "bun";

const REPOS = [
  'git@github.com:withastro/astro',
  'git@github.com:solidjs/solid-start',
  'git@github.com:nuxt/nuxt.js',
  'git@github.com:ElMassimo/iles',
  'git@github.com:analogjs/analog',
  'git@github.com:rakkasjs/rakkasjs',
  'git@github.com:BuilderIO/qwik',
  'git@github.com:redwoodjs/redwood',
  'git@github.com:sveltejs/kit',
  'git@github.com:remix-run/remix',
  'git@github.com:dai-shi/waku',
] as const

await main()

async function main() {
  await $`mkdir -p repos/`;

  const alreadyCloned = await $`ls repos/`.text()

  const repos = REPOS.filter(r => !alreadyCloned.includes(r))
  for (const repo of repos) {
    if (alreadyCloned.includes(getRepoDir(repo))) {
      await $`(cd repos/ && git pull)`;
    } else {
      await $`(cd repos && git clone ${repo})`;
    }
  }
}

function getRepoDir(repoGit: `git@github.com:${string}/${string}`) {
  return repoGit.split('/')[1]!
}
