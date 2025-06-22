
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Eye, Monitor, Users, Globe, Palette, Target, Code, MessageCircle, Zap, Heart, UserCheck } from 'lucide-react';


const skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-8');
                el.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            JOHN WALKER
          </h1>
          <div className="h-1 w-16 bg-orange-500 mb-6"></div>
          <p className="text-xl text-gray-600 mb-6">Product Designer (UX/UI)</p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Find the challenge of working with design. YouTube, TikTok & many other great brands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have always been drawn to complex, data-heavy UIs analytics applications that require someone who can make a really good and innovative product.
              </p>
            </div>
            
            {/* Profile Image Placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <User size={48} className="mx-auto mb-2" />
                  <p className="text-sm">รูปโปรไฟล์จะอยู่ตรงนี้</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">100+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">30+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="space-y-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">Skills</h2>
          
          {/* Main Skills - flexible width per content */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Eye className="w-4 h-4 mr-2" />
                Analytics
              </Badge>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Monitor className="w-4 h-4 mr-2" />
                User Interface
              </Badge>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Users className="w-4 h-4 mr-2" />
                User Experience
              </Badge>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                Online Design
              </Badge>
              <div className="w-full"></div>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Palette className="w-4 h-4 mr-2" />
                Branding
              </Badge>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Target className="w-4 h-4 mr-2" />
                UX Direction
              </Badge>
              <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 transition-colors">
                <Code className="w-4 h-4 mr-2" />
                Web Design
              </Badge>
            </div>
          </div>

          {/* Language Skills and Drawing Skills */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Language Skills - Left Side */}
            <div>
              <h3 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-2xl font-bold text-gray-800 mb-6">ทักษะภาษา</h3>
              <div className="flex flex-col gap-3">
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-blue-50 hover:bg-blue-100 transition-colors w-fit">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  อังกฤษ
                </Badge>
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-blue-50 hover:bg-blue-100 transition-colors w-fit">
                  <Globe className="w-4 h-4 mr-2" />
                  ญี่ปุ่น
                </Badge>
              </div>
            </div>

            {/* Drawing Skills - Right Side */}
            <div className="md:text-right">
              <h3 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-2xl font-bold text-gray-800 mb-6">การวาดรูป</h3>
              <div className="flex flex-col gap-3 md:items-end">
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-purple-50 hover:bg-purple-100 transition-colors w-fit">
                  <User className="w-4 h-4 mr-2" />
                  การออกแบบตัวละคร
                </Badge>
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-purple-50 hover:bg-purple-100 transition-colors w-fit">
                  <Zap className="w-4 h-4 mr-2" />
                  ความคิดสร้างสรรค์
                </Badge>
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-purple-50 hover:bg-purple-100 transition-colors w-fit">
                  <Heart className="w-4 h-4 mr-2" />
                  ความแฟนตาซี ไซไฟ
                </Badge>
                <Badge variant="secondary" className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 px-4 py-2 text-sm bg-purple-50 hover:bg-purple-100 transition-colors w-fit">
                  <UserCheck className="w-4 h-4 mr-2" />
                  เข้าใจโครงสร้างตัวละคร
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
