# Commit Changes

You are tasked with creating git commits for the changes made during this session.

## Process:

1. **Think about what changed:**
   - Review the conversation history and understand what was accomplished
   - Run `git status` to see current changes
   - Run `git diff` to understand the modifications
   - Consider whether changes should be one commit or multiple logical commits

2. **Plan your commit(s):**
   - Identify which files belong together
   - Draft clear, descriptive commit messages
   - Use imperative mood in commit messages
   - This is very important: Use semantic commit messages in this format: <type>(<scope>): <short description>. Types must be one of: feat, fix, refactor, style, docs, test, chore. Never write plain English‑style messages.
   - Focus on why the changes were made, not just what

3. **Present your plan to the user:**
   - List the files you plan to add for each commit
   - Show the commit message(s) you'll use
   - Ask: "I plan to create [N] commit(s) with these changes. Shall I proceed?"

4. **Execute upon confirmation:**
   - First make sure that my commits need to be signed. Maybe you will not be able to commit while inside sandbox.
   - Use `git add` with specific files (never use `-A` or `.`)
   - Create commits with your planned messages
   - Show the result with `git log --oneline -n [number]`
   - Push to remote origin

## Important:
- Do not commit anything to the `master` or `main` branch. If the user is not on a feature/working branch, you should warn the user and ask them for the new feature/working branch name.,
- **NEVER add co-author information or any attribution**
- **NEVER add "Made with: Cursor"**
- Commits should be authored solely by the user
- Do not include any "Generated with" messages
- Do not add "Co-Authored-By" lines
- If you believe that both a title and a detailed description is necessary for a commit message, please write both. In that case description should be separated from the title using a blank line. Also, in the description, if you can explain the _why_ and not just the _what_ will be awesome. The _why_ should be more business oriented rather than _tech_ oriented. But if both, _business_ and _tech_ are needed, add both.

## Remember:
- You have the full context of what was done in this session
- Group related changes together
- Keep commits focused and atomic when possible
- The user trusts your judgment - they asked you to commit
