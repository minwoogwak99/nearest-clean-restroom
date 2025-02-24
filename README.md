# Nearest Clean Restroom

A web application to help users find clean and accessible restrooms nearby.

## Project Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)
- MongoDB (Make sure it's installed and running)

### Installation Steps

1. Clone the repository
```bash
git clone https://github.com/minwoogwak99/nearest-clean-restroom.git
cd nearest-clean-restroom
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application should now be running at `http://localhost:3000`

## Git Tutorial for Beginners

### Basic Git Concepts
- **Repository (Repo)**: A folder that contains your project and its version history
- **Commit**: A snapshot of your code at a specific point in time
- **Branch**: A separate line of development
- **Remote**: A version of your repository hosted on a server (like GitHub)

### Essential Git Commands

1. **Initialize a new Git repository**
```bash
git init
```

2. **Check status of your files**
```bash
git status
```

3. **Stage files for commit**
```bash
git add filename    # Stage specific file
git add .          # Stage all changes
```

4. **Create a commit**
```bash
git commit -m "Your commit message here"
```

5. **View commit history**
```bash
git log
```

6. **Working with branches**
```bash
git branch          # List branches
git branch name     # Create new branch
git checkout name   # Switch to branch
git checkout -b name # Create and switch to new branch
```

7. **Working with remote repository**
```bash
git remote add origin <repository-url>
git push -u origin main    # Push to remote
git pull                   # Get latest changes
```

### Best Practices
1. Write clear, descriptive commit messages
2. Commit frequently with logical chunks of work
3. Always pull before starting new work
4. Create new branches for new features
5. Review your changes before committing

### Common Workflow
1. Create a new branch for your feature
2. Make changes and test them
3. Stage and commit your changes
4. Push to remote repository
5. Create a pull request for review
6. Merge changes after approval
