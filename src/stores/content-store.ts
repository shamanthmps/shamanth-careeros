import { create } from "zustand";
import { persist } from "zustand/middleware";
import { contentService } from "@/services/content/content-service";
import type { ContentLesson, ContentModule } from "@/types/content";

interface LessonUserState {
  notes: string;
  completed: boolean;
}

interface ContentState {
  modules: ContentModule[];
  isLoaded: boolean;
  lessonState: Record<string, LessonUserState>;
  loadContent: () => void;
  getModule: (moduleSlug: string) => ContentModule | undefined;
  getLesson: (moduleSlug: string, lessonSlug: string) => ContentLesson | undefined;
  getLessonState: (lessonSlug: string) => LessonUserState;
  setLessonNotes: (lessonSlug: string, notes: string) => void;
  toggleLessonComplete: (lessonSlug: string) => void;
}

const defaultLessonState: LessonUserState = {
  notes: "",
  completed: false
};

export const useContentStore = create<ContentState>()(
  persist(
    (set, get) => ({
      modules: [],
      isLoaded: false,
      lessonState: {},
      loadContent: () => {
        set({
          modules: contentService.getModules(),
          isLoaded: true
        });
      },
      getModule: (moduleSlug) => get().modules.find((module) => module.slug === moduleSlug),
      getLesson: (moduleSlug, lessonSlug) =>
        get()
          .modules.find((module) => module.slug === moduleSlug)
          ?.lessons.find((lesson) => lesson.slug === lessonSlug),
      getLessonState: (lessonSlug) => get().lessonState[lessonSlug] ?? defaultLessonState,
      setLessonNotes: (lessonSlug, notes) => {
        set((state) => ({
          lessonState: {
            ...state.lessonState,
            [lessonSlug]: {
              ...(state.lessonState[lessonSlug] ?? defaultLessonState),
              notes
            }
          }
        }));
      },
      toggleLessonComplete: (lessonSlug) => {
        set((state) => {
          const currentState = state.lessonState[lessonSlug] ?? defaultLessonState;

          return {
            lessonState: {
              ...state.lessonState,
              [lessonSlug]: {
                ...currentState,
                completed: !currentState.completed
              }
            }
          };
        });
      }
    }),
    {
      name: "careeros-content-state",
      partialize: (state) => ({ lessonState: state.lessonState })
    }
  )
);
