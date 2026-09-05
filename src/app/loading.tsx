export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        background: "var(--cream)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.6rem",
          letterSpacing: "0.3em",
          color: "var(--black)",
        }}
      >
        HAMUZ
      </div>
      <div
        style={{
          width: "120px",
          height: "2px",
          background: "var(--cream-dark)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "40%",
            background: "var(--gold)",
            animation: "hamuz-loading-slide 1.1s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes hamuz-loading-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
      `}</style>
    </div>
  );
}
