# TaskMaster - Modern Task Management Application

![TaskMaster Screenshot](https://github.com/oliver-gomes/todo-next-sactions/assets/32399333/1fac414b-07f5-4ac8-872a-903a22e01d08)

TaskMaster is a modern, full-stack task management application built with Next.js 14, TypeScript, Prisma, and MongoDB. It features a beautiful, responsive UI with dark mode support and smooth animations.

## 🌟 Features

- ✨ Modern, responsive UI with dark mode support
- 🎨 Beautiful animations and transitions
- 📱 Mobile-first design
- 🔄 Real-time updates with server actions
- 🎯 Task creation, completion, and deletion
- 📊 Progress tracking
- 🌓 Light/Dark theme toggle
- 📅 Task timestamps
- 🚀 Built with Next.js 14 App Router
- 💾 MongoDB database with Prisma ORM
- 🎯 TypeScript for type safety

## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - React Icons
  - Server Actions

- **Backend:**
  - Next.js API Routes
  - Prisma ORM
  - MongoDB

- **Styling:**
  - Tailwind CSS
  - Custom animations
  - Dark mode support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```
   DATABASE_URL="your_mongodb_connection_string"
   ```

4. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── actions/         # Server actions for data mutations
├── app/            # Next.js app router pages
├── components/     # React components
│   ├── todos/     # Todo-related components
│   └── ...        # Other components
├── utils/         # Utility functions
└── types/         # TypeScript type definitions
```

## 🔧 Key Components

### Todo Management
- `AddTodo`: Form component for creating new tasks
- `Todo`: Individual todo item component with completion toggle and delete functionality
- `TodoList`: Container component for displaying todos

### UI Components
- `Navbar`: Responsive navigation with theme toggle
- `Footer`: Site footer with links and information
- Dark mode support with system preference detection

## 🎨 Features in Detail

### Dark Mode
- System preference detection
- Manual toggle in navbar
- Persistent theme selection
- Smooth transitions

### Task Management
- Create new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- View task creation timestamps
- Responsive design for all screen sizes

### Animations
- Fade-in effects
- Slide-up animations
- Smooth transitions
- Loading states

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Tailwind CSS for the utility-first CSS framework
- React Icons for the beautiful icons

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/taskmaster](https://github.com/yourusername/taskmaster)
