# My Express App

This project is a simple Express server scaffolded to run on port 8001. It uses Nodemon for automatic code reloading during development.

## Project Structure

```
my-express-app
├── src
│   └── app.js          # Entry point of the application
├── .gitignore          # Git ignore file
├── Dockerfile          # Dockerfile to build the application image
├── package.json        # NPM configuration file
├── yarn.lock           # Yarn lock file for dependency management
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd my-express-app
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the server**:
   ```bash
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the application using Docker, use the following commands:

1. **Build the Docker image**:
   ```bash
   docker build -t my-express-app .
   ```

2. **Run the Docker container**:
   ```bash
   docker run -p 8001:8001 my-express-app
   ```

The application will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.