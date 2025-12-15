export default function BackgroundTexture() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden  -z-10">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/video-texture-compressed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
