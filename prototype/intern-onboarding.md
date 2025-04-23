# Peacockery Web Onboarding Guide

Welcome to the Peacockery Web project! This guide will help you get set up with everything you need to start contributing to the project.

## 1. Cloning the Repository

You have a few options to clone the repository:

### Option A: Using GitHub Desktop
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. In the GitHub repository page, click the green "Code" button
3. Select "Open with GitHub Desktop"
4. Follow the prompts to complete the clone
5. You can then use the "Open in Visual Studio Code" option in GitHub Desktop to open the project

### Option B: Using Git Command Line
1. Make sure Git is installed on your PC
2. Open Command Prompt or PowerShell
3. Navigate to the directory where you want to clone the repository
4. Run: `git clone https://github.com/[username]/peacockery-web.git`
5. Navigate into the project: `cd peacockery-web`

### Option C: Using GitHub CLI
1. Install GitHub CLI on Windows using [winget](https://github.com/cli/cli#installation) or [scoop](https://scoop.sh/):
   ```
   winget install --id GitHub.cli
   ```
   or
   ```
   scoop install gh
   ```
2. Authenticate with `gh auth login`
3. Clone the repository: `gh repo clone [username]/peacockery-web`

### Option D: Cloning directly in VS Code
1. Open VS Code
2. Press Ctrl+Shift+P to open the command palette
3. Type "Git: Clone" and select it
4. Enter the repository URL and select a local folder
5. VS Code will clone the repository and prompt you to open it

## 2. Setting Up Your Development Environment

### Installing Required Tools

#### Install Bun
On Windows, you'll need to use Windows Subsystem for Linux (WSL) to run Bun:
1. Install WSL by opening PowerShell as Administrator and running:
   ```
   wsl --install
   ```
2. Once WSL is installed and you've set up a Linux distribution, run:
   ```
   curl -fsSL https://bun.sh/install | bash
   ```
3. Follow the prompts to complete the installation

#### Install pnpm
On Windows, you can install pnpm using:
```
npm install -g pnpm
```

#### Install GitHub CLI (if you haven't already)
Using winget:
```
winget install --id GitHub.cli
```
Or using scoop:
```
scoop install gh
```

### Setting Up the Project

1. Navigate to the project directory in your terminal
2. Install dependencies:
   ```
   bun install
   ```
3. Start the development server:
   ```
   bun dev
   ```
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
5. If you see the starter page, your setup is complete!

## 3. Working on Your First Feature

We'll be working on implementing the UI from our prototype. Here's how to get started:

### Create a New Branch

Using the command line:
```
git checkout -b v0-ui
```

Using VS Code GUI:
1. Click on the branch name in the bottom-left corner of VS Code
2. Select "Create new branch" from the dropdown
3. Type "v0-ui" and press Enter

### Implementing the UI

1. Copy the Peacockery prototype (`peacockery-prototype.tsx`) to the v0.dev site
2. Use the following prompt for v0.dev:
   > I'm optimizing a website/portfolio for a creative studio called Peacockery. Here's my prototype design. Please help me implement this as a responsive, well-structured website with working components.

3. Review the generated code and make any necessary adjustments
4. When satisfied with the result, export the project as a ZIP file
5. Unzip the contents and place them in the `prototype` folder

## 4. Committing and Pushing Your Changes

### Using Git Command Line
```
git add .
git commit -m "Add v0 UI implementation"
git push origin v0-ui
```

### Using VS Code GUI
1. Click on the Source Control icon in the VS Code sidebar (or press Ctrl+Shift+G)
2. You'll see a list of changed files
3. Enter a commit message in the text box
4. Click the checkmark icon to commit
5. Click on the "..." menu and select "Push"
6. If prompted, select "Publish Branch"

### Opening a Pull Request
1. Go to the GitHub repository page
2. You should see a prompt to create a pull request for your recently pushed branch
3. Click on "Compare & pull request"
4. Add a description of your changes
5. Click "Create pull request"

## 5. Next Steps

After implementing the UI, we'll need to:

1. Create blocks inside Payload CMS to match our prototype sections
2. Create collections in Payload to manage the content

### Recommended Learning Resources

Before diving deeper into the project, we recommend completing these resources to build your knowledge base. For each course, consider creating a separate repo to track your progress and build a portfolio of your learning projects.

#### Payload CMS Tutorials
1. [Payload CMS Tutorial from the CEO (Part 1)](https://youtu.be/ngm786aqnuo?si=fYfzSEqf2kVcASdz) - An excellent introduction to Payload from the CEO
2. [Payload Template Walkthrough](https://www.youtube.com/watch?v=Uyq0W6vc8Ds) - A comprehensive hour-long walkthrough of the Payload template

#### Scrimba Courses
1. [Learn TypeScript](https://scrimba.com/learn-typescript-c03c) - A fundamental course for understanding TypeScript, how to use it, and its purpose
2. [Intro to Supabase](https://scrimba.com/intro-to-supabase-c0abltfqed) - Hands-on experience with Supabase, our primary database
3. [UI Design Fundamentals](https://scrimba.com/intro-to-ui-design-fundamentals-c0q) - Learn UI principles to understand what makes good design

These resources are currently free to access. For each course, we recommend starting a new repository where you can commit your progress and create a final project that demonstrates what you've learned.

### Working with Payload

Once you're familiar with the basics, you'll be:
1. Creating block components that match the sections in our prototype
2. Setting up collections to manage content like projects, team members, etc.
3. Connecting the frontend components to the CMS data

If you have any questions at any point, don't hesitate to reach out! 