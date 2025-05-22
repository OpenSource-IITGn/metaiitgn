# Setup and Contribution Guide

## Installation

1. Install `mkdocs`:
    ```sh
    pip install mkdocs
    ```

2. Install the `mkdocs-material` theme:
    ```sh
    pip install mkdocs-material
    ```

## Forking and Contributing

1. **Fork the Repository:**
    - Go to the repository page on GitHub.
    - Click the "Fork" button at the top right of the page.

2. **Clone Your Forked Repository:**
    ```sh
    git clone https://github.com/YOUR_USERNAME/metaiitgn.git
    cd REPOSITORY_NAME
    ```

3. **Create a New Branch:**
    ```sh
    git checkout -b your-branch-name
    ```

4. **Make Your Changes:**
    - Refer **How to add a webpage heading** below this
    - Edit the files as needed.

6. **Commit Your Changes:**
    ```sh
    git add .
    git commit -m "Describe your changes"
    ```

7. **Push Your Changes to GitHub:**
    ```sh
    git push origin your-branch-name
    ```

8. **Create a Pull Request:**
    - Go to your forked repository on GitHub.
    - Click the "Compare & pull request" button.
    - Add a title and description for your pull request.
    - Click "Create pull request".

9. **Prepare for the Next Change:**
    - Go to your fork on Github, open the `main` branch. Here, click "Sync Fork"
    - Now, go back to your code editor (eg. VS Code)
    - Go to the `main` branch:
    ```sh
    git checkout main
    ```
    - Pull the latest changes:
    ```sh
    git pull origin main
    ```
    - Create a new branch for your next change:
    ```sh
    git checkout -b your-next-branch-name
    ```

## How to add a webpage

1. Follow the first 3 steps mentioned above.
2. The folder (containing the clone) in a code editor, eg. VS Code
3. Open the docs folder
4. Create an md file with the appropriate name, eg. `academics_branches.md`
5. Add your content to this file
6. Open the mkdocs.yml file
7. Add your page to the list, eg. `Branches: academics_branches.md`

## Previewing Your Changes

1. Serve the documentation locally:
    ```sh
    mkdocs serve
    ```

2. Open the following link in your browser to preview your website:
    [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Deployment

The website is automatically deployed to GitHub Pages at [https://opensource-iitgn.github.io/metaiitgn/](https://opensource-iitgn.github.io/metaiitgn/) when changes are merged to the main branch.

### How it works:
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) is triggered on every push to the main branch
- It builds the MkDocs site and deploys it to GitHub Pages
- The site is served at the `/metaiitgn/` subdirectory path

### Manual deployment:
You can also trigger the deployment manually by going to the Actions tab in the GitHub repository and running the "Deploy MkDocs to GitHub Pages" workflow.
