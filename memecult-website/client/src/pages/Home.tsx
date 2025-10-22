import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-yellow-300 font-mono overflow-x-hidden">


      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b-4 border-yellow-300">
        <img 
          src="/memecult_header_banner.png" 
          alt="MemeCult Ritual" 
          className="w-full h-auto object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16">


        {/* Offering Scene */}
        <section className="space-y-4 border-4 border-red-600 p-4 bg-black">
          <h2 className="text-2xl font-bold text-red-500 pixel-text sinister-glow">
            THE OFFERING
          </h2>
          <img 
            src="/memecult_offering_scene.png" 
            alt="The Offering" 
            className="w-full rounded-none border-4 border-red-600"
            style={{ imageRendering: 'pixelated' }}
          />
          <p className="text-xs text-yellow-300 font-mono text-center">
            &gt; EVERY MEME CHARACTER HAS A STORY<br/>
            &gt; EVERY STORY DESERVES TO BE CELEBRATED<br/>
            &gt; IN OUR COMMUNITY, THE ORDINARY BECOMES EXTRAORDINARY
          </p>
        </section>

        {/* Ritual Scene */}
        <section className="space-y-4 border-4 border-green-500 p-4 bg-black">
          <h2 className="text-2xl font-bold text-green-400 pixel-text sinister-glow">
            THE RITUAL
          </h2>
          <img 
            src="/memecult_ritual_scene.png" 
            alt="The Ritual" 
            className="w-full rounded-none border-4 border-green-500"
            style={{ imageRendering: 'pixelated' }}
          />
          <p className="text-xs text-yellow-300 font-mono text-center">
            &gt; THROUGH THE POWER OF COMMUNITY AND BLOCKCHAIN<br/>
            &gt; WE TRANSFORM THE ORDINARY INTO THE LEGENDARY<br/>
            &gt; THE RITUAL IS REAL. THE POWER IS TANGIBLE.
          </p>
        </section>

        {/* Transformation Scene */}
        <section className="space-y-4 border-4 border-yellow-300 p-4 bg-black">
          <h2 className="text-2xl font-bold text-yellow-300 pixel-text sinister-glow">
            THE TRANSFORMATION
          </h2>
          <img 
            src="/memecult_transformation_scene.png" 
            alt="The Transformation" 
            className="w-full rounded-none border-4 border-yellow-300"
            style={{ imageRendering: 'pixelated' }}
          />
          <p className="text-xs text-yellow-300 font-mono text-center">
            &gt; RISE FROM THE ASHES<br/>
            &gt; BECOME LEGENDARY<br/>
            &gt; JOIN THOUSANDS OF BELIEVERS IN THE CULT OF MEMES
          </p>
        </section>

        {/* Characters Section */}
        <section id="characters" className="space-y-6 border-4 border-yellow-300 p-6 bg-black">
          <h2 className="text-2xl font-bold text-yellow-300 pixel-text sinister-glow text-center">
            OUR PANTHEON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "CZ BINANCE", desc: "THE SHAMAN\nGUARDIAN OF BNB" },
              { name: "RED PEPE", desc: "THE ENLIGHTENED ONE\nLEADER OF THE RITUAL" },
              { name: "GREEN PEPE", desc: "THE CHOSEN ONE\nVESSEL OF TRANSFORMATION" },
              { name: "DORAEMON", desc: "THE ANCIENT GUARDIAN\nKEEPER OF SECRETS" },
              { name: "MONKEY KING", desc: "THE WILD SPIRIT\nBRINGER OF CHAOS" },
              { name: "BAOZI MAN", desc: "THE ROUND ONE\nSYMBOL OF ABUNDANCE" }
            ].map((char, idx) => (
              <div 
                key={idx} 
                className="bg-black border-4 border-red-600 p-4 hover:border-yellow-300 transition-all hover:glitch-effect"
              >
                <h3 className="text-sm font-bold text-red-500 pixel-text mb-2">{char.name}</h3>
                <p className="text-xs text-yellow-300 font-mono whitespace-pre-line">{char.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="bg-black border-4 border-red-600 p-8 text-center space-y-8">
          <h2 className="text-2xl font-bold text-red-500 pixel-text sinister-glow">
            JOIN THE CULT
          </h2>
          <p className="text-xs text-yellow-300 font-mono max-w-2xl mx-auto">
            &gt; CONNECT WITH OUR COMMUNITY ACROSS ALL PLATFORMS<br/>
            &gt; FOLLOW OUR JOURNEY, PARTICIPATE IN THE RITUAL<br/>
            &gt; BECOME PART OF SOMETHING LEGENDARY
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-2 border-3 border-yellow-300 font-bold text-yellow-300 transition-all hover:glitch-effect text-xs"
              style={{ boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.8)' }}
            >
              <ExternalLink size={16} />
              X (TWITTER)
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2 border-3 border-yellow-300 font-bold text-yellow-300 transition-all hover:glitch-effect text-xs"
              style={{ boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.8)' }}
            >
              <ExternalLink size={16} />
              TELEGRAM
            </a>
            <a 
              href="https://dexscreener.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 border-3 border-yellow-300 font-bold text-black transition-all hover:glitch-effect text-xs"
              style={{ boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.8)' }}
            >
              <ExternalLink size={16} />
              DEXSCREENER
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-yellow-300 bg-black mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-yellow-300 font-mono text-xs">
          <p>&copy; 2025 模因崇拜 (MEMECULT). ALL MEMES ARE SACRED.</p>
          <p className="mt-2 text-red-500">&gt;&gt;&gt; THE RITUAL CONTINUES &lt;&lt;&lt;</p>
        </div>
      </footer>
    </div>
  );
}

