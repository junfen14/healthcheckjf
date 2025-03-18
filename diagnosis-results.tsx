"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AlertCircle, Clock, Activity, Percent } from "lucide-react"
import { matchConditions } from "@/lib/diagnosis-matcher"
import type { Condition } from "@/lib/db-schema"
import type { PersonalFactors } from "@/lib/comprehensive-conditions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import FollowUpQuestions from "@/components/follow-up-questions"
import MedicalDisclaimer from "@/components/medical-disclaimer"

interface DiagnosisResultsProps {
  symptoms: string[]
  personalFactors?: PersonalFactors
}

export default function DiagnosisResults({ symptoms, personalFactors }: DiagnosisResultsProps) {
  const [matchedConditions, setMatchedConditions] = useState<Array<Condition & { matchPercentage: number }>>([])
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null)
  const [showFollowUp, setShowFollowUp] = useState(false)
  const [currentFollowUpCondition, setCurrentFollowUpCondition] = useState<string | null>(null)

  useEffect(() => {
    if (symptoms.length > 0) {
      const results = matchConditions(symptoms, personalFactors)
      setMatchedConditions(results)
    }
  }, [symptoms, personalFactors])

  const handleFollowUpClick = (conditionId: string) => {
    setCurrentFollowUpCondition(conditionId)
    setShowFollowUp(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Possible Conditions</h2>
        <MedicalDisclaimer />
      </div>

      {matchedConditions.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <AlertCircle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-lg font-medium">No conditions matched</p>
                <p className="text-sm text-gray-500">
                  Try adding more symptoms or check if your symptoms are correctly entered.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {matchedConditions.map((condition) => (
            <Card key={condition.id} className={selectedCondition === condition.id ? "border-primary" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">{condition.name}</CardTitle>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Percent className="h-3 w-3" />
                    <span>{Math.round(condition.matchPercentage)}% Match</span>
                  </Badge>
                </div>
                <CardDescription className="text-sm text-gray-500">{condition.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {condition.symptoms.map((symptom) => (
                    <Badge key={symptom} variant={symptoms.includes(symptom) ? "default" : "outline"}>
                      {symptom}
                    </Badge>
                  ))}
                </div>
                <Collapsible
                  open={selectedCondition === condition.id}
                  onOpenChange={(open) => {
                    if (open) setSelectedCondition(condition.id)
                    else setSelectedCondition(null)
                  }}
                >
                  <CollapsibleTrigger className="text-blue-600 underline text-sm hover:text-blue-800">
                    {selectedCondition === condition.id ? "Hide details" : "More details"}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 text-sm">
                    <p>{condition.description}</p>
                    <div className="mt-2">
                      <h4 className="font-medium">Common causes:</h4>
                      <ul className="list-disc list-inside">
                        {condition.causes.map((cause, index) => (
                          <li key={index}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
              <CardFooter className="flex flex-wrap items-center justify-between gap-2 pt-0">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1 text-sm">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span>Severity: {condition.severity}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>Recovery: {condition.recoveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Activity className="h-4 w-4 text-green-500" />
                    <span>Urgency: {condition.urgency}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleFollowUpClick(condition.id)}>
                    Follow-up Questions
                  </Button>
                  {selectedCondition === condition.id && (
                    <Link href={`/recovery/${condition.id}`}>
                      <Button size="sm">View Recovery Plan</Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {showFollowUp && currentFollowUpCondition && (
        <FollowUpQuestions conditionId={currentFollowUpCondition} onClose={() => setShowFollowUp(false)} />
      )}
    </div>
  )
}

