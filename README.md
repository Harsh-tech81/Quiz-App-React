# 🚀 React Quiz Challenge

A modern, interactive quiz application built with **React 19**, **Vite**, and **Bootstrap 5**. This project demonstrates advanced React concepts including Context API, Custom Hooks, Lazy Loading, and Local Storage integration.

![React](https://img.shields.io/badge/React-19.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Key Concepts](#-key-concepts)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Features
- 🎯 **Interactive Quiz System** - Multiple choice questions with instant feedback
- ⏱️ **15-Second Timer** - Each question has a countdown timer
- 📊 **Progress Tracking** - Visual progress bar showing quiz completion
- 🏆 **Leaderboard System** - Stores and displays top scores with timestamps
- 💾 **Local Storage Integration** - Persists leaderboard data across sessions
- 🎨 **Responsive Design** - Mobile-friendly interface using Bootstrap 5
- ⚡ **Fast Loading** - Lazy loading implementation for optimized performance
- 🔄 **State Management** - Context API with useReducer for global state
- 🎭 **Loading States** - Suspense fallback for better UX

### Quiz Mechanics
- Automatic progression to next question after selection
- Score calculation with percentage display
- Automatic quiz completion when time runs out
- Sorted leaderboard by highest score
- Clear leaderboard functionality
- Reset quiz option to play again

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.2.0** - Latest version with improved rendering
- **React DOM 19.2.0** - DOM-specific methods
- **React Router DOM 7.11.0** - Client-side routing

### Build Tool
- **Vite 7.2.4** - Next-generation frontend tooling
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite

### Styling
- **Bootstrap 5.3.8** - Responsive CSS framework
- Custom CSS for additional styling

### Development Tools
- **ESLint 9.39.1** - Code linting and quality
- **eslint-plugin-react-hooks** - React Hooks linting
- **eslint-plugin-react-refresh** - React Fast Refresh support

## 🎓 Key Concepts

### 1. **React Context API**
- Global state management using `createContext`
- QuizContext provides state and dispatch to all components
- Eliminates prop drilling across component tree

### 2. **useReducer Hook**
- Complex state management with actions:
  - `SET_NAME` - Store username
  - `ANSWER` - Process answer and update score
  - `FINISH` - Mark quiz as completed
  - `RESET` - Reset quiz to initial state

### 3. **Custom Hooks**
- **useTimer** - Reusable countdown timer logic
  - Automatic countdown with setInterval
  - Reset functionality
  - Cleanup on unmount

### 4. **Lazy Loading & Suspense**
```jsx
const Result = lazy(() => import("./pages/Result"));

<Suspense fallback={<h2>Loading Page Please Wait...</h2>}>
  <Routes>...</Routes>
</Suspense>
```
- Code splitting for better performance
- Fallback UI during component loading
- Reduces initial bundle size

### 5. **Local Storage**
- Persistent leaderboard data
- JSON serialization/deserialization
- Automatic sorting by score
- Clear functionality for data management

### 6. **React Router**
- Multiple routes:
  - `/` - Home page (username entry)
  - `/quiz` - Quiz interface
  - `/result` - Results page
  - `/leaderboard` - Leaderboard display
- Programmatic navigation using `useNavigate`

### 7. **Component Composition**
- Reusable components (Timer, ProgressBar, QuestionCard)
- Props-based communication
- Clean separation of concerns

## 📁 Project Structure

```
QuizApp/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable components
│   │   ├── ProgressBar.jsx   # Visual progress indicator
│   │   ├── QuestionCard.jsx  # Question display component
│   │   └── Timer.jsx         # Countdown timer component
│   ├── context/
│   │   └── QuizContext.jsx   # Global state management
│   ├── data/
│   │   └── questions.json    # Quiz questions database
│   ├── hooks/
│   │   └── useTimer.js       # Custom timer hook
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── Quiz.jsx          # Main quiz interface
│   │   ├── Result.jsx        # Results display (lazy loaded)
│   │   └── LeaderBoard.jsx   # Leaderboard display
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # App entry point
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Harsh-tech81/Quiz-App-React.git
cd Quiz-App-React
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 💻 Usage

### Playing the Quiz

1. **Start Quiz**
   - Enter your name on the home page
   - Click "Start Quiz" button

2. **Answer Questions**
   - Read the question carefully
   - You have 15 seconds per question
   - Click on your chosen answer
   - Quiz automatically moves to next question

3. **View Results**
   - See your final score and percentage
   - Your score is automatically saved to leaderboard
   - Options to view leaderboard or return home

4. **Leaderboard**
   - View all past attempts sorted by score
   - See player names, scores, percentages, and timestamps
   - Clear leaderboard if needed

## 📸 Screenshots

### Home Page
- Clean interface with username input
- Start button to begin quiz

### Quiz Interface
- Timer display at top
- Progress bar showing completion
- Question card with multiple choice options

### Results Page
- Final score display
- Percentage calculation
- Navigation to leaderboard or home

### Leaderboard
- Sorted list of all attempts
- Detailed statistics for each player
- Clear button for data management

## 🔧 Configuration

### Adding New Questions

Edit `src/data/questions.json`:

```json
{
  "id": 1,
  "question": "Your question here?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "answer": "Correct Option"
}
```

### Adjusting Timer Duration

Modify the timer value in `src/pages/Quiz.jsx`:

```jsx
const { time, reset } = useTimer(15); // Change 15 to desired seconds
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Harsh**
- GitHub: [@Harsh-tech81](https://github.com/Harsh-tech81)
- Project Link: [Quiz-App-React](https://github.com/Harsh-tech81/Quiz-App-React)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Bootstrap team for the UI components
- All contributors and supporters

---

⭐ **Star this repository if you found it helpful!** ⭐
