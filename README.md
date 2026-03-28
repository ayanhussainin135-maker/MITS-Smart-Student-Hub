# MITS Smart Hub

MITS Smart Hub is a modern, responsive web application designed for the MITS community. Built with React, Vite, and Tailwind CSS, it provides a centralized platform for academic resources, announcements, department information, and more.

## Features

- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Smart Search**: Quickly find academic resources and information.
- **Dark Mode**: Supports both light and dark themes for a personalized experience.
- **Interactive UI**: Featuring smooth animations with Framer Motion and modern UI components from shadcn/ui.
- **Academics & Resources**: Easy access to academic schedules, departments, and educational materials.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [Bun](https://bun.sh/) (or NPM/Yarn)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have one of the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Bun](https://bun.sh/) (Highly recommended for faster installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mits-smart-hub.git
    cd mits-smart-hub
    ```

2.  **Install dependencies:**
    Using Bun:
    ```bash
    bun install
    ```
    Or using NPM:
    ```bash
    npm install
    ```

### Running Locally

To start the development server:

Using Bun:
```bash
bun dev
```
Or using NPM:
```bash
npm run dev
```

Once started, open [http://localhost:8080](http://localhost:8080) in your browser to view the application.

## Building for Production

To create a production build of the application:

```bash
# Using Bun
bun run build

# Using NPM
npm run build
```

The output will be generated in the `dist/` directory, ready to be deployed.

## Project Structure

```text
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components (Index, NotFound)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and configurations
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── tailwind.config.ts # Tailwind CSS configuration
└── vite.config.ts     # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

## License

This project is licensed under the MIT License.
