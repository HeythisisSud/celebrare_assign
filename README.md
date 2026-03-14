# Photo Gallery Web App

A responsive **Photo Gallery Web Application** built with **React + Vite + TypeScript + Tailwind CSS**.
The application fetches images from the **Picsum Photos API**, displays them in a responsive grid layout, allows users to **search photos by author name**, and lets users **mark photos as favourites**. Favourite photos are persisted using **localStorage**.

---

## Features

* **Fetch Photos from API**

  * Retrieves 30 photos from the Picsum Photos API on page load.
  * Displays a loading state while fetching.
  * Displays an error message if the request fails.

* **Responsive Grid Layout**

  * Mobile: 1 column
  * Tablet: 2 columns
  * Desktop: 4 columns

* **Search Filter**

  * Real-time filtering of photos by **author name**.
  * No additional API calls during search.
  * Implemented using `useCallback` and `useMemo`.

* **Favourites System**

  * Users can mark photos as favourites using a heart icon.
  * Favourites state is managed with **useReducer**.
  * Favourite photos persist across page refreshes using **localStorage**.

* **Custom Hook**

  * API fetching logic is extracted into a reusable custom hook:
  * `useFetchPhotos`

---

## Tech Stack

* **React**
* **Vite**
* **TypeScript**
* **Tailwind CSS**

---

## Project Structure

```
src
│
├── components
│   ├── Gallery.tsx
│   └── PhotoCard.tsx
│
├── hooks
│   └── useFetchPhotos.ts
│
├── reducer
│   └── favouritesReducer.ts
│
├── types
│   └── photo.ts
│
├── App.tsx
└── main.tsx
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/photo-gallery.git
```

### 2. Navigate to the project folder

```bash
cd photo-gallery
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## API Used

Picsum Photos API

```
https://picsum.photos/v2/list?limit=30
```

This API returns a list of photo objects containing:

* `id`
* `author`
* `download_url`

---

## Key React Concepts Used

### Custom Hook

`useFetchPhotos` handles:

* API request
* loading state
* error handling

### useReducer

Used to manage the favourites list.

Reducer actions:

```
TOGGLE_FAVOURITE
```

### useCallback

Used to memoize the **search input handler** to avoid unnecessary re-renders.

### useMemo

Used to compute the **filtered photo list** efficiently.

---

## Favourites Persistence

Favourite photo IDs are stored in **localStorage**.

Example stored format:

```json
["1","5","10"]
```

This ensures favourites remain selected even after refreshing the page.

---

## Responsive Design

Tailwind CSS grid system is used:

```
grid-cols-1      → mobile
sm:grid-cols-2   → tablet
lg:grid-cols-4   → desktop
```

---

## Demo

The application demonstrates:

* Photo loading from API
* Real-time search filtering
* Favourite photo selection
* Persistent state across refresh
* Responsive layout across devices

---

## Author

Sudhanshu Mani Tripathi

---
