import {
  EducationData,
  NavigationInputs,
  SkillIconNames,
  WorkflowContent,
} from "../types/types";

export const navigationData: NavigationInputs[] = [
  {
    id: 1,
    heading: "About",
  },
  {
    id: 2,
    heading: "Experience",
  },
  {
    id: 3,
    heading: "Education",
  },
  {
    id: 4,
    heading: "Skills",
  },
];

export const skillData: SkillIconNames[] = [
  {
    name: "fab fa-html5",
  },
  {
    name: "fab fa-css3-alt",
  },
  {
    name: "fab fa-js-square",
  },
  {
    name: "fab fa-git",
  },
  {
    name: "fab fa-react",
  },
  {
    name: "fab fa-node-js",
  },
  {
    name: "fab fa-npm",
  },
];

export const workflowContent: WorkflowContent[] = [
  {
    content: "Creating Reusable Components using React JS",
  },
  {
    content: "Cross Browser Testing & Debugging",
  },
  {
    content: "Mobile-First, Responsive Design",
  },
  {
    content: "Agile Development",
  },
];

export const educationData: EducationData[] = [
  {
    subHeading: "Bachelor of Technology",
    heading: "APJ Abdul Kalam Technological University - Kerala, India",
    course: "Computer Science and Engineering",
    grade: "7.34",
    duration: "August 2015 - August 2019",
  },
];
