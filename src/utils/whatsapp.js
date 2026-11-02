/**
 * @fileoverview Utilidad pura para construir enlaces profundos a WhatsApp de Eco Aldea Juárez NL.
 */
import { SITE_CONTENT } from '../data/siteContent.js';

/**
 * Construye una URL oficial de WhatsApp (`https://wa.me/528117164618?text=...`)
 * con el mensaje inicial codificado de forma segura.
 *
 * @param {string} [customMessage] Mensaje opcional personalizado; por defecto usa el mensaje oficial.
 * @returns {string} URL completa de WhatsApp lista para usarse en enlaces `href`.
 */
export function buildWhatsAppUrl(customMessage) {
  const baseUrl = SITE_CONTENT.whatsapp.baseUrl;
  const message =
    typeof customMessage === 'string' && customMessage.trim().length > 0
      ? customMessage.trim()
      : SITE_CONTENT.whatsapp.defaultMessage;

  const encodedText = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedText}`;
}
