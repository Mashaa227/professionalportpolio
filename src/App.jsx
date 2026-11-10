import { motion } from "framer-motion";
// import { FaJava } from "react-icons/fa";
import { FaJava, FaDocker, FaJenkins } from "react-icons/fa";
import Footer from "./Footer";

import {
  SiSpringboot,
  SiApachekafka,
  SiRedhatopenshift,
  SiKubernetes,
  SiHelm,
  SiPostgresql,
} from "react-icons/si";

const NAV = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Architecture",
  "Skills",
  "Contact",
];
const id = (n) => n.toLowerCase();

const STATS = [
  ["3+", "Years Experience"],
  ["20+", "Enterprise Features"],
  ["99.99%", "Availability"],
  ["Millions", "Transactions"],
];
// const CHIPS = ["Spring Boot", "Kafka", "Docker", "OpenShift"];
const CHIPS = [
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    style: { top: "10%", left: "5%" },
  },
  {
    name: "Kafka",
    icon: <SiApachekafka />,
    style: { top: "10%", right: "5%" },
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    style: { top: "42%", right: "-2%" },
  },
  {
    name: "OpenShift",
    icon: <SiRedhatopenshift />,
    style: { bottom: "10%", right: "5%" },
  },
  {
    name: "Helm",
    icon: <SiHelm />,
    style: { bottom: "10%", left: "5%" },
  },
  {
    name: "Jenkins",
    icon: <FaJenkins />,
    style: { top: "42%", left: "-2%" },
  },
];
const HIGHLIGHTS = [
  "Payment Integration",
  "Microservices Architecture",
  "Event Driven Systems",
];
const TIMELINE = [
  ["2023", "Started Journey"],
  ["Java Developer", ""],
  ["Microservices", ""],
  ["Kafka", ""],
  ["OpenShift", ""],
  ["Today", "Growing Further"],
];
const SKILLS = [
  ["Backend", "Java, Spring Boot, Hibernate, REST Microservices"],
  ["Cloud", "Docker, OpenShift, Kubernetes, Helm"],
  ["Messaging", "Kafka, RabbitMQ"],
  ["Database", "Oracle, MySQL, MongoDB, Redis"],
  ["DevOps", "Jenkins, GitHub Actions"],
  ["Tools", "Git, Postman, Swagger"],
];
const PROJECTS = [
  ["Payment Gateway", "Secure & Scalable Payment Processing"],
  ["Kafka Notification", "Real-time Event Processing"],
  ["Docker Deployment", "Containerized Application"],
  ["Helm Automation", "Simplified Deployment"],
  ["CI/CD Pipeline", "Automated Delivery"],
  ["Microservice Platform", "Scalable Architecture"],
];
const ARCH_POINTS = [
  "Real-time Event Processing",
  "Scalable Services",
  "High Availability",
  "Cloud Native",
];
// const CONTACT = [
//   ["📧", "mashaa8816@gamil.com"],
//   ["📱", "6362303443"],
//   ["📍", "Bengaluru, India"],
//   ["💼", "lwww.linkedin.com/in/mashaa8816"],
//   ["🐙", "https://github.com/Mashaa227"],
// ];

const CONTACT = [
  {
    icon: "📧",
    label: "mashaa8816@gmail.com",
    link: "mailto:mashaa8816@gmail.com",
  },
  {
    icon: "📱",
    label: "+91 6362303443",
    link: "tel:+916362303443",
  },
  {
    icon: "📍",
    label: "Bengaluru, India",
    link: "https://maps.google.com/?q=Bengaluru,India",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/mashaa8816",
  },
  {
    icon: "🐙",
    label: "GitHub",
    link: "https://github.com/Mashaa227",
  },
];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6 },
};

const Tag = ({ children }) => <span className="tag">{children}</span>;

