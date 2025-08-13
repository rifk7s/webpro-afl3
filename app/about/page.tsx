import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Code
} from 'lucide-react';

import PageHeader from '@/components/common/PageHeader';
import Section from '@/components/common/Section';
import SectionDivider from '@/components/ui/SectionDivider';
import EducationItem from '@/components/common/EducationItem';
import ExperienceItem from '@/components/common/ExperienceItem';
import AboutSkillsSection from '@/components/common/AboutSkillsSection';
import ContactCTA from '@/components/common/ContactCTA';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader 
        title="About"
        subtitle="A short story of me"
      />
      <SectionDivider />
      
      <div className="mb-6">
        <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--foreground)' }}>
          Hello! I&apos;m Rifky Paranrengi, a passionate second-semester student
          at Ciputra Surabaya University, studying Informatics. I&apos;m
          enthusiastic about technology and software development, with a
          growing focus on both frontend and backend technologies.
        </p>
        <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--foreground)' }}>
          My journey in programming began recently, but I&apos;ve already
          developed a strong interest in building meaningful applications
          that solve real-world problems. I believe in learning by doing,
          which is why I&apos;m constantly working on personal projects to
          improve my skills.
        </p>
      </div>
      
      <SectionDivider />
      
      <Section 
        title="Education" 
        icon={<GraduationCap size={20} />}
      >
        <div className="flex flex-col gap-4">
          <EducationItem 
            logo="/images/ciputra.png"
            logoAlt="University Logo"
            institution="Ciputra Surabaya University"
            location="Surabaya"
            period="2024 - Present"
            duration="Current"
            degree="Undergraduate, Informatics"
          />
          
          <EducationItem 
            logo="/images/athirah.png"
            logoAlt="High School Logo"
            institution="SMA Islam Athirah 1 Makassar"
            location="Makassar"
            period="2021 - 2024"
            duration="3 Years"
            degree="Science Track"
          />
          
          <EducationItem 
            logo="/images/athirah.png"
            logoAlt="Middle School Logo"
            institution="SMP Islam Athirah 1 Makassar"
            location="Makassar"
            period="2018 - 2021"
            duration="3 Years"
            degree="General Education"
          />
          
          <EducationItem 
            logo="/images/athirah.png"
            logoAlt="Elementary School Logo"
            institution="SD Islam Athirah 1 Makassar"
            location="Makassar"
            period="2012 - 2018"
            duration="6 Years"
            degree="Primary Education"
          />
        </div>
      </Section>
      
      <SectionDivider />
      
      <Section 
        title="Committee Experience" 
        icon={<Users size={20} />}
      >
        <div className="flex flex-col gap-4">
          <ExperienceItem 
            logo="/images/atlantis.jpeg"
            logoAlt="Tech Festival Organizer Logo"
            title="Atlantis Festival Experience"
            organization="Parkit Lot, Phinisi Point"
            location="Makassar"
            period="Mar 2023 - Apr 2024"
            description="I'm part of the inventory committee, which is a really fun group. We make sure that everything is ready for the event, including the stage, the artists, and any emergency equipment."
          />
          
          <ExperienceItem 
            logo="/images/nplc.png"
            logoAlt="Student Association Logo"
            title="NPLC 12th"
            organization="Informatics Department"
            location="Makassar"
            period="Nov 2024 - Jan 2025"
            description="My job as Liaison Officer is to make sure the rules of the NPLC Rally Games (Category 2) posts are clear and easy to understand."
          />
        </div>
      </Section>
      
      <SectionDivider />
      
      <Section 
        title="Skills" 
        icon={<Code size={20} />}
        subtitle="My Current Learnings"
      >
        <AboutSkillsSection />
      </Section>
      
      <SectionDivider />
      
      <ContactCTA />
    </div>
  );
}
