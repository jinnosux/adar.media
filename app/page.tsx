import FloatingLines from '@/components/FloatingLines';
import TextPressure from '@/components/TextPressure';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background effect - full screen */}
      <div className="absolute inset-0 w-full h-full">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[8, 4, 7]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          mixBlendMode="screen"
        />
      </div>
      
      {/* TextPressure content - responsive layout */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full pointer-events-none px-4">
        {/* Desktop: single line (hidden on mobile, shown on md+) */}
        <div 
          className="hidden md:block w-full pointer-events-auto animate-slide-in-fade" 
          style={{ height: '300px', position: 'relative' }}
        >
          <TextPressure
            text="adar.media"
            width={false}
            italic={false}
          />
        </div>
        
        {/* Mobile: two rows (shown on mobile, hidden on md+) */}
        <div className="block md:hidden w-full pointer-events-auto animate-slide-in-fade">
          <div className="flex flex-col items-center justify-center gap-4">
            <div style={{ height: '200px', position: 'relative', width: '100%' }}>
              <TextPressure
                text="adar"
                width={false}
                italic={false}
              />
            </div>
            <div style={{ height: '200px', position: 'relative', width: '100%' }}>
              <TextPressure
                text="media"
                width={false}
                italic={false}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}