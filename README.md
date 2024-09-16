# Workout Tracker

## Brief Overview

This is a Next.js application for tracking workouts. It allows users to add, view, edit, and delete workout entries. The app uses a SQLite database with Prisma ORM for data management.

Key Features:
- Create, Read, Update, and Delete (CRUD) operations for workouts
- Dashboard to view all workouts
- Form to add new workouts
- Edit existing workouts
- Delete workouts with confirmation
- Sort workouts by date
- Filter workouts by type

Technologies Used:
- Next.js 13+ (with App Router)
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite

## Detailed Setup and Development Process

### 1. Project Setup

1. Created a new Next.js project:

npx create-next-app@latest workout-tracker

- Selected TypeScript, ESLint, Tailwind CSS, App Router

2. Installed Prisma and set up the database:

npm install prisma @prisma/client
npx prisma init --datasource-provider sqlite

3. Defined the Prisma schema in `prisma/schema.prisma`:
- Created a `Workout` model with fields: id, date, type, name, sets, reps, weight, createdAt

4. Generated Prisma client and created the database:

npx prisma generate
npx prisma db push

### 2. Creating the Dashboard

1. Created `components/Dashboard.tsx`:
- Implemented a component to display all workouts
- Added functionality to fetch workouts from the API

2. Updated `app/page.tsx` to use the Dashboard component

### 3. Adding New Workouts

1. Created `app/add-workout/page.tsx`:
- Implemented a form to add new workouts
- Added form validation and submission handling

2. Created API route `app/api/workouts/route.ts`:
- Implemented POST method to create new workouts
- Implemented GET method to fetch all workouts

### 4. Editing Workouts

1. Created `app/edit-workout/[id]/page.tsx`:
- Implemented a form to edit existing workouts
- Added functionality to fetch workout details and update them

2. Updated API route to include PUT method for updating workouts

### 5. Deleting Workouts

1. Updated Dashboard component to include delete functionality
2. Added confirmation dialog before deleting a workout
3. Implemented DELETE method in the API route

### 6. Sorting and Filtering

1. Added sorting functionality to sort workouts by date
2. Implemented filtering to filter workouts by type

### 7. Error Handling and Loading States

1. Created `components/ErrorBoundary.tsx` for error handling
2. Added loading state in `app/loading.tsx`

### 8. Styling and UI Improvements

1. Used Tailwind CSS for styling components
2. Ensured consistent button styling and layout

## Project Structure

workout-tracker/
├── app/
│   ├── api/
│   │   └── workouts/
│   │       └── route.ts
│   ├── add-workout/
│   │   └── page.tsx
│   ├── edit-workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── Dashboard.tsx
│   └── ErrorBoundary.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── styles/
│   └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json

## Setup and Installation

1. Clone the repository:

Certainly! Here's the entire README file in a format you can easily copy and paste:
markdownCopy# Workout Tracker

## Brief Overview

This is a Next.js application for tracking workouts. It allows users to add, view, edit, and delete workout entries. The app uses a SQLite database with Prisma ORM for data management.

Key Features:
- Create, Read, Update, and Delete (CRUD) operations for workouts
- Dashboard to view all workouts
- Form to add new workouts
- Edit existing workouts
- Delete workouts with confirmation
- Sort workouts by date
- Filter workouts by type

Technologies Used:
- Next.js 13+ (with App Router)
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- SQLite

## Detailed Setup and Development Process

### 1. Project Setup

1. Created a new Next.js project:
npx create-next-app@latest workout-tracker
Copy- Selected TypeScript, ESLint, Tailwind CSS, App Router

2. Installed Prisma and set up the database:
npm install prisma @prisma/client
npx prisma init --datasource-provider sqlite
Copy
3. Defined the Prisma schema in `prisma/schema.prisma`:
- Created a `Workout` model with fields: id, date, type, name, sets, reps, weight, createdAt

