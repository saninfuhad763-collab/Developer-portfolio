import { ThemeProvider } from './theme/ThemeProvider';
import { AppShell } from './layouts/AppShell';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <HomePage />
      </AppShell>
    </ThemeProvider>
  );
}

export default App;