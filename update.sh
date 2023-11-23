git pull --recurse-submodules
git submodule foreach 'git merge'
git commit -am "update"
