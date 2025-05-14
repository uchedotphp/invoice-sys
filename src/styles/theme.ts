export type ThemeMode = 'light' | 'dark' | 'system';

export interface Theme {
  id: ThemeMode;
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    accent: string;
    border: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  };
}

export const themes: Record<ThemeMode, Theme> = {
  light: {
    id: 'light',
    name: 'Light',
    colors: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      primary: '#0ea5e9',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      border: '#e5e5e5',
      card: '#ffffff',
      cardForeground: '#0a0a0a',
      muted: '#f5f5f5',
      mutedForeground: '#737373',
      error: '#ef4444',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
  },
  dark: {
    id: 'dark',
    name: 'Dark',
    colors: {
      background: '#0a0a0a',
      foreground: '#ffffff',
      primary: '#0ea5e9',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      border: '#262626',
      card: '#171717',
      cardForeground: '#ffffff',
      muted: '#262626',
      mutedForeground: '#a3a3a3',
      error: '#ef4444',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
  },
  system: {
    id: 'system',
    name: 'System',
    colors: {
      background: 'var(--system-background)',
      foreground: 'var(--system-foreground)',
      primary: '#0ea5e9',
      secondary: '#8b5cf6',
      accent: '#f59e0b',
      border: 'var(--system-border)',
      card: 'var(--system-card)',
      cardForeground: 'var(--system-card-foreground)',
      muted: 'var(--system-muted)',
      mutedForeground: 'var(--system-muted-foreground)',
      error: '#ef4444',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
  },
};