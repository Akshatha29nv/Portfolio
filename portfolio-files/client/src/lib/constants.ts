import { Project, SkillCategory, CertificationInfo, Experience } from "@/types";

export const SECTION_IDS = {
  HOME: "home",
  ABOUT: "about",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  CERTIFICATIONS: "certifications",
  PROJECTS: "projects",
  CONTACT: "contact"
};

export const NAV_LINKS = [
  { label: "About", href: `#${SECTION_IDS.ABOUT}` },
  { label: "Experience", href: `#${SECTION_IDS.EXPERIENCE}` },
  { label: "Skills", href: `#${SECTION_IDS.SKILLS}` },
  { label: "Certifications", href: `#${SECTION_IDS.CERTIFICATIONS}` },
  { label: "Projects", href: `#${SECTION_IDS.PROJECTS}` },
  { label: "Contact", href: `#${SECTION_IDS.CONTACT}` },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Network Administrator",
    company: "BRAUMS Ice cream & Dairy stores",
    location: "Oklahoma City, OK",
    period: "Mar 2022 - Present",
    responsibilities: [
      "Configuring and maintaining VLANs for newly added devices",
      "Updating firewall policies and creating new networks for stores in both Meraki and Fortinet",
      "Building VPN tunnels (IPsec & SSL) for Fortinet devices",
      "Providing technical support for help desk staff and IT team, troubleshooting complex networking issues",
      "Managing and monitoring Cisco Meraki cloud-based network",
      "Implementing risk assessment processes and managing data recovery from cloud systems"
    ]
  },
  {
    title: "React Front-end Developer",
    company: "Visa Inc",
    location: "",
    period: "Dec 2021 - Apr 2022",
    responsibilities: [
      "Worked on migrating front-end technology from .NET to React JS for a banking project",
      "Implemented agile methodology and participated in daily team meetings",
      "Gained experience with GitHub, Postman, and PostgreSQL",
      "Collaborated across concurrent teams to deliver project milestones"
    ]
  },
  {
    title: "Network Engineer Trainee",
    company: "Netomates IT Services Ltd",
    location: "",
    period: "Jan 2021 - Dec 2021",
    trainingObjectives: [
      "Basics of IT networking",
      "Layer 1 - Physical connectivity",
      "Layer 2 - VLAN, STP, Port-Channel",
      "Layer 3 - IP routing, VRRP/HSRP",
      "Layer 4 - TCP and UDP",
      "IPSec VPN & SSL VPN",
      "Network monitoring tools",
      "Fortinet firewall technologies"
    ],
    fortinetTraining: [
      "Fresh installations and software upgrades",
      "Day-to-day firewall policy management",
      "Troubleshooting connectivity issues",
      "IPSec VPN tunnel configurations"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Network Security",
    color: "bg-accent-blue",
    skills: [
      { name: "Fortinet Firewall Administration", percentage: 95 },
      { name: "Cisco ASA Configuration", percentage: 90 },
      { name: "Palo Alto Firewall Management", percentage: 85 },
      { name: "VPN Implementation (IPSec, SSL)", percentage: 90 },
      { name: "DDoS Mitigation", percentage: 85 }
    ]
  },
  {
    name: "Routing & Switching",
    color: "bg-tech-green",
    skills: [
      { name: "VLAN Configuration", percentage: 95 },
      { name: "Inter-VLAN Routing", percentage: 90 },
      { name: "STP, RSTP, PVST Configuration", percentage: 85 },
      { name: "OSPF, EIGRP, BGP Implementation", percentage: 85 },
      { name: "First Hop Redundancy (HSRP, VRRP)", percentage: 80 }
    ]
  },
  {
    name: "Wireless Infrastructure",
    color: "bg-accent-light-blue",
    skills: [
      { name: "Cisco Meraki Management", percentage: 90 },
      { name: "Aironet Access Points Configuration", percentage: 85 },
      { name: "Wireless Controllers", percentage: 80 },
      { name: "RF Tuning & BYOD Management", percentage: 75 },
      { name: "Wireless Security Implementation", percentage: 85 }
    ]
  },
  {
    name: "Network Monitoring & Troubleshooting",
    color: "bg-status-success",
    skills: [
      { name: "Wireshark & TCP Dump", percentage: 90 },
      { name: "SolarWinds", percentage: 85 },
      { name: "SNMP Monitoring", percentage: 80 },
      { name: "Network Troubleshooting", percentage: 95 },
      { name: "Performance Optimization", percentage: 85 }
    ]
  }
];

