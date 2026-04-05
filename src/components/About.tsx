import { MapPin, GraduationCap, Award, Code2, Phone, Mail, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        {/* Left Column: Intro & Contact */}
        <div className="md:col-span-5 space-y-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">About Me.</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To contribute to a technology-driven organization by applying strong technical fundamentals, problem-solving abilities, and communication skills, while continuously learning through structured training and delivering value to enterprise-level systems and processes.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/70">
              <MapPin className="text-emerald-500 shrink-0" size={20} />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <a href="tel:+917075169548" className="flex items-center gap-4 text-white/70 hover:text-blue-400 transition-colors w-fit">
              <Phone className="text-blue-400 shrink-0" size={20} />
              <span>+91 7075169548</span>
            </a>
            <a href="mailto:yallajensy708@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-red-400 transition-colors w-fit">
              <Mail className="text-red-400 shrink-0" size={20} />
              <span>yallajensy708@gmail.com</span>
            </a>
            <a href="https://yallapavani.ccbp.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-purple-400 transition-colors w-fit">
              <Globe className="text-purple-400 shrink-0" size={20} />
              <span>yallapavani.ccbp.tech</span>
            </a>
            <a href="https://www.linkedin.com/in/yalla-pavania03552308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-blue-500 transition-colors w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-blue-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>

          <div>
            <h4 className="text-xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <Code2 className="text-blue-500" size={24} />
              Skills & Expertise
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm text-white/50 mb-2 uppercase tracking-wider">Front-end</h5>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm text-white/50 mb-2 uppercase tracking-wider">Programming Languages</h5>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Java', 'Python'].map((skill) => (
                    <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm text-white/50 mb-2 uppercase tracking-wider">Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {['GitHub', 'VS Code'].map((skill) => (
                    <span key={skill} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-sm text-white/50 mb-2 uppercase tracking-wider">Soft Skills</h5>
                <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                  <li>Good communicator & team player</li>
                  <li>Fast learner with problem-solving skills</li>
                  <li>Well-organized and self-motivated</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-medium tracking-tight mb-6 flex items-center gap-3">
              <Award className="text-orange-500" size={24} />
              Certifications
            </h4>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <p className="text-white/90 font-medium mb-1">AWS Cloud Foundations</p>
                <p className="text-sm text-white/60">AWS Academy • Cloud computing basics, core AWS services, security, and billing</p>
              </div>
              <div className="p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <p className="text-white/90 font-medium mb-1">AWS Machine Learning Foundations</p>
                <p className="text-sm text-white/60">AWS Academy • Introduction to machine learning concepts and their applications</p>
              </div>
              <div className="p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <p className="text-white/90 font-medium mb-1">AI/ML Course</p>
                <p className="text-sm text-white/60">Infosys Springboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="md:col-span-7">
          <h4 className="text-3xl font-semibold tracking-tight mb-10 flex items-center gap-4">
            <GraduationCap className="text-purple-500" size={32} />
            Education
          </h4>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            
            {/* Education 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex flex-col mb-2">
                  <span className="text-sm font-mono text-purple-400 mb-1">2022 - Jul 2026 (Ongoing)</span>
                  <h4 className="text-lg font-semibold text-white/90">NxtWave CCBP 4.0</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Focus Areas: Full Stack Web Development, Python, Problem-Solving, Project Building
                </p>
              </div>
            </div>

            {/* Education 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex flex-col mb-2">
                  <span className="text-sm font-mono text-blue-400 mb-1">Exp. May 2026</span>
                  <h4 className="text-lg font-semibold text-white/90">Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  B.Tech - Computer Science and Business Systems (CSBS)
                  <br /><span className="text-white/40">CGPA: 8.1 (till 6th semester)</span>
                </p>
              </div>
            </div>

            {/* Education 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex flex-col mb-2">
                  <span className="text-sm font-mono text-emerald-400 mb-1">Completed: 2022</span>
                  <h4 className="text-lg font-semibold text-white/90">Sri Chaitanya Junior College</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  Intermediate (MPC) - State Board
                  <br /><span className="text-white/40">Percentage: 86%</span>
                </p>
              </div>
            </div>

            {/* Education 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex flex-col mb-2">
                  <span className="text-sm font-mono text-orange-400 mb-1">Completed: 2020</span>
                  <h4 className="text-lg font-semibold text-white/90">The Kings&apos; School</h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  SSC (Class 10) - State Board
                  <br /><span className="text-white/40">GPA: 10.0</span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
