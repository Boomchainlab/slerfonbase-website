"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function MemeContest() {
  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      title: "SLERF to the Moon!",
      author: "0x1234...5678",
      votes: 245,
      image: "/slerf-meme-3.png",
      prize: "1st Place - 5,000 SLERF",
    },
    {
      id: 2,
      title: "Diamond Hands Sloth",
      author: "0x2345...6789",
      votes: 198,
      image: "/slerf-promo-2.png",
      prize: "2nd Place - 3,000 SLERF",
    },
    {
      id: 3,
      title: "Sleepy but Rich",
      author: "0x3456...7890",
      votes: 156,
      image: "/slerf-banner-1.png",
      prize: "3rd Place - 1,000 SLERF",
    },
  ])

  const [newSubmission, setNewSubmission] = useState({
    title: "",
    description: "",
    imageUrl: "",
  })

  const handleVote = (id: number) => {
    setSubmissions(submissions.map((sub) => (sub.id === id ? { ...sub, votes: sub.votes + 1 } : sub)))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Meme Contest</h1>
          <p className="text-xl">Create the best SLERF memes and win amazing prizes!</p>
        </div>

        {/* Contest Info */}
        <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black mb-8 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">🎨 Current Contest</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <h3 className="text-2xl font-bold mb-2">SLERF Meme Madness</h3>
            <p className="mb-4">Total Prize Pool: 15,000 SLERF + Exclusive NFTs</p>
            <p className="text-sm">Contest ends in: 12 days, 8 hours, 42 minutes</p>
          </CardContent>
        </Card>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Submission Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Submit Your Meme</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Meme Title</label>
                  <Input
                    placeholder="Enter meme title"
                    value={newSubmission.title}
                    onChange={(e) => setNewSubmission({ ...newSubmission, title: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    placeholder="Describe your meme"
                    value={newSubmission.description}
                    onChange={(e) => setNewSubmission({ ...newSubmission, description: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <Input
                    placeholder="https://..."
                    value={newSubmission.imageUrl}
                    onChange={(e) => setNewSubmission({ ...newSubmission, imageUrl: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3">
                  Submit Meme
                </Button>
                <p className="text-xs text-gray-300">By submitting, you agree to contest terms and conditions</p>
              </CardContent>
            </Card>

            {/* Top Submissions */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">🏆 Top Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {submissions.map((submission, index) => (
                      <div
                        key={submission.id}
                        className={`p-4 rounded-lg border ${
                          index === 0
                            ? "bg-yellow-400/20 border-yellow-400"
                            : index === 1
                              ? "bg-gray-400/20 border-gray-400"
                              : index === 2
                                ? "bg-orange-400/20 border-orange-400"
                                : "bg-white/5 border-white/10"
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                index === 0
                                  ? "bg-yellow-400 text-black"
                                  : index === 1
                                    ? "bg-gray-400 text-black"
                                    : index === 2
                                      ? "bg-orange-400 text-black"
                                      : "bg-white/20 text-white"
                              }`}
                            >
                              {index + 1}
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-semibold">{submission.title}</h4>
                                <p className="text-sm text-gray-300">by {submission.author}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-green-400">{submission.votes} votes</p>
                                <p className="text-xs text-yellow-400">{submission.prize}</p>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <img
                                src={submission.image || "/placeholder.svg"}
                                alt={submission.title}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <Button
                                onClick={() => handleVote(submission.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                              >
                                👍 Vote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contest Rules */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white">Contest Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Submission Guidelines</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Original content only</li>
                    <li>• SLERF-themed memes</li>
                    <li>• Family-friendly content</li>
                    <li>• Max 5 submissions per user</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prizes</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 1st Place: 5,000 SLERF + Gold NFT</li>
                    <li>• 2nd Place: 3,000 SLERF + Silver NFT</li>
                    <li>• 3rd Place: 1,000 SLERF + Bronze NFT</li>
                    <li>• Top 10: 500 SLERF each</li>
                  </ul>
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
