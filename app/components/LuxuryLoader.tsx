

interface LuxuryLoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

export default function LuxuryLoader({ 
  size = "md", 
  text = "Loading...",
  className = "" 
}: LuxuryLoaderProps) {
  
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const borderWidth = {
    sm: "2px",
    md: "3px",
    lg: "4px",
  };

  return (
    <div className={`flex flex-col items-center justify-center h-[400px] min-h-screen gap-4 ${className}`}>
      {/* Gold Spinner */}
      <div 
        className={`${sizeClasses[size]} rounded-full animate-spin`}
        style={{ 
          border: `${borderWidth[size]} solid rgba(201,168,76,0.2)`, 
          borderTopColor: "#C9A84C" 
        }}
      />
      
      {/* Loading Text */}
      {text && (
        <span 
          className="text-[11px] tracking-[0.3em] uppercase font-medium"
          style={{ color: "rgba(245,240,232,0.5)" }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

// ─── ALTERNATIVE: Inline Version ─────────────────────────
// Just copy-paste this directly into your component:

/*
<div className="flex flex-col items-center justify-center h-full min-h-[200px] gap-4">
  <div 
    className="w-12 h-12 rounded-full animate-spin" 
    style={{ 
      border: "3px solid rgba(201,168,76,0.2)", 
      borderTopColor: "#C9A84C" 
    }}
  />
  <span 
    className="text-[11px] tracking-[0.3em] uppercase font-medium"
    style={{ color: "rgba(245,240,232,0.5)" }}
  >
    Loading...
  </span>
</div>
*/

// ─── USAGE EXAMPLES ──────────────────────────────────────

// Small loader (no text)
// <LuxuryLoader size="sm" text="" />

// Medium loader (default)
// <LuxuryLoader />

// Large loader with custom text
// <LuxuryLoader size="lg" text="Fetching vehicles..." />

// Custom className
// <LuxuryLoader className="py-20" />