import { RateLimiterMemory } from "rate-limiter-flexible"

// API rate limiter - 100 requests per 15 minutes per IP
export const apiLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip,
  points: 100,
  duration: 900, // 15 minutes
})

// Auth rate limiter - 5 attempts per 15 minutes per IP
export const authLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip,
  points: 5,
  duration: 900, // 15 minutes
})

// Strict rate limiter for sensitive operations - 10 per hour
export const strictLimiter = new RateLimiterMemory({
  keyGenerator: (req: any) => req.ip,
  points: 10,
  duration: 3600, // 1 hour
})
