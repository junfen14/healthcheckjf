"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"

export default function EnhancedBodyModel() {
  const router = useRouter()
  const [selectedPart, setSelectedPart] = useState<string | null>(null)

  const handleSelectBodyPart = (part: string) => {
    setSelectedPart(part)
    // Navigate to the body part page
    router.push(`/body-part/${part.toLowerCase().replace(/\s+/g, "-")}`)
  }

  return (
    <Card className="relative h-full w-full overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-full items-center justify-center">
        <svg viewBox="0 0 400 600" className="h-full max-h-[400px]" style={{ maxWidth: "100%", height: "auto" }}>
          {/* Human body outline */}
          <path
            d="M200,50 C230,50 250,70 250,100 C250,130 230,150 220,160 C215,165 210,170 210,180 L210,220 C210,230 220,240 230,250 C240,260 250,270 250,290 L250,350 C250,370 240,390 230,400 C220,410 210,420 210,430 L210,500 C210,520 220,540 230,550 C240,560 250,570 240,580 C230,590 220,590 200,590 C180,590 170,590 160,580 C150,570 160,560 170,550 C180,540 190,520 190,500 L190,430 C190,420 180,410 170,400 C160,390 150,370 150,350 L150,290 C150,270 160,260 170,250 C180,240 190,230 190,220 L190,180 C190,170 185,165 180,160 C170,150 150,130 150,100 C150,70 170,50 200,50 Z"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
          />

          {/* Head */}
          <circle
            cx="200"
            cy="80"
            r="30"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Head")}
          />

          {/* Chest */}
          <rect
            x="170"
            y="160"
            width="60"
            height="60"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Chest")}
          />

          {/* Abdomen */}
          <rect
            x="170"
            y="220"
            width="60"
            height="60"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Abdomen")}
          />

          {/* Left Arm */}
          <rect
            x="130"
            y="160"
            width="40"
            height="120"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Left Arm")}
          />

          {/* Right Arm */}
          <rect
            x="230"
            y="160"
            width="40"
            height="120"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Right Arm")}
          />

          {/* Left Leg */}
          <rect
            x="170"
            y="280"
            width="30"
            height="150"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Left Leg")}
          />

          {/* Right Leg */}
          <rect
            x="200"
            y="280"
            width="30"
            height="150"
            fill="#f5f5f5"
            stroke="#e0e0e0"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-100 transition-colors"
            onClick={() => handleSelectBodyPart("Right Leg")}
          />

          {/* Labels */}
          <text x="200" y="80" textAnchor="middle" className="text-xs">
            Head
          </text>
          <text x="200" y="190" textAnchor="middle" className="text-xs">
            Chest
          </text>
          <text x="200" y="250" textAnchor="middle" className="text-xs">
            Abdomen
          </text>
          <text x="150" y="220" textAnchor="middle" className="text-xs">
            Left Arm
          </text>
          <text x="250" y="220" textAnchor="middle" className="text-xs">
            Right Arm
          </text>
          <text x="185" y="355" textAnchor="middle" className="text-xs">
            Left Leg
          </text>
          <text x="215" y="355" textAnchor="middle" className="text-xs">
            Right Leg
          </text>
        </svg>
      </div>
      {selectedPart && (
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-sm font-medium">Selected: {selectedPart}</p>
        </div>
      )}
    </Card>
  )
}

