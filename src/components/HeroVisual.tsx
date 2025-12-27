import { motion } from "framer-motion";

// Real SVG logos for SaaS tools
const MondayLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="12" cy="44" r="8" fill="#ff3d57"/>
    <circle cx="32" cy="32" r="8" fill="#ffcb00"/>
    <circle cx="52" cy="20" r="8" fill="#00d647"/>
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M32 8v20h20l-20 28V36H12z" fill="#ff4a00"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="32" cy="32" r="20" fill="none" stroke="#ff7a59" strokeWidth="4"/>
    <circle cx="32" cy="32" r="8" fill="#ff7a59"/>
    <circle cx="52" cy="12" r="6" fill="#ff7a59"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M14 26a4 4 0 118 0v14a4 4 0 11-8 0V26z" fill="#e01e5a"/>
    <path d="M26 14a4 4 0 110 8H12a4 4 0 110-8h14z" fill="#36c5f0"/>
    <path d="M50 26a4 4 0 11-8 0V12a4 4 0 118 0v14z" fill="#2eb67d"/>
    <path d="M38 50a4 4 0 110-8h14a4 4 0 110 8H38z" fill="#ecb22e"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="12" y="8" width="40" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
    <line x1="20" y1="20" x2="44" y2="20" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TrelloLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#0079bf"/>
    <rect x="14" y="14" width="14" height="28" rx="2" fill="white"/>
    <rect x="34" y="14" width="14" height="18" rx="2" fill="white"/>
  </svg>
);

const AsanaLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="32" cy="44" r="12" fill="#f06a6a"/>
    <circle cx="16" cy="24" r="10" fill="#f06a6a"/>
    <circle cx="48" cy="24" r="10" fill="#f06a6a"/>
  </svg>
);

const JiraLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M32 8L8 32l24 24 24-24L32 8z" fill="#2684ff"/>
    <path d="M32 24l-8 8 8 8 8-8-8-8z" fill="#0052cc"/>
  </svg>
);

const AirtableLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="8" y="16" width="24" height="16" fill="#fcb400"/>
    <rect x="32" y="16" width="24" height="16" fill="#18bfff"/>
    <rect x="8" y="32" width="24" height="16" fill="#f82b60"/>
    <rect x="32" y="32" width="24" height="16" fill="#7c3aed"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <ellipse cx="32" cy="32" rx="28" ry="20" fill="#00a1e0"/>
    <text x="32" y="38" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">SF</text>
  </svg>
);

const ZendeskLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M8 48V20l24 28H8z" fill="#03363d"/>
    <circle cx="44" cy="34" r="12" fill="#03363d"/>
  </svg>
);

const PipedriveLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="32" cy="32" r="24" fill="none" stroke="#017737" strokeWidth="6"/>
    <circle cx="32" cy="32" r="8" fill="#017737"/>
  </svg>
);

const ClickUpLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <path d="M12 40l20-24 20 24" fill="none" stroke="#7b68ee" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const IntercomLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#1f8ded"/>
    <rect x="20" y="22" width="4" height="16" rx="2" fill="white"/>
    <rect x="28" y="18" width="4" height="24" rx="2" fill="white"/>
    <rect x="36" y="22" width="4" height="16" rx="2" fill="white"/>
  </svg>
);

const MailchimpLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="32" cy="32" r="24" fill="#ffe01b"/>
    <ellipse cx="32" cy="36" rx="12" ry="10" fill="#241c15"/>
    <circle cx="26" cy="28" r="4" fill="#241c15"/>
    <circle cx="38" cy="28" r="4" fill="#241c15"/>
  </svg>
);

