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
    - Edit the files as needed.

5. **Commit Your Changes:**
    ```sh
    git add .
    git commit -m "Describe your changes"
    ```

6. **Push Your Changes to GitHub:**
    ```sh
    git push origin your-branch-name
    ```

7. **Create a Pull Request:**
    - Go to your forked repository on GitHub.
    - Click the "Compare & pull request" button.
    - Add a title and description for your pull request.
    - Click "Create pull request".

8. **Prepare for the Next Change:**
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

## Previewing Your Changes

1. Serve the documentation locally:
    ```sh
    mkdocs serve
    ```

2. Open the following link in your browser to preview your website:
    [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
