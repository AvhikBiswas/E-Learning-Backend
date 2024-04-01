export interface CoursePayload {
  title: string;
  category: string;
  level: string;
  popularity?: number;
}

export interface CourseUpdatePayload {
  id: string;
  newTitle?: string;
  newCategory?: string;
  newLevel?: string;
  newPopularity?: number;
}

export interface CourseFilter {
  category?: string;
  level?: string;
  popularity?: "asc" | "desc";
}

export interface PaginationOptions {
  skip?: number;
  take?: number;
}
