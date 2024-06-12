import bg from "@/public/bg_blue.webp"
import SearchCard from "@/components/General/SearchCard"
import Layout from "@/components/Layout/Layout"

export default function CertificatePage() {

  return (
    <div className="relative pb-20 min-h-screen" style={{
        backgroundImage: 'url('+bg.src+')',
        backgroundRepeat: 'repeat-y'
      }}>

      <div className="flex flex-col space-y-4 relative z-10 pt-20 ">
        <SearchCard />
      </div>

    </div>
  )
}

CertificatePage.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }