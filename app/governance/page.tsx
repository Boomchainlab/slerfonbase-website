"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Governance() {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Increase Staking Rewards to 30% APY",
      description: "Proposal to increase staking rewards from 25% to 30% APY to attract more long-term holders",
      status: "Active",
      votesFor: 1250000,
      votesAgainst: 450000,
      totalVotes: 1700000,
      endDate: "2024-02-01",
      quorum: 2000000,
    },
    {
      id: 2,
      title: "Launch SLERF NFT Collection",
      description: "Create an exclusive NFT collection for SLERF holders with utility benefits",
      status: "Active",
      votesFor: 980000,
      votesAgainst: 320000,
      totalVotes: 1300000,
      endDate: "2024-01-28",
      quorum: 2000000,
    },
    {
      id: 3,
      title: "Community Treasury Allocation",
      description: "Allocate 5% of tokens to community treasury for future development",
      status: "Passed",
      votesFor: 2100000,
      votesAgainst: 400000,
      totalVotes: 2500000,
      endDate: "2024-01-15",
      quorum: 2000000,
    },
  ])

  const [userVotingPower, setUserVotingPower] = useState(150000)

  const handleVote = (proposalId: number, vote: "for" | "against") => {
    setProposals(
      proposals.map((proposal) =>
        proposal.id === proposalId
          ? {
              ...proposal,
              votesFor: vote === "for" ? proposal.votesFor + userVotingPower : proposal.votesFor,
              votesAgainst: vote === "against" ? proposal.votesAgainst + userVotingPower : proposal.votesAgainst,
              totalVotes: proposal.totalVotes + userVotingPower,
            }
          : proposal,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Governance</h1>
          <p className="text-xl">Shape the future of SLERF through community voting</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Voting Power */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Your Voting Power</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400">{userVotingPower.toLocaleString()}</p>
                  <p className="text-sm text-gray-300">SLERF Tokens</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">3</p>
                  <p className="text-sm text-gray-300">Proposals Voted</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">85%</p>
                  <p className="text-sm text-gray-300">Participation Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Proposals */}
          <div className="space-y-6">
            {proposals.map((proposal) => (
              <Card key={proposal.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{proposal.title}</CardTitle>
                      <p className="text-gray-300 mt-2">{proposal.description}</p>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        proposal.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : proposal.status === "Passed"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {proposal.status}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Voting Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>For: {proposal.votesFor.toLocaleString()}</span>
                        <span>Against: {proposal.votesAgainst.toLocaleString()}</span>
                      </div>
                      <Progress
                        value={(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}
                        className="h-3"
                      />
                      <div className="flex justify-between text-xs text-gray-300 mt-1">
                        <span>
                          {((proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100).toFixed(1)}% For
                        </span>
                        <span>
                          {((proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst)) * 100).toFixed(1)}%
                          Against
                        </span>
                      </div>
                    </div>

                    {/* Quorum Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Quorum Progress</span>
                        <span>
                          {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(proposal.totalVotes / proposal.quorum) * 100} className="h-2" />
                    </div>

                    {/* Voting Buttons */}
                    {proposal.status === "Active" && (
                      <div className="flex space-x-4">
                        <Button
                          onClick={() => handleVote(proposal.id, "for")}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2"
                        >
                          Vote For
                        </Button>
                        <Button
                          onClick={() => handleVote(proposal.id, "against")}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2"
                        >
                          Vote Against
                        </Button>
                      </div>
                    )}

                    <div className="text-xs text-gray-300">
                      {proposal.status === "Active" ? `Voting ends: ${proposal.endDate}` : `Ended: ${proposal.endDate}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Create Proposal */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mt-8">
            <CardHeader>
              <CardTitle className="text-white">Create New Proposal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-gray-300 mb-4">
                  To create a proposal, you need at least 100,000 SLERF tokens and community support.
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full">
                  Create Proposal
                </Button>
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
