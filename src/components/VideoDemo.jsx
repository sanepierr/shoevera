/**
 * Visual demonstration section – placeholder for the Shoevera 9:16 cinematic video.
 * Set DEMO_VIDEO_URL in config (or pass videoSrc) to embed; otherwise shows a CTA to watch.
 */
export default function VideoDemo({ videoSrc = null }) {
  const showVideo = videoSrc && videoSrc.trim() !== ''

  return (
    <section className="video-demo" id="demo">
      <div className="container">
        <h2>See Shoevera in Action</h2>
        <p className="video-demo-tagline">
          Easy to wear, portable, and tough against rain and mud. Watch how it works.
        </p>
        <div className="video-demo-player">
          {showVideo ? (
            <div className="video-demo-wrap aspect-9-16">
              <video
                src={videoSrc}
                controls
                playsInline
                className="video-demo-video"
                aria-label="Shoevera product demonstration video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="video-demo-placeholder aspect-9-16">
              <div className="video-demo-placeholder-inner">
                <svg className="video-demo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="video-demo-placeholder-text">Product video coming soon</p>
                <p className="video-demo-placeholder-hint">Easy to wear · Portable · Easy to clean · Dirt resistant</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
