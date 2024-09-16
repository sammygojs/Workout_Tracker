'use client'

import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Workout = {
  id: number;
  date: string;
  type: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

type Props = {
  workouts: Workout[];
};

const WorkoutChart: React.FC<Props> = ({ workouts }) => {
  const [selectedWorkout, setSelectedWorkout] = useState('All');

  const workoutNames = useMemo(() => {
    const names = new Set(workouts.map(w => w.name));
    return ['All', ...Array.from(names)];
  }, [workouts]);

  const chartData = useMemo(() => {
    return workouts
      .filter(workout => selectedWorkout === 'All' || workout.name === selectedWorkout)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map(workout => ({
        date: new Date(workout.date).toLocaleDateString(),
        weight: workout.weight,
      }));
  }, [workouts, selectedWorkout]);

  return (
    <div>
      <select 
        value={selectedWorkout} 
        onChange={(e) => setSelectedWorkout(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        {workoutNames.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkoutChart;