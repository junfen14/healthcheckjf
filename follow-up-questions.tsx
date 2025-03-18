"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { getConditionById } from "@/lib/diagnosis-matcher"

interface FollowUpQuestionsProps {
  conditionId: string
  onClose: () => void
}

export default function FollowUpQuestions({ conditionId, onClose }: FollowUpQuestionsProps) {
  const condition = getConditionById(conditionId)
  const [answers, setAnswers] = useState<Record<string, boolean>>({})

  // Sample follow-up questions based on the condition
  const followUpQuestions = [
    {
      id: "pain_level",
      question: "Is your pain severe (7+ on a scale of 1-10)?",
    },
    {
      id: "movement_restriction",
      question: "Does it limit your normal movement or activities?",
    },
    {
      id: "swelling",
      question: "Is there visible swelling in the affected area?",
    },
    {
      id: "previous_injury",
      question: "Have you had a similar injury before?",
    },
  ]

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  const handleSubmit = () => {
    // Here you would typically send this data to your backend
    console.log("Follow-up answers:", answers)

    // For now, just close the dialog
    onClose()
  }

  if (!condition) return null

  return (
    <Card className="w-full">
      <CardHeader className="relative">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardTitle>Follow-up Questions</CardTitle>
        <CardDescription>
          Please answer these additional questions about your {condition.name.toLowerCase()} symptoms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {followUpQuestions.map((q) => (
            <div key={q.id} className="flex items-start space-x-2">
              <Checkbox
                id={q.id}
                checked={answers[q.id] || false}
                onCheckedChange={(checked) => handleCheckboxChange(q.id, checked === true)}
              />
              <label
                htmlFor={q.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {q.question}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  )
}

