import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Home - Rifky Portfolio",
  description: "Portfolio website of Rifky Paranrengi - Full Stack Web Developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body style={{ 
        backgroundColor: 'var(--background)', 
        color: 'var(--foreground)',
        minHeight: '100vh'
      }}>
        <ThemeProvider>
          <SidebarProvider>
            {/* Mobile Header */}
            <Header />
            
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <Sidebar />
              
              {/* Main Content */}
              <main className="flex-1 p-4 md:p-6 pt-20 md:pt-6 md:ml-72">
                {children}
              </main>
            </div>
            
            {/* Footer */}
            <footer style={{ 
              backgroundColor: 'var(--card)', 
              borderTop: '1px solid var(--border)',
              marginTop: 'auto' 
            }} className="md:ml-72">
              <div className="max-w-3xl mx-auto py-8 px-4 text-center" style={{ color: 'var(--muted-foreground)' }}>
                <p className="text-sm">
                  &copy; 2025 Rifky Paranrengi. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                  Built with{" "}
                  <a
                    href="https://tailwindcss.com/"
                    style={{ color: 'var(--primary)' }}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS
                  </a>{" "}
                  and a sprinkle of JavaScript.
                </p>
              </div>
            </footer>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
