Server API

Endpoints:
- POST /api/auth/register  (one-time setup: requires header x-setup-token)
- POST /api/auth/login
- GET /api/projects
- POST /api/projects (protected)
- PUT /api/projects/:id (protected)
- DELETE /api/projects/:id (protected)
- GET /api/blogs
- POST /api/blogs (protected)
- PUT /api/blogs/:id (protected)
- DELETE /api/blogs/:id (protected)

Environment variables: see .env.example
