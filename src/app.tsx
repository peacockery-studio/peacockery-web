import './index.css';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siGithub } from 'simple-icons';
import { Button } from '@/components/ui/button';

const projects = [
  {
    name: 'Python Boilerplate',
    description: 'A modern Python project template with best practices',
    url: 'https://github.com/peacockery-studio/python-boilerplate',
  },
  {
    name: 'Expo NativeWind UI Template',
    description: 'React Native Expo template with NativeWind styling',
    url: 'https://github.com/peacockery-studio/expo-nativewindui-template',
  },
  {
    name: 'Markdown Guillemets',
    description:
      'VSCode extension for French guillemets «» syntax highlighting',
    url: 'https://github.com/peacockery-studio/markdown-guillemets',
  },
];

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | null;

    if (initialTheme) {
      setTheme(initialTheme);
      root.classList.remove('light', 'dark');
      root.classList.add(initialTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center px-8">
      <Button
        aria-label="Toggle theme"
        className="absolute top-4 right-4"
        onClick={toggleTheme}
        size="icon"
        variant="ghost"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>

      <div className="max-w-4xl text-center">
        <h1 className="font-bold text-4xl">-- Peacockery --</h1>
        <p className="text-sm">dev studio</p>
        <p className="my-1 text-sm">||</p>
        <p className="mb-12 text-lg">survival of the creativest</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <a
              className="rounded-lg border border-black p-6 transition-colors hover:border-green-600 dark:border-current dark:hover:border-gray-400"
              href={project.url}
              key={project.name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h3 className="mb-2 font-semibold text-xl">{project.name}</h3>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                {project.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-gray-600 dark:text-gray-400">
            Managed by Chi
          </span>
          <Button asChild className="h-8 w-8" size="icon" variant="outline">
            <a
              aria-label="Chi's GitHub"
              href="https://github.com/chikingsley"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d={siGithub.path} />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
