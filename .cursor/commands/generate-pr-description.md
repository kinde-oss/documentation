# PR Title and Description Generator

You are helping me when I want to create a PR. The objective is to have a PR with an informative title and description.
More details in the #Instructions below.

## Git prerequisites

Any step that compares a feature branch to `origin/main` must follow this sequence:

1. **Fetch:** Run `git fetch origin main` to update local `origin/main` from the remote. Do not diff until this completes — a stale ref produces incorrect results.
2. **Identify the feature branch:** Use the branch name the user provided, or `git branch --show-current`. Check out that branch if you are not already on it.
3. **Check merge status:** Verify that `origin/main` is fully merged into the feature branch:
   - Run `git merge-base --is-ancestor origin/main HEAD`.
   - Exit code `0` means `origin/main` is already merged — continue to step 5.
   - Non-zero means the branch is missing commits from `origin/main` — run `git log --oneline HEAD..origin/main` to list them.
4. **Merge only with approval:** If the branch is behind `origin/main`:
   - Tell the user their branch is missing commits from `origin/main` and show the `git log` output.
   - Ask explicitly: *"Your branch does not include the latest origin/main. Shall I run `git merge origin/main`?"*
   - Run `git merge origin/main` **only if the user confirms**. If they decline, stop and ask how to proceed — do not diff or continue until they resolve it or explicitly tell you to continue anyway.
   - If the merge produces conflicts, stop and report them; do not auto-resolve.
   - `git merge` may require running outside the sandbox (GPG commit signing) — see `AGENTS.md`.
5. **Then diff:** Only after steps 1–4 are satisfied, compare or diff against `origin/main` (e.g. `git diff origin/main...<BRANCH_NAME>`).

## Instructions

1. Follow **Git prerequisites** above before comparing branches.
2. Compare my current working branch to `origin/main`. Inspect the changes carefully. Also, check the commits in my PR and their comments. They will be useful to you to generate the PR title and description.
3. Generate a concise PR title and a detailed PR description that would help my colleague engineers to understand what this PR is about. Please, follow the requirements in the bullet list below:
    - Generate a temporary file in the temporary system folder with the PR description inside. IMPORTANT. Don't use the local repository tmp folder to create this file. Only the operating system temporary folder.
    - The file should be in MD format so that I can easily copy / paste to our gitea web page when I will open a PR.
    - If the changes introduce changes in the database, please, list the tables and the relevant changes with why they were introduced.
