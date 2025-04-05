import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, question } = req.body;
      
      // Validate required fields
      if (!name || !email || !question) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real application, you would store the contact form submission
      // or send an email via a service like Nodemailer
      
      return res.status(200).json({ message: "Message received successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      // Validate email format
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real application, you would add the email to a newsletter database
      // or service like Mailchimp, SendGrid, etc.
      
      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
