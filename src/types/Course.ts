export interface CoursePayload {
  title: string;
  category: CategoryType;
  level: string;
  popularity?: PopularityType;
}

export interface CourseUpdatePayload {
  id: string;
  newTitle?: string;
  newCategory?: CategoryType;
  newLevel?: string;
  newPopularity?: PopularityType;
}

export interface CourseFilter {
  category?: CategoryType;
  level?: string;
  popularity?: PopularityType;
}

export interface PaginationOptions {
  skip?: number;
  take?: number;
}

export enum CategoryType {
  MATH = "MATH",
  SCIENCE = "SCIENCE",
  HISTORY = "HISTORY",
  LANGUAGE = "LANGUAGE",
}

export enum PopularityType {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}
