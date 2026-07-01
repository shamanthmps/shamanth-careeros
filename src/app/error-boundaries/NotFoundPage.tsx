import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { appRoutes } from "@/app/routes";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-md text-center">
        <p className="text-sm font-medium text-muted-foreground">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">This page is not available</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The route may be unfinished or the link may have changed.
        </p>
        <Button asChild className="mt-6">
          <Link to={appRoutes.dashboard}>Return to dashboard</Link>
        </Button>
      </div>
    </main>
  );
}
