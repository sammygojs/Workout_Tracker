import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Workout Tracker',
  description: 'Track your workout with ease',
}
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </main>
  );
}