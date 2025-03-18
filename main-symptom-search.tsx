"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SYMPTOMS } from "@/lib/symptom-data"

interface MainSymptomSearchProps {
  initialBodyPart?: string
}

export default function MainSymptomSearch({ initialBodyPart }: MainSymptomSearchProps = {}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (initialBodyPart) {
      // If an initial body part is provided, pre-filter the symptoms
      const bodyPartSymptoms = SYMPTOMS.filter((symptom) => symptom.bodyParts?.includes(initialBodyPart))

      if (bodyPartSymptoms.length > 0) {
        // Optionally pre-populate the search with the body part
        setInputValue(initialBodyPart + " ")
        setOpen(true)
      }
    }
  }, [initialBodyPart])

  const filteredSymptoms = SYMPTOMS.flatMap((symptom) => {
    const searchTerm = inputValue.toLowerCase()
    const matchingAliases = symptom.aliases.filter((alias) => alias.toLowerCase().includes(searchTerm))
    const descriptionKeywords = symptom.description.toLowerCase().split(" ")

    const mainSymptom = {
      id: symptom.id,
      name: symptom.name,
      isMainSymptom: true,
    }

    const aliasSymptoms = matchingAliases.map((alias) => ({
      id: `${symptom.id}-${alias}`,
      name: alias,
      isMainSymptom: false,
    }))

    return [mainSymptom, ...aliasSymptoms].filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        descriptionKeywords.some((keyword) => keyword.includes(searchTerm)),
    )
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedSymptoms.length > 0 || inputValue.trim()) {
      const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]")
      const newSearch = selectedSymptoms.length > 0 ? selectedSymptoms[0] : inputValue

      if (!recentSearches.includes(newSearch) && newSearch.trim()) {
        recentSearches.unshift(newSearch)
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches.slice(0, 5)))
      }

      router.push(`/results?symptoms=${selectedSymptoms.join(",")}`)
    }
  }

  const handleSelectSymptom = (symptomName: string) => {
    setOpen(false)
    setInputValue("")

    if (!selectedSymptoms.includes(symptomName)) {
      setSelectedSymptoms([...selectedSymptoms, symptomName])
    }
  }

  const handleRemoveSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Always open the dropdown when typing
    if (value.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }

    // Auto-select first matching symptom when typing
    if (value.length > 2 && filteredSymptoms.length > 0) {
      // Don't auto-select if already in selected symptoms
      const topSuggestion = filteredSymptoms[0].name
      if (!selectedSymptoms.includes(topSuggestion)) {
        // Show autocomplete suggestion in UI but don't select yet
        // User will need to press Enter or click to confirm
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      if (filteredSymptoms.length > 0) {
        handleSelectSymptom(filteredSymptoms[0].name)
      } else if (inputValue.trim()) {
        // If no matches but user typed something, add it as a custom symptom
        handleSelectSymptom(inputValue.trim())
      }
      e.preventDefault()
    }
  }

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Type your symptoms..."
              className="pl-10"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpen(true)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start" side="bottom" sideOffset={5} width="target">
          <Command>
            <CommandList>
              <CommandEmpty>No symptoms found</CommandEmpty>
              <CommandGroup heading="Suggested symptoms">
                {filteredSymptoms.map((symptom) => (
                  <CommandItem key={symptom.id} onSelect={() => handleSelectSymptom(symptom.name)}>
                    <span>{symptom.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedSymptoms.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedSymptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {symptom}
              <button
                onClick={() => handleRemoveSymptom(symptom)}
                className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
        onClick={handleSubmit}
      >
        Find Possible Conditions
      </Button>
    </div>
  )
}

