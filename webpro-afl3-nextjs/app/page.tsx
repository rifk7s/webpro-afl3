import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h2 style={{ color: 'var(--foreground)' }} className="text-2xl font-semibold mb-2">
          Hi, I'm Rifky Paranrengi
        </h2>
        <ul style={{ color: 'var(--muted-foreground)' }} className="ml-5 flex list-disc flex-col md:flex-row md:items-center gap-x-6 gap-y-1 text-base mb-2">
          <li>Based in Makassar, Indonesia <span className="ml-1">🇮🇩</span></li>
          <li><span className="font-normal">Onsite</span></li>
        </ul>
        <p style={{ color: 'var(--foreground)' }} className="mb-2 text-base leading-relaxed">
          As I continue my studies, I hope to get practical experience and
          contribute to real-world projects. I am a second-semester
          undergraduate studying informatics at Ciputra Surabaya University,
          and I am interested in learning fullstack development. I am
          currently working on developing my skills in both frontend and
          backend technologies through coursework and personal projects.
        </p>
      </div>
      
      <hr style={{ borderColor: 'var(--border)' }} className="border-t my-6" />
      
      <div className="mb-4">
        <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold mb-2 flex items-center gap-2">
          <i className="fa-solid fa-code"></i> Skills
        </h3>
        <p style={{ color: 'var(--muted-foreground)' }} className="text-base mb-3">
          My current learning skills.
        </p>
        <div className="flex flex-wrap gap-2">
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-bootstrap-plain text-purple-600"></i>
            {' '}
            Bootstrap
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-css3-plain text-blue-500"></i>
            {' '}
            CSS
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-figma-plain text-pink-500"></i>
            {' '}
            Figma
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-git-plain text-orange-600"></i>
            {' '}
            Git
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-github-original text-gray-800 dark:text-gray-300"></i>
            {' '}
            GitHub
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-html5-plain text-orange-500"></i>
            {' '}
            HTML/CSS
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-java-plain text-red-700"></i>
            {' '}
            Java (OpenJDK 21)
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-javascript-plain text-yellow-400"></i>
            {' '}
            JavaScript
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-mysql-plain text-blue-700"></i>
            {' '}
            MySQL Workbench
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-nodejs-plain text-green-600"></i>
            {' '}
            npm (Node.js)
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-python-plain text-blue-400"></i>
            {' '}
            Python
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-tailwindcss-plain text-cyan-500"></i>
            {' '}
            TailwindCSS
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--foreground)' 
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm">
            <i className="devicon-gradle-plain text-green-700"></i>
            {' '}
            Gradle
          </span>
          <span 
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--muted-foreground)'
            }} 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm opacity-70">
            <i className="fa-solid fa-ellipsis-h"></i>
            {' '}
            More incoming
          </span>
        </div>
      </div>
      
      <hr style={{ borderColor: 'var(--border)' }} className="border-t my-4" />
      
      <div className="mb-4">
        <h3 style={{ color: 'var(--foreground)' }} className="text-lg font-semibold mb-2 flex items-center gap-2">
          <i className="fa-solid fa-users"></i> Activities
        </h3>
        <p style={{ color: 'var(--foreground)' }} className="text-base mb-3">
          As a second semester student, I'm actively learning, collaborating
          on small projects, and exploring new technologies. I enjoy
          participating in coding communities and contributing to open
          source when possible.
        </p>
        <div 
          style={{ 
            backgroundColor: 'var(--card)', 
            borderColor: 'var(--border)' 
          }} 
          className="border rounded-xl p-4 flex flex-col gap-2">
          <div style={{ color: 'var(--card-foreground)' }} className="flex items-center gap-2 font-semibold text-base">
            <i className="fa-solid fa-handshake-angle text-xl text-blue-500 animate-pulse-handshake"></i>
            {' '}
            Let's connect and learn together!
          </div>
          <p style={{ color: 'var(--muted-foreground)' }} className="text-sm">
            I'm always open to new opportunities, collaborations, and
            discussions about tech. Feel free to reach out!
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--primary-foreground)'
            }}
            className="self-start px-3.5 py-2 rounded-lg font-medium hover:opacity-80 transition text-sm"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
