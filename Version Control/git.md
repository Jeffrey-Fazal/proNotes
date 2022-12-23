# Version Control

## git

workspace > stage > repo > remote (e.g github

git add > git commit -m "commit"

git diff - shows difference

git log - shows past commits

git show 0d22e4572aec8e22d6c873b2a6b30fe910974a07 | shows diff of commit hash

## git flow

1. add
   
   ```bash
   git add.
   ```

2. commit
   
   ```bash
   git commit -m "Added file"
   ```

3. push

```bash
git push origin
```

## Pushing to Git Hub

```bash
git remote add origin git@github.com:Jeffrey-Fazal/miniature-umbrella.git // git can have many remotes 
git branch -M main //renames master to main
git push -u origin main // syncs origin main, links origin/main together so you can simply use git push
```

git remote set-url origin: [git@github.com](mailto:git@github.com): [Managing remote repositories - GitHub Docs](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
