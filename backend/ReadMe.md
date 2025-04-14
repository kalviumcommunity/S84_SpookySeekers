
md
Copy
Edit
## 🛠️ Milestone - Modifying Data through API (CRUD)

For this part of the ASAP project, the goal was to implement **CRUD (Create, Read, Update, Delete)** operations for ghost stories in the **SpookySeekers** project using the Express backend and the Bruno API client for testing.

### ✅ Tasks Completed:

- Created a new branch: `feature/api-crud-routes`
- Implemented the following CRUD routes in the Express backend:
  - `GET /api/entities/ghost_stories` – Fetch all stories
  - `POST /api/entities/ghost_stories` – Add a new ghost story
  - `PUT /api/entities/ghost_stories/:id` – Update an existing ghost story
  - `DELETE /api/entities/ghost_stories/:id` – Delete a ghost story
- Added route handlers in the controller file
- Defined all routes in `postRoutes.js`
  - Included all request files in the `docs.bruno` folder
- Created a PR and requested an AI review from `@CodiumAI-Agent`
- Addressed feedback from CodiumAI suggestions
- Merged the branch back into `main`