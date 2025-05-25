export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: Skill[];
}

export interface AdditionalSkill {
  name: string;
  icon: string;
}

export interface CertificationInfo {
  title: string;
  subtitle: string;
  issueDate: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
}

export interface ProjectCategory {
  label: string;
  value: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface TechnicalExpertise {
  [category: string]: string[];
}

export interface ProfileInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  education: Education[];
  profile: string[];
  expertise: TechnicalExpertise;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities?: string[];
  trainingObjectives?: string[];
  fortinetTraining?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
