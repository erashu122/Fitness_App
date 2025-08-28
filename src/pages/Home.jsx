import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


export default function Home() {
  return (
    <section className="space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Welcome to <span className="text-brand">Fitness App</span> 🏋️‍♂️
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
          Personalized workouts & diet plans with AI — fast, simple and effective.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/login">Start Now</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="rounded-2xl">
            <CardContent className="p-6">
              <div className="mb-3 h-10 w-10 rounded-xl bg-brand/15" />
              <h3 className="text-lg font-semibold">Smart Coaching {i}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                AI suggests workouts based on your goals and recovery.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
