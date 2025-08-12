import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Upload, Lightbulb, Users, Rocket, MessageCircle, HelpCircle, FileText } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    idea: "",
    materialFile: null as File | null,
    additionalLinks: "",
    sector: "",
    linkedinProfile: "",
    fullName: "",
    email: ""
  });

  const [showContactForm, setShowContactForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "Thank you for your submission. We'll review it and get back to you soon.",
    });
    setFormData({
      idea: "",
      materialFile: null,
      additionalLinks: "",
      sector: "",
      linkedinProfile: "",
      fullName: "",
      email: ""
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFormData(prev => ({ ...prev, materialFile: file }));
    } else if (file) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file only.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showContactForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-slate-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Button 
                variant="ghost" 
                onClick={() => setShowContactForm(false)}
                className="mb-6 text-teal-600 hover:text-teal-700"
              >
                ← Back to Contact
              </Button>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Submit Your Application</h1>
              <p className="text-slate-600 text-lg">Tell us about your idea and let's explore the possibilities together.</p>
            </div>

            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="idea" className="text-slate-700 font-medium mb-2 block">
                          Describe Your Idea*
                        </Label>
                        <Textarea
                          id="idea"
                          placeholder="Write a brief about your idea"
                          value={formData.idea}
                          onChange={(e) => handleInputChange("idea", e.target.value)}
                          required
                          rows={6}
                          className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400"
                        />
                      </div>

                      <div>
                        <Label htmlFor="additionalLinks" className="text-slate-700 font-medium mb-2 block">
                          Additional Links to Your Ideas*
                        </Label>
                        <Textarea
                          id="additionalLinks"
                          placeholder="Include any other relevant material for our evaluation"
                          value={formData.additionalLinks}
                          onChange={(e) => handleInputChange("additionalLinks", e.target.value)}
                          rows={4}
                          className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400"
                        />
                      </div>

                      <div>
                        <Label htmlFor="sector" className="text-slate-700 font-medium mb-2 block">
                          Sector of Interest*
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("sector", value)}>
                          <SelectTrigger className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400">
                            <SelectValue placeholder="Select your sector" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="sustainability">Sustainability</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="material" className="text-slate-700 font-medium mb-2 block">
                          Upload Relevant Material*
                        </Label>
                        <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors">
                          <Upload className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                          <p className="text-slate-600 mb-2">Drag and drop or upload Pitch Deck</p>
                          <p className="text-sm text-slate-500 mb-4">(PDF Files only)</p>
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-upload"
                          />
                          <Label
                            htmlFor="file-upload"
                            className="cursor-pointer bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded-md text-slate-700 transition-colors"
                          >
                            Choose file
                          </Label>
                          {formData.materialFile && (
                            <p className="mt-2 text-sm text-teal-600">{formData.materialFile.name}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="linkedin" className="text-slate-700 font-medium mb-2 block">
                          Your LinkedIn Profile*
                        </Label>
                        <Input
                          id="linkedin"
                          type="url"
                          placeholder="Enter your LinkedIn Profile URL"
                          value={formData.linkedinProfile}
                          onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                          required
                          className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400"
                        />
                      </div>

                      <div>
                        <Label htmlFor="name" className="text-slate-700 font-medium mb-2 block">
                          Your Name*
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your Full Name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          required
                          className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-medium mb-2 block">
                          Your Email*
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your Email Address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="bg-slate-50 border-slate-200 focus:border-teal-400 focus:ring-teal-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-12 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit Application
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Section A - Hero Quote */}
      <section className="h-[75vh] bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl mx-auto">
            "Great ideas deserve great partnerships. Let's build something extraordinary together."
          </blockquote>
          <p className="text-xl md:text-2xl text-teal-100 mt-8 font-medium">— InsightPath Team</p>
        </div>
      </section>

      {/* Section B - Why You're Reaching Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Three Ways to Connect with Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Choose the path that best fits your vision and let's start your journey together.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer transform hover:-translate-y-2" onClick={() => setShowContactForm(true)}>
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-coral-400 to-coral-500 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Share Your Innovation</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    Have a groundbreaking idea? Connect with our network of visionary founders and angel investors. We'll help transform your concept into reality with funding starting from $5,000.
                  </p>
                </div>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white font-medium py-3 mt-auto">
                  READ MORE
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer transform hover:-translate-y-2" onClick={() => setShowContactForm(true)}>
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Join Our Network</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    Connect with our portfolio of innovative founders and industry leaders. If you know any of our 100+ portfolio teams, they can introduce you and fast-track your journey with us.
                  </p>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 mt-auto">
                  READ MORE
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer transform hover:-translate-y-2" onClick={() => setShowContactForm(true)}>
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Apply Directly</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    Submit your application through our streamlined process. We review 500+ applications monthly, ensuring every founder gets a fair evaluation and personalized feedback.
                  </p>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 mt-auto">
                  READ MORE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section C - FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about working with us.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                What type of startups do you typically invest in?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                We focus on early-stage startups across various sectors including healthcare, technology, finance, education, and sustainability. We look for innovative ideas with strong founding teams and scalable business models.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                What is the typical investment range?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Our initial investments typically range from $5,000 to $100,000, with follow-on funding available for promising ventures. We also provide access to our network of angel investors and VCs for larger funding rounds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                How long does the application process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Our standard review process takes 2-4 weeks from application submission to decision. Priority applications through our network referrals may be expedited to 1-2 weeks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                Do you provide mentorship beyond funding?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Absolutely! We offer comprehensive support including mentorship, strategic guidance, networking opportunities, and access to industry experts. Our goal is to help you succeed beyond just providing capital.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                What should I include in my pitch deck?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Your pitch deck should include: problem statement, solution, market size, business model, traction, team background, financial projections, funding requirements, and use of funds. Keep it concise (10-15 slides) and focus on the most compelling aspects of your venture.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-lg px-6 bg-slate-50">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-teal-600">
                Can international startups apply?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Yes! We welcome applications from international startups. However, we do require companies to have or be willing to establish a legal entity in our jurisdiction for investment purposes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Additional Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="w-16 h-16 mx-auto text-teal-400 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our team is here to help. Reach out to us directly and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4"
                onClick={() => setShowContactForm(true)}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;