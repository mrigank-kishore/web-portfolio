export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  achievements: string[]
}

export interface AchievementItem {
  title: string
  description: string
}

export interface ProjectItem {
  name: string
  problem: string
  solution: string
  impact: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export const profile = {
  name: 'Mrigank Kishore Varma',
  title: 'Principal Cloud Architect',
  headline: 'Cloud Transformation | AI/ML | Platform Architecture',
  tagline: 'Architecting secure, scalable cloud platforms that reduce cost and accelerate delivery.',
  experienceYears: 16,
  location: 'Pune, India',
  phone: '+91 98337 21131',
  email: 'mrigank.online@gmail.com',
  linkedin: 'https://linkedin.com/in/mrvarma',
  linkedinLabel: 'linkedin.com/in/mrvarma',
  resumePath: './Mrigank%20Resume.pdf',
  summary:
    'Principal Cloud Architect with 16+ years of experience driving enterprise IT transformation across AWS, Azure, microservices, data platforms, and AI-enabled solutions. He specializes in modernizing complex workloads into secure, cost-optimized cloud-native systems that scale across teams and products.',
  highlights: [
    'Architected Azure landing zones and multi-account foundations supporting 40+ engineering teams with centralized networking and governance.',
    'Led migrations from on-prem and Azure workloads to AWS, reducing total cost of ownership by up to 80%.',
    'Optimized critical data pipelines from roughly 4 hours to minutes, enabling near real-time analytics and faster business decisions.',
    'Delivered ML-powered solutions including ETA prediction, OCR automation, NLP-based text extraction, and an internal ChatGPT experience for teams.',
  ],
  strengths: [
    'Cloud cost optimization through architecture simplification and workload redesign.',
    'Hands-on technical leadership spanning architecture strategy, implementation, and mentoring.',
    'Future-focused engineering mindset with continued work in Generative AI, LLMs, and MLOps.',
  ],
  skills: [
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Kubernetes', 'Amazon ECS', 'AWS Lambda', 'Amazon S3', 'Amazon RDS', 'Step Functions', 'AKS', 'Landing Zones', 'ExpressRoute'],
    },
    {
      category: 'Architecture',
      skills: ['Microservices', 'Event-driven Systems', 'Serverless', 'SOA', 'Cloud-native Platforms', 'Distributed Systems', 'MLOps'],
    },
    {
      category: 'Data & AI/ML',
      skills: ['AWS Glue', 'Apache Spark', 'Lake Formation', 'Kinesis', 'Kafka', 'AWS DMS', 'SageMaker', 'Textract', 'Comprehend', 'Azure Vision'],
    },
    {
      category: 'DevOps, Security & Code',
      skills: ['GitHub Actions', 'Jenkins', 'SonarQube', 'JFrog', 'AWS CDK', 'Bicep', 'CloudFormation', 'IAM', 'Cloud Custodian', 'Java', 'Python', 'TypeScript/JavaScript'],
    },
  ] as SkillGroup[],
  experience: [
    {
      company: 'Sterling / First Advantage',
      role: 'Principal Architect',
      period: '2019 - Present',
      location: 'Work From Home',
      achievements: [
        'Architected Azure landing zones and multi-account setups with centralized networking, enabling 40+ engineering teams to deploy secure and scalable products.',
        'Led migration from on-prem and Azure workloads to AWS, reducing TCO by up to 80% while improving scalability and security.',
        'Defined technology roadmaps, facilitated cross-team design reviews, and governed cloud adoption across the organization.',
        'Optimized data pipelines from 4 hours to minutes to support near real-time analytics for business-critical decisions.',
        'Implemented ML-based solutions for ETA prediction, OCR automation, NLP text extraction, and an internal ChatGPT experience.',
        'Evangelized cloud-native delivery, DevOps CI/CD, tracing, and container adoption while contributing to a self-service internal developer platform on Azure.',
      ],
    },
    {
      company: 'Tech Mahindra',
      role: 'Solution Architect',
      period: '2017 - 2019',
      location: 'Pune',
      achievements: [
        'Designed and built an internal developer platform for building and deploying microservices on AWS with multi-tenant CI/CD automation.',
        'Supported clients including Telia, Verizon, and AT&T as an AWS and microservices architect for cloud-native modernization.',
        'Established containerization, DevOps practices, and streaming-based data synchronization patterns.',
        'Delivered modern CI/CD approaches including blue-green and canary deployments with performance improvements.',
      ],
    },
    {
      company: 'Capgemini',
      role: 'IT Architect / Senior Consultant',
      period: '2012 - 2017',
      location: 'Mumbai',
      achievements: [
        'Represented the IBM technology stack within a global architect leadership team.',
        'Led digital platform modernization using IBM cloud and cloud-native architectural approaches.',
        'Created pre-sales solution designs across the IBM product suite.',
        'Architected solutions for Cochlear, Dr. Reddy, Johnson & Johnson, and HP Global Commerce.',
      ],
    },
    {
      company: 'Wipro, Patni & IBM',
      role: 'SME / Lead Developer / Associate',
      period: '2008 - 2012',
      location: 'Delhi',
      achievements: [
        'Architected portals for the Government of India and enterprise clients including Airtel and Neptune Orient Lines.',
        'Delivered secure IBM WebSphere-based solutions with SSO, portal integrations, and multichannel application capabilities.',
        'Implemented mobile portals, ESB integrations, and billing-related systems during early enterprise modernization work.',
      ],
    },
  ] as ExperienceItem[],
  achievements: [
    {
      title: '80% TCO Reduction',
      description: 'Drove AWS migration and cloud optimization initiatives that substantially reduced infrastructure spend without compromising resilience.',
    },
    {
      title: '40+ Teams Enabled',
      description: 'Built landing zones and platform foundations that gave multiple engineering teams secure, governed environments to ship from.',
    },
    {
      title: '4 Hours to Minutes',
      description: 'Re-architected data processing workflows for near real-time analytics and faster operational decision-making.',
    },
    {
      title: 'AI in Production',
      description: 'Applied OCR, NLP, predictive ML, and internal GenAI use cases to real enterprise workflows instead of keeping them at prototype stage.',
    },
  ] as AchievementItem[],
  projects: [
    {
      name: 'Enterprise Landing Zone Program',
      problem: 'Engineering teams needed a secure, scalable cloud foundation with consistent governance and networking patterns.',
      solution: 'Architected Azure landing zones and multi-account setups with centralized networking, security controls, and platform guardrails.',
      impact: 'Enabled 40+ engineering teams to launch and scale products on a governed platform.',
    },
    {
      name: 'Cloud Migration and Cost Optimization',
      problem: 'Legacy workloads running across on-prem and Azure created cost, scalability, and operational inefficiencies.',
      solution: 'Led migration to AWS and re-architected workloads for cost-optimized, secure, cloud-native operation.',
      impact: 'Reduced total cost of ownership by up to 80% while improving scalability and security posture.',
    },
    {
      name: 'Near Real-Time Data Platform',
      problem: 'Business-critical data pipelines took hours to process, delaying analytics and decision-making.',
      solution: 'Redesigned data flows using modern cloud data services and streaming-oriented patterns.',
      impact: 'Cut processing time from around 4 hours to minutes and unlocked near real-time insight.',
    },
    {
      name: 'AI Automation and Internal GenAI',
      problem: 'Manual document and text-heavy workflows limited operational speed and insight.',
      solution: 'Delivered OCR automation, NLP extraction, ETA prediction, and an internal ChatGPT experience integrated with team workflows.',
      impact: 'Introduced practical AI capabilities into day-to-day enterprise operations and platform usage.',
    },
  ] as ProjectItem[],
  certifications: [
    'AWS Certified Solutions Architect - Associate',
    'Data Science Specialization, IIT Roorkee',
    'IBM Certified Application Developer - Cloud Platform V1',
  ],
  education: 'BCA, West Bengal University of Technology (2004 - 2007)',
  chatbotResponses: {
    intro:
      "Hi! I can answer questions about Mrigank's architecture experience, cloud migrations, AI work, and platform leadership.",
    role:
      'Mrigank is a Principal Cloud Architect focused on enterprise cloud transformation, platform architecture, AI/ML adoption, and modern cloud-native delivery.',
    skills:
      'His strongest areas include AWS and Azure architecture, landing zones, microservices, DevOps, data platforms, MLOps, and AI services such as SageMaker, Textract, Comprehend, and Azure Vision.',
    aws:
      'He has led migrations from on-prem and Azure to AWS, designed multi-account foundations, and used services like ECS, Lambda, S3, RDS, Step Functions, CDK, Glue, and SageMaker.',
    ai:
      'His AI work includes ETA prediction, OCR automation, NLP-based text extraction, internal ChatGPT integration, and production-oriented MLOps patterns.',
    impact:
      'Key outcomes include up to 80% TCO reduction, cloud platforms used by 40+ engineering teams, and data pipelines improved from 4 hours to minutes.',
  },
}
