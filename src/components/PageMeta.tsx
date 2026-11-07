import { useEffect } from 'react'
import { site } from '../data/site'

type PageMetaProps = {
  /** Page name. Omit on the home page. */
  title?: string
  description?: string
  /** Route path, e.g. "/about" */
  path?: string
}

/**
 * Per-page <title>, description and link-preview tags.
 * React 19 hoists these elements into <head> automatically.
 */
export function PageMeta({ title, description = site.description, path = '/' }: PageMetaProps) {
  // The static defaults in index.html are for crawlers that skip JavaScript.
  // Once React renders the real tags, drop them so the head has no duplicates.
  useEffect(() => {
    document.head.querySelectorAll('[data-default-meta]').forEach((el) => el.remove())
  }, [])

  const fullTitle = title ? `${title} — ${site.shortName}` : `${site.shortName} — Portfolio`
  const url = `${site.url}${path === '/' ? '' : path}`
  const image = `${site.url}${site.image}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
