export type PageId = "home" | "cases" | "contact"
export type CaseId = "construction" | "retail" | "oil" | "energy"

export type LeadPayload = {
  name: string
  company: string
  email: string
  industry: string
  message: string
  source?: string
}
