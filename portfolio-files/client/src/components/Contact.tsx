import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PROFILE_INFO, BACKGROUND_IMAGES, SECTION_IDS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { ContactFormData } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="section-bg py-20"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGES.CONTACT}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-blue font-medium">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2">Contact Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <Card className="bg-primary-navy p-6 rounded-lg card-glow h-full border-0">
              <CardContent className="p-0 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-accent-blue bg-opacity-10 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Email</h4>
                      <a
                        href={`mailto:${PROFILE_INFO.email}`}
                        className="text-white hover:text-accent-blue transition duration-300"
                      >
                        {PROFILE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent-blue bg-opacity-10 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Phone</h4>
                      <a
                        href={`tel:${PROFILE_INFO.phone}`}
                        className="text-white hover:text-accent-blue transition duration-300"
                      >
                        {PROFILE_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent-blue bg-opacity-10 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-accent-blue" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 mb-1">Location</h4>
                      <p className="text-white">{PROFILE_INFO.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary-dark hover:bg-accent-blue transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-primary-dark hover:bg-accent-blue transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-primary-dark hover:bg-accent-blue transition duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Download Resume */}
                <div className="mt-8 mt-auto">
                  <Button
                    className="inline-flex items-center px-5 py-3 bg-accent-blue hover:bg-accent-light-blue transition duration-300 rounded-md text-white font-medium"
                    asChild
                  >
                    <a href="/api/resume" download="Akshatha_Mundrathi_Resume.pdf">
                      <Download className="h-5 w-5 mr-2" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Card className="bg-primary-navy p-6 rounded-lg card-glow border-0">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-400">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="w-full px-4 py-3 bg-primary-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-300"
                                placeholder="Your name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-gray-400">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="w-full px-4 py-3 bg-primary-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-300"
                                placeholder="Your email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-400">Subject</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full px-4 py-3 bg-primary-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-300"
                              placeholder="Subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-400">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              className="w-full px-4 py-3 bg-primary-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue transition duration-300"
                              placeholder="Your message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-accent-blue hover:bg-accent-light-blue transition duration-300 rounded-lg text-white font-medium"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
