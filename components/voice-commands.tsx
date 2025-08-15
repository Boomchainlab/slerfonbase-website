"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

export function VoiceCommands() {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<any | null>(null)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      const recognitionInstance = new SpeechRecognition()

      recognitionInstance.continuous = false
      recognitionInstance.interimResults = false
      recognitionInstance.lang = "en-US"

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase()
        handleVoiceCommand(transcript)
      }

      recognitionInstance.onend = () => {
        setIsListening(false)
      }

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error)
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
      setIsSupported(true)
    }
  }, [])

  const handleVoiceCommand = (command: string) => {
    const speak = (text: string) => {
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.8
        utterance.pitch = 1
        speechSynthesis.speak(utterance)
      }
    }

    if (command.includes("price") || command.includes("cost")) {
      speak("The current SLERF price is 0.00156 dollars, up 12.5% today")
    } else if (command.includes("buy") || command.includes("purchase")) {
      speak("To buy SLERF, connect your wallet and use the trading widget on our homepage")
      window.location.href = "/"
    } else if (command.includes("portfolio") || command.includes("balance")) {
      speak("Opening your portfolio page")
      window.location.href = "/portfolio"
    } else if (command.includes("staking") || command.includes("stake")) {
      speak("Opening staking page where you can earn 25.5% APY")
      window.location.href = "/staking"
    } else if (command.includes("analytics") || command.includes("data")) {
      speak("Opening analytics dashboard")
      window.location.href = "/analytics"
    } else if (command.includes("help") || command.includes("commands")) {
      speak("You can say: check price, buy slerf, open portfolio, open staking, or open analytics")
    } else {
      speak("Sorry, I didn't understand that command. Try saying 'help' for available commands")
    }
  }

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={toggleListening}
        className={`rounded-full w-12 h-12 ${
          isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-yellow-400 hover:bg-yellow-500"
        } text-black`}
        aria-label="Voice commands"
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </Button>
    </div>
  )
}
