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


## <a name="change_author"></a>Change the author of all wrong pushed commits

Run the following in the console of the repository location:

```sh
git filter-branch -f --env-filter '
OLD_EMAIL="pranab@old.com"
CORRECT_NAME="Pranab"
CORRECT_EMAIL="pranab@correct.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
 export GIT_COMMITTER_NAME="$CORRECT_NAME"
 export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
 export GIT_AUTHOR_NAME="$CORRECT_NAME"
 export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

We can see the log by running the following:
```sh
git log
```

Excute the following to push the changes:
```sh
git push --force --tags origin 'refs/heads/*'
# or
git push origin [branch_name] --force
```

## <a name="rename_branch"></a>Rename a local and remote branch

```sh
# rename local branch
git branch -m new-branch

# rename from a different branch
git branch -m old-branch new-branch

# delete the old remote branch and push the new local branch
git push origin :old-branch new-branch

# reset the upstream branch for the new local branch
git push origin -u new-branch
```

## <a name="current_branch"></a>Get the current branch

```sh
# get the current branch
git rev-parse --abbrev-ref HEAD

# using node `child_process`
import { execSync } from 'child_process';

const currentBranch = execSync('git rev-parse--abbrev-ref HEAD').toString().replace('\n', '');
```