import { NextRequest, NextResponse } from 'next/server'

const supportedLocales = ['en', 'id']

// Function to get the preferred locale from the "Accept-Language" header
function getLocale(request: NextRequest): string {
  const preferredLocale = request.headers.get('Accept-Language')?.split(',')[0].trim()
  if (preferredLocale?.startsWith('en')) return 'en'
  if (preferredLocale?.startsWith('id')) return 'id'
  return 'en' // Default to English
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip the localization logic for /admin routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/api')) {
    return
  }

  // Check if the pathname already includes a supported locale
  const hasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  if (hasLocale) {
    // Allow the request to proceed if a supported locale is present
    return
  }

  // Determine the locale and redirect to the appropriate path
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|icon\\.svg|favicon\\.ico|Foundasi\\.svg|images/|admin|api).*)'],
}
