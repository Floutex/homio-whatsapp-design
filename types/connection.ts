/**
 * Connection status types
 */
export type ConnectionStatus = "connected" | "disconnected" | "free"

/**
 * Connection data structure
 */
export interface Connection {
  id: string
  status: ConnectionStatus
  phoneNumber?: string
  userName?: string
  statusColor: string
  statusLabel: string
  actionLabel: string
  actionPrimary: boolean
  lastActive?: string
  messageCount?: number
}

/**
 * Props for the ConnectionCard component
 */
export interface ConnectionCardProps {
  connection: Connection
  onAction?: (id: string) => void
  onDelete?: (id: string) => void
}

/**
 * Props for the PageHeader component
 */
export interface PageHeaderProps {
  title: string
  subtitle: string
  logoSrc: string
  logoAlt: string
  titleColor: string
}

/**
 * Props for the HelpSection component
 */
export interface HelpSectionProps {
  title: string
  description: string
  primaryActionLabel: string
  secondaryActionLabel: string
  primaryActionHref?: string
  secondaryActionHref?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
  accentColor: string
}

/**
 * Props for the BackButton component
 */
export interface BackButtonProps {
  href: string
  color: string
  ariaLabel: string
}
