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

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const fetchWorkouts = async () => {
        const res = await fetch('/api/workouts');
        if (res.ok) {
            const data = await res.json();
            setWorkouts(data);
        }
    };

    const deleteWorkout = async (id: number) => {
        const res = await fetch(`/api/workouts?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
            fetchWorkouts();
        } else {
            console.error('Failed to delete workout');
        }
    };

    return (
        <div className="p-4 text-black">
            <h1 className="text-2xl font-bold mb-4">Workout Tracker</h1>
            <Link href="/add-workout" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mb-4 inline-block">
                Add New Workout
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {workouts.map((workout) => (
                    <div key={workout.id} className="border rounded p-4 bg-white shadow">
                        <h2 className="text-xl font-semibold">{new Date(workout.date).toLocaleDateString()}</h2>
                        <p>Type: {workout.type}</p>
                        <p>Name: {workout.name}</p>
                        <p>Sets: {workout.sets}</p>
                        <p>Reps: {workout.reps}</p>
                        <p>Weight: {workout.weight} kg</p>

                        <Link
                            href={`/edit-workout/${workout.id}`}
                            className="inline-block mt-2 mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-center w-20"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => deleteWorkout(workout.id)}
                            className="inline-block mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-center w-20"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}