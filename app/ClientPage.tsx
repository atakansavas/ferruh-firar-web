"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ClientPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 border border-stone-200/30 rounded-full animate-spin"
          style={{
            animationDuration: "20s",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 border border-stone-300/20 rotate-45 animate-pulse"
          style={{
            animationDuration: "15s",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-stone-200/40 rounded-full animate-bounce"
          style={{
            animationDuration: "25s",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-10 w-20 h-20 border border-stone-300/25 rotate-12 animate-spin"
          style={{
            animationDuration: "30s",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-sm border-b border-stone-200/50">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-light tracking-wider text-stone-800">FERRUH FIRAR</h1>
          <div className="flex gap-4">
            <Link
              href="https://open.spotify.com/artist/6Cbn7my8L1eq70KhzuoTwz?si=j88hBYJwT4q3Ie3TZRlFcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-stone-200/50 transition-all duration-300 hover:scale-110"
              >
                <Music className="h-5 w-5 text-stone-700" />
                <span className="sr-only">Spotify</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/ferruhfirar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-stone-200/50 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-stone-700" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div
          className="container mx-auto max-w-4xl text-center"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-stone-800 mb-8 leading-none animate-fade-in">
            FERRUH
            <br />
            <span className="text-stone-600 italic font-light">FIRAR</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-delay">
            Ancient Sufi mysticism meets modern electronic beats from Turkey
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 px-6 bg-stone-100/50 relative">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl md:text-5xl font-light text-stone-800 mb-12 text-center tracking-wide">The Story</h3>
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-stone-700 leading-relaxed mb-8 text-lg font-light">
              From the ancient whirling halls of Turkey to the pulsing heart of modern electronic music, Ferruh Firar
              bridges worlds that have never met. In the sacred geometry of Sufi mysticism, he found the rhythm that
              drives contemporary souls to transcendence.
            </p>
            <p className="text-stone-700 leading-relaxed mb-8 text-lg font-light">
              Each track is a meditation in motion, where the spiritual depth of centuries-old Sufi traditions merges
              with the hypnotic pulse of techno. This is music for the seekers, the dancers, the ones who find the
              divine in the beat drop.
            </p>
            <p className="text-stone-700 leading-relaxed text-lg font-light italic">
              "In the spinning of the dervish and the pulse of the synthesizer, I found the same truth - that music is
              the bridge between the earthly and the eternal."
            </p>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-light text-stone-800 mb-16 text-center tracking-wide">Visions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SERÜVEN Album Cover */}
            <div className="group cursor-pointer lg:col-span-2">
              <div className="overflow-hidden rounded-lg bg-stone-200 aspect-square relative">
                <Image
                  src="/images/seruven-album.jpg"
                  alt="SERÜVEN - Album cover featuring mystical geometric mandala design"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 text-white font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  SERÜVEN
                </div>
              </div>
            </div>

            {/* DAHA PUNK ÖLDÜ */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg bg-stone-200 aspect-square relative">
                <Image
                  src="/images/daha-punk-oldu.jpg"
                  alt="DAHA PUNK ÖLDÜ - Conceptual art with newspaper texture"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 text-white font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  DAHA PUNK ÖLDÜ
                </div>
              </div>
            </div>

            {/* FERRUH FIRAR artık firar */}
            <div className="group cursor-pointer md:col-span-2 lg:col-span-3">
              <div className="overflow-hidden rounded-lg bg-stone-200 aspect-[16/9] relative">
                <Image
                  src="/images/ferruh-firar-artik-firar.jpg"
                  alt="FERRUH FIRAR artık firar - Artistic portrait with newspaper texture"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 text-white font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  artık firar
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-stone-900 text-stone-100 relative">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">Listen. Feel. Escape.</h3>
          <p className="text-stone-300 mb-12 text-lg font-light leading-relaxed">
            Join the journey through sound and silence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://open.spotify.com/artist/6Cbn7my8L1eq70KhzuoTwz?si=j88hBYJwT4q3Ie3TZRlFcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-stone-300 text-stone-100 hover:bg-stone-100 hover:text-stone-900 transition-all duration-300 px-8 py-3 hover:scale-105"
              >
                <Music className="mr-2 h-5 w-5" />
                Stream on Spotify
              </Button>
            </Link>
            <Link href="https://www.instagram.com/ferruhfirar" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-stone-300 text-stone-100 hover:bg-stone-100 hover:text-stone-900 transition-all duration-300 px-8 py-3 hover:scale-105"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto text-center">
          <p className="text-stone-500 text-sm font-light tracking-wide">© 2024 Ferruh Firar. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  )
}
