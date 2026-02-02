/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: businesscases
 * Interface for BusinessCases
 */
export interface BusinessCases {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  caseTitle?: string;
  /** @wixFieldType text */
  scenario?: string;
  /** @wixFieldType text */
  difficultyLevel?: string;
  /** @wixFieldType text */
  caseQuestions?: string;
  /** @wixFieldType text */
  modelAnswers?: string;
  /** @wixFieldType text */
  learningObjectives?: string;
}


/**
 * Collection ID: performancerecommendations
 * Interface for PerformanceRecommendations
 */
export interface PerformanceRecommendations {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  recommendationTitle?: string;
  /** @wixFieldType text */
  adviceText?: string;
  /** @wixFieldType number */
  minScore?: number;
  /** @wixFieldType number */
  maxScore?: number;
  /** @wixFieldType text */
  criteriaDescription?: string;
}


/**
 * Collection ID: platformobjectives
 * Interface for PlatformObjectives
 */
export interface PlatformObjectives {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  objectiveType?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}
