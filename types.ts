export interface NetsatType {
  syllabus: string;
  faculty: string;
  syllabus_id: number;
  weight: MinimumScore;
  specific_capability?: SpecificCapability;
  minimum_score?: MinimumScore;
  minimum_sum?: number;
}

export interface MinimumScore {
  eng?: number;
  math?: number;
  thai?: number;
  sci?: number;
  phy?: number;
  chem?: number;
  bio?: number;
}

export interface SpecificCapability {
  foreign: Foreign;
  fine_arts: FineArts;
  engineer: number;
  architect: Architect;
  education: Education;
  medical_vision: MedicalVision;
}

export interface Architect {
  arch: number;
  design: number;
}

export interface Education {
  body: number;
  goodatart: number;
}

export interface FineArts {
  drawing: number;
  makeup: number;
  drawcom: number;
  vart: number;
  music: number;
  dance: number;
}

export interface Foreign {
  sp: number;
  fr: number;
  gr: number;
  cn: number;
  jp: number;
  kr: number;
}

export interface MedicalVision {
  techmed: number;
  artmed: number;
}
