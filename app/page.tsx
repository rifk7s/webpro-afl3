import ProfileSection from '@/components/common/ProfileSection';
import SkillsSection from '@/components/common/SkillsSection';
import ActivitiesSection from '@/components/common/ActivitiesSection';
import SectionDivider from '@/components/ui/SectionDivider';

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <ProfileSection 
        name="Rifky Paranrengi"
        location="Based in Makassar, Indonesia"
        workType="Onsite"
        description="As I continue my studies, I hope to get practical experience and contribute to real-world projects. I am a second-semester undergraduate studying informatics at Ciputra Surabaya University, and I am interested in learning fullstack development. I am currently working on developing my skills in both frontend and backend technologies through coursework and personal projects."
      />
      
      <SectionDivider />
      
      <SkillsSection />
      
      <SectionDivider className="border-t my-4" />
      
      <ActivitiesSection />
    </div>
  );
}
