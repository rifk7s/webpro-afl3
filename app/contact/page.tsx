import React from 'react';
import { 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaTiktok, 
  FaGithub 
} from 'react-icons/fa';

import PageHeader from '@/components/common/PageHeader';
import SectionDivider from '@/components/ui/SectionDivider';
import SocialMediaCard from '@/components/common/SocialMediaCard';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto pb-auto">
      <PageHeader 
        title="Contact"
        subtitle="Let's get in touch."
      />
      <SectionDivider />

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
          Find me on social media
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SocialMediaCard 
            colSpan="md:col-span-2"
            title="Stay in Touch"
            description="Reach out via email for any inquiries or collaborations."
            href="mailto:rifkip1337@gmail.com"
            buttonText="Go to Gmail"
            icon={<FaEnvelope size={16} />}
            backgroundIcon={
              <FaEnvelope
                size={128}
                className="text-white transform -rotate-[15deg]"
                style={{
                  filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25))',
                  opacity: 0.3,
                }}
              />
            }
            gradientClasses="bg-gradient-to-b from-pink-800 via-red-500 to-red-700 dark:from-pink-700 dark:via-red-600 dark:to-red-800"
          />
          
          <SocialMediaCard 
            title="Follow My Journey"
            description="Stay updated with my latest posts and stories on Instagram."
            href="https://www.instagram.com/rifkp7"
            buttonText="Go to Instagram"
            icon={<FaInstagram size={16} />}
            backgroundIcon={
              <FaInstagram
                size={128}
                className="text-white transform -rotate-[15deg]"
                style={{
                  filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25))',
                  opacity: 0.1,
                }}
              />
            }
            gradientClasses="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 dark:from-purple-700 dark:via-pink-600 dark:to-orange-600"
          />
          
          <SocialMediaCard 
            title="Let's Connect"
            description="Connect for collaboration or explore my professional experience."
            href="https://www.linkedin.com/in/rifkyps/"
            buttonText="Go to LinkedIn"
            icon={<FaLinkedin size={16} />}
            backgroundIcon={
              <FaLinkedin
                size={128}
                className="text-white transform -rotate-[15deg]"
                style={{
                  filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25))',
                  opacity: 0.1,
                }}
              />
            }
            gradientClasses="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600"
          />
          
          <SocialMediaCard 
            title="Join the Fun"
            description="Follow me on TikTok for entertaining and engaging content."
            href="https://www.tiktok.com/#"
            buttonText="Go to TikTok"
            icon={<FaTiktok size={16} />}
            backgroundIcon={
              <FaTiktok
                size={128}
                className="text-white transform -rotate-[15deg]"
                style={{
                  filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25))',
                  opacity: 0.1,
                }}
              />
            }
            gradientClasses="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700"
          />
          
          <SocialMediaCard 
            title="Explore the Code"
            description="Explore the source code for all my projects on GitHub."
            href="https://github.com/rifk7s"
            buttonText="Go to GitHub"
            icon={<FaGithub size={16} />}
            backgroundIcon={
              <FaGithub
                size={128}
                className="text-white transform -rotate-[15deg]"
                style={{
                  filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25))',
                  opacity: 0.1,
                }}
              />
            }
            gradientClasses="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