export const ADDITIONAL_SKILLS = [
  { name: "AAA Architecture", icon: "ShieldCheck" },
  { name: "Load Balancers", icon: "CopyPlus" },
  { name: "DNS/DHCP", icon: "FilterX" },
  { name: "Access Lists", icon: "Lock" },
  { name: "Network Protocols", icon: "Cpu" },
  { name: "Network Hardware", icon: "Server" },
  { name: "Route Filtering", icon: "Settings" },
  { name: "Linux", icon: "Code" },
  { name: "Windows Server", icon: "Terminal" },
  { name: "React", icon: "Video" }
];

export const CERTIFICATIONS: CertificationInfo[] = [
  {
    title: "Fortinet NSE7",
    subtitle: "Network Security Expert - Architect",
    issueDate: "Issued 2021",
    icon: "ShieldCheck"
  },
  {
    title: "Fortinet NSE4",
    subtitle: "Network Security Expert - Professional",
    issueDate: "Issued 2024",
    icon: "ShieldCheck"
  },
  {
    title: "Cisco CCNA",
    subtitle: "Cisco Certified Network Associate",
    issueDate: "Issued 2024",
    icon: "ShieldCheck"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise Firewall Implementation",
    description: "Implemented a comprehensive Fortinet firewall solution for a multi-site organization, including policy creation, VPN tunnels, and security profiles.",
    category: "security",
    tags: ["Fortinet", "FortiManager", "IPSec VPN", "Security Policies"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Multi-Store Network Redesign",
    description: "Redesigned and implemented network infrastructure for multiple retail locations, including VLAN segmentation, routing, and QoS implementation.",
    category: "networking",
    tags: ["Cisco", "VLAN", "Routing", "QoS"],
    image: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Wireless Network Deployment",
    description: "Planned and deployed a comprehensive wireless network solution for a large warehouse facility, including heat mapping and RF optimization.",
    category: "wireless",
    tags: ["Meraki", "RF Planning", "Heat Maps", "Enterprise WiFi"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Security Incident Response",
    description: "Developed and implemented a comprehensive security incident response plan, including detection, analysis, containment, and recovery procedures.",
    category: "security",
    tags: ["Incident Response", "Security Monitoring", "Threat Analysis"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Banking App Migration",
    description: "Contributed to the migration of a banking application from .NET to React, improving performance and user experience while maintaining security standards.",
    category: "development",
    tags: ["React", "Front-end", "Agile", "Banking"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Network Monitoring System",
    description: "Implemented a comprehensive network monitoring solution using SolarWinds and custom dashboards to provide real-time visibility into network health and performance.",
    category: "networking",
    tags: ["SolarWinds", "SNMP", "Monitoring", "Dashboards"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
  }
];

export const PROJECT_CATEGORIES = [
  { label: "All Projects", value: "all" },
  { label: "Security", value: "security" },
  { label: "Networking", value: "networking" },
  { label: "Wireless", value: "wireless" },
  { label: "Development", value: "development" }
];

export const BACKGROUND_IMAGES = {
  HERO: "https://images.unsplash.com/photo-1591808216268-ce0b82787efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
  EXPERIENCE: "https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
  CERTIFICATIONS: "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
  CONTACT: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
};

export const PROFILE_INFO = {
  name: "Akshatha Mundrathi",
  title: "Network Security Engineer",
  email: "akshatha.mundrathi2931@gmail.com",
  phone: "+1 (405) 570-3584",
  location: "Oklahoma City, OK",
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Oklahoma City University",
      year: "2021"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "JNTUH",
      year: "2018"
    }
  ],
  profile: [
    "Over 4+ years of experience in designing, deploying and troubleshooting enterprise-level network infrastructure",
    "Experience with Fortinet NSE, Palo Alto NG Firewall configurations including URL filtering, threat prevention, and data filtering",
    "Responsible for Fortinet, Palo Alto and Cisco ASA firewall administration across global locations",
    "Profound knowledge in mitigation of DDoS attacks on Cisco and Palo Alto Firewalls",
    "Expertise in configuring and troubleshooting wireless infrastructure including Cisco Meraki and Aironet Access Points"
  ],
  expertise: {
    "Network Security": [
      "Firewall Configuration & Management",
      "VPN Implementation (IPsec, SSL)",
      "Threat Prevention",
      "DDoS Mitigation"
    ],
    "Network Infrastructure": [
      "Switching & Routing",
      "VLAN Implementation",
      "Network Protocols",
      "Wireless Networks"
    ],
    "Hardware Expertise": [
      "Cisco ASA & Meraki",
      "Fortinet Firewalls",
      "Palo Alto Firewalls",
      "F5 Load Balancers"
    ],
    "Troubleshooting": [
      "Network Traffic Analysis",
      "Wireshark & TCP Dump",
      "Performance Optimization",
      "Solar Winds"
    ]
  }
};
