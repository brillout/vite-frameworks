# Usage example: ./add.sh sveltejs/kit sveltekit
git submodule add git@github.com:$1 $2
git commit -am "add $1"
