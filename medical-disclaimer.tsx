"use client"

import { useState, useRef, useEffect } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MedicalDisclaimer() {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        buttonRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative">
      <Button
        ref={buttonRef}
        variant="outline"
        size="sm"
        className="flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AlertTriangle className="h-4 w-4 text-yellow-500" />
        <span>Medical Disclaimer</span>
      </Button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-0 top-full mt-2 w-72 rounded-md bg-white p-4 shadow-lg border z-50 dark:bg-gray-800"
          style={{ right: "auto", left: "0" }}
        >
          <h3 className="font-medium mb-2 flex items-center gap-1">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span>Medical Disclaimer</span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            This tool provides general information only and does not constitute medical advice. It is not intended to
            diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional
            before making any health decisions.
          </p>
        </div>
      )}
    </div>
  )
}

