"use client"

import { useState } from "react"
import { connections as initialConnections } from "../../data/connections"
import { BackButton } from "../../components/connection/back-button"
import { PageHeader } from "../../components/connection/page-header"
import { ConnectionGrid } from "../../components/connection/connection-grid"
import { HelpSection } from "../../components/connection/help-section"
import { BackgroundPattern } from "../../components/connection/background-pattern"
import type { Connection } from "../../types/connection"

/**
 * WhatsApp Connection Page
 *
 * This page allows users to manage their WhatsApp connections
 * It demonstrates a modular component architecture with clear separation of concerns
 */
export default function WhatsAppConnectPage() {
  // In a real application, this would use a data fetching hook
  const [connections, setConnections] = useState<Connection[]>(initialConnections)

  /**
   * Handle connection action (connect, disconnect, create)
   * In a real application, this would call an API
   */
  const handleConnectionAction = (id: string) => {
    console.log(`Action triggered for connection: ${id}`)
    // Implementation would depend on the specific action needed
  }

  /**
   * Handle connection deletion
   * In a real application, this would call an API
   */
  const handleConnectionDelete = (id: string) => {
    console.log(`Delete triggered for connection: ${id}`)
    // Example implementation: remove the connection from state
    setConnections(connections.filter((conn) => conn.id !== id))
  }

  // Page configuration constants
  const PAGE_CONFIG = {
    backButton: {
      href: "/",
      color: "#5417b2",
      ariaLabel: "Voltar para comparação",
    },
    header: {
      title: "WhatsApp Homio",
      subtitle: "Envie e receba mensagens, de graça, para sempre.",
      logoSrc: "/homio-logo.svg",
      logoAlt: "Homio Logo",
      titleColor: "#5417b2",
    },
    helpSection: {
      title: "Precisa de ajuda?",
      description:
        "Se você está tendo problemas para conectar seu WhatsApp ou tem dúvidas sobre como usar o serviço, nossa equipe de suporte está pronta para ajudar.",
      primaryActionLabel: "Contatar suporte",
      secondaryActionLabel: "Ver documentação",
      accentColor: "#5417b2",
    },
    backgroundImage: "/whatsapp-pattern-new.png",
  }

  return (
    <div className="w-full min-h-screen py-12 px-4 relative">
      {/* Background pattern */}
      <BackgroundPattern imagePath={PAGE_CONFIG.backgroundImage} />

      <div className="max-w-4xl w-full mx-auto">
        {/* Back button */}
        <BackButton {...PAGE_CONFIG.backButton} />

        {/* Page header */}
        <PageHeader {...PAGE_CONFIG.header} />

        {/* Connection grid */}
        <ConnectionGrid connections={connections} onAction={handleConnectionAction} onDelete={handleConnectionDelete} />

        {/* Help section */}
        <HelpSection {...PAGE_CONFIG.helpSection} />
      </div>
    </div>
  )
}
