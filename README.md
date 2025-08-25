React + JavaScript Technical Assessment

Goal

Build a small, single-page React app that lets a user browse a list of movies, with search, filter, and sort. Implement one small utility function in plain JavaScript and write a unit test for it.

If you run out of time, commit what you have and add brief TODO notes.

Remember: treat this as you would a real production environment.

Requirements:

1. Project Setup: React hooks only

2. Data Loading: Load movies.json via fetch from /data/movies.json (or import it statically)

3. UI Features:
  a. Search by movie title (case-insensitive)
  b. Filter by genre (dropdown or pill list).
  c. Sort by rating (desc) and year (desc/asc) (a select is fine)
  d. Show a count like 'Showing 8 of 12'
  e. Each row/card shows: title, year, rating, genres, and duration (duration formatted like "1h 45m" using a utility function you will create)
  f. Empty state when nothing matches
  g. Loading and error states

4. Behavior:
  a. Debounce the search input (300ms) using your own debounce implementation
  b. Persist a simple "Favorite" toggle per movie in localstorage (use a star icon or a button). Favorited items should visibly indicate their state

5. Accessibility and responsiveness:
  a. Keyboard focus works, controls are labeled, and layout is usable on mobile

6. Utility Functions
  a. Build and Use formatDuration in your movie list UI.
  b. Create a new utility function called debounce(fn, delay) yourself and use it for the search box.

Be sure to commit as you work, and push your code up to your forked repository. Once done, create a merge request with what you have completed.
