// This file contains a comprehensive database of health conditions, symptoms, and recovery plans

export interface Symptom {
  id: string
  name: string
  aliases: string[] // Alternative ways users might describe this symptom
  description: string
  bodyParts?: string[]
  category?: string
  severity?: "mild" | "moderate" | "severe"
}

export interface RecoveryStage {
  name: string
  timeframe: string
  description: string
  milestones: string[]
  watchOutFor?: string[]
  tasks: RecoveryTask[]
}

export interface RecoveryTask {
  id: string
  title: string
  description: string
  duration: string
  frequency: string
  completed?: boolean
}

export interface Condition {
  id: string
  name: string
  category: string
  type?: string // Subtype of the condition
  symptoms: string[]
  description: string
  detailedDescription: string
  recoveryTime: string
  urgency: "Low" | "Medium" | "High" | "Emergency"
  causes: string[]
  treatmentSummary: string
  recoveryStages: RecoveryStage[]
  whenToSeeDoctor: string
  preventionTips: string[]
  dosAndDonts?: {
    dos: string[]
    donts: string[]
  }
}

// Comprehensive list of symptoms with variations
export const COMPREHENSIVE_SYMPTOMS: Symptom[] = [
  // Musculoskeletal Symptoms
  {
    id: "pain-sharp",
    name: "Sharp pain",
    aliases: ["Stabbing pain", "Knife-like pain", "Piercing pain", "Shooting pain"],
    description: "A sudden, intense pain that feels like a sharp stab or knife-like sensation.",
    category: "Pain",
  },
  {
    id: "pain-dull",
    name: "Dull pain",
    aliases: ["Aching", "Throbbing", "Sore", "Tender"],
    description: "A persistent, aching pain that may be mild to moderate in intensity.",
    category: "Pain",
  },
  {
    id: "swelling",
    name: "Swelling",
    aliases: ["Puffiness", "Inflammation", "Edema", "Bloating"],
    description: "An increase in size or a change in shape of an area of the body.",
    category: "Inflammation",
  },
  {
    id: "bruising",
    name: "Bruising",
    aliases: ["Contusion", "Black and blue mark", "Discoloration", "Ecchymosis"],
    description: "An injury appearing as an area of discolored skin, often purple, blue, or black.",
    category: "Injury",
    bodyParts: ["Skin", "Limbs", "Face"],
  },
  {
    id: "deformity",
    name: "Deformity",
    aliases: ["Misshapen", "Abnormal shape", "Visible irregularity", "Malformation"],
    description: "An abnormal change in the shape of a body part.",
    category: "Physical Abnormality",
  },
  {
    id: "limited-mobility",
    name: "Limited mobility",
    aliases: ["Stiffness", "Restricted movement", "Can't move properly", "Difficulty moving"],
    description: "Reduced ability to move a joint or body part through its normal range of motion.",
    category: "Mobility",
  },
  {
    id: "joint-noise",
    name: "Joint noise",
    aliases: ["Cracking", "Popping", "Grinding", "Clicking"],
    description: "Audible sounds that occur when moving a joint.",
    category: "Sound",
    bodyParts: ["Joints", "Knees", "Shoulders", "Neck"],
  },
  {
    id: "joint-locking",
    name: "Joint locking",
    aliases: ["Stuck joint", "Joint freezing", "Can't bend joint", "Joint catches"],
    description: "A sensation that a joint cannot move or is locked in place.",
    category: "Mobility",
    bodyParts: ["Joints", "Knees", "Shoulders", "Elbows", "Fingers"],
  },
  {
    id: "muscle-weakness",
    name: "Muscle weakness",
    aliases: ["Weak muscles", "Loss of strength", "Feeble", "Lack of power"],
    description: "A reduction in the strength or power of a muscle or group of muscles.",
    category: "Strength",
  },

  // Neurological Symptoms
  {
    id: "headache",
    name: "Headache",
    aliases: ["Head pain", "My head hurts", "Throbbing head", "Pressure in head"],
    description: "Pain or discomfort in the head, scalp, or neck.",
    category: "Pain",
    bodyParts: ["Head"],
  },
  {
    id: "migraine",
    name: "Migraine",
    aliases: ["Severe headache", "Pounding headache", "One-sided headache", "Throbbing head pain"],
    description:
      "A severe, throbbing headache often accompanied by nausea, vomiting, and sensitivity to light and sound.",
    category: "Pain",
    bodyParts: ["Head"],
    severity: "severe",
  },
  {
    id: "dizziness",
    name: "Dizziness",
    aliases: ["Lightheaded", "Woozy", "Room spinning", "Feeling faint", "Vertigo"],
    description: "A sensation of unsteadiness, spinning, or feeling like you might faint.",
    category: "Neurological",
    bodyParts: ["Head"],
  },
  {
    id: "nausea",
    name: "Nausea",
    aliases: ["Feeling sick", "Queasy", "Upset stomach", "Want to vomit", "Sick to my stomach"],
    description: "An unpleasant sensation of discomfort in the stomach with an urge to vomit.",
    category: "Digestive",
    bodyParts: ["Stomach"],
  },
  {
    id: "vomiting",
    name: "Vomiting",
    aliases: ["Throwing up", "Getting sick", "Puking", "Regurgitation"],
    description: "The forceful expulsion of stomach contents through the mouth.",
    category: "Digestive",
    bodyParts: ["Stomach"],
  },
  {
    id: "light-sensitivity",
    name: "Light sensitivity",
    aliases: ["Photophobia", "Light hurts eyes", "Bright light pain", "Can't look at light"],
    description: "Discomfort or pain in the eyes when exposed to light.",
    category: "Neurological",
    bodyParts: ["Eyes", "Head"],
  },
  {
    id: "confusion",
    name: "Confusion",
    aliases: ["Disoriented", "Can't think clearly", "Mental fog", "Bewildered"],
    description: "Difficulty thinking clearly, focusing, or making decisions.",
    category: "Neurological",
    bodyParts: ["Head"],
  },

  // Respiratory Symptoms
  {
    id: "cough",
    name: "Cough",
    aliases: ["Hacking", "Clearing throat", "Persistent cough", "Can't stop coughing"],
    description: "A sudden, forceful expulsion of air from the lungs.",
    category: "Respiratory",
    bodyParts: ["Chest", "Throat", "Lungs"],
  },
  {
    id: "shortness-of-breath",
    name: "Shortness of breath",
    aliases: ["Breathlessness", "Difficulty breathing", "Can't catch breath", "Hard to breathe"],
    description: "A feeling of not getting enough air or having to work harder to breathe.",
    category: "Respiratory",
    bodyParts: ["Chest", "Lungs"],
  },
  {
    id: "wheezing",
    name: "Wheezing",
    aliases: ["Whistling breath", "Noisy breathing", "Breath sounds", "Stridor"],
    description: "A high-pitched whistling sound during breathing, usually when exhaling.",
    category: "Respiratory",
    bodyParts: ["Chest", "Lungs"],
  },
  {
    id: "chest-pain",
    name: "Chest pain",
    aliases: ["Chest discomfort", "Chest pressure", "Chest tightness", "Heart pain"],
    description: "Discomfort, pressure, or pain in the chest area.",
    category: "Pain",
    bodyParts: ["Chest"],
    severity: "severe",
  },

  // Digestive Symptoms
  {
    id: "abdominal-pain",
    name: "Abdominal pain",
    aliases: ["Stomach ache", "Belly pain", "Gut pain", "Tummy hurts", "Cramps"],
    description: "Pain or discomfort in the area between the chest and pelvis.",
    category: "Pain",
    bodyParts: ["Abdomen"],
  },
  {
    id: "diarrhea",
    name: "Diarrhea",
    aliases: ["Loose stools", "Watery stools", "Frequent bowel movements", "Runs"],
    description: "Loose, watery stools occurring more frequently than normal.",
    category: "Digestive",
    bodyParts: ["Abdomen", "Intestines"],
  },
  {
    id: "constipation",
    name: "Constipation",
    aliases: ["Hard stools", "Difficulty passing stool", "Infrequent bowel movements", "Can't poop"],
    description: "Infrequent bowel movements or difficult passage of stools.",
    category: "Digestive",
    bodyParts: ["Abdomen", "Intestines"],
  },
  {
    id: "bloating",
    name: "Bloating",
    aliases: ["Distended abdomen", "Gassy", "Swollen belly", "Full feeling"],
    description: "A feeling of fullness or swelling in the abdomen.",
    category: "Digestive",
    bodyParts: ["Abdomen"],
  },

  // Skin Symptoms
  {
    id: "rash",
    name: "Rash",
    aliases: ["Skin eruption", "Hives", "Skin irritation", "Red spots", "Bumpy skin"],
    description: "An area of irritated or swollen skin that may be red, itchy, bumpy, or painful.",
    category: "Skin",
    bodyParts: ["Skin"],
  },
  {
    id: "itching",
    name: "Itching",
    aliases: ["Pruritus", "Scratchy feeling", "Itchy skin", "Need to scratch"],
    description: "An uncomfortable sensation that causes a desire to scratch.",
    category: "Skin",
    bodyParts: ["Skin"],
  },

  // General Symptoms
  {
    id: "fever",
    name: "Fever",
    aliases: ["High temperature", "Running hot", "Burning up", "Elevated body temperature"],
    description: "An elevated body temperature above the normal range of 98.6°F (37°C).",
    category: "General",
  },
  {
    id: "fatigue",
    name: "Fatigue",
    aliases: ["Tiredness", "Exhaustion", "Low energy", "No energy", "Always tired"],
    description: "Extreme tiredness resulting from mental or physical exertion or illness.",
    category: "General",
  },
  {
    id: "chills",
    name: "Chills",
    aliases: ["Shivering", "Feeling cold", "Shaking", "Cold sweats"],
    description: "A feeling of coldness accompanied by shivering or shaking.",
    category: "General",
  },
  {
    id: "sweating",
    name: "Sweating",
    aliases: ["Perspiration", "Night sweats", "Excessive sweating", "Clammy skin"],
    description: "The release of fluid from sweat glands in the skin.",
    category: "General",
  },
  {
    id: "loss-of-appetite",
    name: "Loss of appetite",
    aliases: ["Decreased hunger", "Not wanting to eat", "Poor appetite", "No appetite"],
    description: "A decreased desire to eat, despite normal caloric needs.",
    category: "General",
  },

  // Cardiovascular Symptoms
  {
    id: "palpitations",
    name: "Heart palpitations",
    aliases: ["Racing heart", "Skipped beats", "Fluttering heart", "Pounding heart"],
    description: "Sensations of a fast-beating, fluttering, or pounding heart.",
    category: "Cardiovascular",
    bodyParts: ["Chest"],
  },
  {
    id: "high-blood-pressure",
    name: "High blood pressure",
    aliases: ["Hypertension", "Elevated BP", "Blood pressure issues"],
    description: "Blood pressure that is higher than normal, often without symptoms.",
    category: "Cardiovascular",
  },

  // Mental Health Symptoms
  {
    id: "anxiety",
    name: "Anxiety",
    aliases: ["Worry", "Nervousness", "Stress", "Panic", "On edge"],
    description: "Feelings of worry, nervousness, or unease about something with an uncertain outcome.",
    category: "Mental Health",
  },
  {
    id: "depression",
    name: "Depression",
    aliases: ["Sadness", "Low mood", "Feeling down", "Hopelessness", "No joy"],
    description: "Persistent feelings of sadness and loss of interest in activities.",
    category: "Mental Health",
  },
  {
    id: "insomnia",
    name: "Insomnia",
    aliases: ["Can't sleep", "Trouble sleeping", "Sleep problems", "Waking up at night"],
    description: "Difficulty falling asleep or staying asleep, even when a person has the chance to do so.",
    category: "Sleep",
  },

  // Joint-Specific Symptoms
  {
    id: "knee-pain",
    name: "Knee pain",
    aliases: ["Sore knee", "Knee hurts", "Painful knee", "Knee discomfort"],
    description: "Pain or discomfort in or around the knee joint.",
    category: "Pain",
    bodyParts: ["Knee", "Joints"],
  },
  {
    id: "back-pain",
    name: "Back pain",
    aliases: ["Sore back", "Back ache", "Spinal pain", "Back discomfort"],
    description: "Pain or discomfort in the upper, middle, or lower back.",
    category: "Pain",
    bodyParts: ["Back"],
  },
  {
    id: "neck-pain",
    name: "Neck pain",
    aliases: ["Sore neck", "Neck ache", "Stiff neck", "Neck discomfort"],
    description: "Pain or discomfort in the neck area.",
    category: "Pain",
    bodyParts: ["Neck"],
  },
  {
    id: "shoulder-pain",
    name: "Shoulder pain",
    aliases: ["Sore shoulder", "Shoulder ache", "Painful shoulder", "Shoulder discomfort"],
    description: "Pain or discomfort in or around the shoulder joint.",
    category: "Pain",
    bodyParts: ["Shoulder", "Joints"],
  },
  {
    id: "ankle-pain",
    name: "Ankle pain",
    aliases: ["Sore ankle", "Ankle hurts", "Painful ankle", "Ankle discomfort"],
    description: "Pain or discomfort in or around the ankle joint.",
    category: "Pain",
    bodyParts: ["Ankle", "Joints"],
  },
  {
    id: "wrist-pain",
    name: "Wrist pain",
    aliases: ["Sore wrist", "Wrist hurts", "Painful wrist", "Wrist discomfort"],
    description: "Pain or discomfort in or around the wrist joint.",
    category: "Pain",
    bodyParts: ["Wrist", "Joints"],
  },
  {
    id: "hip-pain",
    name: "Hip pain",
    aliases: ["Sore hip", "Hip hurts", "Painful hip", "Hip discomfort"],
    description: "Pain or discomfort in or around the hip joint.",
    category: "Pain",
    bodyParts: ["Hip", "Joints"],
  },

  // Specific Conditions
  {
    id: "sprained-ankle",
    name: "Sprained ankle",
    aliases: ["Twisted ankle", "Rolled ankle", "Ankle injury"],
    description: "An injury to the ligaments in the ankle, typically caused by twisting or rolling the ankle.",
    category: "Injury",
    bodyParts: ["Ankle", "Joints"],
  },
  {
    id: "concussion",
    name: "Concussion",
    aliases: ["Head injury", "Brain injury", "Head trauma"],
    description: "A mild traumatic brain injury typically caused by a blow to the head.",
    category: "Injury",
    bodyParts: ["Head"],
    severity: "moderate",
  },
  {
    id: "common-cold",
    name: "Common cold",
    aliases: ["Cold", "Head cold", "Runny nose and cough", "Stuffy nose"],
    description: "A viral infection of the upper respiratory tract that primarily affects the nose and throat.",
    category: "Illness",
    bodyParts: ["Head", "Throat", "Nose"],
  },
  {
    id: "flu",
    name: "Flu",
    aliases: ["Influenza", "Bad cold", "Viral infection", "Seasonal flu"],
    description: "A contagious respiratory illness caused by influenza viruses.",
    category: "Illness",
    bodyParts: ["Whole body", "Respiratory system"],
  },
  {
    id: "food-poisoning",
    name: "Food poisoning",
    aliases: ["Bad food", "Food sickness", "Stomach bug from food", "Food-borne illness"],
    description: "Illness caused by eating contaminated food or drink.",
    category: "Illness",
    bodyParts: ["Stomach", "Digestive system"],
  },
]

