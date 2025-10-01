import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-foreground/80">
              I'm a versatile full-stack developer with a passion for creating intuitive, 
              high-performance web applications. My journey started 5 years ago when I 
              discovered the perfect blend of logical problem-solving and creative design.
            </p>
            
            <p className="text-lg mb-8 text-foreground/80">
              Today, I specialize in React, Node.js, and modern web technologies, helping 
              startups and established companies build products that users love. I believe 
              in writing clean, maintainable code and creating designs that are both 
              beautiful and functional.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl mb-2">50+</div>
                <div className="text-sm text-foreground/70">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-border">
                <div className="text-2xl mb-2">5+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">🎯 What I Do</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Full-stack web application development</li>
                  <li>• UI/UX design and prototyping</li>
                  <li>• API design and database architecture</li>
                  <li>• Performance optimization and SEO</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">🌟 My Approach</h3>
                <p className="text-foreground/80">
                  I believe in understanding the business goals first, then crafting 
                  technical solutions that are scalable, maintainable, and user-focused. 
                  Every project is an opportunity to learn something new and push the 
                  boundaries of what's possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}