4. Generated Prisma client and created the database:
npx prisma generate
npx prisma db push
Copy
### 2. Creating the Dashboard

1. Created `components/Dashboard.tsx`:
- Implemented a component to display all workouts
- Added functionality to fetch workouts from the API

2. Updated `app/page.tsx` to use the Dashboard component

### 3. Adding New Workouts

1. Created `app/add-workout/page.tsx`:
- Implemented a form to add new workouts
- Added form validation and submission handling

2. Created API route `app/api/workouts/route.ts`:
- Implemented POST method to create new workouts
- Implemented GET method to fetch all workouts

### 4. Editing Workouts

1. Created `app/edit-workout/[id]/page.tsx`:
- Implemented a form to edit existing workouts
- Added functionality to fetch workout details and update them

2. Updated API route to include PUT method for updating workouts

### 5. Deleting Workouts

1. Updated Dashboard component to include delete functionality
2. Added confirmation dialog before deleting a workout
3. Implemented DELETE method in the API route

### 6. Sorting and Filtering

1. Added sorting functionality to sort workouts by date
2. Implemented filtering to filter workouts by type

### 7. Error Handling and Loading States

1. Created `components/ErrorBoundary.tsx` for error handling
2. Added loading state in `app/loading.tsx`

### 8. Styling and UI Improvements

1. Used Tailwind CSS for styling components
2. Ensured consistent button styling and layout

## Project Structure
workout-tracker/
├── app/
│   ├── api/
│   │   └── workouts/
│   │       └── route.ts
│   ├── add-workout/
│   │   └── page.tsx
│   ├── edit-workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── Dashboard.tsx
│   └── ErrorBoundary.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── styles/
│   └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
Copy
## Setup and Installation

1. Clone the repository:

git clone https://github.com/yourusername/workout-tracker.git
cd workout-tracker

2. Install dependencies:

npm install

3. Set up the database:

npx prisma generate
npx prisma db push

4. Run the development server:

npm run dev

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Detailed Components

### Dashboard (`components/Dashboard.tsx`)

The main component that displays all workouts and provides sorting, filtering, and delete functionality.

Key features:
- Fetches workouts from the API
- Allows sorting by date (newest/oldest first)
- Allows filtering by workout type
- Provides edit and delete options for each workout
- Implements a confirmation modal for delete actions

### Add Workout Page (`app/add-workout/page.tsx`)

A form component for adding new workouts.

Fields:
- Date
- Workout Type (push, pull, legs)
- Workout Name
- Sets
- Reps
- Weight

### Edit Workout Page (`app/edit-workout/[id]/page.tsx`)

Similar to the Add Workout page, but pre-filled with existing workout data for editing.

### API Routes (`app/api/workouts/route.ts`)

Handles CRUD operations for workouts:
- GET: Fetch all workouts or a single workout
- POST: Create a new workout
- PUT: Update an existing workout
- DELETE: Delete a workout

### Error Boundary (`components/ErrorBoundary.tsx`)

A React error boundary component to catch and display errors gracefully.

## Database Schema

The `Workout` model in `prisma/schema.prisma`:

```prisma
model Workout {
id        Int      @id @default(autoincrement())
date      DateTime
type      String
name      String
sets      Int
reps      Int
weight    Float
createdAt DateTime @default(now())
}

Styling
The project uses Tailwind CSS for styling. Custom styles can be added in styles/globals.css.
Running the Project

Clone the repository
Install dependencies: npm install
Set up the database: npx prisma db push
Run the development server: npm run dev
Open http://localhost:3000 in your browser

Future Enhancements

Implement pagination for large numbers of workouts
Add data visualization (e.g., charts showing progress over time)
Implement user authentication for multiple users
Add more detailed workout tracking (e.g., individual exercise tracking within a workout)
Integrate with fitness APIs or devices for automatic data input

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is open source and available under the MIT License.

--END--

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
