import { motion } from "framer-motion";

const chaosTools = [
  { name: "Monday", x: 5, y: 10 },
  { name: "Zapier", x: 15, y: 35 },
  { name: "HubSpot", x: 8, y: 60 },
  { name: "Slack", x: 20, y: 85 },
  { name: "Notion", x: 25, y: 20 },
  { name: "Trello", x: 30, y: 50 },
  { name: "Asana", x: 12, y: 75 },
  { name: "Jira", x: 35, y: 30 },
  { name: "Airtable", x: 28, y: 65 },
  { name: "Salesforce", x: 18, y: 45 },
  { name: "Zendesk", x: 32, y: 80 },
  { name: "Pipedrive", x: 22, y: 15 },
];

const ToolIcon = ({ name, delay }: { name: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.4, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-muted/60 border border-border/30 rounded-lg px-2 py-1 text-[10px] md:text-xs text-muted-foreground/60 font-medium whitespace-nowrap"
  >
    {name}
  </motion.div>
);

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="relative bg-card rounded-xl shadow-2xl border border-border overflow-hidden"
    style={{ width: "280px", height: "200px" }}
  >
    {/* Glow effect */}
    <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-xl -z-10" />
    
    {/* Header */}
    <div className="h-8 bg-muted/50 border-b border-border flex items-center px-3 gap-1.5">
      <div className="w-2 h-2 rounded-full bg-red-400/60" />
      <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
      <div className="w-2 h-2 rounded-full bg-green-400/60" />
      <span className="ml-2 text-[10px] text-muted-foreground font-medium">Dein System</span>
    </div>
    
    <div className="flex h-[calc(100%-32px)]">
      {/* Sidebar */}
      <div className="w-16 bg-muted/30 border-r border-border/50 p-2 space-y-2">
        {["Dashboard", "Kunden", "Aufträge", "Kalender"].map((item, i) => (
          <div
            key={item}
            className={`text-[8px] px-1.5 py-1 rounded ${
              i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground/60"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-3 space-y-2">
        <div className="flex gap-2">
          <div className="flex-1 h-12 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
            <span className="text-[10px] text-primary font-medium">+24%</span>
          </div>
          <div className="flex-1 h-12 bg-muted/50 rounded-lg border border-border/50" />
        </div>
        <div className="h-16 bg-muted/30 rounded-lg border border-border/30 flex items-end p-2 gap-1">
          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/40 rounded-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const HeroVisual = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-muted/30 to-primary/10 rounded-2xl" />
      
      {/* Chaos side - left */}
      <div className="absolute left-0 top-0 w-[45%] h-full">
        {/* Chaotic connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
          <motion.path
            d="M 20 30 Q 80 50, 120 80 T 180 100"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            className="text-muted-foreground"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M 40 70 Q 90 40, 140 60 T 190 120"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            className="text-muted-foreground"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.path
            d="M 30 120 Q 70 90, 110 110 T 170 80"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
            className="text-muted-foreground"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
        </svg>
        
        {/* Tool icons scattered */}
        <div className="relative w-full h-full">
          {chaosTools.map((tool, i) => (
            <div
              key={tool.name}
              className="absolute"
              style={{
                left: `${tool.x}%`,
                top: `${tool.y}%`,
                transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 2)}deg)`,
              }}
            >
              <ToolIcon name={tool.name} delay={i * 0.1} />
            </div>
          ))}
        </div>
        
        {/* Red X markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute top-[25%] left-[40%] text-destructive/50 text-lg font-bold"
        >
          ✕
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute top-[55%] left-[35%] text-destructive/50 text-sm font-bold"
        >
          ✕
        </motion.div>
      </div>
      
      {/* Funnel/Transition - middle */}
      <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-[20%] h-full flex items-center justify-center">
        <svg className="w-full h-[60%]" viewBox="0 0 100 120">
          {/* Multiple arrows converging */}
          {[20, 40, 60, 80, 100].map((y, i) => (
            <motion.path
              key={i}
              d={`M 0 ${y} Q 50 60, 100 60`}
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              className="text-primary/40"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
            />
          ))}
          {/* Arrow head */}
          <motion.polygon
            points="95,55 105,60 95,65"
            fill="currentColor"
            className="text-primary"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </svg>
      </div>
      
      {/* Solution side - right */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2">
        <DashboardMockup />
      </div>
      
      {/* Labels */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-4 md:left-8"
      >
        <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">Tool-Chaos</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-4 right-4 md:right-8"
      >
        <span className="text-xs text-primary uppercase tracking-wider font-medium">Deine Lösung</span>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
