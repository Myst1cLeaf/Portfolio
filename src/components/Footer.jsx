import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Luis Carrillo. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          {/* Email */}
          <a
            href="carrilloluis992@gmail.com"
            className="hover:text-mint transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Myst1cLeaf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mint transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luis-carrillo-231444222/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mint transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}