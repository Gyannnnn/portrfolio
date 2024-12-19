"use client";

import Link from "next/link";
import React, { useState } from "react";

import { FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useToast } from "@/hooks/use-toast";

import axios from "axios";

export default function Contact() {
  const { toast } = useToast();

  const [formdata, setFormData] = useState({
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formdata.email.trim() || !formdata.message.trim()) {
      toast({
        description: "Please fill in both fields before submitting.",
      });
      return;
    }

    try {
      const response = await axios.put("/api/v1/contact", formdata);

      if (response.status === 200) {
        toast({
          description: "Your message has been sent successfully to Gyanaranjan!",
        });
        // Clear the form
        setFormData({
          email: "",
          message: "",
        });
        console.log("Message Sent Successfully");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        description: "Failed to send the message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-screen h-screen dark:bg-black bg-secondary flex items-start justify-center pt-20">
      <div className="w-[67vw] h-[70vh] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="sm:text-6xl max-sm:text-4xl font-bold">Get In Touch</h1>
          <div className="flex gap-5">
            <Link
              className="text-blue-600 text-3xl max-sm:text-2xl"
              href="https://www.linkedin.com/in/higyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="text-3xl max-sm:text-2xl"
              href="https://github.com/Gyannnnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              className="text-3xl text-black dark:text-white max-sm:text-2xl"
              href="https://x.com/hi_gyaan?s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </Link>
            <Link
              className="text-3xl text-red-600 max-sm:text-2xl"
              href="https://www.reddit.com/u/gyan-css"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit />
            </Link>
          </div>
        </div>
        <Card className="sm:w-[450px] max-sm:w-[340px] pt-10 drop-shadow-sm">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex w-full flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    value={formdata.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </div>
                <div className="flex w-full flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    id="message"
                    value={formdata.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here."
                  />
                </div>
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
