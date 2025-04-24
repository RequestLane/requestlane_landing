export default function APITestingDashboard() {
  return (
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      {/* Definitions */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
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

      {/* Top navigation */}
      <rect x="0" y="0" width="800" height="60" fill="url(#headerGradient)" />
      <text x="30" y="38" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">
        API Testing Dashboard
      </text>

      {/* Navigation icons */}
      <circle cx="720" cy="30" r="15" fill="white" fillOpacity="0.2" />
      <text x="720" y="35" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">
        ?
      </text>
      <circle cx="760" cy="30" r="15" fill="white" fillOpacity="0.2" />
      <text x="760" y="35" fontFamily="Arial" fontSize="16" fill="white" textAnchor="middle">
        ⚙
      </text>

      {/* Left panel */}
      <rect x="20" y="80" width="240" height="500" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="40" y="110" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Test Collections
      </text>

      {/* Search bar */}
      <rect x="30" y="125" width="220" height="36" rx="6" ry="6" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="50" cy="143" r="8" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="56" y1="149" x2="60" y2="153" stroke="#94a3b8" strokeWidth="1.5" />
      <text x="70" y="143" fontFamily="Arial" fontSize="12" fill="#64748b">
        Search tests...
      </text>

      {/* Test collections */}
      <rect x="30" y="175" width="220" height="40" rx="6" ry="6" fill="#f1f5f9" />
      <circle cx="50" cy="195" r="10" fill="#10b981" />
      <text x="70" y="200" fontFamily="Arial" fontSize="14" fill="#334155">
        User Authentication
      </text>

      <rect x="30" y="225" width="220" height="40" rx="6" ry="6" fill="#4f46e5" />
      <circle cx="50" cy="245" r="10" fill="white" />
      <text x="70" y="250" fontFamily="Arial" fontSize="14" fill="white">
        Product API Tests
      </text>

      <rect x="30" y="275" width="220" height="40" rx="6" ry="6" fill="#f1f5f9" />
      <circle cx="50" cy="295" r="10" fill="#ef4444" />
      <text x="70" y="300" fontFamily="Arial" fontSize="14" fill="#334155">
        Payment Integration
      </text>

      <rect x="30" y="325" width="220" height="40" rx="6" ry="6" fill="#f1f5f9" />
      <circle cx="50" cy="345" r="10" fill="#10b981" />
      <text x="70" y="350" fontFamily="Arial" fontSize="14" fill="#334155">
        Order Processing
      </text>

      {/* Test statistics */}
      <text x="40" y="400" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Test Statistics
      </text>

      <rect x="40" y="415" width="200" height="2" fill="#e2e8f0" />

      <text x="40" y="440" fontFamily="Arial" fontSize="14" fill="#334155">
        Total Tests:
      </text>
      <text x="200" y="440" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="end">
        24
      </text>

      <text x="40" y="470" fontFamily="Arial" fontSize="14" fill="#334155">
        Passing:
      </text>
      <text x="200" y="470" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#10b981" textAnchor="end">
        21
      </text>

      <text x="40" y="500" fontFamily="Arial" fontSize="14" fill="#334155">
        Failing:
      </text>
      <text x="200" y="500" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#ef4444" textAnchor="end">
        3
      </text>

      <text x="40" y="530" fontFamily="Arial" fontSize="14" fill="#334155">
        Success Rate:
      </text>
      <text x="200" y="530" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#334155" textAnchor="end">
        87.5%
      </text>

      {/* Main test panel */}
      <rect x="280" y="80" width="500" height="240" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="300" y="110" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Product API: GET /products/{"{id}"}
      </text>

      {/* Request */}
      <rect x="300" y="130" width="460" height="35" rx="6" ry="6" fill="#f1f5f9" />
      <rect x="300" y="130" width="80" height="35" rx="6" ry="6" fill="#4f46e5" />
      <text x="340" y="153" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        GET
      </text>
      <text x="390" y="153" fontFamily="Arial" fontSize="14" fill="#334155">
        /api/v1/products/12345
      </text>

      <rect x="300" y="175" width="460" height="125" rx="6" ry="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="320" y="200" fontFamily="monospace" fontSize="13" fill="#334155">
        Headers:
      </text>
      <text x="320" y="225" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
      </text>
      <text x="320" y="250" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}Content-Type: application/json
      </text>
      <text x="320" y="275" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}Accept: application/json
      </text>

      {/* Response panel */}
      <rect x="280" y="340" width="500" height="240" rx="8" ry="8" fill="white" filter="url(#dropShadow)" />
      <text x="300" y="370" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#334155">
        Response
      </text>

      <rect x="300" y="390" width="460" height="35" rx="6" ry="6" fill="#f1f5f9" />
      <rect x="300" y="390" width="80" height="35" rx="6" ry="6" fill="url(#successGradient)" />
      <text x="340" y="413" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
        200
      </text>
      <text x="390" y="413" fontFamily="Arial" fontSize="14" fill="#334155">
        OK (186ms)
      </text>

      <rect x="300" y="435" width="460" height="125" rx="6" ry="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      <text x="320" y="460" fontFamily="monospace" fontSize="13" fill="#334155">
        {"{"}
      </text>
      <text x="330" y="485" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}"id": "12345",
      </text>
      <text x="330" y="510" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}"name": "Premium Wireless Headphones",
      </text>
      <text x="330" y="535" fontFamily="monospace" fontSize="13" fill="#334155">
        {"  "}"price": 149.99
      </text>
      <text x="320" y="560" fontFamily="monospace" fontSize="13" fill="#334155">
        {"}"}
      </text>
    </svg>
  )
}
