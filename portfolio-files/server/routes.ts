import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/resume', (req: Request, res: Response) => {
    const resumePath = path.resolve(process.cwd(), 'attached_assets', 'Akshatha resume new.pdf');
    
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Akshatha_Mundrathi_Resume.pdf"');
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ message: 'Resume file not found' });
    }
  });

  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, you'd send an email or store the contact request
      // For demo purposes, we'll just log it and return success
      console.log('Contact form submission:', { name, email, subject, message });
      
      res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'An error occurred while processing your message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
