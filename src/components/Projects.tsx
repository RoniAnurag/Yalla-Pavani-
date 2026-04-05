import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Heart Disease & Diabetes Prediction',
    category: 'Machine Learning, Python',
    year: '2023',
    color: 'from-blue-500/20 to-purple-500/20',
    description: 'Built a predictive model using patient health data to identify disease risk. Performed data preprocessing and basic model evaluation. Enhanced analytical thinking and data-driven problem-solving skills.',
  }
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-20 border-b border-white/10 pb-8">
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Recent Work.</h3>
          <p className="text-white/50 text-lg hidden md:block">Selected case studies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 cursor-pointer"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100 backdrop-blur-3xl`}
              />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-mono text-white/50">{project.year}</span>
                  <div className="p-3 bg-black/50 rounded-full text-white/70 group-hover:text-white group-hover:bg-black/80 transition-all backdrop-blur-md">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-white/60 mb-2 tracking-wide uppercase">
                    {project.category}
                  </p>
                  <h4 className="text-3xl font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors mb-4">
                    {project.title}
                  </h4>
                  {project.description && (
                    <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
