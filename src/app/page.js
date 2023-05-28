import { Navbar, Modal, Input } from "../components"

import { LinkedinPage } from "../views/linkedin-page"
import { InfojobsLogin } from "@/views/infojobs-login"
export default function Home() {

  return (
    <main >
      <Navbar />
      <section className="container">
        <InfojobsLogin />
      </section>
    </main>
  )
}
