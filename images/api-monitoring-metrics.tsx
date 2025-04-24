export default function APIMonitoringMetrics() {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* Definitions */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="errorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
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
        API Monitoring & Metrics
      </text>

      {/* Time range selector */}
      <rect x="600" y="15" width="180" height="30" rx="15" ry="15" fill="white" fillOpacity="0.2" />
      <text x="620" y="35" fontFamily="Arial" fontSize="14" fill="white">
        Last 24 hours
      </text>
      <text x="760" y="35" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">
        ▼
      </text>

      {/* Main metrics panel */}
      <rect x="20" y="80" width="760" height="160" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />

      {/* Metric cards */}
      <rect x="40" y="100" width="170" height="120" rx="8" ry="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="60" y="130" fontFamily="Arial" fontSize="14" fill="#64748b">
        Total Requests
      </text>
      <text x="60" y="165" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="#334155">
        24,521
      </text>
      <text x="60" y="190" fontFamily="Arial" fontSize="14" fill="#10b981">
        ↑ 12.4%
      </text>

      <rect x="230" y="100" width="170" height="120" rx="8" ry="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="250" y="130" fontFamily="Arial" fontSize="14" fill="#64748b">
        Avg. Response Time
      </text>
      <text x="250" y="165" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="#334155">
        187ms
      </text>
      <text x="250" y="190" fontFamily="Arial" fontSize="14" fill="#10b981">
        ↓ 5.2%
      </text>

      <rect x="420" y="100" width="170" height="120" rx="8" ry="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="440" y="130" fontFamily="Arial" fontSize="14" fill="#64748b">
        Error Rate
      </text>
      <text x="440" y="165" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="#334155">
        0.8%
      </text>
      <text x="440" y="190" fontFamily="Arial" fontSize="14" fill="#10b981">
        ↓ 0.3%
      </text>

      <rect x="610" y="100" width="170" height="120" rx="8" ry="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="630" y="130" fontFamily="Arial" fontSize="14" fill="#64748b">
        Uptime
      </text>
      <text x="630" y="165" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="#334155">
        99.98%
      </text>
      <text x="630" y="190" fontFamily="Arial" fontSize="14" fill="#ef4444">
        ↓ 0.01%
      </text>

      {/* Traffic chart */}
      <rect x="20" y="260" width="500" height="320" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="40" y="290" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        API Traffic
      </text>

      {/* Chart axes */}
      <line x1="60" y1="540" x2="480" y2="540" stroke="#94a3b8" strokeWidth="1" />
      <line x1="60" y1="320" x2="60" y2="540" stroke="#94a3b8" strokeWidth="1" />

      {/* X-axis labels */}
      <text x="60" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        00:00
      </text>
      <text x="130" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        04:00
      </text>
      <text x="200" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        08:00
      </text>
      <text x="270" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        12:00
      </text>
      <text x="340" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        16:00
      </text>
      <text x="410" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        20:00
      </text>
      <text x="480" y="560" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="middle">
        Now
      </text>

      {/* Y-axis labels */}
      <text x="50" y="320" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="end">
        2K
      </text>
      <text x="50" y="375" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="end">
        1.5K
      </text>
      <text x="50" y="430" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="end">
        1K
      </text>
      <text x="50" y="485" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="end">
        500
      </text>
      <text x="50" y="540" fontFamily="Arial" fontSize="12" fill="#64748b" textAnchor="end">
        0
      </text>

      {/* Chart grid */}
      <line x1="60" y1="375" x2="480" y2="375" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="60" y1="430" x2="480" y2="430" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="60" y1="485" x2="480" y2="485" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="130" y1="320" x2="130" y2="540" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="200" y1="320" x2="200" y2="540" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="270" y1="320" x2="270" y2="540" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="340" y1="320" x2="340" y2="540" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />
      <line x1="410" y1="320" x2="410" y2="540" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5,5" />

      {/* Chart data */}
      <path
        d="M60,500 L130,480 L200,420 L270,350 L340,390 L410,330 L480,370"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="3"
      />
      <path
        d="M60,500 L130,480 L200,420 L270,350 L340,390 L410,330 L480,370 L480,540 L60,540 Z"
        fill="url(#chartGradient)"
      />

      {/* Data points */}
      <circle cx="60" cy="500" r="5" fill="#0ea5e9" />
      <circle cx="130" cy="480" r="5" fill="#0ea5e9" />
      <circle cx="200" cy="420" r="5" fill="#0ea5e9" />
      <circle cx="270" cy="350" r="5" fill="#0ea5e9" />
      <circle cx="340" cy="390" r="5" fill="#0ea5e9" />
      <circle cx="410" cy="330" r="5" fill="#0ea5e9" />
      <circle cx="480" cy="370" r="5" fill="#0ea5e9" />

      {/* Error rate chart */}
      <rect x="540" y="260" width="240" height="150" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="560" y="290" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Error Rate
      </text>

      {/* Error chart */}
      <line x1="560" y1="390" x2="760" y2="390" stroke="#94a3b8" strokeWidth="1" />
      <path
        d="M560,380 L590,385 L620,370 L650,375 L680,390 L710,360 L740,380 L760,375"
        fill="none"
        stroke="#ef4444"
        strokeWidth="2"
      />
      <path
        d="M560,380 L590,385 L620,370 L650,375 L680,390 L710,360 L740,380 L760,375 L760,390 L560,390 Z"
        fill="url(#errorGradient)"
      />

      {/* Endpoint performance */}
      <rect x="540" y="430" width="240" height="150" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="560" y="460" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Top Endpoints
      </text>

      {/* Endpoint list */}
      <text x="560" y="490" fontFamily="Arial" fontSize="14" fill="#334155">
        GET /api/products
      </text>
      <rect x="700" y="480" width="80" height="16" rx="8" ry="8" fill="#dcfce7" />
      <text x="740" y="492" fontFamily="Arial" fontSize="12" fill="#166534" textAnchor="middle">
        42ms
      </text>

      <text x="560" y="520" fontFamily="Arial" fontSize="14" fill="#334155">
        POST /api/users
      </text>
      <rect x="700" y="510" width="80" height="16" rx="8" ry="8" fill="#dcfce7" />
      <text x="740" y="522" fontFamily="Arial" fontSize="12" fill="#166534" textAnchor="middle">
        67ms
      </text>

      <text x="560" y="550" fontFamily="Arial" fontSize="14" fill="#334155">
        GET /api/orders
      </text>
      <rect x="700" y="540" width="80" height="16" rx="8" ry="8" fill="#ffedd5" />
      <text x="740" y="552" fontFamily="Arial" fontSize="12" fill="#9a3412" textAnchor="middle">
        124ms
      </text>
    </svg>
  )
}
