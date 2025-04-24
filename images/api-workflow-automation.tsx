export default function APIWorkflowAutomation() {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* Definitions */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="startGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="decisionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.1" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main background */}
      <rect width="800" height="600" fill="url(#bgGradient)" />

      {/* Header */}
      <rect x="0" y="0" width="800" height="60" fill="url(#headerGradient)" />
      <text x="20" y="38" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white">
        API Workflow Automation
      </text>

      {/* Workflow Canvas */}
      <rect x="20" y="80" width="760" height="500" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />

      {/* Workflow Title */}
      <text x="40" y="110" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#334155">
        New Order Processing
      </text>

      {/* Workflow Grid */}
      <line x1="20" y1="180" x2="780" y2="180" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="20" y1="280" x2="780" y2="280" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="20" y1="380" x2="780" y2="380" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="20" y1="480" x2="780" y2="480" stroke="#f0f0f0" strokeWidth="1" />

      <line x1="170" y1="80" x2="170" y2="580" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="320" y1="80" x2="320" y2="580" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="470" y1="80" x2="470" y2="580" stroke="#f0f0f0" strokeWidth="1" />
      <line x1="620" y1="80" x2="620" y2="580" stroke="#f0f0f0" strokeWidth="1" />

      {/* Start Node */}
      <circle cx="100" cy="150" r="30" fill="url(#startGradient)" filter="url(#dropShadow)" />
      <text x="100" y="155" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Start
      </text>

      {/* API Webhook Node */}
      <rect x="70" y="230" width="120" height="50" rx="8" ry="8" fill="url(#apiGradient)" filter="url(#dropShadow)" />
      <text x="130" y="260" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Order Webhook
      </text>

      {/* Decision Node */}
      <polygon points="100,330 130,355 100,380 70,355" fill="url(#decisionGradient)" filter="url(#dropShadow)" />
      <text x="100" y="360" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Validate
      </text>

      {/* API Request Node (Success) */}
      <rect x="220" y="230" width="120" height="50" rx="8" ry="8" fill="url(#apiGradient)" filter="url(#dropShadow)" />
      <text x="280" y="260" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Update Inventory
      </text>

      {/* Database Node */}
      <rect x="220" y="330" width="120" height="50" rx="8" ry="8" fill="url(#dbGradient)" filter="url(#dropShadow)" />
      <text x="280" y="360" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Save Order
      </text>

      {/* API Request Node (Notification) */}
      <rect x="370" y="230" width="120" height="50" rx="8" ry="8" fill="url(#apiGradient)" filter="url(#dropShadow)" />
      <text x="430" y="260" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Send Notification
      </text>

      {/* End Node (Success) */}
      <circle cx="430" cy="330" r="30" fill="url(#startGradient)" filter="url(#dropShadow)" />
      <text x="430" y="335" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        End
      </text>

      {/* Error Handling Node */}
      <rect x="70" y="430" width="120" height="50" rx="8" ry="8" fill="url(#errorGradient)" filter="url(#dropShadow)" />
      <text x="130" y="460" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Error Handling
      </text>

      {/* Connector Lines with Arrows */}
      <line x1="100" y1="180" x2="100" y2="220" stroke="#9c27b0" strokeWidth="2" />
      <polygon points="100,230 96,220 104,220" fill="#9c27b0" />

      <line x1="100" y1="280" x2="100" y2="320" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="100,330 96,320 104,320" fill="#3b82f6" />

      <line x1="130" y1="355" x2="210" y2="355" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="220,355 210,351 210,359" fill="#f59e0b" />
      <text x="170" y="345" fontFamily="Arial" fontSize="12" fill="#334155">
        Valid
      </text>

      <line x1="280" y1="280" x2="280" y2="320" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="280,330 276,320 284,320" fill="#3b82f6" />

      <line x1="340" y1="355" x2="390" y2="355" stroke="#22c55e" strokeWidth="2" />
      <polygon points="400,355 390,351 390,359" fill="#22c55e" />

      <line x1="430" y1="280" x2="430" y2="290" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="430,300 426,290 434,290" fill="#3b82f6" />

      <line x1="70" y1="355" x2="60" y2="355" stroke="#f59e0b" strokeWidth="2" />
      <line x1="60" y1="355" x2="60" y2="430" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="60,430 56,420 64,420" fill="#f59e0b" />
      <text x="45" y="390" fontFamily="Arial" fontSize="12" fill="#334155">
        Invalid
      </text>

      {/* Workflow Controls */}
      <rect x="650" y="100" width="100" height="36" rx="18" ry="18" fill="#4f46e5" filter="url(#dropShadow)" />
      <text x="700" y="123" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        Run
      </text>

      <rect x="650" y="146" width="100" height="36" rx="18" ry="18" fill="white" stroke="#4f46e5" strokeWidth="2" />
      <text x="700" y="169" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#4f46e5" textAnchor="middle">
        Save
      </text>
    </svg>
  )
}
