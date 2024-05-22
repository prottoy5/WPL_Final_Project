This is a gym website implemented using react

name: Gym Website Deployment

on:
  push:
    branches:
      - main  # Adjust branch name as needed

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Install dependencies
      run: npm install  # Adjust for your project, e.g., npm, pip, etc.

    - name: Build project
      run: npm run build  # Adjust for your project build command

    - name: Run tests
      run: npm test  # Adjust for your project test command

    - name: Deploy to server
      uses: easingthemes/ssh-deploy@v2
      with:
        server: ${{ secrets.SERVER_IP }}  # Set your server IP as a secret
        username: ${{ secrets.SERVER_USERNAME }}  # Set your server username as a secret
        key: ${{ secrets.SSH_PRIVATE_KEY }}  # Set your SSH private key as a secret
        source: "dist/"  # Adjust for your project build output directory
        target: "/var/www/html"  # Adjust for your server's directory


