import cryingFace from "@/assets/il_570xN.1067952951_6jwm.webp";

interface CustomerJourneyDiagramProps {
  className?: string;
}

const CustomerJourneyDiagram = ({ className }: CustomerJourneyDiagramProps) => {
  const bar = {
    top: 243,
    bottom: 315,
    mid: 279,
    tip: 36,
  };

  const segments = [
    {
      id: "lead",
      labelLines: ["Lead Generation", "1-3 days"],
      color: "#061F32",
      x0: 24,
      x1: 248,
    },
    {
      id: "initial",
      labelLines: ["Initial Contact", "3-7 days"],
      color: "#1D4769",
      x0: 278,
      x1: 496,
    },
    {
      id: "product",
      labelLines: ["Product", "Presentation", "1-2 hours"],
      color: "#2222F6",
      x0: 527,
      x1: 745,
    },
    {
      id: "underwriting",
      labelLines: ["Underwriting", "7-14 days"],
      color: "#22A3DF",
      x0: 776,
      x1: 994,
    },
    {
      id: "decision",
      labelLines: ["Decision", "Communication", "/ Close"],
      color: "#BFBFC0",
      x0: 1024,
      x1: 1243,
    },
  ];

  const notches = [278, 527, 776, 1024];

  const nodes = [
    { x: 52.5, y: 434.5, color: "#061F32" },
    { x: 127.5, y: 461.5, color: "#061F32" },
    { x: 198.5, y: 412.0, color: "#061F32" },
    { x: 273.0, y: 209.0, color: "#061F32" },
    { x: 300.5, y: 157.0, color: "#1D4769" },
    { x: 347.5, y: 114.5, color: "#1D4769" },
    { x: 404.0, y: 102.5, color: "#1D4769" },
    { x: 527.0, y: 411.5, color: "#1D4769" },
    { x: 594.0, y: 461.5, color: "#2222F6" },
    { x: 680.0, y: 407.5, color: "#2222F6" },
    { x: 707.5, y: 197.5, color: "#2222F6" },
    { x: 794.5, y: 105.5, color: "#22A3DF" },
    { x: 852.0, y: 128.5, color: "#22A3DF" },
    { x: 881.5, y: 193.5, color: "#22A3DF" },
    { x: 921.5, y: 358.0, color: "#22A3DF" },
    { x: 956.5, y: 419.0, color: "#22A3DF" },
    { x: 1028.0, y: 438.0, color: "#BFBFC0" },
    { x: 1081.0, y: 368.0, color: "#BFBFC0" },
    { x: 1168.0, y: 193.0, color: "#BFBFC0" },
    { x: 1205.5, y: 134.0, color: "#BFBFC0" },
  ];

  const labels = [
    { lines: ["Lead Assigned"], x: 24, y: 402, anchor: "start" },
    { lines: ["Agent Review"], x: 120, y: 498, anchor: "middle" },
    { lines: ["Agent Calls", "Customer"], x: 70, y: 200, anchor: "start" },
    { lines: ["Agent Assesses", "Customer"], x: 90, y: 145, anchor: "start" },
    { lines: ["Interest", "Qualification"], x: 312, y: 62, anchor: "middle" },
    { lines: ["Agent Presents", "Application"], x: 470, y: 62, anchor: "middle" },
    { lines: ["Agent Schedules", "Time"], x: 215, y: 360, anchor: "middle" },
    {
      lines: ["Agent schedules", "product presentation"],
      x: 430,
      y: 452,
      anchor: "middle",
    },
    { lines: ["Customer signs", "application"], x: 640, y: 200, anchor: "end" },
    { lines: ["Agent presents", "products"], x: 594, y: 492, anchor: "middle" },
    { lines: ["Agent explains", "process"], x: 720, y: 345, anchor: "start" },
    {
      lines: ["Application goes to", "underwriting"],
      x: 840,
      y: 62,
      anchor: "middle",
    },
    { lines: ["3rd Party Data"], x: 970, y: 155, anchor: "start" },
    { lines: ["Risk Assessment"], x: 950, y: 224, anchor: "start" },
    { lines: ["Underwriting", "Decision"], x: 840, y: 340, anchor: "start" },
    {
      lines: ["Alternative Products", "Decided if not", "approved"],
      x: 960,
      y: 468,
      anchor: "middle",
    },
    { lines: ["If declined discuss", "alternatives"], x: 1270, y: 214, anchor: "end" },
    { lines: ["Customer decision", "to proceed"], x: 1210, y: 92, anchor: "middle" },
    { lines: ["Agent calls", "customer"], x: 1270, y: 360, anchor: "end" },
    { lines: ["Decision", "communicated to", "agent"], x: 1130, y: 472, anchor: "middle" },
  ];

  const pathD =
    "M 52.5 434.5 C 58.8 436.8, 115.3 463.4, 127.5 461.5 C 139.7 459.6, 186.4 433.0, 198.5 412.0 C 210.6 391.0, 264.5 230.2, 273.0 209.0 C 281.5 187.8, 294.3 164.9, 300.5 157.0 C 306.7 149.1, 338.9 119.0, 347.5 114.5 C 356.1 110.0, 389.0 77.8, 404.0 102.5 C 419.0 127.2, 511.2 381.6, 527.0 411.5 C 542.8 441.4, 581.2 461.8, 594.0 461.5 C 606.8 461.2, 670.5 429.5, 680.0 407.5 C 689.5 385.5, 698.0 222.7, 707.5 197.5 C 717.0 172.3, 782.5 111.2, 794.5 105.5 C 806.5 99.8, 844.8 121.2, 852.0 128.5 C 859.2 135.8, 875.7 174.4, 881.5 193.5 C 887.3 212.6, 915.2 339.2, 921.5 358.0 C 927.8 376.8, 947.6 412.3, 956.5 419.0 C 965.4 425.7, 1017.6 442.2, 1028.0 438.0 C 1038.4 433.8, 1069.3 388.4, 1081.0 368.0 C 1092.7 347.6, 1157.6 212.5, 1168.0 193.0 C 1178.4 173.5, 1193.7 137.6, 1205.5 134.0 C 1217.3 130.4, 1301.3 148.7, 1310.0 150.0";

  const diagramClassName = `w-full h-auto max-h-[45vh] ${className ?? ""}`;

  return (
    <svg
      viewBox="0 0 1323 523"
      className={diagramClassName}
      role="img"
      aria-label="Customer journey process"
      preserveAspectRatio="xMidYMid meet"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      <path
        d={pathD}
        fill="none"
        stroke="#061F32"
        strokeWidth={2}
        strokeDasharray="6 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g>
        {segments.map((segment) => {
          const tipX = segment.x1 + bar.tip;
          const points = [
            `${segment.x0},${bar.top}`,
            `${segment.x1},${bar.top}`,
            `${tipX},${bar.mid}`,
            `${segment.x1},${bar.bottom}`,
            `${segment.x0},${bar.bottom}`,
          ].join(" ");
          return (
            <polygon
              key={segment.id}
              points={points}
              fill={segment.color}
            />
          );
        })}
        {notches.map((x) => {
          const points = [
            `${x},${bar.top}`,
            `${x + bar.tip},${bar.mid}`,
            `${x},${bar.bottom}`,
          ].join(" ");
          return <polygon key={`notch-${x}`} points={points} fill="#FFFFFF" />;
        })}
      </g>

      <g>
        {segments.map((segment) => {
          const tipX = segment.x1 + bar.tip;
          const centerX = (segment.x0 + tipX) / 2;
          const baseY = bar.mid;
          const offsets =
            segment.labelLines.length === 2 ? [-6, 16] : [-14, 4, 22];
          return (
            <text
              key={`label-${segment.id}`}
              x={centerX}
              y={baseY}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize={16}
              fontWeight={700}
            >
              {segment.labelLines.map((line, index) => (
                <tspan
                  key={`${segment.id}-${line}`}
                  x={centerX}
                  dy={index === 0 ? offsets[0] : offsets[index] - offsets[index - 1]}
                >
                  {line}
                </tspan>
              ))}
            </text>
          );
        })}
      </g>

      <g>
        {nodes.map((node, index) => (
          <circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r={13}
            fill="#FFFFFF"
            stroke={node.color}
            strokeWidth={6}
          />
        ))}
      </g>

      <defs>
        <clipPath id="crying-face-clip">
          <circle cx="1290" cy="156" r="68" />
        </clipPath>
      </defs>

      <image
        href={cryingFace}
        x="1222"
        y="88"
        width="136"
        height="136"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#crying-face-clip)"
      />

      <g fill="#1F2A37" fontSize={14} fontWeight={500}>
        {labels.map((label, index) => (
          <text
            key={`label-text-${index}`}
            x={label.x}
            y={label.y}
            textAnchor={label.anchor as "start" | "middle" | "end"}
          >
            {label.lines.map((line, lineIndex) => (
              <tspan
                key={`${index}-${line}`}
                x={label.x}
                dy={lineIndex === 0 ? 0 : 16}
              >
                {line}
              </tspan>
            ))}
          </text>
        ))}
      </g>
    </svg>
  );
};

export default CustomerJourneyDiagram;
