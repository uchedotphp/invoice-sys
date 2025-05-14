import { useTheme } from '../context/ThemeContext';
import { ThemeMode, themes } from '../styles/theme';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeMode)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-sm"
      >
        {Object.entries(themes).map(([id, { name }]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}