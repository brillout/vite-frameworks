# There doesn't seem to be a way to initialize submodules without cloning
git submodule update --init --recursive
git submodule foreach 'git checkout'
