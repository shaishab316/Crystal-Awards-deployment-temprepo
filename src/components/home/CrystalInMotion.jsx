const awardsData = [
  {
    id: 1,
    title: 'Faceted Circle',
    subtitle: 'OPTICAL CLARITY IN MOTION',
    video: '/videos/anchor.mov',
  },
  {
    id: 2,
    title: 'Car Award',
    subtitle: 'CUSTOM CUT PRECISION',
    video: '/videos/car-award.mp4',
  },
  {
    id: 3,
    title: 'Anchor Award',
    subtitle: 'NAUTICAL EXCELLENCE',
    video: '/videos/faceted-circle.mp4',
  },
];

export const CrystalInMotion = () => {
  return (
    <section className="bg-[#0b0b0b] min-h-screen text-[#d1d1d1] px-6 py-30 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-[10px] tracking-[0.25em] text-[#a39382] uppercase mb-2 font-['Montserrat'] font-light">
          SEE THE CRAFT
        </p>

        <h2 className="text-3xl md:text-4xl text-[#f3ece2] font-['Cormorant_Garamond'] font-normal tracking-wide mb-4">
          Crystal in Motion
        </h2>

        {/* Gold Accent Divider Line */}
        <div className="w-10 h-[1px] bg-[#8c7b6c] mx-auto mb-6"></div>

        <p className="text-xs md:text-sm text-[#8e8e8e] font-['Montserrat'] font-light leading-relaxed max-w-lg mx-auto">
          Watch how light moves through our awards — the same quality customers
          experience when the piece arrives on their desk.
        </p>
      </div>

      {/* Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {awardsData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-[#111010] border border-[#23201e] overflow-hidden group cursor-pointer transition-all duration-500 ease-out hover:border-[#5a4e44] hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(140,123,108,0.15)]"
          >
            {/* Video Container with 3D Depth Backdrop */}
            <div className="w-full aspect-[4/5] bg-[#050505] overflow-hidden relative flex items-center justify-center">
              {/* Radial light backdrop to boost 3D crystal contrast */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#221f1d] via-[#0a0a0a] to-[#000000] opacity-80 pointer-events-none" />

              {/* Looping 3D Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Glass Reflection / Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111010] via-transparent to-black/20 z-20 pointer-events-none" />
            </div>

            {/* Card Footer Text */}
            <div className="p-5 bg-[#111010] flex flex-col justify-center border-t border-[#1e1b19] z-30 relative">
              <h3 className="text-base text-[#ebdcd0] font-['Cormorant_Garamond'] tracking-wide font-medium transition-colors duration-300 group-hover:text-[#f8eee6]">
                {item.title}
              </h3>
              <p className="text-[10px] tracking-[0.2em] text-[#706760] font-['Montserrat'] font-medium uppercase mt-1 transition-colors duration-300 group-hover:text-[#8c7b6c]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CrystalInMotion;
