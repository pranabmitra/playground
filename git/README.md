# Git

## <a name="setup"></a>Setup

To set the user and email:

```sh
git config --global user.name "pranab"
git config --global user.email "pranabtestdev@gmail.com"
```

## <a name="aliases"></a>Aliases

Displayed here as commands to configure the git client:

```sh
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.sts status
git config --global alias.cm commit
git config --global alias.unstage "reset HEAD --"
git config --global alias.last "log -1 HEAD"
git config --global alias.lastfivelog "log --oneline -5"

## <a name="create-branch"></a>Create a new branch

Create the new branch:

```sh
git co -b <NEW_LOCAL_BRANCH> <PARENT_BRANCH>
```

If we want the `PARENT_BRANCH` a different one in the remote then we can use `origin/BRANCH_NAME`.

Publish it to remote:

```sh
git push -u origin <REMOTE_BRANCH>
```

## <a name="rebase-branch"></a>Rebase branch

Let's say we're in a feature branch. We have to rebase the develop to sync with latest changes.

```sh
# checkout the develop branch
git co develop
# pull the latest
git pull
# go to the feature branch
git co feature_branch
# rebase develop 
git rebase develop
# if there are conflicts...
git rebase --continue

# push the changes
git push
# if we need override the changes, we have to use `--force`
git push -f
```

## <a name="merge-base"></a>Merge base

Let's we made so many commits including some temp commit in our feature branch. However, we don't want to commit all those messages. Want to use some nice commit message instead.

```sh
# Find out the common parts between the develop branch and feature branch
git merge-base feature_branch origin/develop
```
It will return a hash string. Now we need to reset with the hash string so that we can get our new changes as uncommited state. We can now separte the files with different commits.

```sh
# reset with that hash
git reset --soft [hash]
# stash to rebase the latest develop if needed
git stash
# rebase
git rebase origin/develop
# get back the changes
git stash pop
# commit one-by-ony - here we're doing two sepate commits
git add file1 file2
git cm -m "Added container component"
git add file3 file4
git cm -m "Added visual component"
# push the changes
git push -f
```

More details about [Interactive rebase](https://github.com/danikaze/recipes/blob/master/git.md#rebase-interactive)

## <a name="amend"></a>Change the commit message

```sh
git commit --amend
```
It will open up the editor(vim), we can change the message and push again with the new commit message.


