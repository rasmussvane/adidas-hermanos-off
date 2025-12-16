export default function BackgroundTexture() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden  -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="w-full h-full object-cover"
        poster="/video-texture-compressed-poster.png"
      >
        <source src="/video-texture-compressed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
