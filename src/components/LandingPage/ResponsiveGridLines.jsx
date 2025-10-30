import React, { useEffect, useState, useRef } from "react";

export default function ResponsiveGridLines() {
  const sectionRef = useRef(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      if (!sectionRef.current) return;

      const { clientWidth, clientHeight } = sectionRef.current;

      // Adjust these values for grid spacing
      const colWidth = 57; // px between vertical lines
      const rowHeight = 57; // px between horizontal lines

      // Use Math.ceil instead of Math.floor to maintain consistent spacing
      const cols = Math.ceil(clientWidth / colWidth);
      const rows = Math.ceil(clientHeight / rowHeight);

      setGrid({ cols, rows });
    };

    // Run once + on resize
    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    >
      {/* Vertical Lines */}
      {Array.from({ length: grid.cols }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full border-l border-[#EAEAEA]"
          style={{
            left: `${(i * 100) / grid.cols}%`,
          }}
        ></div>
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: grid.rows }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full border-t border-[#EAEAEA]"
          style={{
            top: `${(i * 100) / grid.rows}%`,
          }}
        ></div>
      ))}
    </section>
  );
}