function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="logo">
        MB
      </a>
      <nav>
        {NAV.map((n) => (
          <a key={n} href={`#${id(n)}`}>
            {n}
          </a>
        ))}
      </nav>
      <a
        className="btn-outline"
        href="/professionalportpolio/resume_mashak_balaganoorr_1.pdf"
        download
      >
        Download CV
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <motion.div {...fade} className="hero-text">
        <Tag>👋 Hello, I'm</Tag>
        <h1>
          Mashak <span className="grad">Balaganoor</span>
        </h1>
        <h2>Java Backend Developer</h2>
        <p>
          Building Scalable &amp; High-Performance Systems for a Connected
          World.
        </p>
        <div className="row">
          <a className="btn" href="#projects">
            Explore My Work →
          </a>
          <a className="btn-outline" href="#contact">
            Contact Me
          </a>
        </div>
      </motion.div>
      <div className="hero-visual">
        <motion.div
          className="cube"
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <FaJava size={90} color="#f89820" />
        </motion.div>
        {CHIPS.map((chip, i) => (
          <motion.span
            key={chip.name}
            className="chip"
            style={chip.style}
            animate={{ y: [0, i % 2 ? 8 : -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i }}
          >
            <span className="chip-icon">{chip.icon}</span>
            {chip.name}
          </motion.span>
        ))}
      </div>
      <motion.div {...fade} className="glass stats">
        {STATS.map(([v, l]) => (
          <div key={l}>
            <b>{v}</b>
            <small>{l}</small>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="two">
        <motion.div {...fade}>
          <Tag>About Me</Tag>
          <h2 className="title">
            Passionate Backend Developer Focused on Scalable Solutions
          </h2>
          <p>
            I am a Java Backend Developer with 3+ years of experience in
            designing and developing scalable applications using Spring Boot,
            Kafka and cloud-native technologies.
          </p>
          <ul className="checks">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <a className="btn-outline" href="#experience">
            Learn More →
          </a>
        </motion.div>
        <motion.div {...fade} className="portrait glass">
          <img
            src="/professionalportpolio/profile.png"
            alt="Mashak Balaganoor"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="badge">⭐ 3+ Years Experience</div>
        </motion.div>
      </div>
      <motion.div {...fade} id="experience" className="glass timeline">
        {TIMELINE.map(([t, s]) => (
          <div key={t}>
            <span className="dot" />
            <b>{t}</b>
            <small>{s}</small>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div {...fade}>
        <Tag>My Tech Stack</Tag>
        <h2 className="title">Technologies &amp; Tools I Work With</h2>
        <p>
          A modern stack to build scalable, reliable and high-performance
          systems.
        </p>
      </motion.div>
      <div className="grid3">
        {SKILLS.map(([t, d], i) => (
          <motion.div
            key={t}
            {...fade}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass card"
          >
            <h3>{t}</h3>
            <p>{d}</p>
          </motion.div>
        ))}
      </div>
      <div className="center">
        <span className="glass pill">Always Learning, Always Building 🚀</span>
      </div>
    </section>
  );
}

const Node = ({ children, wide }) => (
  <div className={`node ${wide ? "wide" : ""}`}>{children}</div>
);
const Arrow = () => <div className="arrow">↓</div>;

function Architecture() {
  return (
    <section id="architecture" className="section">
      <div className="two">
        <motion.div {...fade}>
          <Tag>System Architecture</Tag>
          <h2 className="title">Event-Driven Microservices Architecture</h2>
          <p>
            A scalable architecture using Spring Boot, Kafka and cloud-native
            technologies.
          </p>
          <ul className="checks">
            {ARCH_POINTS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="glass uptime">
            <b>99.99%</b> System Uptime
          </div>
        </motion.div>
        <motion.div {...fade} className="diagram">
          <Node>Users</Node>
          <Arrow />
          <Node>Load Balancer</Node>
          <Arrow />
          <Node>API Gateway</Node>
          <Arrow />
          <div className="row">
            <Node>Payment Service</Node>
            <Node>User Service</Node>
            <Node>Notification Service</Node>
          </div>
          <Arrow />
          <Node wide>Apache Kafka</Node>
          <Arrow />
          <div className="row">
            <Node>Analytics</Node>
            <Node>Email</Node>
            <Node>SMS</Node>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div {...fade} className="between">
        <div>
          <Tag>My Projects</Tag>
          <h2 className="title">Building Innovative Solutions</h2>
          <p>
            A collection of impactful projects showcasing my skills and
            problem-solving abilities.
          </p>
        </div>
        <a className="btn-outline" href="https://github.com/Mashaa227">
          View All Projects →
        </a>
      </motion.div>
      <div className="grid3">
        {PROJECTS.map(([t, d], i) => (
          <motion.a
            key={t}
            href="#"
            whileHover={{ y: -6 }}
            {...fade}
            className="glass card project"
          >
            <div className="thumb" />
            <h3>{t}</h3>
            <p>{d}</p>
            <small>View Project →</small>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

// function Contact() {
//   return (
//     <section id="contact" className="section">
//       <div className="two">
//         <motion.div {...fade}>
//           <Tag>Get In Touch</Tag>
//           <h2 className="title grad">Let's Build Something Amazing Together</h2>
//           <p>
//             I'm always open to discussing new opportunities, collaboration or
//             just a friendly chat.
//           </p>
//           {CONTACT.map(([i, t]) => (
//             <div key={t} className="glass contact">
//               <span>{i}</span>
//               {t}
//             </div>
//           ))}
//         </motion.div>
//         <motion.div
//           className="envelope"
//           animate={{ rotate: [-4, 4, -4] }}
//           transition={{ repeat: Infinity, duration: 5 }}
//         >
//           ✉️
//         </motion.div>
//       </div>
//     </section>
//   );
// }

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="two">
        <motion.div {...fade}>
          <Tag>Get In Touch</Tag>

          <h2 className="title grad">Let's Build Something Amazing Together</h2>

          <p>
            I'm always open to discussing new opportunities, collaborations, or
            just a friendly chat.
          </p>

          {CONTACT.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass contact"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="envelope"
          animate={{ rotate: [-4, 4, -4] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✉️
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Skills />
        <Contact />
        {/* <ContactCTA /> */}
      </main>
      <Footer />
    </>
  );
}
