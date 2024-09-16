import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </main>
  );
}