# Task-Manager-Pro

A high-performance, responsive Task Management application built with **React.js** and **Vite**. This project allows users to efficiently manage their daily tasks with persistent storage and a seamless user interface.

## 🚀 Live Demo
[task-manager-pro-lilac.vercel.app]

## ✨ Key Features
* **Full CRUD Operations**: Create, Read, Update, and Delete tasks easily.
* **Real-time Search**: Instant task filtering using a dedicated search bar.
* **Persistent Storage**: Integration with **LocalStorage** to keep data safe after page refreshes.
* **Theme Switching**: Toggle between **Light and Dark modes** for a better visual experience.
* **Responsive Design**: Fully optimized for Mobile, Tablet, and Desktop screens.

## 🛠️ Tech Stack
* **Frontend**: React.js (Hooks, Functional Components)
* **Build Tool**: Vite
* **Styling**: CSS3 (Modern Flexbox & Grid)
* **Storage**: Browser LocalStorage API

## 🧩 Challenges & Solutions

### 1. Data Persistence (LocalStorage)
**Problem**: Task data was lost every time the browser was refreshed.
**Solution**: Implemented `JSON.stringify` to save tasks in LocalStorage and used the `useEffect` hook to parse and retrieve the data during the initial component mount.

### 2. Instant Search Logic
**Problem**: Filtering through a large list of tasks was causing UI lag.
**Solution**: Optimized the search functionality by using a filtered array method that updates the UI in real-time as the user types in the search bar without affecting the original data state.

### 3. Theme State Management
**Problem**: The theme would reset to Light mode on every reload.
**Solution**: Synchronized the theme state with LocalStorage, ensuring the user's preference (Dark or Light) is remembered across different sessions.

## 📥 Installation & Setup
1. Clone the repository:
   `git clone https://github.com/qudratullah-stack/Task-Manager-Pro.git`
2. Install dependencies:
   `npm install`
3. Run the development server:
   `npm run dev`
