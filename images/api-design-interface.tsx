export default function APIDesignInterface() {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* Background with subtle gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="selectedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#6366f1" />
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

      {/* Left sidebar with shadow */}
      <rect x="20" y="20" width="220" height="560" rx="8" ry="8" fill="#ffffff" filter="url(#dropShadow)" />

      {/* Main content area with shadow */}
      <rect x="260" y="20" width="520" height="560" rx="8" ry="8" fill="#ffffff" filter="url(#dropShadow)" />

      {/* Sidebar header */}
      <rect x="20" y="20" width="220" height="60" rx="8" ry="8" fill="url(#headerGradient)" />
      <text x="50" y="55" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white">
        API Collection
      </text>

      {/* Search bar in sidebar */}
      <rect x="30" y="90" width="200" height="36" rx="6" ry="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="50" cy="108" r="8" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="56" y1="114" x2="60" y2="118" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="70" y="108" fontFamily="Arial" fontSize="12" fill="#64748b">
        Search endpoints...
      </text>

      {/* Endpoints section title */}
      <text x="40" y="150" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#334155">
        Endpoints
      </text>

      {/* HTTP Method Indicators */}
      <rect x="30" y="165" width="40" height="24" rx="4" ry="4" fill="#10b981" />
      <text x="50" y="182" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        GET
      </text>
      <text x="80" y="182" fontFamily="Arial" fontSize="12" fill="#334155">
        /users
      </text>

      <rect x="30" y="200" width="40" height="24" rx="4" ry="4" fill="#f97316" />
      <text x="50" y="217" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        POST
      </text>
      <text x="80" y="217" fontFamily="Arial" fontSize="12" fill="#334155">
        /users
      </text>

      {/* Selected endpoint with gradient background */}
      <rect x="30" y="235" width="200" height="40" rx="6" ry="6" fill="url(#selectedGradient)" />
      <rect x="40" y="243" width="40" height="24" rx="4" ry="4" fill="#ffffff" fillOpacity="0.2" />
      <text x="60" y="260" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        GET
      </text>
      <text x="90" y="260" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white">
        /users/{"{id}"}
      </text>

      <rect x="30" y="285" width="40" height="24" rx="4" ry="4" fill="#3b82f6" />
      <text x="50" y="302" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        PUT
      </text>
      <text x="80" y="302" fontFamily="Arial" fontSize="12" fill="#334155">
        /users/{"{id}"}
      </text>

      <rect x="30" y="320" width="40" height="24" rx="4" ry="4" fill="#ef4444" />
      <text x="50" y="337" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
        DEL
      </text>
      <text x="80" y="337" fontFamily="Arial" fontSize="12" fill="#334155">
        /users/{"{id}"}
      </text>

      {/* Main content header */}
      <rect x="260" y="20" width="520" height="60" rx="8" ry="8" fill="#f8fafc" />
      <text x="290" y="55" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#334155">
        GET /users/{"{id}"}
      </text>

      {/* Status indicator */}
      <rect x="680" y="40" width="80" height="24" rx="12" ry="12" fill="#dcfce7" />
      <circle cx="695" cy="52" r="6" fill="#22c55e" />
      <text x="710" y="55" fontFamily="Arial" fontSize="12" fill="#166534">
        Active
      </text>

      {/* Method selector */}
      <rect x="290" y="100" width="80" height="40" rx="6" ry="6" fill="#4f46e5" />
      <text x="330" y="125" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        GET
      </text>

      <rect x="370" y="100" width="380" height="40" rx="6" ry="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="390" y="125" fontFamily="Arial" fontSize="14" fill="#334155">
        /users/{"{id}"}
      </text>

      {/* Documentation section */}
      <text x="290" y="180" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Documentation
      </text>
      <rect x="290" y="190" width="460" height="2" fill="#e2e8f0" />

      <text x="290" y="220" fontFamily="Arial" fontSize="14" fill="#334155">
        Returns a single user by ID from the database.
      </text>
      <text x="290" y="245" fontFamily="Arial" fontSize="14" fill="#334155">
        Use this endpoint to retrieve detailed user information.
      </text>

      {/* Parameters section */}
      <text x="290" y="290" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Parameters
      </text>

      {/* Parameter table header */}
      <rect x="290" y="305" width="460" height="36" rx="6" ry="6" fill="#f1f5f9" />
      <text x="310" y="328" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#334155">
        Name
      </text>
      <text x="420" y="328" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#334155">
        Type
      </text>
      <text x="520" y="328" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#334155">
        Required
      </text>
      <text x="620" y="328" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#334155">
        Description
      </text>

      {/* Parameter row */}
      <rect x="290" y="341" width="460" height="50" rx="6" ry="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <text x="310" y="370" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#334155">
        id
      </text>
      <text x="420" y="370" fontFamily="Arial" fontSize="13" fill="#64748b">
        string
      </text>
      <rect x="520" y="358" width="70" height="24" rx="4" ry="4" fill="#dbeafe" />
      <text x="555" y="375" fontFamily="Arial" fontSize="12" fill="#1e40af" textAnchor="middle">
        Required
      </text>
      <text x="620" y="370" fontFamily="Arial" fontSize="13" fill="#334155">
        User identifier
      </text>

      {/* Response section */}
      <text x="290" y="430" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Response
      </text>

      {/* Response code */}
      <rect x="290" y="445" width="70" height="30" rx="4" ry="4" fill="#dcfce7" />
      <text x="325" y="465" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#166534" textAnchor="middle">
        200
      </text>
      <text x="370" y="465" fontFamily="Arial" fontSize="13" fill="#334155">
        Success
      </text>

      {/* Response body */}
      <rect x="290" y="485" width="460" height="160" rx="6" ry="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="310" y="515" fontFamily="monospace" fontSize="13" fill="#334155">{`{`}</text>
      <text x="325" y="540" fontFamily="monospace" fontSize="13" fill="#334155">{`  "id": "123",`}</text>
      <text x="325" y="565" fontFamily="monospace" fontSize="13" fill="#334155">{`  "name": "John Doe",`}</text>
      <text
        x="325"
        y="590"
        fontFamily="monospace"
        fontSize="13"
        fill="#334155"
      >{`  "email": "john@example.com",`}</text>
      <text
        x="325"
        y="615"
        fontFamily="monospace"
        fontSize="13"
        fill="#334155"
      >{`  "createdAt": "2023-04-15T12:00:00Z"`}</text>
      <text x="310" y="640" fontFamily="monospace" fontSize="13" fill="#334155">{`}`}</text>

      {/* Connection lines to show relationship between sidebar and main content */}
      <path d="M230 255 C245 255, 245 255, 260 255" stroke="#4f46e5" strokeWidth="2" strokeDasharray="5,3" />
      <circle cx="230" cy="255" r="3" fill="#4f46e5" />
      <circle cx="260" cy="255" r="3" fill="#4f46e5" />
    </svg>
  )
}
