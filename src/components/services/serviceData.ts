import { 
  MessageSquare, Mail, Phone, Share2, Globe, Clock, Zap, 
  Users, DollarSign, Bot, Sparkles, Target, Send, BarChart, 
  Calendar, BellRing, Instagram, Twitter, Linkedin, Layout, 
  Palette, Code, Smartphone, Search, Shield
} from 'lucide-react';

export const services = [
  {
    icon: MessageSquare,
    title: "AI Text Agents",
    description: "AI-powered customer service agents that work 24/7",
    benefits: [
      { icon: Clock, text: "24/7 Availability" },
      { icon: Zap, text: "Instant Responses" },
      { icon: DollarSign, text: "Cost Efficiency" },
      { icon: Users, text: "Personalized Service" },
      { icon: Target, text: "Lead Generation" },
      { icon: Bot, text: "Task Automation" }
    ]
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized email campaigns at scale",
    benefits: [
      { icon: Send, text: "2,500+ Daily Emails" },
      { icon: Target, text: "Smart Targeting" },
      { icon: BarChart, text: "Response Tracking" },
      { icon: Calendar, text: "Automated Follow-ups" },
      { icon: Sparkles, text: "AI-Powered Copy" },
      { icon: BellRing, text: "Smart Notifications" }
    ]
  },
  {
    icon: Phone,
    title: "AI Phone Agents",
    description: "Intelligent call handling and lead capture",
    benefits: [
      { icon: Users, text: "Natural Conversations" },
      { icon: Calendar, text: "Appointment Booking" },
      { icon: Target, text: "Lead Qualification" },
      { icon: Clock, text: "24/7 Availability" },
      { icon: Shield, text: "Call Recording" },
      { icon: BarChart, text: "Analytics" }
    ]
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Automated social media management",
    benefits: [
      { icon: Instagram, text: "Instagram Management" },
      { icon: Twitter, text: "Twitter Automation" },
      { icon: Linkedin, text: "LinkedIn Growth" },
      { icon: Send, text: "Auto DM Responses" },
      { icon: Target, text: "Audience Targeting" },
      { icon: BarChart, text: "Analytics Dashboard" }
    ]
  },
  {
    icon: Globe,
    title: "Website Building",
    description: "Professional websites using AI",
    benefits: [
      { icon: Layout, text: "Responsive Design" },
      { icon: Palette, text: "Modern UI/UX" },
      { icon: Code, text: "Clean Code" },
      { icon: Smartphone, text: "Mobile-First" },
      { icon: Search, text: "SEO Optimized" },
      { icon: Zap, text: "Fast Loading" }
    ]
  }
];