import { Code, MoreHorizontal } from 'lucide-react';
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiMysql,
  DiNodejsSmall,
  DiPython
} from 'react-icons/di';
import { 
  SiFigma,
  SiTailwindcss,
  SiGradle
} from 'react-icons/si';

interface Skill {
  readonly name: string;
  readonly icon: React.ReactNode;
  readonly color: string;
}

interface SkillsSectionProps {
  readonly title?: string;
  readonly description?: string;
  readonly skills?: Skill[];
}

const defaultSkills: Skill[] = [
  {
    name: 'Bootstrap',
    icon: <DiBootstrap size={16} color="#7952b3" />,
    color: '#7952b3'
  },
  {
    name: 'CSS',
    icon: <DiCss3 size={16} color="#1572b6" />,
    color: '#1572b6'
  },
  {
    name: 'Figma',
    icon: <SiFigma size={16} color="#f24e1e" />,
    color: '#f24e1e'
  },
  {
    name: 'Git',
    icon: <DiGit size={16} color="#f05032" />,
    color: '#f05032'
  },
  {
    name: 'GitHub',
    icon: <DiGithubBadge size={16} color="#181717" />,
    color: '#181717'
  },
  {
    name: 'HTML/CSS',
    icon: <DiHtml5 size={16} color="#e34f26" />,
    color: '#e34f26'
  },
  {
    name: 'Java (OpenJDK 21)',
    icon: <DiJava size={16} color="#ed8b00" />,
    color: '#ed8b00'
  },
  {
    name: 'JavaScript',
    icon: <DiJavascript1 size={16} color="#f7df1e" />,
    color: '#f7df1e'
  },
  {
    name: 'MySQL Workbench',
    icon: <DiMysql size={16} color="#4479a1" />,
    color: '#4479a1'
  },
  {
    name: 'npm (Node.js)',
    icon: <DiNodejsSmall size={16} color="#339933" />,
    color: '#339933'
  },
  {
    name: 'Python',
    icon: <DiPython size={16} color="#3776ab" />,
    color: '#3776ab'
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss size={16} color="#06b6d4" />,
    color: '#06b6d4'
  },
  {
    name: 'Gradle',
    icon: <SiGradle size={16} color="#02303a" />,
    color: '#02303a'
  }
];

export default function SkillsSection({ 
  title = "Skills",
  description = "My current learning skills.",
  skills = defaultSkills
}: SkillsSectionProps) {
  return (
    <div className="mb-4">
      <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold mb-2 flex items-center gap-2">
        <Code className="w-5 h-5" />
        {title}
      </h3>
      <p style={{ color: 'var(--muted-foreground)' }} className="text-base mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            {skill.icon}
            {skill.name}
          </span>
        ))}
        <span 
          style={{ 
            backgroundColor: 'var(--muted)', 
            color: 'var(--muted-foreground)'
          }} 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm opacity-70">
          <MoreHorizontal className="w-4 h-4" />
          More incoming
        </span>
      </div>
    </div>
  );
}
