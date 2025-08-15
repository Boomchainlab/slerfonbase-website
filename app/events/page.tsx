"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

export default function Events() {
  const [selectedMonth, setSelectedMonth] = useState("February 2024")

  const upcomingEvents = [
    {
      title: "SLERF Community AMA",
      date: "2024-02-15",
      time: "18:00 UTC",
      type: "AMA",
      platform: "Twitter Spaces",
      description: "Monthly community Q&A session with the SLERF team",
      attendees: 500,
      status: "Upcoming",
      link: "https://twitter.com/slerf00",
    },
    {
      title: "Base Ecosystem Conference",
      date: "2024-02-22",
      time: "14:00 UTC",
      type: "Conference",
      platform: "Virtual",
      description: "SLERF presenting at the Base blockchain ecosystem conference",
      attendees: 2000,
      status: "Confirmed",
      link: "https://base-conference.com",
    },
    {
      title: "DeFi Trading Competition Launch",
      date: "2024-03-01",
      time: "12:00 UTC",
      type: "Competition",
      platform: "SLERF Platform",
      description: "Launch of the monthly SLERF trading competition with 50K SLERF prizes",
      attendees: 1000,
      status: "Upcoming",
      link: "/trading-competition",
    },
    {
      title: "Partnership Announcement",
      date: "2024-03-10",
      time: "16:00 UTC",
      type: "Announcement",
      platform: "Twitter & Telegram",
      description: "Major partnership announcement with leading DeFi protocol",
      attendees: 5000,
      status: "Planned",
      link: "https://twitter.com/slerf00",
    },
  ]

  const pastEvents = [
    {
      title: "SLERF Token Launch",
      date: "2024-01-15",
      type: "Launch",
      description: "Official launch of SLERF token on Base chain",
      attendees: 3000,
      highlights: ["Successful fair launch", "1B tokens distributed", "Liquidity locked"],
    },
    {
      title: "First Community Meetup",
      date: "2024-01-20",
      type: "Meetup",
      description: "Virtual community meetup and roadmap presentation",
      attendees: 800,
      highlights: ["Roadmap revealed", "Team introduction", "Community feedback"],
    },
    {
      title: "Staking Platform Launch",
      date: "2024-01-28",
      type: "Product Launch",
      description: "Launch of SLERF staking platform with 25% APY",
      attendees: 1200,
      highlights: ["25% APY staking", "156M SLERF staked", "1,247 stakers joined"],
    },
  ]

  const eventTypes = [
    { name: "AMA", color: "bg-blue-500", count: 12 },
    { name: "Conference", color: "bg-green-500", count: 5 },
    { name: "Competition", color: "bg-yellow-500", count: 8 },
    { name: "Announcement", color: "bg-purple-500", count: 15 },
    { name: "Meetup", color: "bg-pink-500", count: 6 },
    { name: "Launch", color: "bg-red-500", count: 3 },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">📅 Events Calendar</h1>
          <p className="text-xl">Stay updated with SLERF community events and announcements</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Event Stats */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Event Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {eventTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 ${type.color} rounded-full mx-auto mb-2`}></div>
                    <p className="text-sm font-semibold">{type.name}</p>
                    <p className="text-xs text-gray-300">{type.count} events</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">🔜 Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.platform}</span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          event.status === "Confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : event.status === "Upcoming"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <p className="text-gray-200 mb-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1 text-sm text-gray-300">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees.toLocaleString()} expected</span>
                      </div>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                        onClick={() => window.open(event.link, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Join Event
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Past Events */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">📚 Past Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-300 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">{event.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-300">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-gray-200 mb-3">{event.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-green-400 mb-2">Key Highlights:</p>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {event.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Event Notifications */}
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardHeader>
              <CardTitle>Never Miss an Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Get Notified</h4>
                  <p className="text-sm mb-4">
                    Stay updated with all SLERF events, AMAs, and important announcements. Choose your preferred
                    notification method.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold">
                      📧 Email Notifications
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
                      🐦 Twitter Notifications
                    </Button>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold">
                      ✈️ Telegram Alerts
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Add to Calendar</h4>
                  <p className="text-sm mb-4">
                    Import SLERF events directly to your calendar application and never miss important dates.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                      📅 Google Calendar
                    </Button>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold">
                      📆 Outlook Calendar
                    </Button>
                    <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold">
                      📋 iCal Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-yellow-400 hover:text-yellow-300 underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
