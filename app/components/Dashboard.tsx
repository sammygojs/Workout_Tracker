'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

type Workout = {
  id: number;
  date: string;
  type: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export default function Dashboard() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [workoutToDelete, setWorkoutToDelete] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const res = await fetch('/api/workouts');
      if (res.ok) {
        const data = await res.json();
        setWorkouts(data);
      } else {
        console.error('Failed to fetch workouts');
      }
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const deleteWorkout = async (id: number) => {
    try {
      const res = await fetch(`/api/workouts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchWorkouts();
      } else {
        console.error('Failed to delete workout');
      }
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
    setWorkoutToDelete(null);
  };

  const sortedAndFilteredWorkouts = workouts
    .filter(workout => filterType === 'all' || workout.type === filterType)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="p-4 text-black">
      <h1 className="text-2xl font-bold mb-4">Workout Tracker</h1>
      <Link href="/add-workout" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mb-4 inline-block">
        Add New Workout
      </Link>
      <div className="mb-4">
        <select 
          className="mr-2 p-2 border rounded"
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
        <select 
          className="p-2 border rounded"
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="push">Push</option>
          <option value="pull">Pull</option>
          <option value="legs">Legs</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sortedAndFilteredWorkouts.map((workout) => (
          <div key={workout.id} className="border rounded p-4 bg-white shadow">
            <h2 className="text-xl font-semibold">{new Date(workout.date).toLocaleDateString()}</h2>
            <p>Type: {workout.type}</p>
            <p>Name: {workout.name}</p>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight} kg</p>
            <div className="mt-2">
              <Link 
                href={`/edit-workout/${workout.id}`} 
                className="inline-block mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-center w-20"
              >
                Edit
              </Link>
              <button 
                onClick={() => setWorkoutToDelete(workout.id)}
                className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-center w-20"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {workoutToDelete && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Workout</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this workout? This action cannot be undone.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="ok-btn"
                  className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                  onClick={() => deleteWorkout(workoutToDelete)}
                >
                  Delete
                </button>
                <button
                  id="cancel-btn"
                  className="mt-3 px-4 py-2 bg-white text-gray-800 text-base font-medium rounded-md w-full shadow-sm border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setWorkoutToDelete(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}