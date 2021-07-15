# Installation

1. [Install Prerequisites](https://jekyllrb.com/docs/installation/)

    I had to update ruby as one of the dependedt packages (zeitwerk-2.4.2) requested for ruby version >= 2.4.4.

    Ended up with specifying per-project installation of ruby as follows: 
    `rbenv install 2.7.4; rbenv local 2.7.4` 

1. Install the jekyll and bundler.

    `gem install jekyll bundler`

1. `bundle install`:  This command installs all the required packages.

1. `git clone git@github.com:pvis2022/pvis2022.git`, if you use an SSH key.

    Otherwise `git clone https://github.com/pvis2022/pvis2022.git`

1. `cd pvis2022` and `chmod a+x bin/*`

---

# Building and Running

- Building (`bin/build`) (re)generates the site under (`_site`).

- Serving (`bin/serve`) generates the site and launch a local Jekyll server.  This script opens the local site with your default Web browser.  The Jekyll server runs with `--incremental` mode, which allows detects updates on `*.md` file and reflects the changes to the Browser.
