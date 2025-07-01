"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  const { toast } = useToast();
  const [formdata, setFormData] = useState({ email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formdata.email.trim() || !formdata.message.trim()) {
      toast({ description: "Please fill in both fields before submitting." });
      return;
    }
    try {
      const response = await axios.put("/api/v1/contact", formdata);
      if (response.status === 200) {
        toast({ description: "Your message has been sent successfully to Gyanaranjan!" });
        setFormData({ email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({ description: "Failed to send the message. Please try again later.", variant: "destructive" });
    }
  }

  return (
    <main className="min-h-screen w-full bg-secondary dark:bg-black flex flex-col items-center justify-center pt-24 px-2">
      <SectionWrapper className="items-center">
        <div className="w-full max-w-lg mx-auto bg-white/30 dark:bg-[#18181c]/70 backdrop-blur-xl border border-white/30 dark:border-gray-700 rounded-2xl p-10 shadow-lg flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-2">Get In Touch</h1>
          <div className="flex gap-6 mb-2">
            <Link href="https://www.linkedin.com/in/higyan" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow-md hover:scale-110" aria-label="LinkedIn"><FaLinkedin /></Link>
            <Link href="https://github.com/Gyannnnn" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow-md hover:scale-110" aria-label="GitHub"><FaGithub /></Link>
            <Link href="https://instagram.com/hi.gyan_" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-200 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow-md hover:scale-110" aria-label="Instagram"><FaInstagram /></Link>
            <Link href="https://x.com/hi_gyaan?s=08" target="_blank" rel="noopener noreferrer" className="text-3xl text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 bg-white/70 dark:bg-black/40 rounded-full p-2 shadow-md hover:scale-110" aria-label="Twitter (X)"><FaSquareXTwitter /></Link>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
              <Input
                name="email"
                id="email"
                value={formdata.email}
                onChange={handleChange}
                required
                placeholder="Enter Your Email"
                type="email"
                className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
              <Textarea
                name="message"
                id="message"
                value={formdata.message}
                onChange={handleChange}
                required
                placeholder="Type your message here."
                className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 px-4 py-2 min-h-[120px]"
              />
            </div>
            <Button type="submit" className="mt-2 rounded-full font-bold bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 shadow-md">Send message</Button>
          </form>
        </div>
      </SectionWrapper>
    </main>
  );
}
