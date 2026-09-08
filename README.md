# Full Stack Open Containers (Docker) Exercises

Submission repository for University of Helsinki **Full Stack Open: Containers (Part 12)**.

- **Student:** Atharv Gupta
- **Exercise Repository:** [Atharv-design/full-stack-open-containers](https://github.com/Atharv-design/full-stack-open-containers)
- **Custom Containerized Full-Stack App (Exercises 22 & 23):** [my-app Repository Directory](https://github.com/Atharv-design/full-stack-open-containers/tree/main/my-app)

---

## 📁 Repository Structure

### 1. `answers/`
Shell transcripts and CLI session outputs:
- `exercise1.txt` - Exercise 1: curl output
- `exercise2.txt` - Exercise 2: Ubuntu container shell session
- `exercise3.txt` - Exercise 3: Nano editor inside container
- `exercise4.txt` - Exercise 4: Node.js 24.x installation & script execution
- `exercise8.txt` - Exercise 8: Mongo CLI (mongosh) commands & database operations
- `exercise11.txt` - Exercise 11: Redis CLI (redis-cli) key operations & counter updates

### 2. `todo-app/` (Exercises 5 – 21)
Production-grade multi-tier containerized Todo Application:
- `todo-frontend/`: Vite + React single-page frontend with unit tests (`Todo.jsx`, `Todo.test.jsx`), development Dockerfile (`dev.Dockerfile`), and multi-stage production Dockerfile (`Dockerfile`).
- `todo-backend/`: Express.js backend with MongoDB and Redis caching, development Dockerfile (`dev.Dockerfile`), and production Dockerfile (`Dockerfile`).
- `nginx.dev.conf` / `nginx.conf`: Nginx reverse proxy configuration routing `/` to React frontend and `/api/` to Express backend.
- `docker-compose.dev.yml` / `docker-compose.yml`: Multi-container Compose configurations orchestrating Nginx, Frontend, Backend, MongoDB, and Redis.

### 3. `my-app/` (Exercises 22 & 23)
Custom full-stack containerized web application with development and production setups:
- `frontend/`: React Vite client with `dev.Dockerfile` (HMR on port 5173) and `Dockerfile` (multi-stage Nginx on port 80).
- `backend/`: Express REST API with `dev.Dockerfile` (nodemon) and `Dockerfile` (non-root Node production image).
- `nginx.dev.conf` / `nginx.conf`: Ingress reverse proxy configuration.
- `docker-compose.dev.yml` / `docker-compose.yml`: Development and production orchestration.

---

## 🧪 CI/CD & Automated Smoke Tests (Exercise 21)
- Continuous Integration workflow defined in `.github/workflows/e2e-tests.yml` runs automated Playwright E2E tests against the multi-container production stack on push to `main` and `master`.
