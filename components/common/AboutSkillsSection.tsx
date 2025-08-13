import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

interface AboutSkill {
  readonly name: string;
  readonly icon: React.ReactNode;
}

interface AboutSkillsSectionProps {
  readonly skills?: AboutSkill[];
}

const defaultAboutSkills: AboutSkill[] = [
  {
    name: 'HTML',
    icon: <FaHtml5 size={16} color="#e34f26" />
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={16} color="#1572b6" />
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={16} color="#f7df1e" />
  },
  {
    name: 'Java',
    icon: <FaJava size={16} color="#ed8b00" />
  },
  {
    name: 'Python',
    icon: <FaPython size={16} color="#3776ab" />
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss size={16} color="#06b6d4" />
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap size={16} color="#7952b3" />
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={16} color="#f05032" />
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={16} style={{ color: 'var(--foreground)' }} />
  },
  {
    name: 'VS Code',
    icon: <VscVscode size={16} color="#007acc" />
  },
  {
    name: 'Figma',
    icon: <FaFigma size={16} color="#f24e1e" />
  }
];

export default function AboutSkillsSection({ skills = defaultAboutSkills }: AboutSkillsSectionProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-2">
      {skills.map((skill) => (
        <span 
          key={skill.name}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm" 
          style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
        >
          {skill.icon}
          {skill.name}
        </span>
      ))}
    </div>
  );
}
