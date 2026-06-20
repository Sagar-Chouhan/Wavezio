"use client";

import React, { useState, useEffect, useRef } from "react";
import MorphText from "@/components/ui/morph-text";
import { PerspectiveCarousel } from "@/components/ui/perspective-carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import { TestimonialsCard } from "@/components/ui/testimonials-card";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { GlassDock } from "@/components/ui/glass-dock";
import SocialFlipButton from "@/components/ui/social-flip-button";
import { FlipFadeText } from "@/components/ui/flip-fade-text";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FaInstagram, FaYoutube, FaTwitter, FaSpotify } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// Icons for the dock
import { FaHome, FaBriefcase, FaPhotoVideo, FaUsers, FaPhone, FaStar, FaMusic, FaFilm, FaRocket, FaCheckCircle, FaArrowRight, FaHeadphones, FaPalette, FaVideo, FaGlobe } from "react-icons/fa";

export default function LandingPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const packagesRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = [heroRef, servicesRef, projectsRef, packagesRef, teamRef, faqRef, contactRef];

    sections.forEach((sec) => {
      if (sec.current) {
        gsap.fromTo(
          sec.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "+917302484767";
    const message = `Hi, I'm ${name}.\nI'm looking for: ${service}.\nDetails: ${details}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const navItems = [
    { title: "Home", href: "#home", icon: FaHome, animationType: "home" },
    { title: "Services", href: "#services", icon: FaBriefcase, animationType: "marker" },
    { title: "Projects", href: "#projects", icon: FaPhotoVideo, animationType: "blog" },
    { title: "Packages", href: "#packages", icon: FaStar, animationType: "star" },
    { title: "Team", href: "#team", icon: FaUsers, animationType: "users" },
    { title: "Contact", href: "#contact", icon: FaPhone, animationType: "email" },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen relative font-sans overflow-x-hidden transition-colors duration-500">
      {/* Global Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4" type="video/mp4" />
      </video>

      {/* Dock Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <GlassDock items={navItems} />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative z-10">
        <HeroGeometric badge="Wavezio Agency">
          <div className="flex flex-col items-center justify-center text-center space-y-8 mt-12">
            <FlipFadeText words={["WAVEZIO"]} textClassName="text-5xl md:text-8xl font-black text-primary uppercase tracking-tighter" />
            <MorphText
              words={["Music Mixing", "Mastering", "Video Editing", "Poster Design", "Logo Design"]}
              interval={3000}
              fontSize="clamp(2rem, 6vw, 5rem)"
              subtext="ELEVATE YOUR DIGITAL PRESENCE"
            />
          </div>
        </HeroGeometric>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {["Music Mix & Mastering", "Video Editing", "Poster Design", "Logo Design"].map((srv, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl overflow-hidden group min-h-[300px] border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col justify-center items-start">
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="relative z-10 text-2xl font-semibold mb-4 text-white group-hover:text-white transition-colors duration-300">{srv}</h3>
              <p className="relative z-10 text-neutral-400 mb-6 text-sm leading-relaxed">Professional, industry-standard {srv.toLowerCase()} for independent artists and creators.</p>
              <a href="#contact" className={buttonVariants({ variant: "outline", className: "relative z-10 mt-auto border-white/20 hover:bg-white/10 text-white" })}>
                Request {srv}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section ref={projectsRef} id="projects" className="py-24 overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="h-[600px] w-full max-w-[1200px] mx-auto px-4 sm:px-8">
          <PerspectiveCarousel
            autoPlay={true}
            loop={true}
            items={[
              { title: "O Jana", src: "https://i.scdn.co/image/ab67616d0000b27321b92fb283bf404ccdc3c013", alt: "O Jana Cover" },
              { title: "BFML (Born For My Legacy)", src: "https://i.scdn.co/image/ab67616d0000b2734734aae83f289b88a2e621c8", alt: "BFML Cover" },
              { title: "Baatien", src: "https://i.scdn.co/image/ab67616d0000b27356c69eff6b990ecae829bdd8", alt: "Baatien Cover" },
              { title: "Make Over", src: "https://i.scdn.co/image/ab67616d0000b27313442f7a3791753577f4df5a", alt: "Make Over Cover" },
              { title: "CATFISH", src: "https://i.scdn.co/image/ab67616d0000b2733bbe6c455e067ff40769b431", alt: "CATFISH Cover" },
              { title: "Tu Na Mera", src: "https://i.scdn.co/image/ab67616d0000b273b909da41a8134b9789193c62", alt: "Tu Na Mera Cover" },
              { title: "HOW TO DRILL", src: "https://i.scdn.co/image/ab67616d0000b273d2e4509896313a0a3ab1a13d", alt: "HOW TO DRILL Cover" },
              { title: "VOICE", src: "https://i.scdn.co/image/ab67616d0000b2732af443e7bb583c411129a65d", alt: "VOICE Cover" },
              { title: "Khudgarz", src: "https://i.scdn.co/image/ab67616d0000b273c1bec787521ecf9e5632e435", alt: "Khudgarz Cover" },
            ]}
          />
        </div>
      </section>

      {/* Pricing / Packages Section */}
      <section ref={packagesRef} id="packages" className="py-24 px-8 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Exclusive Packages</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Elevate your creative vision with industry-standard audio and visual production. We deliver premium quality at independent rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pack 1 */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors h-full">
            <div className="uppercase text-xs font-bold tracking-widest text-neutral-400 mb-2">Pack 1</div>
            <h3 className="text-2xl font-bold mb-4">Mix Master Only</h3>
            <p className="text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">Single Track. Professional Audio & Quick Turnaround.</p>
            <div className="text-5xl font-black mb-8">₹699</div>
            <a href="#contact" className="w-full inline-flex items-center justify-center bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-all uppercase tracking-widest text-sm">
              Book Now
            </a>
          </div>

          {/* Pack 2 */}
          <div className="bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl p-8 rounded-2xl flex flex-col relative h-full">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap">Most Popular</div>
            <div className="uppercase text-xs font-bold tracking-widest text-neutral-400 mb-2">Pack 2</div>
            <h3 className="text-2xl font-bold mb-4">Mix Master + Distribution + Cover Art</h3>
            <p className="text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">Single Track. All Major Platforms (Spotify, Apple, etc.) + Custom Cover Art / Thumbnail.</p>
            <div className="text-5xl font-black mb-8 text-white">₹899</div>
            <a href="#contact" className="w-full inline-flex items-center justify-center bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-all uppercase tracking-widest text-sm">
              Book Now
            </a>
          </div>

          {/* Pack 3 */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors h-full">
            <div className="uppercase text-xs font-bold tracking-widest text-neutral-400 mb-2">Pack 3</div>
            <h3 className="text-2xl font-bold mb-4">Video Editing + All Services</h3>
            <p className="text-neutral-400 mb-6 flex-grow text-sm leading-relaxed">Music Video / Vlogs + Color Grading + Full Audio & Video Management.</p>
            <div className="text-5xl font-black mb-8">₹1499</div>
            <a href="#contact" className="w-full inline-flex items-center justify-center bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-all uppercase tracking-widest text-sm">
              Book Now
            </a>
          </div>
        </div>

        <div className="text-center bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-6 flex items-center justify-center">All Services Available</h4>
          <div className="flex flex-wrap justify-center gap-4 text-white font-medium text-sm">
            <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-sm">Mixing & Mastering</span>
            <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-sm">Poster & Thumbnail Design</span>
            <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-sm">Video Editing</span>
            <span className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-sm">Song Distribution</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} id="team" className="py-24 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Meet the Team</h2>
        <div className="flex justify-center w-full max-w-[400px] mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col items-center hover:border-white/20 transition-colors w-full text-center">
            <img
              src="https://i.scdn.co/image/ab6761610000e5ebe6d55d48eceb370be7ad5a1b"
              alt="Shaa Boy"
              className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-white/10"
            />
            <h3 className="text-3xl font-bold mb-2">Shaa Boy</h3>
            <p className="text-primary mb-8 uppercase tracking-widest text-sm font-bold">Owner</p>
            <div className="flex gap-4">
              <a href="https://open.spotify.com/artist/3rXK0V0zzfA1X5JcX7nbWn?si=v6Gi1HiSTN6vMzjDP-QAgA" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/60 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-primary text-white">
                <FaSpotify size={24} />
              </a>
              <a href="https://www.instagram.com/shaa_boy_/" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/60 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-primary text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@shaaboy" target="_blank" rel="noreferrer" className="w-14 h-14 bg-black/60 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all border border-white/10 hover:border-primary text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} id="faq" className="py-24 px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">FAQ</h2>
        <FaqAccordion
          items={[
            { question: "How long does a mix & master take?", answer: "Typically, a full mix and master is delivered within 3-5 business days." },
            { question: "Do you offer revisions?", answer: "Yes, we offer up to 3 revisions to ensure you are completely satisfied with the final product." },
            { question: "What files do I need to send for video editing?", answer: "Please provide high-resolution raw footage, any specific assets like logos, and a brief description of your vision." },
            { question: "How do I start a project?", answer: "Fill out the contact form below and we will connect with you on WhatsApp right away." },
          ]}
        />
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 px-8 max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Let's Create</h2>
        <div className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl shadow-primary/5">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
              <input
                required
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Service Required</label>
              <select
                required
                value={service}
                onChange={e => setService(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none [&>option]:bg-black [&>option]:text-white"
              >
                <option value="" disabled>Select a service...</option>
                <option value="Music Mixing & Mastering">Music Mixing & Mastering</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Poster Design">Poster Design</option>
                <option value="Logo Design">Logo Design</option>
                <option value="Multiple/Other">Multiple / Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Project Details</label>
              <textarea
                required
                value={details}
                onChange={e => setDetails(e.target.value)}
                className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-[120px]"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-neutral-200 text-sm font-bold uppercase tracking-widest py-6 rounded-lg transition-all"
            >
              Send Request on WhatsApp
            </Button>
          </form>
        </div>
      </section>

      {/* Professional Minimal Footer */}
      <footer className="relative z-10 bg-black pt-16 pb-36 mt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {/* Brand & Copyright */}
            <div className="col-span-2 md:col-span-1 flex flex-col justify-between h-full space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-podium mb-3">Wavezio.</h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                  Elevating digital presence through premium audio and visual design.
                </p>
              </div>
              <p className="text-neutral-600 text-xs">
                © {new Date().getFullYear()} Shaa Boy. All rights reserved.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors text-sm">Services</a></li>
                <li><a href="#projects" className="text-neutral-400 hover:text-white transition-colors text-sm">Projects</a></li>
                <li><a href="#packages" className="text-neutral-400 hover:text-white transition-colors text-sm">Packages</a></li>
                <li><a href="#team" className="text-neutral-400 hover:text-white transition-colors text-sm">Team</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://open.spotify.com/artist/3rXK0V0zzfA1X5JcX7nbWn" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-3">
                    <FaSpotify size={16} /> Spotify
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shaa_boy_/" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-3">
                    <FaInstagram size={16} /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@shaaboy" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-3">
                    <FaYoutube size={16} /> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </footer>
    </main>
  );
}