// Comprehensive list of health conditions with detailed recovery plans
export const COMPREHENSIVE_CONDITIONS: Condition[] = [
  // Musculoskeletal Conditions
  {
    id: "fracture-general",
    name: "Fracture (Broken Bone)",
    category: "Musculoskeletal",
    symptoms: ["Sharp pain", "Swelling", "Bruising", "Deformity", "Limited mobility", "Joint noise"],
    description: "A break in the continuity of the bone",
    detailedDescription:
      "A fracture is a break in the bone that can occur due to high force impact or stress, or as a result of certain medical conditions that weaken the bones, such as osteoporosis. Fractures can be complete (bone breaks completely) or partial (bone cracks but doesn't separate). They can be closed (skin intact) or open (bone protrudes through skin).",
    recoveryTime: "6-8 weeks for simple fractures, longer for complex ones",
    urgency: "High",
    causes: ["High-impact injuries", "Falls", "Sports injuries", "Osteoporosis", "Repetitive stress"],
    treatmentSummary:
      "Immobilization with a cast or splint, pain management, and possible surgery for complex fractures",
    recoveryStages: [
      {
        name: "Immobilization Phase",
        timeframe: "Days 1-21",
        description: "Initial healing phase with significant pain and swelling",
        milestones: ["Pain and swelling begin to subside", "Medical treatment obtained"],
        watchOutFor: [
          "Increasing pain",
          "Numbness or tingling",
          "Bluish color of fingers/toes if extremity is in cast",
        ],
        tasks: [
          {
            id: "fracture-1-1",
            title: "Non-weight-bearing movement",
            description: "Avoid putting weight on the injured area. Use crutches or other assistive devices as needed.",
            duration: "Ongoing",
            frequency: "Throughout day",
          },
          {
            id: "fracture-1-2",
            title: "Ice, compression, and elevation",
            description:
              "Apply ice wrapped in a cloth to the injured area for 15-20 minutes while keeping it elevated above heart level.",
            duration: "15-20 min",
            frequency: "Every 2-3 hours",
          },
          {
            id: "fracture-1-3",
            title: "Nutrition for bone healing",
            description: "Consume foods rich in calcium, vitamin D, and protein to support bone healing.",
            duration: "Throughout day",
            frequency: "Daily",
          },
        ],
      },
      {
        name: "Healing Phase",
        timeframe: "Weeks 4-8",
        description: "Continued bone healing with callus formation",
        milestones: ["Significantly reduced pain", "X-rays showing callus formation"],
        watchOutFor: ["Lack of progress in healing", "Persistent pain"],
        tasks: [
          {
            id: "fracture-2-1",
            title: "Light mobility exercises",
            description:
              "Perform gentle movement of joints adjacent to the fracture as recommended by your healthcare provider.",
            duration: "5-10 min",
            frequency: "2-3 times daily",
          },
          {
            id: "fracture-2-2",
            title: "Anti-inflammatory diet",
            description: "Focus on foods that reduce inflammation such as fatty fish, berries, and leafy greens.",
            duration: "Throughout day",
            frequency: "Daily",
          },
          {
            id: "fracture-2-3",
            title: "Pain level tracking",
            description: "Monitor and record your pain levels throughout the day to track healing progress.",
            duration: "1-2 min",
            frequency: "3 times daily",
          },
        ],
      },
      {
        name: "Rehabilitation Phase",
        timeframe: "Weeks 8+",
        description: "Rehabilitation phase",
        milestones: ["Return to most normal activities", "Regaining strength and flexibility"],
        watchOutFor: ["Persistent weakness", "Pain with specific movements"],
        tasks: [
          {
            id: "fracture-3-1",
            title: "Strength training",
            description: "Begin strength training exercises as directed by your physical therapist.",
            duration: "15-20 min",
            frequency: "Once daily",
          },
          {
            id: "fracture-3-2",
            title: "Progressive weight-bearing",
            description:
              "Gradually increase weight-bearing on the affected area as advised by your healthcare provider.",
            duration: "Throughout day",
            frequency: "As directed",
          },
          {
            id: "fracture-3-3",
            title: "Joint mobility exercises",
            description: "Perform exercises to restore full range of motion to affected and adjacent joints.",
            duration: "10-15 min",
            frequency: "Twice daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "Immediately if you suspect a fracture. Delay in treatment can lead to improper healing and complications.",
    preventionTips: [
      "Wear protective gear during sports activities",
      "Maintain a diet rich in calcium and vitamin D for strong bones",
      "Exercise regularly to improve bone density and strength",
      "Make your home fall-proof, especially for elderly individuals",
    ],
    dosAndDonts: {
      dos: [
        "Follow your doctor's instructions exactly",
        "Keep the cast or splint dry",
        "Elevate the injured area to reduce swelling",
        "Take pain medications as prescribed",
        "Attend all follow-up appointments",
      ],
      donts: [
        "Don't put weight on the injured area until cleared by your doctor",
        "Don't stick objects inside your cast to scratch",
        "Don't ignore increasing pain, numbness, or tingling",
        "Don't remove your cast without medical supervision",
        "Don't miss follow-up appointments",
      ],
    },
  },
  {
    id: "sprain-ankle",
    name: "Sprained Ankle",
    category: "Musculoskeletal",
    type: "Ligament Injury",
    symptoms: ["Ankle pain", "Swelling", "Bruising", "Limited mobility", "Joint noise"],
    description: "Stretching or tearing of ligaments that connect bones at the ankle joint",
    detailedDescription:
      "A sprained ankle occurs when the ligaments that hold your ankle joint together are stretched or torn. This typically happens when the ankle rolls, twists, or turns in an awkward way. Sprains can range from mild (Grade I) to severe (Grade III) based on the extent of ligament damage.",
    recoveryTime: "1-2 weeks for mild sprains, 6-8 weeks for severe sprains",
    urgency: "Medium",
    causes: ["Twisting or rotating the ankle", "Falling", "Sports injuries", "Walking or running on uneven surfaces"],
    treatmentSummary: "RICE (Rest, Ice, Compression, Elevation), pain management, and rehabilitation",
    recoveryStages: [
      {
        name: "Acute Phase",
        timeframe: "Days 1-7",
        description: "Acute inflammatory phase with pain, swelling, and bruising",
        milestones: ["Beginning RICE protocol", "Pain management established"],
        watchOutFor: [
          "Inability to bear weight",
          "Severe pain that doesn't respond to medication",
          "Numbness or tingling",
        ],
        tasks: [
          {
            id: "ankle-1-1",
            title: "Rest and protect the ankle",
            description: "Avoid activities that cause pain, swelling or discomfort. Use crutches if needed.",
            duration: "Ongoing",
            frequency: "Throughout day",
          },
          {
            id: "ankle-1-2",
            title: "Ice application",
            description: "Apply ice wrapped in a thin towel to the injured area.",
            duration: "15-20 min",
            frequency: "Every 2-3 hours",
          },
          {
            id: "ankle-1-3",
            title: "Compression bandage",
            description:
              "Apply an elastic bandage to help reduce swelling. Not too tight - should not cause numbness or tingling.",
            duration: "Ongoing",
            frequency: "Throughout day, remove at night",
          },
        ],
      },
      {
        name: "Subacute Phase",
        timeframe: "Days 7-14",
        description: "Subacute phase with decreasing inflammation",
        milestones: ["Reduced swelling", "Improved ability to move the joint", "Beginning to bear weight with support"],
        watchOutFor: ["Increased swelling with activity", "Pain that worsens rather than improves"],
        tasks: [
          {
            id: "ankle-2-1",
            title: "Ankle alphabet exercises",
            description:
              "While seated with your leg extended, write the alphabet in the air with your big toe by moving only your ankle.",
            duration: "5 min",
            frequency: "2-3 times daily",
          },
          {
            id: "ankle-2-2",
            title: "Gentle ankle stretches",
            description:
              "Slowly move your foot up and down, and side to side, to the point of mild tension but not pain.",
            duration: "10 repetitions each direction",
            frequency: "3 times daily",
          },
          {
            id: "ankle-2-3",
            title: "Partial weight-bearing",
            description: "Begin to put some weight on the injured ankle as tolerated, using support as needed.",
            duration: "Throughout day",
            frequency: "As tolerated",
          },
        ],
      },
      {
        name: "Rehabilitation Phase",
        timeframe: "Weeks 2-6",
        description: "Functional recovery phase",
        milestones: [
          "Return to most normal activities",
          "For athletes: beginning sport-specific training",
          "Near-normal strength and flexibility",
        ],
        watchOutFor: ["Pain with specific movements", "Recurrent swelling with activity"],
        tasks: [
          {
            id: "ankle-3-1",
            title: "Balance exercises",
            description: "Stand on the injured foot for 30 seconds. Use a counter or wall for support if needed.",
            duration: "30 sec, 5 repetitions",
            frequency: "Once daily",
          },
          {
            id: "ankle-3-2",
            title: "Resistance band exercises",
            description:
              "Use a resistance band to strengthen your ankle in all directions: inward, outward, up, and down.",
            duration: "3 sets of 10 repetitions each direction",
            frequency: "Once daily",
          },
          {
            id: "ankle-3-3",
            title: "Heel raises",
            description:
              "Stand with feet shoulder-width apart and rise up onto your toes, then slowly lower back down.",
            duration: "3 sets of 15 repetitions",
            frequency: "Once daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If you can't bear weight on the injured limb, if the joint looks deformed, or if pain and swelling don't improve after a few days of home treatment.",
    preventionTips: [
      "Warm up properly before exercise",
      "Use proper technique during sports and exercise",
      "Wear supportive shoes appropriate for your activity",
      "Strengthen muscles around joints through regular exercise",
      "Be careful on uneven surfaces",
    ],
    dosAndDonts: {
      dos: [
        "Rest the injured area initially",
        "Apply ice promptly after injury",
        "Use compression bandages as directed",
        "Elevate the injured area when resting",
        "Begin gentle movement once acute pain subsides",
      ],
      donts: [
        "Don't apply heat in the first 48-72 hours",
        "Don't massage the injured area in the acute phase",
        "Don't continue activities that cause pain",
        "Don't skip rehabilitation exercises",
        "Don't return to sports before adequate healing",
      ],
    },
  },
  {
    id: "tendonitis-general",
    name: "Tendonitis",
    category: "Musculoskeletal",
    symptoms: ["Pain with movement", "Stiffness", "Swelling", "Joint noise"],
    description: "Inflammation of a tendon, often due to repetitive motion",
    detailedDescription:
      "Tendonitis is inflammation or irritation of a tendon — the thick fibrous cords that attach muscle to bone. The condition causes pain and tenderness just outside a joint. While tendonitis can occur in any of your tendons, it's most common around your shoulders, elbows, wrists, knees and heels. Common names for various tendonitis conditions are tennis elbow, golfer's elbow, pitcher's shoulder, swimmer's shoulder, and jumper's knee.",
    recoveryTime: "2-6 weeks for most cases",
    urgency: "Low",
    causes: ["Repetitive motion", "Sudden injury", "Age-related changes", "Certain occupations", "Sports activities"],
    treatmentSummary: "Rest, ice, compression, anti-inflammatory medications, and physical therapy",
    recoveryStages: [
      {
        name: "Rest & Recovery Phase",
        timeframe: "Days 1-14",
        description: "Initial inflammatory response",
        milestones: ["Implementing rest and ice", "Pain management established"],
        watchOutFor: ["Severe pain", "Significant swelling", "Complete inability to use the affected area"],
        tasks: [
          {
            id: "tendonitis-1-1",
            title: "Rest the affected area",
            description: "Avoid activities that increase pain or put stress on the tendon.",
            duration: "Ongoing",
            frequency: "Throughout day",
          },
          {
            id: "tendonitis-1-2",
            title: "Ice therapy",
            description: "Apply ice to the affected area to reduce inflammation and pain.",
            duration: "15-20 min",
            frequency: "Every 2-3 hours",
          },
          {
            id: "tendonitis-1-3",
            title: "Anti-inflammatory medication",
            description: "Take over-the-counter NSAIDs like ibuprofen as directed to reduce pain and inflammation.",
            duration: "As directed",
            frequency: "As directed on packaging",
          },
        ],
      },
      {
        name: "Strengthening Phase",
        timeframe: "Weeks 3-6",
        description: "Healing and rehabilitation",
        milestones: [
          "Minimal pain with daily activities",
          "Beginning strengthening exercises",
          "Gradual return to normal activities",
        ],
        watchOutFor: ["Pain returning with specific movements", "Inability to progress with exercises"],
        tasks: [
          {
            id: "tendonitis-2-1",
            title: "Eccentric exercises",
            description: "Perform slow, controlled exercises that lengthen the affected tendon under tension.",
            duration: "3 sets of 15 repetitions",
            frequency: "Once daily",
          },
          {
            id: "tendonitis-2-2",
            title: "Gentle stretching",
            description: "Perform gentle stretches for the affected tendon and surrounding muscles.",
            duration: "Hold 30 seconds, 3 repetitions",
            frequency: "Twice daily",
          },
          {
            id: "tendonitis-2-3",
            title: "Anti-inflammatory nutrition",
            description: "Consume foods that help reduce inflammation, such as fatty fish, berries, and leafy greens.",
            duration: "Throughout day",
            frequency: "Daily",
          },
        ],
      },
      {
        name: "Prevention & Maintenance Phase",
        timeframe: "Weeks 6+",
        description: "Full functional recovery",
        milestones: [
          "Return to pre-injury activities with modification if needed",
          "Normal strength and flexibility restored",
          "Understanding of prevention strategies",
        ],
        watchOutFor: ["Recurring symptoms with return to activity", "Need for continued activity modification"],
        tasks: [
          {
            id: "tendonitis-3-1",
            title: "Warm-up modifications",
            description: "Develop and maintain a thorough warm-up routine before physical activity.",
            duration: "10-15 min",
            frequency: "Before activity",
          },
          {
            id: "tendonitis-3-2",
            title: "Postural correction",
            description: "Practice proper posture and body mechanics during daily activities.",
            duration: "Throughout day",
            frequency: "Daily",
          },
          {
            id: "tendonitis-3-3",
            title: "Sport-specific conditioning",
            description:
              "Perform exercises that prepare your tendons for the specific demands of your sport or activity.",
            duration: "15-20 min",
            frequency: "3 times weekly",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If your symptoms don't improve after a week of home treatment, if the pain is severe or keeps you from your normal activities, or if you experience redness, warmth, or swelling in the affected area.",
    preventionTips: [
      "Use proper technique during repetitive activities",
      "Take frequent breaks from repetitive tasks",
      "Strengthen muscles around tendons",
      "Stretch before and after activities",
      "Gradually increase intensity of activities",
    ],
    dosAndDonts: {
      dos: [
        "Rest the affected area initially",
        "Apply ice to reduce inflammation",
        "Use proper ergonomics during work and activities",
        "Maintain overall fitness and flexibility",
        "Warm up properly before activities",
      ],
      donts: [
        "Don't push through pain",
        "Don't return to full activity too soon",
        "Don't ignore early symptoms",
        "Don't forget to take breaks during repetitive activities",
        "Don't skip proper warm-up and cool-down",
      ],
    },
  },

  // Neurological Conditions
  {
    id: "concussion",
    name: "Concussion",
    category: "Neurological",
    symptoms: ["Headache", "Dizziness", "Nausea", "Confusion", "Light sensitivity"],
    description: "A mild traumatic brain injury typically caused by a blow to the head",
    detailedDescription:
      "A concussion is a type of traumatic brain injury caused by a bump, blow, or jolt to the head or by a hit to the body that causes the head and brain to move rapidly back and forth. This sudden movement can cause the brain to bounce around or twist in the skull, creating chemical changes in the brain and sometimes stretching and damaging brain cells.",
    recoveryTime: "7-10 days for mild cases, up to several weeks for more severe cases",
    urgency: "High",
    causes: ["Head trauma", "Falls", "Sports injuries", "Vehicle accidents", "Physical assault"],
    treatmentSummary: "Physical and cognitive rest, gradual return to activities, symptom management",
    recoveryStages: [
      {
        name: "Rest Phase",
        timeframe: "Days 1-3",
        description: "Complete physical and cognitive rest",
        milestones: ["Reduction in acute symptoms", "Establishing a quiet, low-stimulation environment"],
        watchOutFor: [
          "Worsening headache",
          "Repeated vomiting",
          "Seizures",
          "Increasing confusion",
          "Unusual behavior changes",
        ],
        tasks: [
          {
            id: "concussion-1-1",
            title: "No screen time",
            description: "Avoid all screens (phones, computers, TV) to reduce cognitive strain and allow brain rest.",
            duration: "Ongoing",
            frequency: "Throughout day",
          },
          {
            id: "concussion-1-2",
            title: "Hydration & sleep tracking",
            description: "Track water intake and sleep patterns to ensure proper hydration and rest.",
            duration: "Throughout day",
            frequency: "Daily",
          },
          {
            id: "concussion-1-3",
            title: "Avoid noise exposure",
            description: "Stay in a quiet environment and avoid loud noises that may worsen symptoms.",
            duration: "Ongoing",
            frequency: "Throughout day",
          },
        ],
      },
      {
        name: "Cognitive Rehabilitation Phase",
        timeframe: "Days 4-10",
        description: "Gradual reintroduction of cognitive activities",
        milestones: ["Able to tolerate light cognitive activity", "Reduction in headache with light activity"],
        watchOutFor: ["Symptom return with increased activity", "New symptoms developing"],
        tasks: [
          {
            id: "concussion-2-1",
            title: "Light reading/writing tasks",
            description: "Begin with 5-10 minutes of light reading or writing, stopping if symptoms worsen.",
            duration: "5-10 min",
            frequency: "2-3 times daily",
          },
          {
            id: "concussion-2-2",
            title: "Walking and balance drills",
            description: "Take short walks and practice simple balance exercises in a safe environment.",
            duration: "10-15 min",
            frequency: "Once daily",
          },
          {
            id: "concussion-2-3",
            title: "Controlled mental stimulation",
            description: "Engage in simple cognitive activities like easy puzzles or quiet conversation.",
            duration: "15-20 min",
            frequency: "Once daily",
          },
        ],
      },
      {
        name: "Return to Activity Phase",
        timeframe: "Days 10+",
        description: "Gradual return to normal activities",
        milestones: ["Return to school/work with modifications", "Able to exercise without symptoms"],
        watchOutFor: ["Symptom recurrence with increased activity", "Difficulty concentrating or remembering"],
        tasks: [
          {
            id: "concussion-3-1",
            title: "Reaction time exercises",
            description: "Practice exercises that challenge reaction time and coordination.",
            duration: "10-15 min",
            frequency: "Once daily",
          },
          {
            id: "concussion-3-2",
            title: "Cardiovascular conditioning",
            description: "Begin light aerobic exercise like stationary biking or swimming if symptom-free.",
            duration: "15-20 min",
            frequency: "Every other day",
          },
          {
            id: "concussion-3-3",
            title: "Psychological evaluation",
            description: "Monitor mood changes and emotional responses as you return to normal activities.",
            duration: "5 min",
            frequency: "Daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "Immediately after a head injury, especially if there is loss of consciousness, confusion, severe headache, vomiting, or worsening symptoms.",
    preventionTips: [
      "Wear appropriate protective gear during sports and recreational activities",
      "Wear seatbelts in vehicles",
      "Make living areas safer for children and older adults to prevent falls",
      "Follow concussion protocols in sports",
    ],
    dosAndDonts: {
      dos: [
        "Rest physically and mentally",
        "Gradually return to normal activities",
        "Get plenty of sleep",
        "Eat regular meals",
        "Follow your healthcare provider's instructions",
      ],
      donts: [
        "Don't return to sports or physical activities until cleared by a healthcare provider",
        "Don't use electronic devices initially",
        "Don't consume alcohol",
        "Don't take medications without consulting a doctor",
        "Don't drive until symptoms have resolved",
      ],
    },
  },

  // Respiratory Conditions
  {
    id: "common-cold",
    name: "Common Cold",
    category: "Respiratory",
    symptoms: ["Cough", "Runny nose", "Sore throat", "Congestion", "Sneezing", "Mild fever"],
    description: "A viral infection of the upper respiratory tract",
    detailedDescription:
      "The common cold is a viral infection of the nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold, with rhinoviruses being the most common. Healthy adults can expect to have two to three colds annually.",
    recoveryTime: "7-10 days",
    urgency: "Low",
    causes: [
      "Rhinovirus",
      "Coronavirus",
      "RSV (Respiratory Syncytial Virus)",
      "Close contact with infected people",
      "Touching contaminated surfaces",
    ],
    treatmentSummary: "Rest, hydration, over-the-counter medications for symptom relief, and time",
    recoveryStages: [
      {
        name: "Early Symptoms Phase",
        timeframe: "Days 1-3",
        description: "Initial onset of symptoms",
        milestones: ["Onset of symptoms", "Beginning self-care measures"],
        watchOutFor: ["High fever (above 101.3°F or 38.5°C)", "Severe headache", "Shortness of breath"],
        tasks: [
          {
            id: "cold-1-1",
            title: "Rest and hydration",
            description: "Get plenty of rest and drink fluids like water, clear broth, or warm lemon water with honey.",
            duration: "Throughout day",
            frequency: "Hourly fluid intake",
          },
          {
            id: "cold-1-2",
            title: "Gargle salt water",
            description:
              "Gargle with 1/4 to 1/2 teaspoon salt dissolved in 8 ounces of warm water to relieve a sore throat.",
            duration: "30 seconds",
            frequency: "2-3 times daily",
          },
          {
            id: "cold-1-3",
            title: "Use saline nasal drops",
            description: "Use saline nasal drops or spray to relieve nasal congestion.",
            duration: "1 min",
            frequency: "As needed",
          },
        ],
      },
      {
        name: "Peak Symptoms Phase",
        timeframe: "Days 4-7",
        description: "Symptoms typically peak",
        milestones: ["Symptoms typically peak", "Mucus may thicken and change color"],
        watchOutFor: [
          "Symptoms getting significantly worse after day 5",
          "Development of ear pain",
          "Persistent high fever",
        ],
        tasks: [
          {
            id: "cold-2-1",
            title: "Take OTC medications",
            description: "Take over-the-counter medications like acetaminophen as directed for symptom relief.",
            duration: "As directed",
            frequency: "As directed on packaging",
          },
          {
            id: "cold-2-2",
            title: "Use a humidifier",
            description: "Use a clean humidifier or cool mist vaporizer to add moisture to the air.",
            duration: "While sleeping",
            frequency: "Nightly",
          },
          {
            id: "cold-2-3",
            title: "Honey for cough",
            description: "Take 1-2 teaspoons of honey to soothe a cough (not for children under 1 year).",
            duration: "Immediate",
            frequency: "As needed for cough",
          },
        ],
      },
      {
        name: "Recovery Phase",
        timeframe: "Days 7-10",
        description: "Symptoms begin to improve",
        milestones: ["Symptoms begin to improve", "Energy levels start to return"],
        watchOutFor: ["Symptoms lasting beyond 10 days", "Development of new symptoms", "Worsening cough"],
        tasks: [
          {
            id: "cold-3-1",
            title: "Light physical activity",
            description: "Begin light activity as you start feeling better to boost circulation and immunity.",
            duration: "10-15 min",
            frequency: "Once daily",
          },
          {
            id: "cold-3-2",
            title: "Increase fluid intake",
            description: "Continue to drink plenty of fluids to help thin mucus and keep the body hydrated.",
            duration: "Throughout day",
            frequency: "Hourly",
          },
          {
            id: "cold-3-3",
            title: "Monitor for complications",
            description:
              "Watch for signs of secondary infections like sinusitis or bronchitis (worsening symptoms after improvement).",
            duration: "5 min",
            frequency: "Daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If symptoms last more than 10 days, if symptoms are severe or unusual, if you have a high fever, or if you have underlying health conditions like asthma or heart disease.",
    preventionTips: [
      "Wash hands frequently with soap and water",
      "Avoid close contact with sick people",
      "Don't touch your face with unwashed hands",
      "Clean frequently touched surfaces",
      "Maintain a healthy lifestyle with adequate sleep, exercise, and a balanced diet",
    ],
    dosAndDonts: {
      dos: [
        "Rest as much as possible",
        "Stay hydrated with water, tea, and clear broths",
        "Use a humidifier to add moisture to the air",
        "Gargle with salt water for sore throat relief",
        "Take over-the-counter medications as directed for symptom relief",
      ],
      donts: [
        "Don't take antibiotics (they don't work against viruses)",
        "Don't smoke or be around secondhand smoke",
        "Don't overuse decongestants (can cause rebound congestion)",
        "Don't spread germs (cover coughs and sneezes)",
        "Don't go to work or school if you have a fever",
      ],
    },
  },
  {
    id: "flu",
    name: "Influenza (Flu)",
    category: "Respiratory",
    symptoms: ["Fever", "Chills", "Muscle aches", "Headache", "Fatigue", "Cough", "Sore throat"],
    description: "A contagious respiratory illness caused by influenza viruses",
    detailedDescription:
      "Influenza (flu) is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs. It can cause mild to severe illness, and at times can lead to death. The flu is different from a cold and usually comes on suddenly with more severe symptoms.",
    recoveryTime: "1-2 weeks",
    urgency: "Medium",
    causes: [
      "Influenza A viruses",
      "Influenza B viruses",
      "Influenza C viruses",
      "Airborne exposure",
      "Direct contact with infected individuals",
    ],
    treatmentSummary:
      "Rest, hydration, antiviral medications if prescribed, and over-the-counter medications for symptom relief",
    recoveryStages: [
      {
        name: "Acute Onset Phase",
        timeframe: "Days 1-3",
        description: "Sudden onset of symptoms",
        milestones: ["Sudden onset of symptoms", "Beginning treatment"],
        watchOutFor: [
          "Difficulty breathing",
          "Persistent pain or pressure in chest",
          "Confusion",
          "Severe or persistent vomiting",
        ],
        tasks: [
          {
            id: "flu-1-1",
            title: "Bed rest",
            description:
              "Stay in bed and rest to help your body fight the infection and prevent spreading it to others.",
            duration: "Most of the day",
            frequency: "Daily",
          },
          {
            id: "flu-1-2",
            title: "Drink electrolyte fluids",
            description: "Consume water, sports drinks, or electrolyte solutions to prevent dehydration.",
            duration: "Throughout day",
            frequency: "Hourly",
          },
          {
            id: "flu-1-3",
            title: "Fever management",
            description: "Take acetaminophen or ibuprofen as directed to reduce fever and relieve body aches.",
            duration: "As directed",
            frequency: "As directed on packaging",
          },
        ],
      },
      {
        name: "Peak Symptoms Phase",
        timeframe: "Days 4-7",
        description: "Symptoms typically at their worst",
        milestones: ["Symptoms typically at their worst", "Fever may begin to subside"],
        watchOutFor: [
          "Symptoms getting worse after initial improvement",
          "High fever that doesn't respond to medication",
        ],
        tasks: [
          {
            id: "flu-2-1",
            title: "Gradual movement",
            description: "Begin moving around your home as tolerated, but avoid overexertion.",
            duration: "Short periods",
            frequency: "Several times daily",
          },
          {
            id: "flu-2-2",
            title: "Eat nutrient-rich foods",
            description: "Consume easy-to-digest, nutrient-rich foods like soups, smoothies, and fruits.",
            duration: "Throughout day",
            frequency: "Small, frequent meals",
          },
          {
            id: "flu-2-3",
            title: "Steam inhalation",
            description: "Breathe in steam from a bowl of hot water or a shower to relieve congestion.",
            duration: "5-10 min",
            frequency: "2-3 times daily",
          },
        ],
      },
      {
        name: "Recovery Phase",
        timeframe: "Days 7-14",
        description: "Symptoms begin to improve",
        milestones: ["Fever resolves", "Energy begins to return", "Respiratory symptoms may persist"],
        watchOutFor: ["Return of fever", "Worsening cough or development of productive cough with colored sputum"],
        tasks: [
          {
            id: "flu-3-1",
            title: "Resume normal activity",
            description: "Gradually return to normal activities if fever-free for 24 hours without medication.",
            duration: "Throughout day",
            frequency: "As tolerated",
          },
          {
            id: "flu-3-2",
            title: "Immune-boosting foods",
            description: "Eat foods rich in vitamins C and D, zinc, and antioxidants to support immune recovery.",
            duration: "Throughout day",
            frequency: "Daily",
          },
          {
            id: "flu-3-3",
            title: "Light exercise",
            description: "Begin light exercise like walking to rebuild strength and endurance.",
            duration: "10-15 min",
            frequency: "Once daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If you're in a high-risk group (elderly, pregnant, young children, or have chronic conditions), if symptoms are severe, if you have difficulty breathing, or if symptoms improve then worsen.",
    preventionTips: [
      "Get an annual flu vaccine",
      "Wash hands frequently",
      "Avoid close contact with sick people",
      "Cover your mouth and nose when coughing or sneezing",
      "Stay home when you're sick to prevent spreading the flu",
    ],
    dosAndDonts: {
      dos: [
        "Stay home and rest",
        "Drink plenty of fluids",
        "Take antiviral medications if prescribed",
        "Use a humidifier to ease congestion",
        "Monitor symptoms for complications",
      ],
      donts: [
        "Don't go to work or school while contagious",
        "Don't take antibiotics unless prescribed for a secondary infection",
        "Don't smoke or be around secondhand smoke",
        "Don't drink alcohol, which can increase dehydration",
        "Don't visit vulnerable individuals (elderly, infants, immunocompromised)",
      ],
    },
  },

  // Digestive Conditions
  {
    id: "food-poisoning",
    name: "Food Poisoning",
    category: "Digestive",
    symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal pain", "Fever", "Headache"],
    description: "Illness caused by consuming contaminated food or drink",
    detailedDescription:
      "Food poisoning is an illness caused by eating contaminated food. Infectious organisms — including bacteria, viruses and parasites — or their toxins are the most common causes. These infectious organisms or their toxins can contaminate food at any point during processing or production, and contamination can also occur at home if food is incorrectly handled or cooked.",
    recoveryTime: "1-3 days for mild cases, up to 10 days for severe cases",
    urgency: "Medium",
    causes: [
      "Bacteria (Salmonella, E. coli, Listeria)",
      "Viruses (Norovirus, Hepatitis A)",
      "Parasites",
      "Toxins in food",
    ],
    treatmentSummary: "Rest, hydration, gradual return to eating, and over-the-counter medications for symptom relief",
    recoveryStages: [
      {
        name: "Acute Symptoms Phase",
        timeframe: "Hours 1-24",
        description: "Initial onset of symptoms",
        milestones: ["Onset of symptoms", "Beginning hydration measures"],
        watchOutFor: [
          "Signs of severe dehydration (extreme thirst, dry mouth, little or no urination, severe weakness)",
          "Bloody diarrhea",
          "High fever (above 101.5°F or 38.6°C)",
        ],
        tasks: [
          {
            id: "food-1-1",
            title: "Hydration maintenance",
            description:
              "Sip water, clear broths, or oral rehydration solutions frequently. Avoid caffeine and alcohol.",
            duration: "Throughout day",
            frequency: "Small sips every 15 minutes",
          },
          {
            id: "food-1-2",
            title: "Rest completely",
            description: "Rest as much as possible to allow your body to fight the infection.",
            duration: "Most of the day",
            frequency: "Throughout day",
          },
          {
            id: "food-1-3",
            title: "Avoid solid foods",
            description: "Give your digestive system a break by avoiding solid foods until vomiting subsides.",
            duration: "Until vomiting stops",
            frequency: "Throughout day",
          },
        ],
      },
      {
        name: "Peak Symptoms Phase",
        timeframe: "Days 1-2",
        description: "Symptoms typically at their worst",
        milestones: ["Symptoms typically at their worst", "Maintaining hydration"],
        watchOutFor: [
          "Inability to keep any fluids down",
          "Diarrhea lasting more than 2 days",
          "Severe abdominal pain",
        ],
        tasks: [
          {
            id: "food-2-1",
            title: "Introduce bland foods",
            description:
              "Begin eating small amounts of bland, easy-to-digest foods like toast, crackers, bananas, and rice.",
            duration: "Throughout day",
            frequency: "Small amounts every 2-3 hours",
          },
          {
            id: "food-2-2",
            title: "Anti-diarrheal medication",
            description:
              "Take over-the-counter anti-diarrheal medication if needed (not if you have bloody diarrhea or high fever).",
            duration: "As directed",
            frequency: "As directed on packaging",
          },
          {
            id: "food-2-3",
            title: "Probiotics",
            description:
              "Consider taking probiotic supplements or eating yogurt with live cultures to restore gut bacteria.",
            duration: "As directed",
            frequency: "Once or twice daily",
          },
        ],
      },
      {
        name: "Recovery Phase",
        timeframe: "Days 3-7",
        description: "Symptoms begin to improve",
        milestones: ["Symptoms begin to improve", "Beginning to tolerate bland foods"],
        watchOutFor: ["Symptoms worsening after initial improvement", "New symptoms developing"],
        tasks: [
          {
            id: "food-3-1",
            title: "Return to normal diet",
            description: "Gradually reintroduce normal foods as tolerated, starting with simple, low-fat options.",
            duration: "Throughout day",
            frequency: "Regular meals",
          },
          {
            id: "food-3-2",
            title: "Hydration continuation",
            description: "Continue to drink plenty of fluids to ensure complete rehydration.",
            duration: "Throughout day",
            frequency: "Hourly",
          },
          {
            id: "food-3-3",
            title: "Food safety review",
            description: "Review food safety practices in your home to prevent future episodes.",
            duration: "30 min",
            frequency: "Once",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If you can't keep liquids down, have bloody vomit or stool, have diarrhea for more than three days, have extreme pain or severe abdominal cramping, have a fever above 101.5°F (38.6°C), or show signs of dehydration.",
    preventionTips: [
      "Wash hands and surfaces often when handling food",
      "Keep raw meat, poultry, and seafood separate from ready-to-eat foods",
      "Cook foods to proper temperatures",
      "Refrigerate perishable foods promptly",
      "Be cautious with food from street vendors or unfamiliar sources",
    ],
    dosAndDonts: {
      dos: [
        "Stay hydrated with water and electrolyte solutions",
        "Rest your stomach by avoiding food initially",
        "Gradually reintroduce bland foods",
        "Wash hands thoroughly after using the bathroom",
        "Discard any suspected contaminated food",
      ],
      donts: [
        "Don't take anti-diarrheal medication if you have bloody diarrhea or high fever",
        "Don't eat dairy, fatty, spicy, or sugary foods during recovery",
        "Don't prepare food for others while sick",
        "Don't return to normal activities until fully recovered",
        "Don't share personal items that could spread infection",
      ],
    },
  },

  // Mental Health Conditions
  {
    id: "anxiety-general",
    name: "Anxiety Disorder",
    category: "Mental Health",
    symptoms: [
      "Excessive worry",
      "Restlessness",
      "Fatigue",
      "Difficulty concentrating",
      "Irritability",
      "Muscle tension",
      "Sleep problems",
    ],
    description:
      "A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with daily activities",
    detailedDescription:
      "Anxiety disorders are a group of mental health conditions characterized by significant feelings of anxiety and fear. These feelings are strong enough to interfere with daily activities and may include panic attacks, obsessive-compulsive behaviors, and uncontrollable worry. The causes of anxiety disorders are not fully understood but likely involve a combination of factors including genetics, brain chemistry, personality, and life events.",
    recoveryTime: "Varies widely, from weeks to months or longer with proper treatment",
    urgency: "Medium",
    causes: [
      "Genetic factors",
      "Brain chemistry",
      "Personality factors",
      "Life events",
      "Medical conditions",
      "Substance use or withdrawal",
    ],
    treatmentSummary:
      "Therapy (particularly cognitive-behavioral therapy), medication, lifestyle changes, and stress management techniques",
    recoveryStages: [
      {
        name: "Acute Phase",
        timeframe: "Days 1-7",
        description: "Initial management of anxiety symptoms",
        milestones: ["Recognition of anxiety symptoms", "Beginning coping strategies"],
        watchOutFor: [
          "Panic attacks",
          "Thoughts of self-harm",
          "Inability to perform daily functions",
          "Physical symptoms like chest pain",
        ],
        tasks: [
          {
            id: "anxiety-1-1",
            title: "Grounding exercises",
            description:
              "Practice the 5-4-3-2-1 technique: Identify 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.",
            duration: "5 min",
            frequency: "When feeling anxious",
          },
          {
            id: "anxiety-1-2",
            title: "Deep breathing",
            description:
              "Practice deep, diaphragmatic breathing: Inhale slowly through your nose for 4 counts, hold for 2, exhale through your mouth for 6 counts.",
            duration: "5-10 min",
            frequency: "3 times daily",
          },
          {
            id: "anxiety-1-3",
            title: "Mindful journaling",
            description: "Write down your thoughts and feelings without judgment to help process them.",
            duration: "10-15 min",
            frequency: "Daily",
          },
        ],
      },
      {
        name: "Cognitive Therapy Phase",
        timeframe: "Weeks 1-4",
        description: "Learning to identify and challenge anxious thoughts",
        milestones: ["Identifying thought patterns", "Learning cognitive restructuring techniques"],
        watchOutFor: ["Resistance to challenging thoughts", "Increased anxiety during exposure exercises"],
        tasks: [
          {
            id: "anxiety-2-1",
            title: "Thought restructuring",
            description: "Identify negative thought patterns and practice replacing them with more balanced thoughts.",
            duration: "15 min",
            frequency: "Daily",
          },
          {
            id: "anxiety-2-2",
            title: "Progressive muscle relaxation",
            description: "Tense and then relax each muscle group in your body to reduce physical tension.",
            duration: "15 min",
            frequency: "Once daily",
          },
          {
            id: "anxiety-2-3",
            title: "Exposure exercises",
            description: "Gradually face feared situations in a controlled, step-by-step manner.",
            duration: "Varies",
            frequency: "2-3 times weekly",
          },
        ],
      },
      {
        name: "Long-Term Management Phase",
        timeframe: "Weeks 4+",
        description: "Developing ongoing strategies for anxiety management",
        milestones: ["Reduced frequency and intensity of anxiety", "Improved coping skills"],
        watchOutFor: ["Relapse triggers", "Avoidance behaviors returning"],
        tasks: [
          {
            id: "anxiety-3-1",
            title: "Lifestyle modifications",
            description: "Maintain regular exercise, healthy diet, and adequate sleep to support mental health.",
            duration: "Throughout day",
            frequency: "Daily",
          },
          {
            id: "anxiety-3-2",
            title: "Social engagement strategies",
            description: "Practice connecting with supportive people and communicating your needs.",
            duration: "Varies",
            frequency: "Several times weekly",
          },
          {
            id: "anxiety-3-3",
            title: "Mindfulness training",
            description:
              "Practice being present in the moment without judgment through meditation or mindful activities.",
            duration: "15-20 min",
            frequency: "Daily",
          },
        ],
      },
    ],
    whenToSeeDoctor:
      "If anxiety interferes with daily activities, causes significant distress, leads to avoidance behaviors, or is accompanied by physical symptoms like chest pain or shortness of breath.",
    preventionTips: [
      "Practice stress management techniques regularly",
      "Maintain a healthy lifestyle with regular exercise",
      "Get adequate sleep",
      "Limit caffeine and alcohol",
      "Build and maintain social connections",
    ],
    dosAndDonts: {
      dos: [
        "Seek professional help when needed",
        "Practice relaxation techniques regularly",
        "Maintain a consistent sleep schedule",
        "Exercise regularly",
        "Connect with supportive people",
      ],
      donts: [
        "Don't avoid anxiety-provoking situations (which can reinforce anxiety)",
        "Don't use alcohol or drugs to cope with anxiety",
        "Don't consume excessive caffeine",
        "Don't neglect self-care",
        "Don't isolate yourself from others",
      ],
    },
  },
]

// Helper function to get symptoms by body part
export function getComprehensiveSymptomsByBodyPart(bodyPart: string): Symptom[] {
  return COMPREHENSIVE_SYMPTOMS.filter(
    (symptom) => symptom.bodyParts && symptom.bodyParts.some((part) => part.toLowerCase() === bodyPart.toLowerCase()),
  )
}

// Helper function to get conditions by symptom
export function getComprehensiveConditionsBySymptom(symptomName: string): Condition[] {
  return COMPREHENSIVE_CONDITIONS.filter((condition) =>
    condition.symptoms.some(
      (s) =>
        s.toLowerCase() === symptomName.toLowerCase() ||
        COMPREHENSIVE_SYMPTOMS.find(
          (symptom) =>
            symptom.name === s && symptom.aliases.some((alias) => alias.toLowerCase() === symptomName.toLowerCase()),
        ),
    ),
  )
}

// Helper function to get all symptoms with their variations
export function getAllSymptomVariations(): { name: string; original: string }[] {
  const variations: { name: string; original: string }[] = []

  COMPREHENSIVE_SYMPTOMS.forEach((symptom) => {
    // Add the main symptom name
    variations.push({ name: symptom.name, original: symptom.name })

    // Add all aliases
    symptom.aliases.forEach((alias) => {
      variations.push({ name: alias, original: symptom.name })
    })
  })

  return variations
}

// Helper function to match symptoms to conditions with personalization
export interface PersonalFactors {
  age?: number
  sex?: "male" | "female" | "other"
  activityLevel?: "sedentary" | "light" | "moderate" | "very" | "athlete"
  preExistingConditions?: string[]
  occupation?: string
  lifestyle?: {
    smoking?: boolean
    alcohol?: boolean
    exercise?: boolean
  }
}

export interface MatchResult {
  condition: Condition
  matchScore: number
  matchPercentage: string
  keyFactors: string[]
}

export function matchSymptomsToConditions(symptoms: string[], personalFactors?: PersonalFactors): MatchResult[] {
  // Get all conditions that match at least one symptom
  const matchedConditions = COMPREHENSIVE_CONDITIONS.filter((condition) =>
    condition.symptoms.some((symptom) =>
      symptoms.some(
        (s) => symptom.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(symptom.toLowerCase()),
      ),
    ),
  )

  // Calculate basic match score based on symptom overlap
  let results = matchedConditions.map((condition) => {
    const matchingSymptoms = condition.symptoms.filter((symptom) =>
      symptoms.some(
        (s) => symptom.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(symptom.toLowerCase()),
      ),
    )

    const matchScore = matchingSymptoms.length / Math.max(symptoms.length, condition.symptoms.length)
    const keyFactors: string[] = [`Matches ${matchingSymptoms.length} of your symptoms`]

    return {
      condition,
      matchScore,
      matchPercentage: `${Math.round(matchScore * 100)}%`,
      keyFactors,
    }
  })

  // Apply personalization factors if available
  if (personalFactors) {
    results = results.map((result) => {
      let { matchScore, keyFactors } = result
      const { condition } = result

      // Age factors
      if (personalFactors.age !== undefined) {
        const age = personalFactors.age

        // Children (0-12)
        if (age <= 12) {
          if (["Common Cold", "Influenza", "Fracture"].includes(condition.name)) {
            matchScore += 0.1
            keyFactors.push("Children are more susceptible to viral illnesses and minor fractures")
          }
        }
        // Teens (13-19)
        else if (age <= 19) {
          if (["Fracture", "Sprained Ankle", "Concussion"].includes(condition.name)) {
            matchScore += 0.12
            keyFactors.push("Teens have higher likelihood of sports injuries and stress fractures")
          }
        }
        // Adults (20-64)
        else if (age <= 64) {
          if (["Tendonitis", "Anxiety Disorder", "Food Poisoning"].includes(condition.name)) {
            matchScore += 0.1
            keyFactors.push("Adults commonly experience workplace-related injuries and stress conditions")
          }
        }
        // Elderly (65+)
        else {
          if (["Fracture", "Influenza"].includes(condition.name)) {
            matchScore += 0.15
            keyFactors.push("Elderly individuals have increased risk of fractures and severe viral infections")
          }
        }
      }

      // Activity level factors
      if (personalFactors.activityLevel) {
        // Sedentary
        if (personalFactors.activityLevel === "sedentary") {
          if (["Anxiety Disorder"].includes(condition.name)) {
            matchScore += 0.12
            keyFactors.push("Sedentary lifestyle increases risk of mental health issues")
          }
        }
        // Moderately Active
        else if (["light", "moderate"].includes(personalFactors.activityLevel)) {
          if (["Tendonitis", "Sprained Ankle"].includes(condition.name)) {
            matchScore += 0.08
            keyFactors.push("Moderate activity can lead to mild overuse injuries")
          }
        }
        // Highly Active
        else if (["very", "athlete"].includes(personalFactors.activityLevel)) {
          if (["Tendonitis", "Fracture", "Sprained Ankle"].includes(condition.name)) {
            matchScore += 0.15
            keyFactors.push("High activity level increases risk of musculoskeletal injuries")
          }
        }
      }

      // Sex factors
      if (personalFactors.sex) {
        if (personalFactors.sex === "female") {
          if (["Anxiety Disorder"].includes(condition.name)) {
            matchScore += 0.08
            keyFactors.push("Women report higher rates of anxiety disorders")
          }
        }

        if (personalFactors.sex === "male") {
          if (["Fracture", "Concussion"].includes(condition.name)) {
            matchScore += 0.08
            keyFactors.push("Men have higher rates of traumatic injuries")
          }
        }
      }

      // Pre-existing conditions
      if (personalFactors.preExistingConditions && personalFactors.preExistingConditions.length > 0) {
        if (
          personalFactors.preExistingConditions.includes("Asthma") &&
          ["Common Cold", "Influenza"].includes(condition.name)
        ) {
          matchScore += 0.12
          keyFactors.push("Asthma can worsen respiratory infections")
        }

        if (
          personalFactors.preExistingConditions.includes("Anxiety") &&
          ["Anxiety Disorder"].includes(condition.name)
        ) {
          matchScore += 0.15
          keyFactors.push("History of anxiety increases likelihood of recurrence")
        }
      }

      // Occupation factors
      if (personalFactors.occupation) {
        if (
          ["office worker", "desk job", "computer programmer", "writer"].some((job) =>
            personalFactors.occupation?.toLowerCase().includes(job),
          )
        ) {
          if (["Tendonitis"].includes(condition.name)) {
            matchScore += 0.1
            keyFactors.push("Desk jobs increase risk of repetitive strain injuries")
          }
        }

        if (
          ["construction", "athlete", "trainer", "physical"].some((job) =>
            personalFactors.occupation?.toLowerCase().includes(job),
          )
        ) {
          if (["Fracture", "Sprained Ankle"].includes(condition.name)) {
            matchScore += 0.1
            keyFactors.push("Physical occupations have higher risk of traumatic injuries")
          }
        }
      }

      // Lifestyle factors
      if (personalFactors.lifestyle) {
        if (personalFactors.lifestyle.smoking) {
          if (["Common Cold", "Influenza"].includes(condition.name)) {
            matchScore += 0.1
            keyFactors.push("Smoking increases risk and severity of respiratory infections")
          }
        }

        if (personalFactors.lifestyle.alcohol) {
          if (["Anxiety Disorder"].includes(condition.name)) {
            matchScore += 0.08
            keyFactors.push("Alcohol can worsen anxiety symptoms")
          }
        }

        if (personalFactors.lifestyle.exercise === false) {
          if (["Anxiety Disorder"].includes(condition.name)) {
            matchScore += 0.08
            keyFactors.push("Lack of exercise is associated with higher anxiety levels")
          }
        }
      }

      // Cap match score at 0.95
      matchScore = Math.min(matchScore, 0.95)

      return {
        condition,
        matchScore,
        matchPercentage: `${Math.round(matchScore * 100)}%`,
        keyFactors,
      }
    })
  }

  // Sort by match score, highest first
  return results.sort((a, b) => b.matchScore - a.matchScore)
}

