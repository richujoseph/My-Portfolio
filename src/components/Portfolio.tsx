import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Shield, 
  Cpu, 
  Terminal,
  ChevronDown,
  MapPin,
  Calendar,
  Code,
  Award,
  Send
} from 'lucide-react';
import headshot from '@/assets/rj.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'Python', 'Java', 'C', 'Bash', 'HTML/CSS', 'JavaScript',
    'Penetration Testing', 'CTFs', 'IoT Security', 'Network Security'
  ];

  const projects = [
    {
      title: 'CineAura',
      description: 'Flask-based movie recommendation bot using machine learning algorithms',
      tech: ['Python', 'Flask', 'ML', 'API'],
      link: 'https://github.com/richujoseph/CineAura'
    },
    {
      title: 'IoT Vulnerability Scanner',
      description: 'Automated tool to identify security vulnerabilities in IoT devices',
      tech: ['Python', 'Network Security', 'IoT'],
      link: 'https://github.com/richujoseph/SIMPLE_IOT_VULNERABILITY_SCANNER'
    },
    {
      title: 'Educational Ransomware Simulation',
      description: 'Safe educational tool to demonstrate ransomware behavior and prevention',
      tech: ['Python', 'Cybersecurity', 'Education'],
      link: 'https://github.com/richujoseph/Educational_Ransomware_Simulation'
    },
    {
      title: 'Cookie Security Manager',
      description: 'Browser extension for managing and securing HTTP cookies',
      tech: ['JavaScript', 'Web Security', 'Browser Extension'],
      link: 'https://github.com/richujoseph/Cookie_Security_Manager'
    },
    {
      title: 'DDoS',
      description: 'Network security tools for detecting DDoS attacks and FTP vulnerabilities',
      tech: ['Python', 'Network Security', 'Scanning'],
      link: 'https://github.com/richujoseph/DDOS_stimulation'
    },
    {
      title: 'Port Scanning Tool',
      description: 'Bash-based network port scanner for security assessment',
      tech: ['Bash', 'Network Security', 'Scanning'],
      link: 'https://github.com/richujoseph/Bash-Script-Port-Scanning-Tool'
    },
    {
      title: 'Library Management System',
      description: 'Full-stack web application for managing library resources',
      tech: ['Java', 'Database', 'Web Development'],
      link: 'https://github.com/richujoseph/Library_management_Systems'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-orbitron font-bold text-glow">RJ</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'Projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
           <div className="flex space-x-4">
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/richujoseph" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                </a>
              </Button>
            <Button asChild variant="ghost" size="sm">
                  <a href="https://www.linkedin.com/in/richujoseph" target="_blank" rel="noopener noreferrer">
                     <Linkedin className="h-5 w-5" />
                  </a>
             </Button>
          </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative mb-8 inline-block">
            <div className="w-48 h-48 mx-auto mb-6 relative">
              <img
                src={headshot}
                alt="Richu Joseph"
                className="w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-cyber animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20 animate-pulse-slow"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-glow">
            Richu Joseph
          </h1>
          
          <div className="text-xl md:text-2xl text-primary mb-4 font-medium">
            Cybersecurity Enthusiast | IoT Explorer | Future Innovator
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a B.Tech student specializing in Cybersecurity. I build intelligent, secure, 
            and modern tools for a safer digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-cyber text-lg px-8 py-3"
              onClick={() => scrollToSection('Projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-3 border-primary/50 hover:border-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              className="h-8 w-8 mx-auto text-primary cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="h-5 w-5" />
                <span>SJCET Palai, Kerala, India</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Calendar className="h-5 w-5" />
                <span>Class of 2027</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science student at SJCET Palai, specializing in Cybersecurity. 
                I'm deeply passionate about protecting digital systems and exploring the 
                intersections of AI, IoT, and cyber defense.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I actively participate in workshops and CTFs to build real-world experience 
                and stay up to date with the latest trends in security. My goal is to 
                contribute to a safer digital ecosystem through innovative security solutions.
              </p>
              
              <div className="flex space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-medium">Cybersecurity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="h-6 w-6 text-accent" />
                  <span className="font-medium">IoT Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="h-6 w-6 text-primary" />
                  <span className="font-medium">AI</span>
                </div>
              </div>
            </div>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                  </Badge>
                  ))}
                </div>

              <Button asChild variant="outline" size="sm" className="w-full">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
                View Code
                  </a>
                  </Button>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            Experience & Learning
          </h2>
          
          <div className="space-y-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Cybersecurity Workshops & CTFs</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Active participant in cybersecurity workshops, Capture The Flag (CTF) competitions, 
                  and security conferences. Continuously learning and applying the latest security 
                  techniques and methodologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Terminal className="h-6 w-6 text-accent" />
                  <span>Self-Directed Learning</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated to continuous learning through online courses, security research, 
                  and hands-on project development. Focus on practical application of 
                  cybersecurity concepts in real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-glow">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg">
                I'm always interested in discussing cybersecurity, technology, and potential 
                collaboration opportunities. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:richujoseph203@gmail.com"
                  className="flex items-center space-x-3 text-primary hover:text-accent transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span>richujoseph203@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com"
                  className="flex items-center space-x-3 text-primary hover:text-accent transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>LinkedIn Profile</span>
                </a>
                <a 
                  href="https://github.com"
                  className="flex items-center space-x-3 text-primary hover:text-accent transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
            
            <form
              action="https://formspree.io/f/mnnzzgza"
              method="POST"
              className="w-full max-w-md mx-auto px-4 sm:px-6"
               >
              <Card className="card-hover">
                  <CardHeader>
                  <CardTitle className="text-center text-lg sm:text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                <Input name="name" placeholder="Your Name" required />
                  <Input name="email" type="email" placeholder="Your Email" required />
                <Textarea name="message" placeholder="Your Message" rows={4} required />
      
                  {/* Optional Redirect to a thank you page */}
                {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thanks" /> */}

                      <Button type="submit" className="btn-cyber w-full">
                      <Send className="h-4 w-4 mr-2" />
                        Send Message
                    </Button>
                  </CardContent>
                </Card>
          </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Richu Joseph. Built with React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