const CalendlyLogo = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-10 md:h-10">
    <circle cx="32" cy="32" r="24" fill="#006bff"/>
    <path d="M24 32h16M32 24v16" stroke="white" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const chaosTools = [
  { Logo: MondayLogo, x: 5, y: 8 },
  { Logo: ZapierLogo, x: 18, y: 25 },
  { Logo: HubSpotLogo, x: 8, y: 45 },
  { Logo: SlackLogo, x: 22, y: 65 },
  { Logo: NotionLogo, x: 35, y: 12 },
  { Logo: TrelloLogo, x: 45, y: 35 },
  { Logo: AsanaLogo, x: 12, y: 75 },
  { Logo: JiraLogo, x: 55, y: 18 },
  { Logo: AirtableLogo, x: 48, y: 55 },
  { Logo: SalesforceLogo, x: 28, y: 45 },
  { Logo: ZendeskLogo, x: 62, y: 40 },
  { Logo: PipedriveLogo, x: 38, y: 78 },
  { Logo: ClickUpLogo, x: 70, y: 60 },
  { Logo: IntercomLogo, x: 58, y: 75 },
  { Logo: MailchimpLogo, x: 75, y: 25 },
  { Logo: CalendlyLogo, x: 68, y: 48 },
];

const DashboardMockup = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.8, duration: 0.6 }}
    className="relative bg-card/80 backdrop-blur-sm rounded-xl shadow-2xl border border-border/50 overflow-hidden"
    style={{ width: "220px", height: "160px" }}
  >
    {/* Glow effect */}
    <div className="absolute -inset-4 bg-primary/30 blur-2xl rounded-xl -z-10" />
    
    {/* Header */}
    <div className="h-6 bg-muted/50 border-b border-border/50 flex items-center px-2 gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
      <span className="ml-1.5 text-[8px] text-muted-foreground font-medium">Dein System</span>
    </div>
    
    <div className="flex h-[calc(100%-24px)]">
      {/* Sidebar */}
      <div className="w-12 bg-muted/30 border-r border-border/30 p-1.5 space-y-1">
        {["Dashboard", "Kunden", "Aufträge", "Kalender"].map((item, i) => (
          <div
            key={item}
            className={`text-[6px] px-1 py-0.5 rounded ${
              i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground/60"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-2 space-y-1.5">
        <div className="flex gap-1.5">
          <div className="flex-1 h-8 bg-primary/10 rounded border border-primary/20 flex items-center justify-center">
            <span className="text-[8px] text-primary font-medium">+24%</span>
          </div>
          <div className="flex-1 h-8 bg-muted/50 rounded border border-border/30" />
        </div>
        <div className="h-12 bg-muted/30 rounded border border-border/20 flex items-end p-1.5 gap-0.5">
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
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/20 via-transparent to-primary/5" />
      
      {/* Chaotic connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 100 100 Q 300 200, 500 150 T 800 250"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.path
          d="M 150 250 Q 400 100, 600 200 T 900 150"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.7 }}
        />
        <motion.path
          d="M 80 350 Q 350 280, 550 320 T 850 280"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
          className="text-muted-foreground"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.9 }}
        />
      </svg>
      
      {/* Tool logos scattered */}
      <div className="absolute inset-0">
        {chaosTools.map((tool, i) => (
          <motion.div
            key={i}
            className="absolute opacity-30 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300"
            style={{
              left: `${tool.x}%`,
              top: `${tool.y}%`,
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i * 3)}deg)`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <tool.Logo />
          </motion.div>
        ))}
      </div>
      
      {/* Red X markers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        className="absolute top-[20%] left-[30%] text-destructive text-xl font-bold"
      >
        ✕
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.7 }}
        className="absolute top-[60%] left-[25%] text-destructive text-lg font-bold"
      >
        ✕
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 1.9 }}
        className="absolute top-[45%] right-[35%] text-destructive text-sm font-bold"
      >
        ✕
      </motion.div>
      
      {/* Dashboard mockup - right side */}
      <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 opacity-60">
        <DashboardMockup />
      </div>
      
      {/* Funnel arrows pointing to dashboard */}
      <svg className="absolute right-[20%] md:right-[28%] top-1/2 -translate-y-1/2 w-24 h-32 opacity-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M 0 ${i * 25 + 10} Q 40 ${64}, 80 64`}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 + i * 0.1 }}
          />
        ))}
        <motion.polygon
          points="75,58 90,64 75,70"
          fill="currentColor"
          className="text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.3 }}
        />
      </svg>
    </div>
  );
};

export default HeroVisual;
