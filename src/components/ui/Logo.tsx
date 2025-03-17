export default function Logo() {
  return (
    <div className='flex gap-4 items-center'>
      {/* logo circle */}
      <div
        className='h-8 w-8 rounded-full'
        style={{
          background:
            'conic-gradient(var(--primary) 0deg, white 360deg, var(--primary) 0deg)',
        }}></div>
      <h1 className='font-bold text-3xl tracking-widest'>Designo</h1>
    </div>
  );
}
