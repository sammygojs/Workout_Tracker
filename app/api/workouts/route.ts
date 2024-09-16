import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const workout = await prisma.workout.create({
      data: {
        date: new Date(body.date),
        type: body.type,
        name: body.name,
        sets: parseInt(body.sets),
        reps: parseInt(body.reps),
        weight: parseFloat(body.weight)
      }
    })
    return NextResponse.json(workout, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating workout' }, { status: 500 })
  }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  
    if (id) {
      try {
        const workout = await prisma.workout.findUnique({
          where: { id: parseInt(id) }
        })
        return NextResponse.json(workout)
      } catch (error) {
        return NextResponse.json({ error: 'Error fetching workout' }, { status: 500 })
      }
    } else {
      // Existing code for fetching all workouts
      try {
        const workouts = await prisma.workout.findMany()
        return NextResponse.json(workouts)
      } catch (error) {
        return NextResponse.json({ error: 'Error fetching workouts' }, { status: 500 })
      }
    }

    
  
}


export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  
    if (!id) {
      return NextResponse.json({ error: 'Workout ID is required' }, { status: 400 })
    }
  
    try {
      await prisma.workout.delete({
        where: { id: parseInt(id) }
      })
      return NextResponse.json({ message: 'Workout deleted successfully' }, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: 'Error deleting workout' }, { status: 500 })
    }
  }

  export async function PUT(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  
    if (!id) {
      return NextResponse.json({ error: 'Workout ID is required' }, { status: 400 })
    }
  
    try {
      const body = await request.json()
      const updatedWorkout = await prisma.workout.update({
        where: { id: parseInt(id) },
        data: {
          date: new Date(body.date),
          type: body.type,
          name: body.name,
          sets: parseInt(body.sets),
          reps: parseInt(body.reps),
          weight: parseFloat(body.weight)
        }
      })
      return NextResponse.json(updatedWorkout, { status: 200 })
    } catch (error) {
      return NextResponse.json({ error: 'Error updating workout' }, { status: 500 })
    }
  }
  
//   export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url)
//     const id = searchParams.get('id')
  
//     if (id) {
//       try {
//         const workout = await prisma.workout.findUnique({
//           where: { id: parseInt(id) }
//         })
//         return NextResponse.json(workout)
//       } catch (error) {
//         return NextResponse.json({ error: 'Error fetching workout' }, { status: 500 })
//       }
//     } else {
//       // Existing code for fetching all workouts
//     }
//   }