import { useEffect } from 'react'

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://links.magnivodigital.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div id="contact-form" className="w-full min-h-[907px]">
      <iframe
        src="https://links.magnivodigital.com/widget/form/MsU83pzKbZOb1Gij2EA2"
        style={{ width: '100%', height: '100%', minHeight: '907px', border: 'none', borderRadius: '8px' }}
        id="inline-MsU83pzKbZOb1Gij2EA2"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="website contact us form"
        data-height="907"
        data-layout-iframe-id="inline-MsU83pzKbZOb1Gij2EA2"
        data-form-id="MsU83pzKbZOb1Gij2EA2"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="website contact us form"
      />
    </div>
  )
}
