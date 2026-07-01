import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/app/layouts/RootLayout";
import { LearningRoadmapPage } from "@/domains/growth/pages/LearningRoadmapPage";
import { LessonPlaceholderPage } from "@/domains/growth/pages/LessonPlaceholderPage";
import { ModuleDetailPage } from "@/domains/growth/pages/ModuleDetailPage";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { NotFoundPage } from "@/app/error-boundaries/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app/dashboard" replace />
  },
  {
    path: "/app",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "growth",
        element: <LearningRoadmapPage />
      },
      {
        path: "growth/modules/:moduleId",
        element: <ModuleDetailPage />
      },
      {
        path: "growth/modules/:moduleId/lessons/:lessonId",
        element: <LessonPlaceholderPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);
